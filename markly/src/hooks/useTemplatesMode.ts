import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type TemplatesPageMode = "browse" | "start";

function parseMode(value: string | null): TemplatesPageMode {
  return value === "start" ? "start" : "browse";
}

function createModeUrl(
  pathname: string,
  searchParams: { toString: () => string },
  nextMode: TemplatesPageMode,
): string {
  const nextParams = new URLSearchParams(searchParams.toString());

  if (nextMode === "start") {
    nextParams.set("mode", "start");
  } else {
    nextParams.delete("mode");
  }

  const query = nextParams.toString();
  return query.length > 0 ? `${pathname}?${query}` : pathname;
}

export function useTemplatesMode() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const mode = parseMode(searchParams.get("mode"));

  const setMode = useCallback(
    (nextMode: TemplatesPageMode) => {
      if (nextMode === mode) return;
      const nextUrl = createModeUrl(pathname, searchParams, nextMode);
      router.replace(nextUrl);
    },
    [mode, pathname, router, searchParams],
  );

  return { mode, setMode };
}
