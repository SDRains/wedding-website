import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 32, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    "aria-hidden": true,
    ...rest,
  } as const;
}

export function ArrowRight({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base({ size, ...rest })} viewBox="0 0 16 16" strokeWidth={1.4}>
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

export function Rings(props: IconProps) {
  return (
    <svg {...base({ size: 36, ...props })} viewBox="0 0 32 32" strokeWidth={1.2}>
      <circle cx="12" cy="19" r="7" />
      <circle cx="20" cy="19" r="7" />
      <path d="M10 9 L12 6 L14 9" />
    </svg>
  );
}

export function Pin(props: IconProps) {
  return (
    <svg {...base({ size: 36, ...props })} viewBox="0 0 32 32" strokeWidth={1.2}>
      <path d="M16 29s9-8.5 9-15a9 9 0 0 0-18 0c0 6.5 9 15 9 15z" />
      <circle cx="16" cy="14" r="3.2" />
    </svg>
  );
}

export function Hanger(props: IconProps) {
  return (
    <svg {...base({ size: 36, ...props })} viewBox="0 0 32 32" strokeWidth={1.2}>
      <path d="M13 9a3 3 0 1 1 4.2 2.7c-.8.4-1.2 1.1-1.2 2V15" />
      <path d="M16 15 L4 23 a1 1 0 0 0 .6 1.8 H27.4 a1 1 0 0 0 .6-1.8 Z" />
    </svg>
  );
}

export function Gift(props: IconProps) {
  return (
    <svg {...base({ size: 34, ...props })} viewBox="0 0 32 32" strokeWidth={1.2}>
      <rect x="5" y="12" width="22" height="15" />
      <path d="M3 8h26v4H3z" />
      <path d="M16 8v19" />
      <path d="M16 8c-2-4-7-5-7-2s4 2 7 2c3 0 7 1 7-2s-5-2-7 2z" />
    </svg>
  );
}

export function House(props: IconProps) {
  return (
    <svg {...base({ size: 34, ...props })} viewBox="0 0 32 32" strokeWidth={1.2}>
      <path d="M5 25h22" />
      <path d="M8 25V14l8-6 8 6v11" />
      <path d="M13 25v-6h6v6" />
    </svg>
  );
}

export function Plane(props: IconProps) {
  return (
    <svg {...base({ size: 34, ...props })} viewBox="0 0 32 32" strokeWidth={1.2}>
      <path d="M4 18l24-9-6 16-6-5-4 5v-7z" />
      <path d="M12 18l16-9" />
    </svg>
  );
}

/** Hand-drawn botanical sprig used as decoration. */
export function Sprig({ className, stroke = "var(--sage)" }: { className?: string; stroke?: string }) {
  return (
    <></>
  );
}
