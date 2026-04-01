"use client";

import styles from './Footer.module.css';
import { MarklyLogo } from "@/assets/MarklyLogo";
import { useLocale } from "@/hooks/useLocale";
import { FaGithub } from 'react-icons/fa6';
import Link from "next/link";

export function Footer() {
  const { t, locale } = useLocale();
  const year = new Date().getFullYear();
  const navTitle = locale === "en" ? "Navigation" : "Navegacao";

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.brandRow}>
            <MarklyLogo size="sm" />
          </div>
          <span className={styles.tagline}>
            {t("footer.tagline")}
          </span>
          <span className={styles.meta}>
            {t("footer.madeBy")} <a href="https://github.com/nalbcosta" target="_blank" rel="noreferrer">Nalbert Costa</a> · © {year} Markly
          </span>
        </div>

        <div className={styles.center}>
          <span className={styles.navTitle}>{navTitle}</span>
          <div className={styles.navLinks}>
            <a href="#how-it-works">{t("header.howItWorks")}</a>
            <a href="#features">{t("header.features")}</a>
            <a href="#faq">{t("header.faq")}</a>
          </div>
        </div>

        <div className={styles.right}>
          <a className={`${styles.actionLink} items-center gap-2`} href="https://github.com/nalbcosta" target="_blank" rel="noreferrer">
            <FaGithub />
            {t("footer.github")}
          </a>
          <Link className={styles.actionLink} href="/privacy">{t("footer.privacy")}</Link>
        </div>
      </div>
    </footer>
  );
}