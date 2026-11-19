import Image from "next/image";
import { SITE } from "../lib/site";

export default function BrandLockup({ variant = "light" }) {
  const onDark = variant === "light";

  return (
    <span className="flex items-center gap-2.5 sm:gap-3">
      <span className="relative block h-10 w-[132px] shrink-0 overflow-hidden rounded-md bg-white sm:h-11 sm:w-[150px]">
        <Image
          src="/tektagma-logo.webp"
          alt="TekTagma logo"
          fill
          priority
          sizes="150px"
          style={{ objectFit: "contain" }}
        />
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
