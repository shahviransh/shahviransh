<template>
  <section
    id="home"
    ref="root"
    class="relative flex min-h-svh items-center overflow-hidden pt-28 pb-20"
  >
    <CyberBackdrop />
    <!-- Cursor-tracked glow; the CSS variables are written by onPointerMove. -->
    <div
      class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 md:opacity-100"
      :style="{
        background: `radial-gradient(560px circle at var(--px, 50%) var(--py, 40%), var(--c-glow), transparent 72%)`,
      }"
      aria-hidden="true"
    />

    <div class="container-page relative">
      <div class="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-16">
        <div>
          <p
            v-reveal
            class="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 py-1.5 pr-4 pl-3 font-mono text-xs text-accent"
          >
            <span class="relative grid size-2 place-items-center">
              <span class="absolute size-2 animate-pulse-ring rounded-full bg-accent" />
              <span class="size-2 rounded-full bg-accent" />
            </span>
            Recent grad - open to SWE & security roles
          </p>

          <h1
            v-reveal="80"
            class="mt-6 font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            <span class="block text-muted text-2xl font-medium sm:text-3xl">Hi, I'm</span>
            <span class="text-gradient">{{ profile.name }}</span>
          </h1>

          <!-- Fixed height keeps the layout still while the role scrambles. -->
          <p
            v-reveal="140"
            class="mt-5 flex min-h-8 items-center gap-2 font-mono text-lg sm:text-xl"
          >
            <span class="text-accent">&gt;</span>
            <span class="text-ink">{{ role }}</span>
            <span class="animate-caret text-accent" aria-hidden="true">▌</span>
          </p>

          <p v-reveal="200" class="mt-6 max-w-xl text-base/relaxed text-muted sm:text-lg/relaxed">
            {{ profile.intro }}
          </p>

          <div v-reveal="260" class="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              class="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5"
            >
              <span
                class="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/25 group-hover:animate-sweep"
              />
              <span class="relative">See what I've built</span>
              <AppIcon
                name="arrow-right"
                :size="16"
                class="relative transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              class="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-surface px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <AppIcon name="mail" :size="16" />
              Get in touch
            </a>
          </div>

          <div v-reveal="320" class="mt-9">
            <SocialLinks />
          </div>
        </div>

        <div v-reveal:right="180" class="lg:pl-4">
          <LogFeed />
        </div>
      </div>

      <dl v-reveal="380" class="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="group bg-surface p-5 transition-colors hover:bg-surface-alt">
          <dt class="font-display text-2xl font-bold text-accent sm:text-3xl">{{ stat.value }}</dt>
          <dd class="mt-1 text-sm font-medium text-ink">{{ stat.label }}</dd>
          <dd class="mt-0.5 font-mono text-[11px] text-faint">{{ stat.detail }}</dd>
        </div>
      </dl>
    </div>

    <a
      href="#about"
      class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-faint uppercase transition-colors hover:text-accent lg:flex"
    >
      scroll
      <AppIcon name="arrow-down" :size="14" class="animate-bounce" />
    </a>
  </section>
</template>

<script setup lang="ts">
import { profile, stats } from "~/data/site";

const root = useTemplateRef<HTMLElement>("root");
const role = useTextScramble(profile.roles, { hold: 2400 });

function onPointerMove(event: PointerEvent) {
  const el = root.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--px", `${event.clientX - rect.left}px`);
  el.style.setProperty("--py", `${event.clientY - rect.top}px`);
}

onMounted(() => window.addEventListener("pointermove", onPointerMove));
onBeforeUnmount(() => window.removeEventListener("pointermove", onPointerMove));
</script>
