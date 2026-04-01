import { type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Section.module.css";

type SectionSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "half" | "full";
type SectionRounded = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full";
type SectionVariant = "default" | "primary" | "secondary" | "accent" | "error" | "warn" | "info" ;
type Alignment = "start" | "center" | "end";
type BordelessVariant = "none" | "default";
type ShadowVariant = "none" | "default";
type BorderColorVariant = "none" | "default";
type BackgroundVariant = "none" | "default";
type PaddingSize = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

type SectionProps = {
    children: ReactNode;
    size?: SectionSize;
    rounded?: SectionRounded;
    variant?: SectionVariant;
    padding?: PaddingSize;
    borderless?: BordelessVariant;
    shadow?: ShadowVariant;
    borderColor?: BorderColorVariant;
    background?: BackgroundVariant;
    safeSpace?: string;
    className?: string;
    align?: Alignment;
    justify?: Alignment;
} & HTMLAttributes<HTMLDivElement>;

const sizeClassMap: Record<SectionSize, string> = {
    sm: styles.sizeSm,
    md: styles.sizeMd,
    lg: styles.sizeLg,
    xl: styles.sizeXl,
    "2xl": styles.size2xl,
    "3xl": styles.size3xl,
    "4xl": styles.size4xl,
    half: styles.sizeHalf,
    full: styles.sizeFull,
};

const roundedClassMap: Record<SectionRounded, string> = {
    xs: styles.roundedXs,
    sm: styles.roundedSm,
    md: styles.roundedMd,
    lg: styles.roundedLg,
    xl: styles.roundedXl,
    "2xl": styles.rounded2xl,
    "3xl": styles.rounded3xl,
    "4xl": styles.rounded4xl,
    full: styles.roundedFull,
};

const variantClassMap: Record<SectionVariant, string> = {
    default: styles.variantDefault,
    primary: styles.variantPrimary,
    secondary: styles.variantSecondary,
    accent: styles.variantAccent,
    error: styles.variantError,
    warn: styles.variantWarn,
    info: styles.variantInfo,
};

const paddingClassMap: Record<PaddingSize, string> = {
    none: styles.paddingNone,
    xs: styles.paddingXs,
    sm: styles.paddingSm,
    md: styles.paddingMd,
    lg: styles.paddingLg,
    xl: styles.paddingXl,
    "2xl": styles.padding2xl,
    "3xl": styles.padding3xl,
    "4xl": styles.padding4xl,
};

const alignClassMap: Record<Alignment, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
};

const justifyClassMap: Record<Alignment, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
};

const bordelessClassMap: Record<BordelessVariant, string> = {
    none: styles.bordelessNone,
    default: styles.bordelessDefault,
};

const shadowClassMap: Record<ShadowVariant, string> = {
    none: styles.shadowNone,
    default: styles.shadowDefault,
};

const borderColorClassMap: Record<BorderColorVariant, string> = {
    none: styles.borderColorNone,
    default: styles.borderColorDefault,
};

const backgroundClassMap: Record<BackgroundVariant, string> = {
    none: styles.backgroundNone,
    default: styles.backgroundDefault,
};

function cx(...classes: Array<string | undefined | false>) {
    return classes.filter(Boolean).join(" ");
}

export function Section({
    children,
    size = "md",
    rounded = "md",
    variant = "default",
    padding = "md",
    safeSpace = "1rem",
    className,
    style,
    align = "center",
    justify = "center",
    borderless = "default",
    shadow = "default",
    borderColor = "default",
    background = "default",
    ...rest
}: SectionProps) {
    const cssVars = {
        "--section-safe-space": safeSpace,
    } as CSSProperties;

    return (
        <section
            className={cx(
                styles.base,
                sizeClassMap[size],
                roundedClassMap[rounded],
                variantClassMap[variant],
                paddingClassMap[padding],
                alignClassMap[align],
                justifyClassMap[justify],
                bordelessClassMap[borderless],
                shadowClassMap[shadow],
                borderColorClassMap[borderColor],
                backgroundClassMap[background],
                className,
            )}
            style={{ ...cssVars, ...style }}
            {...rest}
        >
            {children}
        </section>
    );
}
