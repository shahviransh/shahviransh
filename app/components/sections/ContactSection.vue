<template>
  <section id="contact" class="relative overflow-hidden border-t border-line py-24 md:py-32">
    <CyberBackdrop />

    <div class="container-page relative">
      <div class="mx-auto max-w-3xl text-center">
        <p
          v-reveal
          class="mb-3 font-mono text-xs tracking-[0.2em] text-accent uppercase"
        >
          06 - get in touch
        </p>
        <h2
          v-reveal="60"
          class="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl"
        >
          Let's build something that
          <span class="text-gradient-accent">holds up</span>
        </h2>
        <p v-reveal="120" class="mx-auto mt-5 max-w-xl text-base/relaxed text-muted md:text-lg/relaxed">
          I'm looking for software engineering and security analyst roles, and I can start now. If
          you're hiring for either - or just want to compare notes on a CTF - my inbox is open.
        </p>

        <div v-reveal="180" class="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            :href="`mailto:${primaryEmail}`"
            class="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-contrast transition-transform hover:-translate-y-0.5"
          >
            <span
              class="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/25 group-hover:animate-sweep"
            />
            <AppIcon name="mail" :size="16" class="relative" />
            <span class="relative">Email me</span>
          </a>
        </div>

        <div v-reveal="240" class="mx-auto mt-10 max-w-xl text-left">
          <TerminalWindow title="contact.sh">
            <div class="space-y-2.5 text-[13px]">
              <p class="flex flex-wrap items-center gap-2">
                <span class="text-accent">$</span>
                <span class="text-muted">echo $EMAIL</span>
              </p>
              <div
                v-for="mail in profile.emails"
                :key="mail.address"
                class="flex flex-wrap items-center gap-2"
              >
                <a
                  :href="`mailto:${mail.address}`"
                  class="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {{ mail.address }}
                </a>
                <span class="text-[11px] text-faint">{{ mail.label }}</span>
                <button
                  type="button"
                  class="inline-flex items-center gap-1.5 rounded-md border border-line px-2 py-1 text-[11px] text-muted transition-colors hover:border-accent hover:text-accent"
                  @click="copy(mail.address)"
                >
                  <AppIcon :name="copied === mail.address ? 'check' : 'copy'" :size="12" />
                  {{ copied === mail.address ? "copied" : "copy" }}
                </button>
              </div>
              <p class="flex flex-wrap items-center gap-2 pt-1">
                <span class="text-accent">$</span>
                <span class="text-muted">echo $LOCATION</span>
              </p>
              <p class="flex items-center gap-2 text-ink">
                <AppIcon name="pin" :size="14" class="text-accent" />
                {{ profile.location }}
              </p>
              <p class="flex flex-wrap items-center gap-2 pt-1">
                <span class="text-accent">$</span>
                <span class="text-muted">echo $AVAILABILITY</span>
              </p>
              <p class="flex items-center gap-2 text-ink">
                <span class="relative grid size-2 place-items-center">
                  <span class="absolute size-2 animate-pulse-ring rounded-full bg-accent" />
                  <span class="size-2 rounded-full bg-accent" />
                </span>
                Graduated {{ profile.graduated }} - available to start immediately
              </p>
            </div>
          </TerminalWindow>
        </div>

        <div v-reveal="300" class="mt-10 flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from "~/data/site";

const primaryEmail = profile.emails[0]!.address;
const copied = ref<string | null>(null);
let timer: number | undefined;

async function copy(value: string) {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    return;
  }
  copied.value = value;
  clearTimeout(timer);
  timer = window.setTimeout(() => (copied.value = null), 1800);
}

onBeforeUnmount(() => clearTimeout(timer));
</script>
