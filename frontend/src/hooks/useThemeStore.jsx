import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("preference-theme") || "forest",
  setTheme: (theme) => {
    localStorage.setItem("preference-theme", theme);
    set({ theme });
  },
}));
