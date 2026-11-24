import Link from "next/link";
import { wedding } from "@/data/wedding";
import { ArrowRight } from "@/components/icons";

/** Dark olive "Will you be there?" call-to-action that closes most pages. */
export default function RsvpBand({ showDeadline = false, decorated = false }: { showDeadline?: boolean; decorated?: boolean }) {
  return (
    <section
      className={`page-x relative overflow-hidden bg-olive ${decorated ? "py-24" : "py-20"}`}
      aria-labelledby="rsvp-band-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/shells.png')] bg-[length:900px_auto] bg-center bg-repeat opacity-5"
      />
      <div className="relative flex flex-col items-center gap-4 text-center">
        <p className="eyebrow text-on-olive">Kindly reply</p>
        <h2 id="rsvp-band-title" className="m-0 font-serif text-[clamp(34px,4.5vw,52px)] font-normal text-ivory">
          Will you be there?
        </h2>
        {showDeadline && <p className="m-0 text-base leading-relaxed text-on-olive">Please let us know by {wedding.rsvpBy}.</p>}
        <Link href="/rsvp" className="btn btn-outline-light mt-3">
          RSVP now <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
