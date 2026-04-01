"use client";

import styles from "./Header.module.css";
import { MarklyLogo } from "@/assets/MarklyLogo";
import { ThemeToggle } from "./ThemeToggle";
import { useLocale } from "@/hooks/useLocale";

export function Header() {
    const { t } = useLocale();

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.logoArea}>
                    <MarklyLogo size="sm" />
                </div>

                <nav className={styles.nav}>
                    <a href="#how-it-works">{t("header.howItWorks")}</a>
                    <a href="#features">{t("header.features")}</a>
                    <a href="#faq">{t("header.faq")}</a>
                </nav>

                <div className={styles.actions}>
                    <ThemeToggle />
                    <button className={styles.buttonSecondary}>{t("header.signIn")}</button>
                    <button className={styles.buttonPrimary}>{t("header.startNow")}</button>
                </div>
            </div>
        </header>
    )
}