<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div class="grid-backdrop absolute inset-0 animate-drift opacity-70" />
    <canvas ref="canvas" class="absolute inset-0 size-full opacity-70" />
    <!-- Fades the field out toward the section edges so it never fights the text. -->
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--c-bg)_78%)]"
    />
  </div>
</template>

<script setup lang="ts">
/**
 * Drifting node field with proximity links - a quiet nod to network traffic.
 * Redraws only while the section is on screen and skips entirely under
 * prefers-reduced-motion.
 */
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

const canvas = useTemplateRef<HTMLCanvasElement>("canvas");
let ctx: CanvasRenderingContext2D | null = null;
let nodes: Node[] = [];
let frame = 0;
let visible = true;
let width = 0;
let height = 0;
let accent = "45, 212, 191";

function readAccent() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--c-accent").trim();
  const hex = raw.replace("#", "");
  if (hex.length !== 6) return;
  const int = Number.parseInt(hex, 16);
  accent = `${(int >> 16) & 255}, ${(int >> 8) & 255}, ${int & 255}`;
}

function resize() {
  const el = canvas.value;
  if (!el || !ctx) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const rect = el.getBoundingClientRect();
  width = rect.width;
  height = rect.height;
  el.width = Math.round(width * dpr);
  el.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const target = Math.min(64, Math.max(18, Math.round((width * height) / 26000)));
  nodes = Array.from({ length: target }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    r: 1 + Math.random() * 1.6,
  }));
}

function draw() {
  frame = visible ? requestAnimationFrame(draw) : 0;
  if (!ctx) return;

  ctx.clearRect(0, 0, width, height);

  for (const node of nodes) {
    node.x += node.vx;
    node.y += node.vy;
    if (node.x < 0 || node.x > width) node.vx *= -1;
    if (node.y < 0 || node.y > height) node.vy *= -1;
  }

  const linkRange = 132;
  ctx.lineWidth = 1;
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i]!;
    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j]!;
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.hypot(dx, dy);
      if (dist > linkRange) continue;
      ctx.strokeStyle = `rgba(${accent}, ${0.22 * (1 - dist / linkRange)})`;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
  }

  ctx.fillStyle = `rgba(${accent}, 0.55)`;
  for (const node of nodes) {
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

let observer: ResizeObserver | undefined;
let visibility: IntersectionObserver | undefined;
let themeWatcher: MutationObserver | undefined;

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const el = canvas.value;
  if (!el) return;

  ctx = el.getContext("2d");
  readAccent();
  resize();
  frame = requestAnimationFrame(draw);

  observer = new ResizeObserver(resize);
  observer.observe(el);

  visibility = new IntersectionObserver((entries) => {
    visible = entries[0]?.isIntersecting ?? false;
    if (visible && !frame) frame = requestAnimationFrame(draw);
  });
  visibility.observe(el);

  themeWatcher = new MutationObserver(readAccent);
  themeWatcher.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
});

onBeforeUnmount(() => {
  if (frame) cancelAnimationFrame(frame);
  observer?.disconnect();
  visibility?.disconnect();
  themeWatcher?.disconnect();
});
</script>
