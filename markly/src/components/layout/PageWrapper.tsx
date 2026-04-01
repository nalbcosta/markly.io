import { type ElementType, type ReactNode } from "react";
import styles from "./PageWrapper.module.css";

type WrapperWidth = "narrow" | "reading" | "content" | "full";
type VerticalPadding = "none" | "sm" | "md" | "lg";

type PageWrapperProps = {
	children: ReactNode;
	as?: ElementType;
	className?: string;
	contentClassName?: string;
	width?: WrapperWidth;
	verticalPadding?: VerticalPadding;
	withHeaderOffset?: boolean;
	minViewportHeight?: boolean;
};

const widthClassMap: Record<WrapperWidth, string> = {
	narrow: styles.contentNarrow,
	reading: styles.contentReading,
	content: styles.contentDefault,
	full: styles.contentFull,
};

const paddingClassMap: Record<VerticalPadding, string> = {
	none: styles.padNone,
	sm: styles.padSm,
	md: styles.padMd,
	lg: styles.padLg,
};

function cx(...classes: Array<string | undefined | false>) {
	return classes.filter(Boolean).join(" ");
}

export function PageWrapper({
	children,
	as,
	className,
	contentClassName,
	width = "content",
	verticalPadding = "md",
	withHeaderOffset = false,
	minViewportHeight = false,
}: PageWrapperProps) {
	const Component = as ?? "main";

	return (
		<Component
			className={cx(
				styles.wrapper,
				withHeaderOffset && styles.withHeaderOffset,
				minViewportHeight && styles.minViewportHeight,
				className,
			)}
		>
			<div
				className={cx(
					styles.content,
					widthClassMap[width],
					paddingClassMap[verticalPadding],
					contentClassName,
				)}
			>
				{children}
			</div>
		</Component>
	);
}
