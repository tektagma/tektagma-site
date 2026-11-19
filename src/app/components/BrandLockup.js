import Image from "next/image";
import { SITE } from "../lib/site";

export default function BrandLockup({ variant = "light" }) {
  const onDark = variant === "light";

  return (
    <span className="flex items-center gap-2.5 sm:gap-3">
      <span className="flex shrink-0 items-center justify-center rounded-md bg-canvas p-1 sm:p-1.5">
        <span className="relative block h-8 w-8 sm:h-9 sm:w-9">
          <Image
            src="/TekTagma-Logo.png"
            alt="TekTagma logo"
            fill
            priority
            sizes="36px"
            style={{ objectFit: "contain" }}
          />
        </span>
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`text-sm font-semibold tracking-wide sm:text-base ${
            onDark ? "text-white" : "text-navy"
          }`}
        >
          {SITE.name}
        </span>
        <span
          className={`text-[9px] font-semibold tracking-[0.16em] uppercase sm:text-[10px] ${
            onDark ? "text-amber" : "text-muted"
          }`}
        >
          {SITE.sublabel}
        </span>
      </span>
    </span>
  );
}
