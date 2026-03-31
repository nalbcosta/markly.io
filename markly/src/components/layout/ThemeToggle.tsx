"use client"

import { useTheme } from "@/hooks/useTheme";
import { LuSunDim, LuMoon } from "react-icons/lu";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
    const { theme, toggleTheme, mounted } = useTheme();

    if (!mounted) {
        return <button className={styles.button} disabled />;
    }

    return (
        <button
            className={styles.button}
            onClick={toggleTheme}
            aria-label={`Alternar para tema ${theme === "light" ? "escuro" : "claro"}`}
            title={`Tema ${theme === "light" ? "escuro" : "claro"}`}
        >
            {theme === "light" ? (
                <LuSunDim className={styles.icon} />
            ) : (
                <LuMoon className={styles.icon} />
            )}
        </button>
    );
}
