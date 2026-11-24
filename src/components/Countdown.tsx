import { useSyncExternalStore } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

// A once-a-second clock. Snapshots are whole seconds so they stay stable between ticks.
const subscribeClock = (onTick: () => void) => {
  const id = window.setInterval(onTick, 1000);
  return () => window.clearInterval(id);
};
const getNowSeconds = () => Math.floor(Date.now() / 1000);
const getServerNow = () => null;

/** Live days / hours / minutes until `target`. Renders dashes on the server to avoid hydration mismatches. */
export default function Countdown({ target }: { target: string }) {
  const nowSeconds = useSyncExternalStore(subscribeClock, getNowSeconds, getServerNow);

  const diff = nowSeconds === null ? null : Math.max(0, Date.parse(target) - nowSeconds * 1000);
  const units = [
    { label: "Days", value: diff === null ? "—" : String(Math.floor(diff / 86_400_000)) },
    { label: "Hours", value: diff === null ? "—" : pad(Math.floor(diff / 3_600_000) % 24) },
    { label: "Minutes", value: diff === null ? "—" : pad(Math.floor(diff / 60_000) % 60) },
  ];

  return (
    <div role="timer" aria-label="Countdown to the ceremony" className="flex flex-wrap justify-center">
      {units.map((u, i) => (
        <div
          key={u.label}
          className={`flex flex-col items-center gap-1.5 px-[clamp(18px,3vw,40px)] py-1 ${i > 0 ? "border-l border-line" : ""}`}
        >
          <span className="font-serif text-[clamp(40px,5vw,56px)] leading-none text-ink tabular-nums">{u.value}</span>
          <span className="text-[11px] font-normal uppercase tracking-[0.24em] text-muted">{u.label}</span>
        </div>
      ))}
    </div>
  );
}
