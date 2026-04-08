import { type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./Input.module.css";

type InputSize = "sm" | "md" | "lg";
type InputVariant = "default" | "error" | "success" | "warn";
type InputRounded = "xs" | "sm" | "md" | "lg" | "xl";

type InputProps = {
    label?: ReactNode;
    helperText?: ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
    size?: InputSize;
    variant?: InputVariant;
    rounded?: InputRounded;
    className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

const sizeClassMap: Record<InputSize, string> = {
    sm: styles.sizeSm,
    md: styles.sizeMd,
    lg: styles.sizeLg,
};

const variantClassMap: Record<InputVariant, string> = {
    default: styles.variantDefault,
    error: styles.variantError,
    success: styles.variantSuccess,
    warn: styles.variantWarn,
};

const roundedClassMap: Record<InputRounded, string> = {
    xs: styles.roundedXs,
    sm: styles.roundedSm,
    md: styles.roundedMd,
    lg: styles.roundedLg,
    xl: styles.roundedXl,
};

const helperVariantClassMap: Record<InputVariant, string> = {
    default: styles.helperDefault,
    error: styles.helperError,
    success: styles.helperSuccess,
    warn: styles.helperWarn,
};

function cx(...classes: Array<string | undefined | false>) {
    return classes.filter(Boolean).join(" ");
}

export function Input({
    label,
    helperText,
    prefix,
    suffix,
    size = "md",
    variant = "default",
    rounded = "md",
    className,
    ...rest
}: InputProps) {
    const hasFix = prefix != null || suffix != null;

    return (
        <label className={cx(styles.field, className)}>
            {label && <span className={styles.label}>{label}</span>}
            {hasFix ? (
                <span className={cx(styles.inputWrapper, sizeClassMap[size], roundedClassMap[rounded], variantClassMap[variant])}>
                    {prefix && <span className={styles.affix}>{prefix}</span>}
                    <input className={styles.inputBare} {...rest} />
                    {suffix && <span className={styles.affix}>{suffix}</span>}
                </span>
            ) : (
                <input
                    className={cx(
                        styles.input,
                        sizeClassMap[size],
                        variantClassMap[variant],
                        roundedClassMap[rounded],
                    )}
                    {...rest}
                />
            )}
            {helperText && (
                <span className={cx(styles.helper, helperVariantClassMap[variant])}>
                    {helperText}
                </span>
            )}
        </label>
    );
}
