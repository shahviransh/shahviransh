<template>
  <article
    ref="root"
    class="card-surface group relative flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lift"
    @pointermove="onPointerMove"
  >
    <!-- Cursor-tracked highlight, positioned by the --mx/--my variables. -->
    <div
      class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style="
        background: radial-gradient(
          300px circle at var(--mx, 50%) var(--my, 50%),
          var(--c-glow),
          transparent 70%
        );
      "
      aria-hidden="true"
    />

    <div class="relative flex items-start justify-between gap-4">
      <span class="font-mono text-xs text-faint">{{ String(index + 1).padStart(2, "0") }}</span>
      <span
        v-if="project.featured"
        class="inline-flex items-center gap-1 rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-accent uppercase"
      >
        <AppIcon name="bolt" :size="10" />
        featured
      </span>
    </div>

    <h3 class="relative mt-3 font-display text-xl font-semibold">
      {{ project.name }}
    </h3>
    <p class="relative mt-1 text-sm font-medium text-accent">{{ project.tagline }}</p>
    <p class="relative mt-3 text-sm/relaxed text-muted">{{ project.summary }}</p>

    <!-- 0fr -> 1fr animates cleanly without measuring the content height. -->
    <div
      class="relative grid transition-[grid-template-rows] duration-400 ease-out"
      :style="{ gridTemplateRows: expanded ? '1fr' : '0fr' }"
    >
      <div class="overflow-hidden">
        <ul class="mt-4 space-y-2 border-l border-accent/30 pl-4">
          <li v-for="bullet in project.bullets" :key="bullet" class="text-sm/relaxed text-muted">
            {{ bullet }}
          </li>
        </ul>
      </div>
    </div>

    <button
      type="button"
      class="relative mt-3 inline-flex w-fit items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
      :aria-expanded="expanded"
      @click="expanded = !expanded"
    >
      {{ expanded ? "less" : "how it works" }}
      <AppIcon
        name="chevron"
        :size="13"
        class="transition-transform duration-300"
        :class="expanded && 'rotate-180'"
      />
    </button>

    <ul class="relative mt-5 mb-5 flex flex-wrap gap-1.5">
      <li
        v-for="tech in project.stack"
        :key="tech"
        class="rounded-md bg-surface-alt px-2 py-1 font-mono text-[11px] text-faint"
      >
        {{ tech }}
      </li>
    </ul>

    <footer
      class="relative mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-4"
    >
      <span class="mr-auto font-mono text-[11px] text-faint">{{ project.period }}</span>
      <a
        v-for="link in project.links"
        :key="link.href"
        :href="link.href"
        target="_blank"
        rel="noopener"
        class="group/link inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        <AppIcon :name="link.icon ?? 'github'" :size="14" />
        {{ link.label }}
        <AppIcon
          name="external"
          :size="12"
          class="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        />
      </a>
    </footer>
  </article>
</template>

<script setup lang="ts">
import type { Project } from "~/data/site";

defineProps<{ project: Project; index: number }>();

const root = useTemplateRef<HTMLElement>("root");
const expanded = ref(false);

function onPointerMove(event: PointerEvent) {
  const el = root.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  el.style.setProperty("--my", `${event.clientY - rect.top}px`);
}
</script>
