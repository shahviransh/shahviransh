<template>
  <div class="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent" aria-hidden="true">
    <div
      class="h-full origin-left bg-gradient-to-r from-accent via-accent to-cyber"
      :style="{ transform: `scaleX(${progress})` }"
    />
  </div>
</template>

<script setup lang="ts">
const progress = ref(0);
let frame = 0;

function measure() {
  frame = 0;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.value = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
}

function onScroll() {
  if (!frame) frame = requestAnimationFrame(measure);
}

onMounted(() => {
  measure();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
});

onBeforeUnmount(() => {
  if (frame) cancelAnimationFrame(frame);
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
});
</script>
