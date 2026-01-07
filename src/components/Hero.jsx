import { business } from "../data/business";

export default function Hero() {
  const waLink = `https://wa.me/${
    business.whatsappNumber
  }?text=${encodeURIComponent(business.whatsappPrefill)}`;

  return (
    <section className="px-4 pt-10 pb-8">
      <div className="mx-auto max-w-5xl">
        {/* Top chip */}
        <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-neutral-700">
          <span className="h-2 w-2 rounded-full bg-black" />
          Serving {business.city} • Fast response
        </div>

        {/* Headline */}
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          {business.tagline}
        </h1>

        {/* Subheadline */}
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
          Leaks, burst pipes, blocked drains, toilets, taps, and showers.
          Message us on WhatsApp or call now — we confirm the time and quote
          before coming.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-2xl border bg-black px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90 sm:w-auto"
          >
            WhatsApp
          </a>

          <a
            href={`tel:${business.phoneTel}`}
            className="w-full rounded-2xl border bg-white px-5 py-3 text-center text-sm font-semibold text-black hover:bg-neutral-50 sm:w-auto"
          >
            Call {business.phoneDisplay}
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-6 grid gap-2 sm:grid-cols-3">
          {(business.trustBadges ?? []).map((b, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-white px-4 py-3 text-sm text-neutral-800"
            >
              <div className="font-semibold">{b}</div>
              <div className="mt-1 text-xs text-neutral-600">
                Quick support with clear communication.
              </div>
            </div>
          ))}
        </div>

        {/* Helper line */}
        <p className="mt-4 text-sm text-neutral-600">
          Hours: {business.serviceHours}
        </p>
      </div>
    </section>
  );
}
