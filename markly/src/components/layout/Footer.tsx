import styles from './Footer.module.css';
import { MarklyLogo } from "@/assets/MarklyLogo";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.brandRow}>
            <MarklyLogo size="sm" />
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