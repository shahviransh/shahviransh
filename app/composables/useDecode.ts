const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*<>/\\";

/**
 * Decrypts a string into place once on mount. SSR renders the final text, so
 * crawlers and no-JS visitors never see the noise.
 */
export function useDecode(target: string, options?: { delay?: number; stagger?: number }) {
  const delay = options?.delay ?? 250;
  const stagger = options?.stagger ?? 55;
  const output = ref(target);

  if (import.meta.client) {
    let raf = 0;
    let timer = 0;
    let start = 0;

    // Driven by elapsed time rather than frame count, so a throttled or
    // backgrounded tab still lands on the real text the moment it paints.
    function step(now: number) {
      start ||= now;
      const elapsed = now - start;
      let locked = 0;
      const chars = [...target].map((char, i) => {
        if (char === " " || elapsed >= 120 + i * stagger) {
          locked++;
          return char;
        }
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]!;
      });
      output.value = chars.join("");
      if (locked < target.length) raf = requestAnimationFrame(step);
      else output.value = target;
    }

    onMounted(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      output.value = [...target].map((c) => (c === " " ? " " : "#")).join("");
      timer = window.setTimeout(() => (raf = requestAnimationFrame(step)), delay);
    });

    onBeforeUnmount(() => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    });
  }

  return output;
}
