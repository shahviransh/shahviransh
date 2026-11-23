<template>
  <section id="experience" class="relative border-t border-line bg-bg-alt py-24 md:py-32">
    <div class="container-page">
      <SectionHeading
        index="02"
        command="git log --oneline career"
        title="Where I've done the work"
        description="A federal co-op that went from prototype to production, a competitive security team, and three terms of teaching."
      />

      <ol class="relative">
        <li
          v-for="(entry, index) in experience"
          :key="entry.org + entry.role"
          v-reveal:left="index * 110"
          class="relative grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4 pb-10 last:pb-0 sm:grid-cols-[1.5rem_minmax(0,1fr)] sm:gap-x-6"
        >
          <!-- Branch rail: a line through every commit except below the last one. -->
          <div class="relative flex justify-center" aria-hidden="true">
            <span
              v-if="index < experience.length - 1"
              class="absolute top-3 -bottom-0 w-px bg-gradient-to-b from-accent/60 to-line"
            />
            <span class="relative mt-1.5 grid size-4 place-items-center">
              <span
                v-if="isHead(entry)"
                class="absolute size-3.5 animate-pulse-ring rounded-full bg-accent"
              />
              <span
                class="size-3.5 rounded-full border-2"
                :class="isHead(entry) ? 'border-accent bg-accent' : 'border-accent/70 bg-bg-alt'"
              />
            </span>
          </div>

          <div class="min-w-0">
            <p class="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs">
              <span class="text-warn">commit {{ entry.hash }}</span>
              <span v-if="isHead(entry)" class="text-faint">
                (<span class="text-accent">HEAD -&gt; main</span>)
              </span>
              <span
                class="rounded border border-cyber/30 bg-cyber/10 px-1.5 py-px text-[10px] tracking-wider text-cyber uppercase"
              >
                {{ entry.kind }}
              </span>
            </p>
            <p class="mt-1 font-mono text-[11px] text-faint">
              Date: {{ entry.period }} · {{ entry.location }}
            </p>

            <article
              class="card-surface group mt-3 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:p-6"
            >
              <h3 class="font-display text-lg font-semibold text-balance">{{ entry.role }}</h3>
              <p class="mt-1 text-sm font-medium text-accent">{{ entry.org }}</p>

              <ul class="mt-4 space-y-2">
                <li
                  v-for="bullet in entry.bullets"
                  :key="bullet"
                  class="flex gap-3 text-sm/relaxed text-muted"
                >
                  <span class="mt-px shrink-0 font-mono text-accent/70">+</span>
                  <span>{{ bullet }}</span>
                </li>
              </ul>

              <div class="mt-5 flex flex-wrap items-center gap-1.5">
                <span
                  v-for="tech in entry.stack"
                  :key="tech"
                  class="rounded bg-surface-alt px-2 py-1 font-mono text-[11px] text-faint"
                >
                  {{ tech }}
                </span>
              </div>

              <div
                v-if="entry.links?.length"
                class="mt-4 flex flex-wrap gap-4 border-t border-line pt-4"
              >
                <a
                  v-for="link in entry.links"
                  :key="link.href"
                  :href="link.href"
                  target="_blank"
                  rel="noopener"
                  class="group/link inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
                >
                  {{ link.label }}
                  <AppIcon
                    name="external"
                    :size="13"
                    class="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>
            </article>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experience, type ExperienceEntry } from "~/data/site";

const isHead = (entry: ExperienceEntry) => entry.period.includes("Present");
</script>
