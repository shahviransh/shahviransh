<template>
  <div class="card-surface overflow-hidden font-mono text-sm">
    <div class="flex items-center gap-2 border-b border-line bg-surface-alt px-4 py-2.5">
      <span class="size-3 rounded-full bg-danger/70" />
      <span class="size-3 rounded-full bg-warn/70" />
      <span class="size-3 rounded-full bg-accent/70" />
      <span class="ml-2 truncate text-xs text-faint">{{ title }}</span>
      <span class="ml-auto hidden items-center gap-1.5 text-[11px] text-faint sm:flex">
        <AppIcon name="lock" :size="12" />
        secure shell
      </span>
    </div>

    <div class="scanlines p-4 sm:p-5">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title?: string }>(), { title: "~/shahviransh" });
</script>
