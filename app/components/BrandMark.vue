<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    class="brand-mark size-full"
    :role="decorative ? undefined : 'img'"
    :aria-label="decorative ? undefined : label"
    :aria-hidden="decorative ? 'true' : undefined"
    focusable="false"
  >
    <title v-if="!decorative">{{ label }}</title>
    <defs>
      <linearGradient :id="ringId" x1="6" y1="8" x2="58" y2="58" gradientUnits="userSpaceOnUse">
        <stop stop-color="var(--c-cyber)" />
        <stop offset=".55" stop-color="color-mix(in oklab, var(--c-cyber), var(--c-accent))" />
        <stop offset="1" stop-color="var(--c-accent)" />
      </linearGradient>
    </defs>
    <!-- Outer V = Viransh. Crystal core = software meeting security. Apex spark. -->
    <path :fill="`url(#${ringId})`" fill-rule="evenodd" :d="ring" />
    <path fill="var(--c-cyber)" :d="coreLeft" />
    <path fill="var(--c-accent)" :d="coreRight" />
    <path class="fill-[#818cf8] dark:fill-[#e0e7ff]" :d="coreTop" />
    <path class="fill-ink dark:fill-white" :d="spark" />
  </svg>
</template>

<script setup lang="ts">
import { profile } from "~/data/site";

withDefaults(
  defineProps<{
    label?: string;
    decorative?: boolean;
  }>(),
  {
    label: `${profile.name} logo`,
    decorative: false,
  },
);

const ringId = `brand-v-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

const ring =
  "M5 7.5h17.5L32 33.5 41.5 7.5H59L32 59Zm9.5 5.7h11.7L32 28.2 37.8 13.2h11.7L32 47.2Z";
const coreLeft = "M22.4 15.2 32 39 32 25.2Z";
const coreRight = "M41.6 15.2 32 39 32 25.2Z";
const coreTop = "M22.4 15.2h19.2L32 25.2Z";
const spark = "m32 50.8 2.1 3.4L32 55.6l-2.1-1.4Z";
</script>

<style scoped>
.brand-mark {
  filter: drop-shadow(0 0 5px color-mix(in oklab, var(--c-accent) 40%, transparent));
  transition: filter 280ms ease;
}
:global(html.dark) .brand-mark {
  filter: drop-shadow(0 0 8px color-mix(in oklab, var(--c-accent) 58%, transparent));
}
:global(.group:hover) .brand-mark {
  filter: drop-shadow(0 0 12px color-mix(in oklab, var(--c-accent) 82%, transparent));
}
</style>
