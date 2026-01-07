import { business } from "../data/business";

export default function Pricing() {
  const waLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappPrefill)}`;

  return (
    <section className="px-4 py-10 bg-neutral-50">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Transparent pricing
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Simple Pricing Packages
          </h2>
          <p className="mt-2 text-neutral-700">
            We confirm the final price before starting work. Parts (if needed)
            are discussed upfront.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {business.pricing.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-semibold text-neutral-800">
                {p.title}
              </div>
              <div className="mt-2 text-2xl font-bold">{p.price}</div>
              <div className="mt-2 text-sm text-neutral-700">{p.note}</div>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Book via WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border bg-white p-5">
          <div className="text-sm font-semibold">Important note</div>
          <p className="mt-2 text-sm text-neutral-700">
            For emergency/night calls, pricing may vary depending on distance
            and urgency. We will always confirm your visit time and expected
            cost before coming.
          </p>
        </div>
      </div>
    </section>
  );
}
