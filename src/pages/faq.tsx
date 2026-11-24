import Layout from "@/components/Layout";
import RsvpBand from "@/components/RsvpBand";
import { ArrowRight } from "@/components/icons";
import { faqSections, hotels } from "@/data/wedding";

export default function FaqPage() {
  return (
    <Layout title="FAQ">
      <section className="page-x relative overflow-hidden bg-linen pb-20 pt-[88px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-olive opacity-[0.07] [mask-image:url('/shells.png')] [mask-position:center] [mask-repeat:repeat] [mask-size:900px_auto]"
        />
        <div className="relative mx-auto flex max-w-[1120px] flex-col gap-3.5">
          <p className="eyebrow">FAQ</p>
          <h1 className="m-0 font-serif text-[clamp(42px,5.5vw,64px)] font-normal leading-[1.05] text-ink">Questions &amp; Answers</h1>
          <p className="mt-1.5 max-w-[560px] text-[17px] leading-[1.65]">
            Everything we think you might want to know before February 20th. Can’t find your answer? Reach out to us
            anytime.
          </p>
        </div>
      </section>

      {faqSections.map((section, si) => (
        <section key={section.title} className={`page-x ${si === 0 ? "pb-10 pt-20" : "pb-24 pt-10"}`}>
          <div className="mx-auto flex max-w-[1120px] flex-col gap-x-16 gap-y-8 lg:flex-row">
            <div className="flex flex-col gap-2.5 lg:w-[260px] lg:shrink-0">
              <p className="eyebrow">{section.eyebrow}</p>
              <p className="m-0 font-script text-4xl leading-tight text-placeholder-ink">{section.title}</p>
            </div>
            <div className="flex min-w-0 flex-1 flex-col border-b border-line">
              {section.items.map((item) => (
                <div key={item.q} className="flex flex-col gap-3 border-t border-line py-7">
                  <h2 className="m-0 font-serif text-[28px] font-medium leading-snug text-ink">{item.q}</h2>
                  <p className="m-0 max-w-[680px] text-base leading-[1.7]">{item.a}</p>
                  {item.showHotels && (
                    <ul className="mt-1 grid list-none gap-4 p-0 sm:grid-cols-3">
                      {hotels.map((hotel, i) => (
                        <li key={i} className="flex flex-col gap-1.5 border border-line-soft bg-paper px-6 py-[22px]">
                          <span className="font-serif text-[22px] text-ink">{hotel.name}</span>
                          <span className="text-sm text-muted">
                            {hotel.area} · {hotel.distance}
                          </span>
                          {hotel.url ? (
                            <a href={hotel.url} target="_blank" rel="noreferrer" className="link-arrow">
                              Book <ArrowRight size={14} />
                            </a>
                          ) : (
                            <span className="inline-flex min-h-11 items-center text-xs font-normal uppercase tracking-[0.2em] text-muted">
                              Link coming soon
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <RsvpBand />
    </Layout>
  );
}
