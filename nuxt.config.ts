// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

const description =
  "Viransh Shah - Computer Science graduate from McMaster University working across full-stack development and defensive security. Federal co-op developer, CyberSci 2025 national runner-up.";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Viransh Shah - Software Developer & Security Analyst",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: description },
        { name: "theme-color", content: "#05080f", media: "(prefers-color-scheme: dark)" },
        { name: "theme-color", content: "#f6f8fc", media: "(prefers-color-scheme: light)" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Viransh Shah - Software Developer & Security Analyst" },
        { property: "og:description", content: description },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
        },
      ],
      script: [
        {
          // Applies the stored theme before first paint so there is no flash, and
          // marks the document as scripted so scroll-reveal only hides content
          // when there is JavaScript around to reveal it again.
          innerHTML: `(function(){var r=document.documentElement;r.classList.add("js");try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`,
          tagPosition: "head",
        },
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
