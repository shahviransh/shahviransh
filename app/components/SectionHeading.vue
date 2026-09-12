<template>
  <div class="mb-12 md:mb-16" :class="align === 'center' && 'text-center'">
    <p
      v-reveal
      class="mb-3 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent uppercase"
      :class="align === 'center' && 'justify-center'"
    >
      <span class="text-faint">{{ index }}</span>
      <span class="h-px w-8 bg-accent/50" />
      {{ kicker }}
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
    kicker: string;
    title: string;
    description?: string;
    align?: "left" | "center";
  }>(),
  { align: "left" },
);
</script>
