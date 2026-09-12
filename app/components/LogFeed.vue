<template>
  <TerminalWindow title="soc-lab - tail -f alerts.log">
    <ul class="space-y-1.5 text-[12.5px] leading-relaxed sm:text-[13px]">
      <li
        v-for="line in shown"
        :key="line.key"
        class="flex gap-2.5 [animation:log-in_.45s_cubic-bezier(.22,1,.36,1)_both]"
      >
        <span class="shrink-0 tabular-nums text-faint">{{ line.time }}</span>
        <span class="shrink-0 font-bold" :class="levelClass[line.level]">
          {{ line.level.padEnd(5, " ") }}
        </span>
        <span class="min-w-0 text-muted">{{ line.text }}</span>
      </li>
      <li class="flex gap-2.5 text-accent">
        <span>$</span>
        <span class="animate-caret">█</span>
      </li>
    </ul>
    <p class="mt-4 border-t border-line pt-3 text-[11px] text-faint">
      Simulated triage walkthrough - not live data.
    </p>
  </TerminalWindow>
</template>

<script setup lang="ts">
type Level = "INFO" | "WARN" | "ALERT" | "OK";

const script: { level: Level; text: string }[] = [
  { level: "INFO", text: "session 10.0.2.15:49762 -> 185.34.7.9:443" },
  { level: "WARN", text: "event 4625 x18 from WS-042 (svc_backup)" },
  { level: "ALERT", text: "password spraying matched - T1110.003" },
  { level: "INFO", text: "parent=explorer.exe child=powershell.exe -enc" },
  { level: "WARN", text: "scheduled task created \\Windows\\UpdateSvc" },
  { level: "ALERT", text: "persistence suspected - escalating to IR" },
  { level: "INFO", text: "pcap: 47 SYN to closed ports in 3s" },
  { level: "OK", text: "host isolated, INC-2291 opened" },
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

const MAX_LINES = 6;
const shown = ref<Line[]>([]);
let cursor = 0;
let counter = 0;
let timer: number | undefined;

function stamp(offset: number) {
  const base = new Date(2025, 0, 1, 3, 14, 7);
  base.setSeconds(base.getSeconds() + offset * 11);
  return base.toTimeString().slice(0, 8);
}

function push() {
  const entry = script[cursor % script.length]!;
  shown.value = [...shown.value, { key: counter, time: stamp(counter), ...entry }].slice(-MAX_LINES);
  cursor++;
  counter++;
  // Pause a beat after the story resolves before starting over.
  timer = window.setTimeout(push, cursor % script.length === 0 ? 2600 : 1150);
}

onMounted(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    shown.value = script.slice(0, MAX_LINES).map((entry, i) => ({
      key: i,
      time: stamp(i),
      ...entry,
    }));
    return;
  }
  shown.value = [{ key: counter++, time: stamp(0), ...script[cursor++]! }];
  timer = window.setTimeout(push, 900);
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
