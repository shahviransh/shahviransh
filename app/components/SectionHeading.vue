<template>
  <div class="mb-12 md:mb-16" :class="align === 'center' && 'text-center'">
    <p
      v-reveal
      class="mb-4 inline-flex items-center gap-2 rounded-md border border-line bg-surface/60 px-2.5 py-1 font-mono text-xs text-muted backdrop-blur"
    >
      <span class="text-faint">{{ index }}</span>
      <span class="text-accent">~/viransh $</span>
      <span class="text-ink">{{ command }}</span>
      <span class="animate-caret text-accent" aria-hidden="true">▌</span>
    </p>

    <h2
      v-reveal="60"
      class="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.75rem]"
    >
      {{ title }}
    </h2>

    <p
      v-if="description"
      v-reveal="120"
      class="mt-4 max-w-2xl text-base/relaxed text-muted md:text-lg/relaxed"
      :class="align === 'center' && 'mx-auto'"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    index: string;
    command: string;
    title: string;
    description?: string;
    align?: "left" | "center";
  }>(),
  { align: "left" },
);
</script>
