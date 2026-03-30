import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.brandRow}>
            <span className={styles.logoMark}>M</span>
            <span className={styles.logoText}>
              Markly<span className={styles.dot}>.io</span>
            </span>
          </div>
          <span className={styles.muted}>
            Gerador de README de perfil do GitHub.
          </span>
        </div>

        <div className={styles.center}>
          <span className={styles.muted}>
            Feito por <a href="https://github.com/nalbertcosta" target="_blank" rel="noreferrer">Nalbert Costa</a>.
          </span>
        </div>

        <div className={styles.right}>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="/privacy">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}