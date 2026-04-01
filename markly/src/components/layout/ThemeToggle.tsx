"use client"

import { useTheme } from "@/hooks/useTheme";
import { useLocale } from "@/hooks/useLocale";
import { LuSunDim, LuMoon } from "react-icons/lu";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const { t } = useLocale();

    return (
        <button
            className={styles.button}
            onClick={toggleTheme}
            aria-label={t("header.toggleTheme")}
            title={t("header.toggleTheme")}
            suppressHydrationWarning
        >
            {theme === "light" ? (
                <LuSunDim className={styles.icon} />
            ) : (
                <LuMoon className={styles.icon} />
            )}
        </button>
    );
}
