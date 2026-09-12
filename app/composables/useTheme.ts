type Theme = "light" | "dark";

/**
 * Theme state lives on the `<html>` element so the inline head script can set it
 * before first paint. This composable only mirrors and mutates that class.
 */
export function useTheme() {
  const isDark = useState<boolean>("theme:dark", () => true);

  function apply(theme: Theme, animate = true) {
    const root = document.documentElement;
    if (animate) {
      root.classList.add("theme-transition");
      window.setTimeout(() => root.classList.remove("theme-transition"), 400);
    }
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    isDark.value = theme === "dark";
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* private browsing */
    }
  }

  onMounted(() => {
    isDark.value = document.documentElement.classList.contains("dark");
  });

  function toggle() {
    apply(isDark.value ? "light" : "dark");
  }

  return { isDark, toggle, apply };
}
