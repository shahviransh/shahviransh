<template>
  <section id="about" class="relative border-t border-line py-24 md:py-32">
    <div class="container-page">
      <SectionHeading
        index="01"
        kicker="whoami"
        title="Two disciplines, one habit of mind"
        :description="profile.secondary"
      />

      <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
        <div class="space-y-6">
          <div v-reveal:left class="space-y-4 text-base/relaxed text-muted">
            <p>
              I graduated from {{ profile.school }} in {{ profile.graduated }} with a
              <span class="font-medium text-ink">{{ profile.degree }}</span>. The last three years
              split cleanly in two: building production software for the federal government, and
              learning to take software apart.
            </p>
            <p>
              On the build side I was the sole developer on two internal platforms at Environment and
              Climate Change Canada - from the first prototype through signed cross-platform releases
              and an Azure deployment scientists actually log into.
            </p>
            <p>
              On the defensive side I work alerts end to end: pivot through Splunk, read the Windows
              event log, follow the packet capture, and write down what actually happened. Competing
              in CTFs keeps the offensive half honest - it's much easier to detect an attack you've
              run yourself.
            </p>
            <p class="font-mono text-sm text-faint">
              Pronounced <span class="text-accent">{{ profile.pronunciation }}</span
              >.
            </p>
          </div>

          <div v-reveal:left="120" class="card-surface p-5">
            <div class="flex items-start gap-3">
              <span
                class="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-surface-alt text-accent"
              >
                <AppIcon name="graduation" :size="18" />
              </span>
              <div class="min-w-0">
                <h3 class="font-display font-semibold">{{ education.school }}</h3>
                <p class="text-sm text-muted">{{ education.credential }}</p>
                <p class="mt-1 font-mono text-xs text-faint">
                  {{ education.period }} · {{ education.location }}
                </p>
                <ul class="mt-3 space-y-1.5">
                  <li
                    v-for="item in education.highlights"
                    :key="item"
                    class="flex gap-2 text-sm text-muted"
                  >
                    <AppIcon name="check" :size="14" class="mt-1 shrink-0 text-accent" />
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div v-reveal:right="100" class="lg:sticky lg:top-28">
          <TerminalWindow :title="`~/${profile.handle}`">
            <div class="space-y-1">
              <p class="flex gap-2">
                <span class="text-accent">$</span>
                <span class="text-ink">whoami --verbose</span>
              </p>
              <dl class="mt-3 space-y-2">
                <div
                  v-for="(row, index) in whoami"
                  :key="row.key"
                  v-reveal:left="index * 70"
                  class="flex flex-col gap-0.5 sm:flex-row sm:gap-3"
                >
                  <dt class="w-16 shrink-0 text-cyber">{{ row.key }}</dt>
                  <dd class="min-w-0 text-muted">
                    <span class="mr-1.5 text-faint">=</span>{{ row.value }}
                  </dd>
                </div>
              </dl>
              <p class="mt-4 flex gap-2 border-t border-line pt-3">
                <span class="text-accent">$</span>
                <span class="animate-caret text-accent">█</span>
              </p>
            </div>
          </TerminalWindow>

          <div v-reveal:right="220" class="card-surface mt-5 p-5">
            <p class="mb-3 font-mono text-[11px] tracking-widest text-faint uppercase">
              Outside the terminal
            </p>
            <p class="text-sm/relaxed text-muted">
              I like problems where the fun part is the constraint - packaging a Python engine inside
              a desktop app, or getting end-to-end encryption to survive a real notification system.
              When I'm not shipping, I'm usually deep in a TryHackMe room or a novel.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { education, profile, whoami } from "~/data/site";
</script>
