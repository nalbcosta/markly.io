"use client";

import styles from './Footer.module.css';
import { MarklyLogo } from "@/assets/MarklyLogo";
import { useLocale } from "@/hooks/useLocale";
import Link from "next/link";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.brandRow}>
            <MarklyLogo size="sm" />
          </div>
          <span className={styles.muted}>
            {t("footer.tagline")}
          </span>
        </div>

        <div className={styles.center}>
          <span className={styles.muted}>
            {t("footer.madeBy")} <a href="https://github.com/nalbcosta" target="_blank" rel="noreferrer">Nalbert Costa</a>.
          </span>
        </div>

        <div className={styles.right}>
          <a href="https://github.com/nalbcosta" target="_blank" rel="noreferrer">{t("footer.github")}</a>
          <Link href="/privacy">{t("footer.privacy")}</Link>
        </div>
      </div>
    </footer>
  );
}