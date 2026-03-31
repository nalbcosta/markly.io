import styles from './MarklyLogo.module.css';

interface MarklyLogoProps {
    variant?: 'full' | 'mark';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const MARK_SIZES = { sm: 28, md: 36, lg: 48 } as const;
const TEXT_SIZES = { sm: 15, md: 19, lg: 26 } as const;

/**
 * Faceted M-crown mark — four flat-shaded faces forming a single
 * cohesive silhouette: (6,33)→(13,9)→(20,20)→(27,9)→(34,33).
 * Outer faces bright, inner valley faces dimmed.
 */
export function MarklyLogo({ variant = 'full', size = 'md', className }: MarklyLogoProps) {
    const markSize = MARK_SIZES[size];
    const textSize = TEXT_SIZES[size];

    return (
        <div
            className={`${styles.logo} ${className ?? ''}`}
            style={{ gap: Math.round(markSize * 0.15) }}
        >
            <svg
                width={markSize}
                height={markSize}
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <rect width="40" height="40" rx="10" fill="var(--logo-mark-bg)" />

                {/* Left peak — outer face (lit) */}
                <polygon points="13,9 6,33 13,33" fill="var(--logo-mark-face)" />
                {/* Left peak — valley slope (recessed) */}
                <polygon points="13,9 20,20 20,33 13,33" fill="var(--logo-mark-face-muted)" />

                {/* Right peak — valley slope (recessed) */}
                <polygon points="20,20 27,9 27,33 20,33" fill="var(--logo-mark-face-muted)" />
                {/* Right peak — outer face (lit) */}
                <polygon points="27,9 34,33 27,33" fill="var(--logo-mark-face)" />
            </svg>

            {variant === 'full' && (
                <span className={styles.wordmark} style={{ fontSize: textSize }}>
                    Markly<span className={styles.tld}>.io</span>
                </span>
            )}
        </div>
    );
}
