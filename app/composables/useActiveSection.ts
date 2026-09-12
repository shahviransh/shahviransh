/**
 * Tracks which section id is currently dominant in the viewport.
 * Uses scroll position rather than IntersectionObserver ratios so that short
 * sections next to tall ones still register as active.
 */
export function useActiveSection(ids: string[]) {
  const active = ref(ids[0] ?? "");

  if (import.meta.client) {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const line = window.scrollY + window.innerHeight * 0.32;
      let current = ids[0] ?? "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) current = id;
      }

      // Anything within a screen of the bottom means the last section is in view.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 120) {
        current = ids[ids.length - 1] ?? current;
      }

      active.value = current;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    onMounted(() => {
      measure();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    });

    onBeforeUnmount(() => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    });
  }

  return active;
}
