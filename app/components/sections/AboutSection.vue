<template>
  <section id="about" class="relative border-t border-line py-24 md:py-32">
    <div class="container-page">
      <SectionHeading
        index="01"
        command="cat about.md"
        title="I build it, then I try to break it"
        :description="profile.secondary"
      />

      <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
        <div class="space-y-6">
          <div v-reveal:left class="space-y-4 text-base/relaxed text-muted">
            <p>
              I finished my
              <span class="font-medium text-ink">Computer Science degree at McMaster</span> in
              {{ profile.graduated }}, with a minor in Statistics. My time there went two ways:
              building real software, and learning how to take it apart.
            </p>
            <p>
              <span class="font-mono text-sm text-cyber">[build]</span> I was the only developer on
              two apps for Environment and Climate Change Canada, from the first prototype to signed
              releases on Azure that scientists actually log into.
            </p>
            <p>
              <span class="font-mono text-sm text-danger">[defend]</span> I work alerts end to end:
              Splunk, Windows event logs, packet captures, then a write-up of what really happened.
              CTFs keep me honest. It's a lot easier to catch an attack you've run yourself.
            </p>
            <p class="font-mono text-sm text-faint">
              It's pronounced <span class="text-accent">{{ profile.pronunciation }}</span>.
            </p>
          </div>

          <div v-reveal:left="120" class="card-surface p-5">
            <div class="flex items-start gap-3">
              <span
                class="grid size-10 shrink-0 place-items-center rounded-md border border-line bg-surface-alt text-accent"
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

          <div v-reveal:left="200" class="card-surface p-5">
            <p class="mb-2 font-mono text-[11px] tracking-widest text-faint uppercase">Off the clock</p>
            <p class="text-sm/relaxed text-muted">
              I like problems where the constraint is the fun part, like squeezing a Python engine
              into a desktop app or getting group chat encryption right. Otherwise I'm probably deep
              in a TryHackMe room or a novel.
            </p>
          </div>
        </div>

        <div v-reveal:right="100" class="lg:sticky lg:top-28 lg:self-start">
          <InteractiveShell />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { education, profile } from "~/data/site";
</script>
