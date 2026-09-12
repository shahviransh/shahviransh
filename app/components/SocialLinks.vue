<template>
  <ul class="flex flex-wrap items-center gap-2">
    <li v-for="social in profile.socials" :key="social.label">
      <a
        :href="social.href"
        :target="social.href.startsWith('mailto:') ? undefined : '_blank'"
        rel="noopener"
        class="group relative grid place-items-center rounded-xl border border-line bg-surface text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-lift"
        :class="size === 'sm' ? 'size-9' : 'size-11'"
        :aria-label="social.label"
      >
        <AppIcon :name="social.icon" :size="size === 'sm' ? 16 : 19" />
        <span
          class="pointer-events-none absolute -bottom-8 rounded-md border border-line bg-surface px-2 py-1 font-mono text-[10px] whitespace-nowrap text-muted opacity-0 transition-opacity group-hover:opacity-100"
        >
          {{ social.label }}
        </span>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { profile } from "~/data/site";

withDefaults(defineProps<{ size?: "sm" | "md" }>(), { size: "md" });
</script>
