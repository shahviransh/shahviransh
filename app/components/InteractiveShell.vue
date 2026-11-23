<template>
  <TerminalWindow :title="`guest@${profile.handle}: ~`">
    <div
      ref="scroller"
      class="h-[22rem] cursor-text overflow-y-auto pr-1 text-[12.5px] leading-relaxed sm:text-[13px]"
      @click="focus"
    >
      <div v-for="entry in history" :key="entry.id" class="mb-2">
        <p v-if="entry.input !== undefined" class="flex gap-2">
          <span class="shrink-0 text-accent">guest $</span>
          <span class="text-ink">{{ entry.input }}</span>
        </p>
        <div v-for="(line, i) in entry.lines" :key="i" class="whitespace-pre-wrap" :class="toneClass[line.tone ?? 'muted']">
          <template v-if="line.key">
            <span class="inline-block w-16 text-cyber">{{ line.key }}</span>
            <span class="text-faint">= </span>{{ line.text }}
          </template>
          <template v-else>{{ line.text }}</template>
        </div>
      </div>

      <form class="flex gap-2" @submit.prevent="submit">
        <label :for="inputId" class="shrink-0 text-accent">guest $</label>
        <input
          :id="inputId"
          ref="input"
          v-model="draft"
          type="text"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          class="min-w-0 flex-1 bg-transparent text-ink caret-accent outline-none"
          aria-label="Type a command. Try help."
          @keydown.up.prevent="recall(-1)"
          @keydown.down.prevent="recall(1)"
          @keydown.tab.prevent="complete"
        />
      </form>
    </div>

    <div class="mt-3 flex flex-wrap gap-1.5 border-t border-line pt-3">
      <button
        v-for="hint in hints"
        :key="hint"
        type="button"
        class="rounded-md border border-line px-2 py-1 text-[11px] text-muted transition-colors hover:border-accent hover:text-accent"
        @click="exec(hint)"
      >
        {{ hint }}
      </button>
    </div>
  </TerminalWindow>
</template>

<script setup lang="ts">
import { experience, profile, projects, skillSides, whoami } from "~/data/site";

type Tone = "muted" | "ink" | "accent" | "warn" | "danger" | "faint";
interface Line {
  text: string;
  key?: string;
  tone?: Tone;
}
interface Entry {
  id: number;
  input?: string;
  lines: Line[];
}

const toneClass: Record<Tone, string> = {
  muted: "text-muted",
  ink: "text-ink",
  accent: "text-accent",
  warn: "text-warn",
  danger: "text-danger",
  faint: "text-faint",
};

const inputId = useId();
const input = useTemplateRef<HTMLInputElement>("input");
const scroller = useTemplateRef<HTMLElement>("scroller");
const draft = ref("");
const typed: string[] = [];
let recallIndex = 0;
let nextId = 0;

const hints = ["help", "whoami", "projects", "nmap viransh", "sudo hire-me"];

const say = (text: string, tone?: Tone): Line => ({ text, tone });
const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const commands: Record<string, { about: string; run: (args: string[]) => Line[] }> = {
  help: {
    about: "this list",
    run: () => [
      say("commands you can try:", "ink"),
      ...Object.entries(commands)
        .filter(([name]) => name !== "help")
        .map(([name, c]) => say(`  ${name.padEnd(13)} ${c.about}`)),
      say("tab completes, up/down for history", "faint"),
    ],
  },
  whoami: {
    about: "the short version",
    run: () => whoami.map((row) => ({ key: row.key, text: row.value })),
  },
  projects: {
    about: "things I've built",
    run: () => [
      ...projects.map((p) => say(`  ${p.name.padEnd(26)} ${p.tagline}`)),
      say("more detail in the projects section below", "faint"),
    ],
  },
  experience: {
    about: "where I've worked",
    run: () =>
      experience.flatMap((e) => [say(`* ${e.hash}  ${e.role}`, "warn"), say(`  ${e.org}, ${e.period}`)]),
  },
  skills: {
    about: "build vs defend",
    run: () =>
      skillSides.flatMap((side) => [
        say(`[${side.label}]`, "accent"),
        ...side.groups.map((g) => say(`  ${g.name}: ${g.items.slice(0, 6).join(", ")}`)),
      ]),
  },
  "nmap viransh": {
    about: "scan me (I consent)",
    run: () => [
      say("Starting Nmap against viransh (127.0.0.1)", "faint"),
      say("PORT      STATE  SERVICE", "ink"),
      say("443/tcp   open   full-stack     vue, flask, tauri, react native"),
      say("8443/tcp  open   blue-team      splunk, wireshark, event logs"),
      say("1337/tcp  open   ctf            forensics, web, crypto, osint"),
      say("25/tcp    open   smtp           viranshshah@gmail.com"),
      say("Host is up. No firewall detected, very approachable.", "accent"),
    ],
  },
  resume: {
    about: "grab a resume",
    run: () => [
      say("two tracks, pick one:", "ink"),
      ...profile.resumes.map((r) => say(`  ${r.label.padEnd(22)} ${r.href}`)),
      say("or use the Resume button up top", "faint"),
    ],
  },
  contact: {
    about: "how to reach me",
    run: () => {
      setTimeout(() => goto("contact"), 600);
      return [...profile.emails.map((m) => say(`${m.address}  (${m.label})`, "ink")), say("taking you there...", "faint")];
    },
  },
  "sudo hire-me": {
    about: "you know you want to",
    run: () => {
      setTimeout(() => goto("contact"), 900);
      return [
        say("[sudo] password for recruiter: ********", "faint"),
        say("access granted. opening a secure channel to my inbox...", "accent"),
      ];
    },
  },
  clear: { about: "wipe the screen", run: () => [] },
};

const history = ref<Entry[]>([
  {
    id: nextId++,
    lines: [
      say(`Welcome to ${profile.handle}'s shell. This one actually works.`, "ink"),
      say("Type 'help' or click a command below.", "faint"),
    ],
  },
]);

function exec(raw: string) {
  const cmd = raw.trim().replace(/\s+/g, " ");
  if (!cmd) return;
  typed.push(cmd);
  recallIndex = typed.length;

  if (cmd === "clear") {
    history.value = [];
  } else {
    const match = commands[cmd.toLowerCase()];
    const lines = match
      ? match.run(cmd.split(" ").slice(1))
      : cmd.startsWith("sudo")
        ? [say("nice try. only 'sudo hire-me' is in the sudoers file.", "warn")]
        : cmd === "rm -rf /"
          ? [say("absolutely not.", "danger")]
          : [say(`command not found: ${cmd}. try 'help'`, "danger")];
    history.value.push({ id: nextId++, input: cmd, lines });
  }
  draft.value = "";
  nextTick(() => {
    if (scroller.value) scroller.value.scrollTop = scroller.value.scrollHeight;
  });
}

function submit() {
  exec(draft.value);
}

function recall(delta: number) {
  if (!typed.length) return;
  recallIndex = Math.min(typed.length, Math.max(0, recallIndex + delta));
  draft.value = typed[recallIndex] ?? "";
}

function complete() {
  const q = draft.value.toLowerCase();
  if (!q) return;
  const hit = Object.keys(commands).find((name) => name.startsWith(q));
  if (hit) draft.value = hit;
}

function focus() {
  if (window.getSelection()?.toString()) return;
  input.value?.focus({ preventScroll: true });
}
</script>
