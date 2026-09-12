const GLYPHS = "!<>-_\\/[]{}-=+*^?#01xX$&%";

/**
 * Cycles through phrases with a "decrypt" scramble between each one.
 * Characters lock in left to right while the rest churn through random glyphs.
 */
export function useTextScramble(phrases: string[], options?: { hold?: number; speed?: number }) {
  const hold = options?.hold ?? 2200;
  const speed = options?.speed ?? 2.2;
  const output = ref(phrases[0] ?? "");

  if (import.meta.client) {
    let index = 0;
    let frame = 0;
    let raf = 0;
    let timer = 0;

    function step(target: string) {
      const chars: string[] = [];
      let locked = 0;

      for (let i = 0; i < target.length; i++) {
        // Characters lock in left to right; everything else keeps churning, so
        // the string always renders at full width instead of growing in.
        if (frame >= i * speed + speed * 4) {
          chars.push(target[i]!);
          locked++;
        } else if (target[i] === " ") {
          chars.push(" ");
          locked++;
        } else {
          chars.push(GLYPHS[Math.floor(Math.random() * GLYPHS.length)]!);
        }
      }

      output.value = chars.join("");
      frame++;

      if (locked < target.length) {
        raf = requestAnimationFrame(() => step(target));
      } else {
        output.value = target;
        timer = window.setTimeout(next, hold);
      }
    }

    function next() {
      index = (index + 1) % phrases.length;
      frame = 0;
      step(phrases[index]!);
    }

    onMounted(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || phrases.length < 2)
        return;
      timer = window.setTimeout(next, hold);
    });

    onBeforeUnmount(() => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    });
  }

  return output;
}
