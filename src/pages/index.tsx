import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Countdown from "@/components/Countdown";
import RsvpBand from "@/components/RsvpBand";
import { ArrowRight, Hanger, Pin, Rings } from "@/components/icons";
import { couple, dressCode, heroPhoto, venue, wedding } from "@/data/wedding";

export default function Home() {
  return (
    <Layout>
      {/* ---------- hero ---------- */}
      <section className="flex flex-col bg-ivory lg:flex-row">
        <div className="flex min-w-0 flex-col items-start justify-center gap-[18px] px-[clamp(16px,6vw,96px)] py-[clamp(56px,8vw,88px)] lg:flex-[1_1_440px]">
          <h1 className="m-0 font-script text-[clamp(60px,8vw,116px)] font-normal leading-[1.02] text-[#803748]">
            {couple.first} &amp; {couple.second}
          </h1>
          <p className="mt-1 text-sm font-normal uppercase tracking-[0.3em] text-body">are getting married</p>
          <p className="m-0 font-serif text-[34px] tracking-[0.14em] text-ink">{wedding.numericDate}</p>
          <div className="flex flex-col gap-1.5 text-base leading-normal text-body">
            <span>
              {wedding.longDate} · Ceremony at {wedding.ceremonyTime}
            </span>
            <span>
              {venue.name} · {venue.street}, {wedding.city}, {wedding.region}
            </span>
          </div>
          <div className="mt-3.5 flex flex-wrap gap-3">
            <Link href="/rsvp" className="btn bg-[#803748] hover:bg-[#803748]/90 text-white hover:shadow-lg">
              RSVP <ArrowRight />
            </Link>
            <a href="#details" className="btn text-[#803748] border border-[#803748] hover:bg-[#803748] hover:text-white hover:shadow-lg">
              The details
            </a>
          </div>
        </div>
        <div className="relative order-first min-h-[440px] overflow-hidden bg-placeholder sm:min-h-[560px] lg:order-none lg:min-h-[680px] lg:flex-[1.35_1_520px]">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            preload
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "46% 38%" }}
          />
        </div>
      </section>

      {/* ---------- countdown ---------- */}


      {/* ---------- details ---------- */}
      <section id="details" className="page-x relative scroll-mt-4 overflow-hidden bg-linen py-24">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="eyebrow">The details</p>
            <h2 className="m-0 font-serif text-[clamp(34px,4vw,46px)] font-normal text-ink">Join us in {wedding.city}</h2>
          </div>
          <div className="grid w-full gap-y-10 md:grid-cols-3">
            <DetailColumn
              icon={<Rings />}
              title="The Ceremony"
              meta={`${wedding.shortDate} · ${wedding.ceremonyTime}`}
              body={`Doors open at ${wedding.doorsOpen}. Please plan to be seated by ${wedding.seatedBy}.`}
              link={{ href: "/faq", label: "Arrival tips" }}
            />
            <DetailColumn
              icon={<Pin />}
              title="The Venue"
              meta={venue.name}
              body={
                <>
                  {venue.street}
                  <br />
                  {venue.cityLine}
                </>
              }
              link={{ href: venue.mapsUrl, label: "Get directions", external: true }}
              divided
            />
            <DetailColumn
              icon={<Hanger />}
              title="Dress Code"
              meta={dressCode.title}
              body={dressCode.body}
              link={{ href: "/faq", label: "More in the FAQ" }}
              divided
            />
          </div>
        </div>
      </section>

      {/* ---------- good to know ---------- */}
      <section className="page-x py-24">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-10">
          <div className="flex flex-col gap-2.5">
            <p className="eyebrow">Good to know</p>
            <h2 className="m-0 font-serif text-[clamp(34px,4vw,46px)] font-normal text-ink">Before you arrive</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard
              href="/faq"
              title="Questions & answers"
              body="Plus-ones, arrival times, nearby hotels and everything else we think you might wonder about."
              cta="Read the FAQ"
            />
            <InfoCard
              href="/registry"
              title="Registry"
              body="Your presence is the greatest gift. For those who have asked, our registry details are coming soon."
              cta="View registry"
            />
          </div>
        </div>
      </section>

      <RsvpBand showDeadline decorated />
    </Layout>
  );
}

function DetailColumn({
  icon,
  title,
  meta,
  body,
  link,
  divided = false,
}: {
  icon: React.ReactNode;
  title: string;
  meta: string;
  body: React.ReactNode;
  link: { href: string; label: string; external?: boolean };
  divided?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-3 px-8 py-2 text-center text-ink ${divided ? "md:border-l md:border-line" : ""}`}
    >
      {icon}
      <h3 className="mt-1.5 font-serif text-[26px] font-medium text-ink">{title}</h3>
      <p className="m-0 text-[13px] font-normal uppercase tracking-[0.18em] text-body">{meta}</p>
      <p className="m-0 text-[15px] leading-relaxed text-body">{body}</p>
      {link.external ? (
        <a href={link.href} target="_blank" rel="noreferrer" className="link-arrow">
          {link.label} <ArrowRight />
        </a>
      ) : (
        <Link href={link.href} className="link-arrow">
          {link.label} <ArrowRight />
        </Link>
      )}
    </div>
  );
}

function InfoCard({ href, title, body, cta }: { href: string; title: string; body: string; cta: string }) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3.5 border border-line-soft bg-paper p-10 text-body transition-colors hover:border-line"
    >
      <span className="font-serif text-[30px] text-ink">{title}</span>
      <span className="text-[15px] leading-relaxed">{body}</span>
      <span className="link-arrow mt-2">
        {cta} <ArrowRight />
      </span>
    </Link>
  );
}
