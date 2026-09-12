<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="
      scrolled
        ? 'border-b border-line bg-bg/80 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/65'
        : 'border-b border-transparent'
    "
  >
    <div class="container-page flex h-18 items-center justify-between gap-4">
      <a
        href="#home"
        class="group flex items-center gap-2.5"
        :aria-label="`${profile.name} — home`"
        @click="close"
      >
        <span class="relative grid size-10 place-items-center">
          <span
            class="pointer-events-none absolute inset-0 rounded-xl border-2 border-accent opacity-0 group-hover:animate-logo-ping group-focus-visible:animate-logo-ping"
            aria-hidden="true"
          />
          <span
            class="pointer-events-none absolute inset-0 rounded-xl border-2 border-accent opacity-0 group-hover:animate-logo-ping group-focus-visible:animate-logo-ping [animation-delay:380ms]"
            aria-hidden="true"
          />
          <span
            class="relative z-10 grid size-full place-items-center overflow-hidden rounded-xl border-2 border-accent/55 bg-accent/10 p-[3px] transition-[border-color,box-shadow] duration-200 group-hover:border-accent group-hover:shadow-[0_0_14px_color-mix(in_oklab,var(--c-accent)_50%,transparent)] group-focus-visible:border-accent"
          >
            <BrandMark decorative />
          </span>
        </span>
        <span class="hidden font-mono text-sm text-muted sm:block">
          <span class="text-accent">~/</span>{{ profile.handle }}
          <span class="animate-caret text-accent">_</span>
        </span>
      </a>

      <nav class="hidden lg:block">
        <ul class="flex items-center gap-1">
          <li v-for="(item, index) in links" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="group relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition-colors"
              :class="active === item.id ? 'text-accent' : 'text-muted hover:text-ink'"
            >
              <span class="font-mono text-[11px] text-faint">{{
                String(index + 1).padStart(2, "0")
              }}</span>
              <span class="font-medium">{{ item.label }}</span>
              <span
                class="absolute inset-x-3 -bottom-px h-px origin-left bg-accent transition-transform duration-300"
                :class="active === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
              />
            </a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2">
        <ThemeToggle />
        <ResumeMenu />
        <button
          type="button"
          class="grid size-10 place-items-center rounded-xl border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-accent lg:hidden"
          :aria-expanded="open"
          aria-label="Toggle navigation"
          @click="open = !open"
        >
          <AppIcon :name="open ? 'close' : 'menu'" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition-[max-height,opacity] duration-300 ease-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-[32rem] opacity-100"
      leave-active-class="transition-[max-height,opacity] duration-200 ease-in"
      leave-from-class="max-h-[32rem] opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div
        v-if="open"
        class="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden"
      >
        <ul class="container-page flex flex-col gap-1 py-4">
          <li
            v-for="(item, index) in links"
            :key="item.id"
            class="translate-y-2 opacity-0 [animation:reveal-item_.4s_forwards]"
            :style="{ animationDelay: `${index * 45}ms` }"
          >
            <a
              :href="`#${item.id}`"
              class="flex items-center gap-3 rounded-lg px-3 py-3 text-base transition-colors"
              :class="
                active === item.id ? 'bg-accent/10 text-accent' : 'text-muted hover:bg-surface-alt'
              "
              @click="close"
            >
              <span class="font-mono text-xs text-faint">{{
                String(index + 1).padStart(2, "0")
              }}</span>
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { profile } from "~/data/site";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "security", label: "Security" },
  { id: "contact", label: "Contact" },
];

const open = ref(false);
const scrolled = ref(false);
const active = useActiveSection(["home", ...links.map((l) => l.id)]);

const close = () => (open.value = false);

function onScroll() {
  scrolled.value = window.scrollY > 12;
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<style>
@keyframes reveal-item {
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
