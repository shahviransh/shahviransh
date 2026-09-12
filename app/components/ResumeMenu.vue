<template>
  <details ref="root" class="group relative">
    <summary
      class="inline-flex cursor-pointer list-none items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-2.5 py-2 text-sm font-medium text-accent transition-all select-none hover:border-accent hover:bg-accent/20 sm:px-3.5 [&::-webkit-details-marker]:hidden"
    >
      <AppIcon name="download" :size="16" />
      <span>Resume</span>
      <AppIcon
        name="chevron"
        :size="14"
        class="transition-transform duration-200 group-open:rotate-180"
      />
    </summary>

    <div
      class="absolute right-0 z-50 mt-2 w-72 origin-top-right animate-menu-in overflow-hidden rounded-xl border border-line bg-surface p-1.5 shadow-lift"
    >
      <p class="px-2.5 py-2 font-mono text-[11px] tracking-widest text-faint uppercase">
        Two tracks, one person
      </p>
      <a
        v-for="resume in profile.resumes"
        :key="resume.href"
        :href="withBase(resume.href)"
        target="_blank"
        rel="noopener"
        class="group/item flex items-start gap-3 rounded-lg px-2.5 py-2.5 transition-colors hover:bg-accent/10"
        @click="close"
      >
        <span
          class="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-line bg-surface-alt text-muted transition-colors group-hover/item:border-accent/50 group-hover/item:text-accent"
        >
          <AppIcon :name="resume.icon" :size="16" />
        </span>
        <span class="min-w-0">
          <span class="block text-sm font-medium text-ink">{{ resume.label }}</span>
          <span class="block text-xs text-muted">{{ resume.hint }}</span>
        </span>
      </a>
    </div>
  </details>
</template>

<script setup lang="ts">
// Built on a native <details> so the résumés stay reachable and keyboard
// operable even before hydration. The handlers below only add the two things
// <details> lacks: outside-click and Escape dismissal.
import { profile } from "~/data/site";

const config = useRuntimeConfig();
const root = useTemplateRef<HTMLDetailsElement>("root");

function withBase(href: string) {
  const base = config.app.baseURL.replace(/\/$/, "");
  return `${base}${href}`;
}

const close = () => root.value?.removeAttribute("open");

function onDocumentPointer(event: MouseEvent) {
  if (root.value?.open && !root.value.contains(event.target as Node)) close();
}

function onEscape(event: KeyboardEvent) {
  if (event.key === "Escape") close();
}

onMounted(() => {
  document.addEventListener("click", onDocumentPointer);
  document.addEventListener("keydown", onEscape);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", onDocumentPointer);
  document.removeEventListener("keydown", onEscape);
});
</script>
