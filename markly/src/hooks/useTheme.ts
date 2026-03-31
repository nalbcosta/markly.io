"use client"

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    // Inicializa o tema na primeira renderização
    useEffect(() => {
        const storedTheme = localStorage.getItem("markly-theme") as Theme | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
        
        setTheme(initialTheme);
        applyTheme(initialTheme);
        setMounted(true);
    }, []);

    const applyTheme = (newTheme: Theme) => {
        if (newTheme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
        localStorage.setItem("markly-theme", newTheme);
    };

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    return { theme, toggleTheme, mounted };
}
