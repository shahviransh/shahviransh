<template>
  <TerminalWindow>
    <template #title>
      <div class="ml-2 flex min-w-0 gap-1" role="tablist" aria-label="Terminal sessions">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          role="tab"
          :aria-selected="active === tab.id"
          class="truncate rounded-md px-2 py-0.5 text-xs transition-colors"
          :class="
            active === tab.id
              ? 'bg-accent/15 text-accent'
              : 'text-faint hover:bg-surface hover:text-ink'
          "
          @click="select(tab.id)"
        >
          {{ tab.label }}
        </button>
      </div>
    </template>

    <p class="mb-3 flex items-center gap-2 text-[12px] text-faint">
      <span class="text-accent">$</span>
      <span class="text-muted">{{ current.command }}</span>
    </p>
    <ul class="min-h-[12.5rem] space-y-1.5 text-[12.5px] leading-relaxed sm:text-[13px]">
      <li
        v-for="line in shown"
        :key="line.key"
        class="flex gap-2.5 [animation:log-in_.45s_cubic-bezier(.22,1,.36,1)_both]"
      >
        <span class="shrink-0 tabular-nums text-faint">{{ line.time }}</span>
        <span class="w-11 shrink-0 font-bold" :class="levelClass[line.level]">{{ line.level }}</span>
        <span class="min-w-0 text-muted">{{ line.text }}</span>
      </li>
      <li class="flex gap-2.5 text-accent">
        <span>$</span>
        <span class="animate-caret">█</span>
      </li>
    </ul>
    <p class="mt-4 flex items-center justify-between gap-3 border-t border-line pt-3 text-[11px] text-faint">
      <span>Simulated walkthrough, not live data.</span>
      <span class="hidden sm:inline">{{ current.footer }}</span>
    </p>
  </TerminalWindow>
</template>

<script setup lang="ts">
type Level = "INFO" | "WARN" | "ALERT" | "OK";
type TabId = "build" | "defend";

interface Script {
  id: TabId;
  label: string;
  command: string;
  footer: string;
  lines: { level: Level; text: string }[];
}

const tabs: Script[] = [
  {
    id: "build",
    label: "build: deploy.log",
    command: "git push origin main",
    footer: "how I ship",
    lines: [
      { level: "INFO", text: "actions: matrix [windows, macos, linux]" },
      { level: "OK", text: "tauri build windows-x64 (signed)" },
      { level: "OK", text: "tauri build macos (signed)" },
      { level: "OK", text: "tauri build linux (signed)" },
      { level: "WARN", text: "upload rejected: ../../etc/passwd" },
      { level: "INFO", text: "guest role: upload=deny (default)" },
      { level: "OK", text: "deployed to azure vm via iis + https" },
    ],
  },
  {
    id: "defend",
    label: "defend: alerts.log",
    command: "tail -f alerts.log",
    footer: "how I triage",
    lines: [
      { level: "INFO", text: "session 10.0.2.15:49762 -> 185.34.7.9:443" },
      { level: "WARN", text: "event 4625 x18 from WS-042 (svc_backup)" },
      { level: "ALERT", text: "password spraying matched, T1110.003" },
      { level: "INFO", text: "explorer.exe spawned powershell.exe -enc" },
      { level: "WARN", text: "scheduled task created \\Windows\\UpdateSvc" },
      { level: "ALERT", text: "persistence suspected, escalating to IR" },
      { level: "OK", text: "host isolated, INC-2291 opened" },
    ],
  },
];

const levelClass: Record<Level, string> = {
  INFO: "text-cyber",
  WARN: "text-warn",
  ALERT: "text-danger",
  OK: "text-accent",
};

interface Line {
  key: number;
  time: string;
  level: Level;
  text: string;
}

const MAX_LINES = 7;
const active = ref<TabId>("build");
const current = computed(() => tabs.find((t) => t.id === active.value)!);
const shown = ref<Line[]>([]);
let cursor = 0;
let counter = 0;
let timer: number | undefined;
let pinned = false;
let reduced = false;

function stamp(offset: number) {
  const base = new Date(2025, 0, 1, 3, 14, 7);
  base.setSeconds(base.getSeconds() + offset * 7);
  return base.toTimeString().slice(0, 8);
}

function fill() {
  shown.value = current.value.lines.map((entry, i) => ({ key: counter++, time: stamp(i), ...entry }));
}

function push() {
  const script = current.value.lines;
  if (cursor >= script.length) {
    // Story resolved: hold a beat, then hand over to the other session.
    timer = window.setTimeout(() => {
      if (!pinned) active.value = active.value === "build" ? "defend" : "build";
      restart();
    }, 3200);
    return;
  }
  const entry = script[cursor]!;
  shown.value = [...shown.value, { key: counter++, time: stamp(cursor), ...entry }].slice(-MAX_LINES);
  cursor++;
  timer = window.setTimeout(push, 900);
}

function restart() {
  clearTimeout(timer);
  cursor = 0;
  if (reduced) return fill();
  shown.value = [];
  timer = window.setTimeout(push, 350);
}

function select(id: TabId) {
  pinned = true;
  active.value = id;
  restart();
}

onMounted(() => {
  reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  restart();
});

onBeforeUnmount(() => clearTimeout(timer));
</script>

<style>
@keyframes log-in {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
