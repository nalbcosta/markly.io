"use client"

import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Inicializa o tema no lado do cliente
        const storedTheme = localStorage.getItem("markly-theme") as "light" | "dark" | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

        if (initialTheme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
    }, []);

    return <>{children}</>;
}
