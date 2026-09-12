<template>
  <section id="skills" class="relative border-t border-line bg-bg-alt py-24 md:py-32">
    <div class="container-page">
      <SectionHeading
        index="02"
        kicker="capabilities"
        title="What I reach for"
        description="Defensive tooling I use to investigate, offensive tooling I learned to understand detection, and the stack I ship products on."
      />

      <div class="grid gap-5 md:grid-cols-2">
        <article
          v-for="(group, groupIndex) in skillGroups"
          :key="group.name"
          v-reveal:scale="groupIndex * 90"
          class="card-surface group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
        >
          <div
            class="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          />

          <header class="relative flex items-start gap-3">
            <span
              class="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-surface-alt text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            >
              <AppIcon :name="group.icon" :size="20" />
            </span>
            <div>
              <h3 class="font-display text-lg font-semibold">{{ group.name }}</h3>
              <p class="mt-0.5 text-sm text-muted">{{ group.blurb }}</p>
            </div>
          </header>

          <ul class="relative mt-5 flex flex-wrap gap-2">
            <li
              v-for="(item, itemIndex) in group.items"
              :key="item"
              v-reveal="groupIndex * 90 + itemIndex * 28"
              class="rounded-lg border border-line bg-surface-alt px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
            >
              {{ item }}
            </li>
          </ul>
        </article>
      </div>
    </div>

    <!-- Infinite ticker: the list is duplicated so the -50% translate loops seamlessly. -->
    <div
      class="relative mt-14 flex overflow-hidden border-y border-line py-4 select-none [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
      aria-hidden="true"
    >
      <div class="flex shrink-0 animate-marquee items-center gap-8 pr-8">
        <span
          v-for="(item, index) in ticker"
          :key="`${item}-${index}`"
          class="flex items-center gap-8 font-mono text-sm whitespace-nowrap text-faint"
        >
          {{ item }}
          <span class="size-1 rounded-full bg-accent/50" />
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillGroups } from "~/data/site";

const base = [
  "incident response",
  "Splunk",
  "Wireshark",
  "Python",
  "Vue.js",
  "Flask",
  "TypeScript",
  "Active Directory",
  "Tauri",
  "Docker",
  "Azure",
  "Nmap",
  "Burp Suite",
  "PostgreSQL",
  "GitHub Actions",
  "Kali Linux",
];

const ticker = [...base, ...base];
</script>
