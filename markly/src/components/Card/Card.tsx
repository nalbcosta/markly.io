import { type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Card.module.css";

type CardSize = "sm" | "md" | "lg" | "xl" | "halfFull" | "full";
type CardPadding = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
type CardRounded = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full";
type Alignment = "start" | "center" | "end";

type CardProps = {
    children: ReactNode;
    size?: CardSize;
    rounded?: CardRounded;
    safeSpace?: string;
    padding?: CardPadding;
    className?: string;
    align?: Alignment;
    justify?: Alignment;
} & HTMLAttributes<HTMLDivElement>;

const sizeClassMap: Record<CardSize, string> = {
    sm: styles.sizeSm,
    md: styles.sizeMd,
    lg: styles.sizeLg,
    xl: styles.sizeXl,
    halfFull: styles.sizeHalfFull,
    full: styles.sizeFull,
};

const paddingClassMap: Record<CardPadding, string> = {
    none: styles.paddingNone,
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

const roundedClassMap: Record<CardRounded, string> = {
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

function cx(...classes: Array<string | undefined | false>) {
    return classes.filter(Boolean).join(" ");
}

export function Card({
    children,
    size = "md",
    rounded = "md",
    safeSpace = "1rem",
    className,
    style,
    padding = "md",
    align = "center",
    justify = "center",
    ...rest
}: CardProps) {
    const cssVars = {
        "--card-safe-space": safeSpace,
    } as CSSProperties;

    return (
        <div
            className={cx(
                styles.base,
                sizeClassMap[size],
                roundedClassMap[rounded],
                alignClassMap[align],
                justifyClassMap[justify],
                paddingClassMap[padding],
                className,
            )}
            style={{ ...cssVars, ...style }}
            {...rest}
        >
            {children}
        </div>
    );
}