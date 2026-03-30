import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.logoArea}>
                    <span className={styles.logoMark}>M</span>
                    <span className={styles.logoText}>Markly<span className={styles.dot}>.io</span></span>
                </div>

                <nav className={styles.nav}>
                    <a href="#como-funciona">Como funciona</a>
                    <a href="#templates">Templates</a>
                    <a href="#faq">FAQ</a>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.secondary}>Entrar</button>
                    <button className={styles.primary}>Começar agora</button>
                </div>
            </div>
        </header>
    )
}