"use client";

import { type ReactNode, type HTMLAttributes } from "react";
import { Button, type ButtonProps } from "@/components/Button/Button";
import styles from "./Pagination.module.css";

type PaginationSize = "sm" | "md" | "lg";
type PaginationAlign = "start" | "center" | "end";
type PaginationGap = "sm" | "md" | "lg";
type PaginationVariant = "default" | "minimal" | "bordered";
type ButtonVariant = NonNullable<ButtonProps["variant"]>;
type ButtonRounded = NonNullable<ButtonProps["rounded"]>;

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    size?: PaginationSize;
    align?: PaginationAlign;
    gap?: PaginationGap;
    variant?: PaginationVariant;
    buttonVariant?: ButtonVariant;
    buttonRounded?: ButtonRounded;
    /** Accepts strings, text nodes, or React Icons (e.g. <MdChevronLeft />) */
    prevLabel?: ReactNode;
    /** Accepts strings, text nodes, or React Icons (e.g. <MdChevronRight />) */
    nextLabel?: ReactNode;
    /** Set to true when prevLabel/nextLabel are icon-only to apply square icon button sizing */
    iconButtons?: boolean;
    pageInfo?: ((currentPage: number, totalPages: number) => ReactNode) | ReactNode;
    showPageInfo?: boolean;
    ariaLabel?: string;
    className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "onChange">;

const sizeClassMap: Record<PaginationSize, string> = {
    sm: styles.sizeSm,
    md: styles.sizeMd,
    lg: styles.sizeLg,
};

const alignClassMap: Record<PaginationAlign, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
};

const gapClassMap: Record<PaginationGap, string> = {
    sm: styles.gapSm,
    md: styles.gapMd,
    lg: styles.gapLg,
};

const variantClassMap: Record<PaginationVariant, string> = {
    default: styles.variantDefault,
    minimal: styles.variantMinimal,
    bordered: styles.variantBordered,
};

const buttonSizeMap: Record<PaginationSize, ButtonProps["size"]> = {
    sm: "sm",
    md: "md",
    lg: "lg",
};

function cx(...classes: Array<string | undefined | false>) {
    return classes.filter(Boolean).join(" ");
}

export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    size = "md",
    align = "center",
    gap = "md",
    variant = "default",
    buttonVariant = "ghost",
    buttonRounded = "md",
    prevLabel = "←",
    nextLabel = "→",
    iconButtons = false,
    pageInfo,
    showPageInfo = true,
    ariaLabel,
    className,
    ...rest
}: PaginationProps) {
    const isFirst = currentPage <= 1;
    const isLast = currentPage >= totalPages;

    const resolvedPageInfo = (() => {
        if (!showPageInfo) return null;
        if (pageInfo == null) return `${currentPage} / ${totalPages}`;
        if (typeof pageInfo === "function") return pageInfo(currentPage, totalPages);
        return pageInfo;
    })();

    return (
        <nav
            className={cx(
                styles.base,
                sizeClassMap[size],
                alignClassMap[align],
                gapClassMap[gap],
                variantClassMap[variant],
                className,
            )}
            aria-label={ariaLabel}
            {...rest}
        >
            <Button
                type="button"
                variant={buttonVariant}
                size={buttonSizeMap[size]}
                rounded={buttonRounded}
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={isFirst}
                aria-label="Previous page"
                className={iconButtons ? styles.iconButton : undefined}
            >
                {prevLabel}
            </Button>

            {resolvedPageInfo != null && (
                <span className={styles.pageInfo}>{resolvedPageInfo}</span>
            )}

            <Button
                type="button"
                variant={buttonVariant}
                size={buttonSizeMap[size]}
                rounded={buttonRounded}
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={isLast}
                aria-label="Next page"
                className={iconButtons ? styles.iconButton : undefined}
            >
                {nextLabel}
            </Button>
        </nav>
    );
}
