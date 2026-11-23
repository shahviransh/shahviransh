<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[80] flex items-start justify-center bg-bg/70 px-4 pt-[14vh] backdrop-blur-sm"
        @click.self="close"
      >
        <div
          class="card-surface w-full max-w-lg animate-menu-in overflow-hidden font-mono shadow-lift"
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <label class="flex items-center gap-3 border-b border-line px-4 py-3.5">
            <span class="text-accent">&gt;</span>
            <input
              ref="input"
              v-model="query"
              type="text"
              placeholder="Jump somewhere, copy my email, grab a resume..."
              class="w-full bg-transparent text-sm text-ink outline-none placeholder:text-faint"
              aria-label="Search commands"
              @keydown.down.prevent="move(1)"
              @keydown.up.prevent="move(-1)"
              @keydown.enter.prevent="run(results[cursor])"
            />
            <kbd class="rounded border border-line px-1.5 py-0.5 text-[10px] text-faint">esc</kbd>
          </label>

          <ul class="max-h-80 overflow-y-auto p-1.5" role="listbox">
            <li v-for="(item, index) in results" :key="item.id" role="option" :aria-selected="index === cursor">
              <button
                type="button"
                class="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors"
                :class="index === cursor ? 'bg-accent/10 text-accent' : 'text-muted'"
                @mouseenter="cursor = index"
                @click="run(item)"
              >
                <AppIcon :name="item.icon" :size="15" class="shrink-0" />
                <span class="flex-1">{{ item.label }}</span>
                <span class="text-[10px] tracking-wider text-faint uppercase">{{ item.group }}</span>
              </button>
            </li>
            <li v-if="!results.length" class="px-3 py-6 text-center text-sm text-faint">
              command not found: {{ query }}
            </li>
          </ul>

          <p class="border-t border-line px-4 py-2 text-[10px] text-faint">
            <span v-if="flash" class="text-accent">{{ flash }}</span>
            <span v-else>↑ ↓ to move, enter to run</span>
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { navLinks, profile } from "~/data/site";

interface Command {
  id: string;
  label: string;
  group: string;
  icon: string;
  action: () => void | Promise<void>;
  keepOpen?: boolean;
}

const { isOpen, close, toggle } = useCommandPalette();
const { toggle: toggleTheme } = useTheme();
const config = useRuntimeConfig();
const input = useTemplateRef<HTMLInputElement>("input");
const query = ref("");
const cursor = ref(0);
const flash = ref("");

const base = config.app.baseURL.replace(/\/$/, "");
const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
const openUrl = (href: string) => window.open(href, "_blank", "noopener");

const commands: Command[] = [
  { id: "home", label: "Back to top", group: "go", icon: "arrow-down", action: () => goto("home") },
  ...navLinks.map((link) => ({
    id: `go-${link.id}`,
    label: link.label,
    group: "go",
    icon: "arrow-right",
    action: () => goto(link.id),
  })),
  {
    id: "copy-email",
    label: `Copy ${profile.emails[0]!.address}`,
    group: "do",
    icon: "copy",
    keepOpen: true,
    action: async () => {
      try {
        await navigator.clipboard.writeText(profile.emails[0]!.address);
        flash.value = "copied. talk soon :)";
      } catch {
        flash.value = "clipboard blocked, it's " + profile.emails[0]!.address;
      }
    },
  },
  ...profile.resumes.map((resume) => ({
    id: `resume-${resume.icon}`,
    label: `Resume: ${resume.label}`,
    group: "file",
    icon: "download",
    action: () => openUrl(`${base}${resume.href}`),
  })),
  ...profile.socials
    .filter((s) => !s.href.startsWith("mailto:"))
    .map((social) => ({
      id: `social-${social.label}`,
      label: `Open ${social.label}`,
      group: "link",
      icon: social.icon,
      action: () => openUrl(social.href),
    })),
  { id: "theme", label: "Toggle light / dark", group: "do", icon: "moon", action: () => toggleTheme() },
];

const results = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return commands;
  return commands.filter((c) => `${c.label} ${c.group}`.toLowerCase().includes(q));
});

watch(results, () => (cursor.value = 0));

watch(isOpen, async (open) => {
  if (!open) return;
  query.value = "";
  flash.value = "";
  cursor.value = 0;
  await nextTick();
  input.value?.focus();
});

function move(delta: number) {
  const n = results.value.length;
  if (n) cursor.value = (cursor.value + delta + n) % n;
}

async function run(item?: Command) {
  if (!item) return;
  await item.action();
  if (!item.keepOpen) close();
}

function onKey(event: KeyboardEvent) {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    toggle();
  } else if (event.key === "Escape" && isOpen.value) {
    close();
  }
}

onMounted(() => window.addEventListener("keydown", onKey));
onBeforeUnmount(() => window.removeEventListener("keydown", onKey));
</script>
