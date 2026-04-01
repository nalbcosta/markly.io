"use client"

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return "light";

        const storedTheme = localStorage.getItem("markly-theme") as Theme | null;
        if (storedTheme === "dark" || storedTheme === "light") {
            return storedTheme;
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    const applyTheme = (newTheme: Theme) => {
        if (typeof window !== "undefined") {
            if (newTheme === "dark") {
                document.documentElement.setAttribute("data-theme", "dark");
            } else {
                document.documentElement.removeAttribute("data-theme");
            }
            localStorage.setItem("markly-theme", newTheme);
        }
    };

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    return { theme, toggleTheme };
}
