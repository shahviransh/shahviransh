<template>
  <section id="projects" class="relative border-t border-line py-24 md:py-32">
    <div class="container-page">
      <SectionHeading
        index="03"
        command="ls ~/projects --sort=impact"
        title="Things I've shipped"
        description="Production apps, a capstone with real cryptography in it, some ML, and desktop tools I built because I wanted them to exist."
      />

      <div v-reveal class="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs">
        <span class="mr-1 text-faint">--filter=</span>
        <button
          v-for="filter in projectFilters"
          :key="filter.id"
          type="button"
          class="relative rounded-md border px-3 py-1.5 transition-all duration-200"
          :class="
            active === filter.id
              ? 'border-accent bg-accent/10 text-accent'
              : 'border-line bg-surface text-muted hover:border-line-strong hover:text-ink'
          "
          :aria-pressed="active === filter.id"
          @click="active = filter.id"
        >
          {{ filter.label }}
          <span class="ml-1 text-faint">{{ countFor(filter.id) }}</span>
        </button>
      </div>

      <TransitionGroup
        tag="div"
        class="relative grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        move-class="transition-transform duration-400 ease-out"
        enter-active-class="transition duration-400 ease-out"
        enter-from-class="opacity-0 scale-95"
        leave-active-class="absolute transition duration-200 ease-in"
        leave-to-class="opacity-0 scale-95"
      >
        <ProjectCard
          v-for="(project, index) in filtered"
          :key="project.name"
          :project="project"
          :index="index"
        />
      </TransitionGroup>

      <p v-reveal class="mt-10 text-center text-sm text-muted">
        Coursework, experiments and older builds live on
        <a
          href="https://github.com/shahviransh?tab=repositories"
          target="_blank"
          rel="noopener"
          class="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
          >GitHub</a
        >.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projectFilters, projects, type ProjectCategory } from "~/data/site";

type Filter = ProjectCategory | "all";

const active = ref<Filter>("all");

const filtered = computed(() =>
  active.value === "all"
    ? projects
    : projects.filter((project) => project.categories.includes(active.value as ProjectCategory)),
);

function countFor(filter: Filter) {
  return filter === "all"
    ? projects.length
    : projects.filter((project) => project.categories.includes(filter)).length;
}
</script>
