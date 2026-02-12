import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type User } from "next-auth";

interface AppState {
    theme: "light" | "dark";
    toggleTheme: () => void;
    user: User | null;
    setUser: (user: User | null) => void;
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
