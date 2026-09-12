/**
 * `v-reveal` fades an element in the first time it scrolls into view.
 *   v-reveal             -> slide up
 *   v-reveal:left        -> slide in from the left
 *   v-reveal:scale="120" -> scale in, 120ms stagger delay
 *
 * `getSSRProps` is always defined so Vue's server renderer never throws.
 * The hidden starting state is applied only after mount, so SSR HTML stays visible.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const isClient = import.meta.client;

  const reduced =
    isClient && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const tracked = new Set<HTMLElement>();
  let fired = false;

  function reveal(el: HTMLElement) {
    el.classList.add("is-revealed");
    tracked.delete(el);
    observer?.unobserve(el);
  }

  const observer =
    isClient && !reduced
      ? new IntersectionObserver(
          (entries) => {
            fired = true;
            for (const entry of entries) {
              if (entry.isIntersecting) reveal(entry.target as HTMLElement);
            }
          },
          { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
        )
      : null;

  if (observer) {
    window.setTimeout(() => {
      if (fired) return;
      for (const el of [...tracked]) reveal(el);
    }, 2000);
  }

  nuxtApp.vueApp.directive<HTMLElement, number | undefined>("reveal", {
    getSSRProps: () => ({}),

    mounted(el, binding) {
      el.dataset.reveal = binding.arg ?? "up";
      if (binding.value) el.style.setProperty("--reveal-delay", `${binding.value}ms`);

      if (!observer) {
        el.classList.add("is-revealed");
        return;
      }

      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-revealed");
        return;
      }

      tracked.add(el);
      observer.observe(el);
    },

    unmounted(el) {
      tracked.delete(el);
      observer?.unobserve(el);
    },
  });
});
