import styles from "./Header.module.css";
import { MarklyLogo } from "@/assets/MarklyLogo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.logoArea}>
                    <MarklyLogo size="sm" />
                </div>

                <nav className={styles.nav}>
                    <a href="#como-funciona">Como funciona</a>
                    <a href="#templates">Templates</a>
                    <a href="#faq">FAQ</a>
                </nav>

                <div className={styles.actions}>
                    <ThemeToggle />
                    <button className={styles.buttonSecondary}>Entrar</button>
                    <button className={styles.buttonPrimary}>Começar agora</button>
                </div>
            </div>
        </header>
    )
}