import { Mark } from "./Logo";
import { marquee } from "@/lib/content";

export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="relative overflow-hidden border-y border-teal/15 bg-navy-900 py-5">
      <div className="flex w-max animate-marquee items-center">
        {items.map((m, i) => (
          <span key={i} className="flex items-center gap-6 pr-6 font-display text-lg font-semibold whitespace-nowrap text-white/85 md:text-xl">
            {m}
            <Mark className="h-4 w-auto" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-900 to-transparent" />
    </div>
  );
}
