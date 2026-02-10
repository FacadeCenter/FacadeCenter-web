import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
    theme: "light" | "dark";
    toggleTheme: () => void;
    user: any | null;
    setUser: (user: any) => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            theme: "dark",
            toggleTheme: () =>
                set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
            user: null,
            setUser: (user) => set({ user }),
        }),
        {
            name: "app-storage",
        }
    )
);
