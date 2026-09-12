<template>
  <button
    type="button"
    class="group relative grid size-10 place-items-center overflow-hidden rounded-xl border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
    aria-label="Toggle colour theme"
    @click="toggle"
  >
    <span
      class="absolute inset-0 -translate-y-full bg-accent/10 transition-transform duration-300 group-hover:translate-y-0"
    />
    <!-- Both icons ship in the markup and swap purely with the `dark` class,
         so server and client render identically. -->
    <AppIcon
      name="sun"
      class="absolute transition-all duration-500 dark:rotate-90 dark:scale-0 dark:opacity-0"
    />
    <AppIcon
      name="moon"
      class="absolute -rotate-90 scale-0 opacity-0 transition-all duration-500 dark:rotate-0 dark:scale-100 dark:opacity-100"
    />
  </button>
</template>

<script setup lang="ts">
const { toggle } = useTheme();
</script>
