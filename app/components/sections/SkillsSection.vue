<template>
  <section id="skills" class="relative border-t border-line py-24 md:py-32">
    <div class="container-page">
      <SectionHeading
        index="05"
        command="cat stack.json"
        title="What I reach for"
        description="One side ships products. The other investigates and breaks them. Most days I use both."
      />

      <div class="grid gap-5 lg:grid-cols-2">
        <article
          v-for="(side, sideIndex) in skillSides"
          :key="side.id"
          v-reveal:scale="sideIndex * 120"
          class="card-surface relative overflow-hidden p-6 sm:p-7"
        >
          <div
            class="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full opacity-20 blur-3xl"
            :style="{ background: sideColor[side.id] }"
            aria-hidden="true"
          />
          <header class="relative flex items-baseline justify-between gap-4 font-mono">
            <h3 class="text-lg font-bold" :style="{ color: sideColor[side.id] }">// {{ side.label }}</h3>
            <p class="text-xs text-faint">{{ side.blurb }}</p>
          </header>

          <dl class="relative mt-6 space-y-5">
            <div v-for="group in side.groups" :key="group.name" class="grid gap-2 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-4">
              <dt class="flex items-center gap-2 pt-1 font-mono text-xs text-muted">
                <AppIcon :name="group.icon" :size="14" :style="{ color: sideColor[side.id] }" />
                {{ group.name }}
              </dt>
              <dd class="flex flex-wrap gap-1.5">
                <span
                  v-for="item in group.items"
                  :key="item"
                  class="rounded border border-line bg-surface-alt px-2 py-1 font-mono text-[11px] text-muted transition-colors hover:border-accent/50 hover:text-ink"
                >
                  {{ item }}
                </span>
              </dd>
            </div>
          </dl>
        </article>
      </div>
    </div>

    <!-- Infinite ticker: the list is duplicated so the -50% translate loops seamlessly. -->
    <div
      class="relative mt-16 flex overflow-hidden border-y border-line py-4 select-none [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
      aria-hidden="true"
    >
      <div class="flex shrink-0 animate-marquee items-center gap-8 pr-8">
        <span
          v-for="(item, index) in ticker"
          :key="`${item}-${index}`"
          class="flex items-center gap-8 font-mono text-sm whitespace-nowrap text-faint"
        >
          {{ item }}
          <span class="text-accent/50">/</span>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillSides } from "~/data/site";

const sideColor = { build: "var(--c-cyber)", defend: "var(--c-danger)" } as const;

const base = [
  "incident response",
  "Splunk",
  "Wireshark",
  "Python",
  "Vue.js",
  "React Native",
  "Flask",
  "TypeScript",
  "Rust",
  "Tauri",
  "Docker",
  "Azure",
  "Nmap",
  "Burp Suite",
  "GitHub Actions",
  "Kali Linux",
  "TweetNaCl",
];

const ticker = [...base, ...base];
</script>
