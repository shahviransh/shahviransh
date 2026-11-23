export function useCommandPalette() {
  const isOpen = useState<boolean>("palette:open", () => false);
  return {
    isOpen,
    open: () => (isOpen.value = true),
    close: () => (isOpen.value = false),
    toggle: () => (isOpen.value = !isOpen.value),
  };
}
