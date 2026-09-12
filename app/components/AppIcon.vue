<template>
  <svg
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
    :fill="glyph.filled ? 'currentColor' : 'none'"
    :stroke="glyph.filled ? 'none' : 'currentColor'"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
    v-html="glyph.body"
  />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ name: string; size?: number | string }>(), {
  size: 20,
});

interface Glyph {
  body: string;
  filled?: boolean;
}

const glyphs: Record<string, Glyph> = {
  sun: {
    body: `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>`,
  },
  moon: { body: `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>` },
  menu: { body: `<path d="M4 6h16M4 12h16M4 18h16"/>` },
  close: { body: `<path d="M18 6 6 18M6 6l12 12"/>` },
  shield: {
    body: `<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>`,
  },
  terminal: {
    body: `<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 11 2-2-2-2M11 13h4"/>`,
  },
  code: { body: `<path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"/>` },
  server: {
    body: `<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>`,
  },
  radar: {
    body: `<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.5"/><path d="M12 12 19 5"/>`,
  },
  download: {
    body: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>`,
  },
  "arrow-right": { body: `<path d="M5 12h14M12 5l7 7-7 7"/>` },
  "arrow-down": { body: `<path d="M12 5v14M19 12l-7 7-7-7"/>` },
  external: {
    body: `<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>`,
  },
  mail: {
    body: `<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>`,
  },
  copy: {
    body: `<rect x="8" y="8" width="14" height="14" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>`,
  },
  check: { body: `<path d="M20 6 9 17l-5-5"/>` },
  lock: {
    body: `<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`,
  },
  pin: {
    body: `<path d="M20 10c0 4.4-5.2 10.4-7.3 12.6a1 1 0 0 1-1.4 0C9.2 20.4 4 14.4 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>`,
  },
  graduation: {
    body: `<path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>`,
  },
  briefcase: {
    body: `<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`,
  },
  branch: {
    body: `<circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 3v12M18 9a9 9 0 0 1-9 9"/>`,
  },
  cpu: {
    body: `<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>`,
  },
  bolt: {
    body: `<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>`,
  },
  model: {
    body: `<path d="M12 2a4 4 0 0 0-4 4v1a3 3 0 0 0 0 6v1a4 4 0 0 0 4 4M12 2a4 4 0 0 1 4 4v1a3 3 0 0 1 0 6v1a4 4 0 0 1-4 4"/><path d="M12 2v20"/>`,
  },
  chevron: { body: `<path d="m6 9 6 6 6-6"/>` },
  github: {
    filled: true,
    body: `<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/>`,
  },
  linkedin: {
    filled: true,
    body: `<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/>`,
  },
};

const glyph = computed<Glyph>(() => glyphs[props.name] ?? glyphs.code!);
</script>
