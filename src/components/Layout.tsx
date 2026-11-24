import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { couple, nav, wedding } from "@/data/wedding";

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  const { pathname } = useRouter();
  const names = `${couple.first} & ${couple.second}`;
  const pageTitle = title ? `${title} · ${names}` : `${names} · ${wedding.longDate}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={`${names} are getting married on ${wedding.longDate} in ${wedding.city}, ${wedding.region}.`}
        />
      </Head>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-3"
      >
        Skip to content
      </a>

      <header className="page-x flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-b border-line-soft py-4">
        <Link href="/" aria-label={`${names} — home`} className="py-1.5 font-script text-[34px] leading-none text-ink">
          {couple.monogram}
        </Link>
        <nav aria-label="Main" className="flex flex-wrap gap-x-8 gap-y-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`border-b py-3.5 text-xs font-normal uppercase tracking-[0.22em] transition-colors ${
                  active ? "border-ink text-ink" : "border-transparent text-body hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/rsvp" className="btn btn-solid hidden min-h-11 px-[22px] tracking-[0.22em] sm:inline-flex">
          RSVP
        </Link>
      </header>

      <main id="main">{children}</main>

      <footer className="page-x flex flex-col items-center gap-2.5 border-t border-line-soft py-14 text-center">
        <span className="font-script text-[40px] leading-none text-ink">{names}</span>
        <span className="text-xs font-normal uppercase tracking-[0.26em] text-muted">
          {wedding.numericDate} · {wedding.city}, {wedding.region}
        </span>
      </footer>
    </>
  );
}
