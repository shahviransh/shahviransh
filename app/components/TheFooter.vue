<template>
  <footer class="border-t border-line bg-bg-alt py-10">
    <div
      class="container-page flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start"
    >
      <div class="text-center sm:text-left">
        <p class="font-mono text-sm">
          <span class="text-accent">~/</span>{{ profile.handle }}
        </p>
        <p class="mt-1.5 text-sm text-muted">
          Built with Nuxt and Tailwind CSS. © {{ year }} {{ profile.name }}.
        </p>
        <p class="mt-1 font-mono text-[11px] text-faint">
          Source on
          <a
            href="https://github.com/shahviransh/shahviransh"
            target="_blank"
            rel="noopener"
            class="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent"
            >GitHub</a
          >
        </p>
      </div>

      <div class="flex flex-col items-center gap-4 sm:items-end">
        <SocialLinks size="sm" />
        <a
          href="#home"
          class="group inline-flex items-center gap-1.5 font-mono text-[11px] tracking-widest text-faint uppercase transition-colors hover:text-accent"
        >
          back to top
          <AppIcon
            name="arrow-down"
            :size="12"
            class="rotate-180 transition-transform group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { profile } from "~/data/site";

const year = new Date().getFullYear();
</script>
