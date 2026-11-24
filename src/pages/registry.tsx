import Layout from "@/components/Layout";
import RsvpBand from "@/components/RsvpBand";
import { ArrowRight, Gift, House, Plane, Sprig } from "@/components/icons";
import { registry } from "@/data/wedding";

const icons = { gift: Gift, home: House, plane: Plane };

export default function RegistryPage() {
  return (
    <Layout title="Registry">
      <section className="page-x relative overflow-hidden pb-[72px] pt-[104px]">
        <Sprig className="absolute left-[8%] top-16 hidden h-[156px] w-[100px] -rotate-[14deg] md:block" />
        <Sprig className="absolute right-[8%] top-16 hidden h-[156px] w-[100px] -scale-x-100 rotate-[14deg] md:block" />
        <div className="relative mx-auto flex max-w-[680px] flex-col items-center gap-4 text-center">
          <p className="eyebrow">Registry</p>
          <h1 className="m-0 font-serif text-[clamp(42px,5.5vw,64px)] font-normal leading-[1.05] text-ink">With gratitude</h1>
          <p className="mt-1.5 text-[17px] leading-[1.7]">{registry.intro}</p>
          <span className="mt-2 inline-flex min-h-9 items-center rounded-full border border-field px-[18px] text-[11px] font-normal uppercase tracking-[0.24em] text-body">
            Coming soon
          </span>
        </div>
      </section>

      <section className="page-x pb-[104px] pt-6">
        <ul className="mx-auto grid max-w-[1120px] list-none gap-6 p-0 md:grid-cols-3">
          {registry.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <li
                key={i}
                className="flex flex-col items-center gap-3.5 border border-line-soft bg-paper px-8 py-12 text-center text-ink"
              >
                <Icon />
                <span className="font-serif text-[26px] text-ink">{item.name}</span>
                <span className="text-[15px] leading-relaxed text-body">{item.blurb}</span>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer" className="link-arrow">
                    {item.cta} <ArrowRight />
                  </a>
                ) : (
                  <span className="inline-flex min-h-11 items-center text-xs font-normal uppercase tracking-[0.22em] text-muted">
                    Link coming soon
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <RsvpBand />
    </Layout>
  );
}
