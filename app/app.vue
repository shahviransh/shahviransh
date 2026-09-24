<template>
  <!-- `overflow-x-clip` has to sit on a wrapper rather than on html/body: there
       it would propagate to the viewport, where mobile browsers answer a stray
       overflow by widening the layout viewport instead of clipping, which drags
       the fixed header off the side of the screen. -->
  <div class="min-h-svh overflow-x-clip bg-bg text-ink antialiased">
    <a
      href="#about"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-contrast"
    >
      Skip to content
    </a>

    <ScrollProgress />
    <TheNavbar />

    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <SecuritySection />
      <ContactSection />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import HeroSection from "~/components/sections/HeroSection.vue";
import AboutSection from "~/components/sections/AboutSection.vue";
import SkillsSection from "~/components/sections/SkillsSection.vue";
import ExperienceSection from "~/components/sections/ExperienceSection.vue";
import ProjectsSection from "~/components/sections/ProjectsSection.vue";
import SecuritySection from "~/components/sections/SecuritySection.vue";
import ContactSection from "~/components/sections/ContactSection.vue";
</script>
