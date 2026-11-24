import { useState, type FormEvent } from "react";
import Layout from "@/components/Layout";
import { ArrowRight, Sprig } from "@/components/icons";
import { venue, wedding } from "@/data/wedding";

type Attending = "yes" | "no";
type Status = "idle" | "sending" | "sent" | "error";

export default function RsvpPage() {
  const [attending, setAttending] = useState<Attending>("yes");
  const [hasGuest, setHasGuest] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, attending, hasGuest: attending === "yes" && hasGuest }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <Layout title="RSVP">
      <section className="page-x relative overflow-hidden pb-28 pt-[88px]">
        <Sprig className="absolute bottom-10 left-[2%] hidden h-[170px] w-[110px] -rotate-[16deg] xl:block" />
        <div className="relative mx-auto flex max-w-[1120px] flex-col items-start gap-x-20 gap-y-12 lg:flex-row">
          <div className="flex flex-col gap-4 lg:w-[340px] lg:shrink-0">
            <p className="eyebrow">Kindly reply</p>
            <h1 className="m-0 font-serif text-[clamp(42px,5.5vw,64px)] font-normal leading-[1.05] text-ink">
              Will you celebrate with us?
            </h1>
            <p className="m-0 text-[17px] leading-[1.65]">
              Please respond by <strong className="font-medium text-ink">{wedding.rsvpBy}</strong>. We can’t wait to see
              you.
            </p>
            <div className="mt-4 flex flex-col gap-2 border-y border-line py-6 text-[15px] leading-relaxed">
              <span className="text-xs font-normal uppercase tracking-[0.22em] text-ink">{wedding.longDate}</span>
              <span>
                Ceremony at {wedding.ceremonyTime} · doors open at {wedding.doorsOpen}
              </span>
              <span>
                {venue.name}, {wedding.city}, {wedding.region}
              </span>
            </div>
            <p className="m-0 text-sm leading-relaxed text-muted">
              We’re only able to host the guests named on your invitation. If a guest is included, you can add their name
              below.
            </p>
          </div>

          <div className="box-border w-full min-w-0 flex-1 border border-line-soft bg-paper p-[clamp(24px,4vw,48px)]">
            {status === "sent" ? (
              <div className="flex flex-col items-center gap-3.5 py-12 text-center" role="status">
                <span className="font-script text-5xl leading-tight text-ink">Thank you</span>
                <p className="m-0 max-w-[420px] text-base leading-[1.65]">
                  {attending === "no"
                    ? "We’ll miss you dearly, and we’re grateful you let us know."
                    : `Your RSVP is in. We can’t wait to celebrate with you on February 20th in ${wedding.city}.`}
                </p>
                <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-2 min-h-11 px-[22px]">
                  Edit response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                <Field id="rsvp-name" name="name" label="Full name" placeholder="As written on your invitation" autoComplete="name" required />
                <Field id="rsvp-email" name="email" type="email" label="Email" placeholder="For updates about the day" autoComplete="email" required />

                <fieldset className="m-0 flex flex-col gap-3 border-0 p-0">
                  <legend className="field-label mb-3 p-0">Will you attend?</legend>
                  <div className="flex flex-wrap gap-3">
                    <button type="button" className="choice" aria-pressed={attending === "yes"} onClick={() => setAttending("yes")}>
                      Joyfully accepts
                    </button>
                    <button type="button" className="choice" aria-pressed={attending === "no"} onClick={() => setAttending("no")}>
                      Regretfully declines
                    </button>
                  </div>
                </fieldset>

                {attending === "yes" && (
                  <>
                    <label className="flex min-h-11 cursor-pointer items-center gap-3 text-[15px] text-ink">
                      <input
                        type="checkbox"
                        checked={hasGuest}
                        onChange={(e) => setHasGuest(e.target.checked)}
                        className="size-5 accent-olive"
                      />
                      My invitation includes a guest
                    </label>
                    {hasGuest && <Field id="rsvp-guest" name="guestName" label="Your guest’s name" placeholder="Full name" required />}
                    <Field id="rsvp-diet" name="dietary" label="Dietary restrictions or allergies" placeholder="Optional" />
                    <Field id="rsvp-song" name="song" label="A song that will get you dancing" placeholder="Optional" />
                  </>
                )}

                <div className="flex flex-col gap-2">
                  <label htmlFor="rsvp-note" className="field-label">
                    A note for the couple
                  </label>
                  <textarea id="rsvp-note" name="note" rows={4} placeholder="Optional" className="field" />
                </div>

                {status === "error" && (
                  <p role="alert" className="m-0 text-[15px] text-[#8a2f2f]">
                    {error}
                  </p>
                )}

                <button type="submit" className="btn btn-solid self-start px-[30px]" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send RSVP"} <ArrowRight />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  id,
  label,
  ...input
}: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <input id={id} type="text" className="field" {...input} />
    </div>
  );
}
