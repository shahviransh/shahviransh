<template>
  <section id="security" class="relative overflow-hidden border-t border-line bg-bg-alt py-24 md:py-32">
    <div class="grid-backdrop absolute inset-0 opacity-50" aria-hidden="true" />
    <div class="container-page relative">
      <SectionHeading
        index="04"
        command="./incident-response --blue-team"
        title="How I handle an incident"
        description="Detection is mostly reading. Here's what I practise: working a SIEM, reading raw logs and packets, and running attacks myself so I know what they look like."
      />

      <div
        v-reveal:scale
        class="card-surface relative mb-8 overflow-hidden border-accent/30 bg-gradient-to-br from-accent/10 via-transparent to-danger/10 p-6 sm:p-8"
      >
        <div class="relative grid gap-8 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <p class="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-accent uppercase">
              <AppIcon name="shield" :size="14" />
              CyberSci Regional Finals 2025
            </p>
            <h3 class="mt-3 font-display text-3xl leading-tight font-bold text-balance sm:text-4xl">
              2nd in Toronto, 3rd in Canada with
              <span class="text-gradient-accent">MacHackers</span>
            </h3>
            <p class="mt-3 text-sm/relaxed text-muted">
              Up against the top university teams in Canada, on the clock: forensics, web
              exploitation, crypto, binary exploitation, OSINT and whatever else they threw at us.
            </p>
            <dl class="mt-6 grid grid-cols-3 gap-3 font-mono">
              <div class="rounded-md border border-line bg-surface/70 p-3">
                <dt class="text-[10px] tracking-wider text-faint uppercase">toronto</dt>
                <dd class="mt-1 text-xl font-bold text-accent">2nd</dd>
              </div>
              <div class="rounded-md border border-line bg-surface/70 p-3">
                <dt class="text-[10px] tracking-wider text-faint uppercase">points</dt>
                <dd class="mt-1 text-xl font-bold text-ink">2336</dd>
              </div>
              <div class="rounded-md border border-line bg-surface/70 p-3">
                <dt class="text-[10px] tracking-wider text-faint uppercase">Canada</dt>
                <dd class="mt-1 text-xl font-bold text-ink">3rd</dd>
              </div>
            </dl>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <figure v-for="photo in cybersciPhotos" :key="photo.src" class="min-w-0">
              <img
                :src="photo.src"
                :alt="photo.alt"
                :width="photo.width"
                :height="photo.height"
                loading="lazy"
                class="aspect-[4/3] w-full rounded-md border border-line"
                :class="photo.contain ? 'bg-white object-contain p-3' : 'object-cover object-[center_40%]'"
              />
              <figcaption class="mt-2 font-mono text-[11px] text-faint">{{ photo.caption }}</figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div class="grid gap-5 md:grid-cols-2">
        <article
          v-for="(item, index) in securityPractice"
          :key="item.title"
          v-reveal="index * 90"
          class="card-surface group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
        >
          <div class="flex items-center justify-between gap-3">
            <h3 class="flex items-center gap-2.5 font-display text-base font-semibold">
              <span class="font-mono text-xs text-accent">{{ String(index + 1).padStart(2, "0") }}</span>
              {{ item.title }}
            </h3>
            <span class="rounded border border-danger/30 bg-danger/10 px-1.5 py-px font-mono text-[10px] text-danger">
              {{ item.tag }}
            </span>
          </div>
          <p class="mt-3 text-sm/relaxed text-muted">{{ item.body }}</p>
          <ul class="mt-4 flex flex-wrap gap-1.5">
            <li
              v-for="tool in item.tools"
              :key="tool"
              class="rounded border border-line bg-surface-alt px-2 py-1 font-mono text-[11px] text-faint transition-colors group-hover:border-accent/30 group-hover:text-accent"
            >
              {{ tool }}
            </li>
          </ul>
        </article>
      </div>

      <div class="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div>
          <h3 v-reveal class="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-faint uppercase">
            Certifications
            <span class="h-px flex-1 bg-line" />
          </h3>
          <ul class="space-y-3">
            <li v-for="(cert, index) in credentials" :key="cert.name" v-reveal:left="index * 80">
              <component
                :is="cert.href ? 'a' : 'div'"
                :href="cert.href"
                :target="cert.href ? '_blank' : undefined"
                rel="noopener"
                class="card-surface group flex items-start gap-4 p-5 transition-all duration-300"
                :class="cert.href && 'hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lift'"
              >
                <span
                  class="grid size-10 shrink-0 place-items-center rounded-md border border-line bg-surface-alt text-accent"
                >
                  <AppIcon name="radar" :size="18" />
                </span>
                <span class="min-w-0 flex-1">
                  <span class="flex flex-wrap items-baseline gap-x-2.5">
                    <span class="font-display font-semibold">{{ cert.name }}</span>
                    <span class="font-mono text-[11px] text-faint">{{ cert.issuer }} · {{ cert.year }}</span>
                  </span>
                  <span class="mt-1.5 block text-sm/relaxed text-muted">{{ cert.detail }}</span>
                </span>
                <AppIcon
                  v-if="cert.href"
                  name="external"
                  :size="14"
                  class="mt-1 shrink-0 text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              </component>
            </li>
          </ul>
        </div>

        <div>
          <h3 v-reveal class="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-faint uppercase">
            Competitions
            <span class="h-px flex-1 bg-line" />
          </h3>
          <ul v-reveal:right="80" class="card-surface divide-y divide-line overflow-hidden">
            <li
              v-for="event in competitions"
              :key="event.name"
              class="flex items-start justify-between gap-4 p-4 transition-colors hover:bg-surface-alt"
            >
              <span class="min-w-0">
                <span class="block text-sm font-medium">{{ event.name }}</span>
                <span class="mt-0.5 block font-mono text-[11px] text-accent">{{ event.result }}</span>
              </span>
              <span class="font-mono text-[11px] whitespace-nowrap text-faint">{{ event.year }}</span>
            </li>
          </ul>

          <div v-reveal:right="160" class="card-surface mt-3 p-5">
            <p class="font-mono text-[11px] tracking-widest text-faint uppercase">TryHackMe</p>
            <p class="mt-2.5 text-sm/relaxed text-muted">
              <span class="font-semibold text-ink">65+ rooms</span> so far: network and email
              analysis, Windows, Linux and Active Directory investigations, and attacking the OWASP
              Top 10.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { competitions, credentials, cybersciPhotos, securityPractice } from "~/data/site";
</script>
