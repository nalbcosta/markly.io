"use client"
import { type ReactNode, forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./Button.module.css";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonRounded = "xs" | "sm" | "md" | "lg" | "xl";
type TextAlign = "left" | "center" | "right";

type BaseButtonProps = {
    children: ReactNode;
    size?: ButtonSize;
    variant?: ButtonVariant;
    rounded?: ButtonRounded;
    textAlign?: TextAlign;
    className?: string;
    isLoading?: boolean;
    disabled?: boolean;
};

type LinkButtonProps = BaseButtonProps & {
    href: string;
    isExternal?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type RouterButtonProps = BaseButtonProps & {
    route: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = LinkButtonProps | RouterButtonProps | NativeButtonProps;

const sizeClassMap: Record<ButtonSize, string> = {
    sm: styles.sizeSm,
    md: styles.sizeMd,
    lg: styles.sizeLg,
};

const variantClassMap: Record<ButtonVariant, string> = {
    primary: styles.variantPrimary,
    secondary: styles.variantSecondary,
    outline: styles.variantOutline,
    ghost: styles.variantGhost,
};

const roundedClassMap: Record<ButtonRounded, string> = {
    xs: styles.roundedXs,
    sm: styles.roundedSm,
    md: styles.roundedMd,
    lg: styles.roundedLg,
    xl: styles.roundedXl,
};

const textAlignMap: Record<TextAlign, string> = {
    left: styles.textLeft,
    center: styles.textCenter,
    right: styles.textRight,
};

function cx(...classes: Array<string | undefined | false>) {
    return classes.filter(Boolean).join(" ");
}

const isLinkProps = (props: ButtonProps): props is LinkButtonProps => {
    return "href" in props;
};

const isRouterProps = (props: ButtonProps): props is RouterButtonProps => {
    return "route" in props;
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
    const router = useRouter();

    const {
        children,
        size = "md",
        variant = "primary",
        rounded = "md",
        textAlign = "center",
        className,
        isLoading = false,
        disabled = false,
        ...rest
    } = props;

    const baseClassNames = cx(
        styles.base,
        sizeClassMap[size],
        variantClassMap[variant],
        roundedClassMap[rounded],
        textAlignMap[textAlign],
        (disabled || isLoading) && styles.disabled,
        className,
    );

    const content = isLoading ? (
        <>
            <span className={styles.spinner} />
            {children}
        </>
    ) : (
        children
    );

    // Router-based navigation
    if (isRouterProps(props)) {
        const { route, ...buttonRest } = rest as Omit<RouterButtonProps, keyof BaseButtonProps>;

        const handleClick = useCallback(
            (e: React.MouseEvent<HTMLButtonElement>) => {
                if (!disabled && !isLoading) {
                    router.push(route);
                }
                buttonRest.onClick?.(e);
            },
            [route, router, disabled, isLoading, buttonRest],
        );

        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={baseClassNames}
                disabled={disabled || isLoading}
                onClick={handleClick}
                {...(buttonRest as ButtonHTMLAttributes<HTMLButtonElement>)}
            >
                {content}
            </button>
        );
    }

    // Link-based navigation
    if (isLinkProps(props)) {
        const { href, isExternal, ...linkRest } = rest as Omit<LinkButtonProps, keyof BaseButtonProps>;

        // Hash links and external links use native anchor
        if (isExternal || href.startsWith("#")) {
            return (
                <a
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    href={href}
                    className={baseClassNames}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-disabled={disabled || isLoading}
                    {...(linkRest as AnchorHTMLAttributes<HTMLAnchorElement>)}
                >
                    {content}
                </a>
            );
        }

        return (
            <Link
                href={href}
                className={baseClassNames}
                {...(linkRest as AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {content}
            </Link>
        );
    }

    // Native button
    return (
        <button
            ref={ref as React.Ref<HTMLButtonElement>}
            className={baseClassNames}
            disabled={disabled || isLoading}
            {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {content}
        </button>
    );
});

Button.displayName = "Button";
