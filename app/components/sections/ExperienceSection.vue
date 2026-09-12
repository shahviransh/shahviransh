<template>
  <section id="experience" class="relative border-t border-line py-24 md:py-32">
    <div class="container-page">
      <SectionHeading
        index="03"
        kicker="track record"
        title="Where I've done the work"
        description="A federal co-op that ran from prototype to production, a competitive security team, and three terms of teaching."
      />

      <ol class="relative space-y-8 sm:pl-8">
        <!-- The rail sits behind the markers and stops at the last entry. -->
        <span
          class="absolute top-2 bottom-8 left-2 hidden w-px bg-gradient-to-b from-accent/60 via-line to-transparent sm:block"
          aria-hidden="true"
        />

        <li
          v-for="(entry, index) in experience"
          :key="entry.org + entry.role"
          v-reveal:left="index * 110"
          class="relative"
        >
          <span
            class="absolute top-7 -left-8 hidden size-4 place-items-center sm:grid"
            aria-hidden="true"
          >
            <span
              v-if="entry.period.includes('Present')"
              class="absolute size-3 animate-pulse-ring rounded-full bg-accent"
            />
            <span
              class="size-3 rounded-full border-2 border-bg"
              :class="entry.period.includes('Present') ? 'bg-accent' : 'bg-line-strong'"
            />
          </span>

          <article
            class="card-surface group p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lift"
          >
            <div class="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
              <div class="min-w-0">
                <p class="flex flex-wrap items-center gap-2">
                  <span
                    class="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-accent uppercase"
                  >
                    {{ entry.kind }}
                  </span>
                  <span class="font-mono text-xs text-faint">{{ entry.location }}</span>
                </p>
                <h3 class="mt-2.5 font-display text-lg font-semibold text-balance">
                  {{ entry.role }}
                </h3>
                <p class="mt-1 text-sm font-medium text-accent">{{ entry.org }}</p>
              </div>
              <p class="font-mono text-xs whitespace-nowrap text-muted">{{ entry.period }}</p>
            </div>

            <ul class="mt-5 space-y-2.5">
              <li v-for="bullet in entry.bullets" :key="bullet" class="flex gap-3 text-sm/relaxed text-muted">
                <span class="mt-2 size-1.5 shrink-0 rounded-full bg-accent/60" />
                <span>{{ bullet }}</span>
              </li>
            </ul>

            <div class="mt-5 flex flex-wrap items-center gap-2">
              <span
                v-for="tech in entry.stack"
                :key="tech"
                class="rounded-md bg-surface-alt px-2 py-1 font-mono text-[11px] text-faint"
              >
                {{ tech }}
              </span>
            </div>

            <div v-if="entry.links?.length" class="mt-4 flex flex-wrap gap-4 border-t border-line pt-4">
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
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experience } from "~/data/site";
</script>
