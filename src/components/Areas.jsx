import { business } from "../data/business";

export default function Areas() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Service coverage
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Areas We Serve in {business.city}
          </h2>
          <p className="mt-2 text-neutral-700">
            We provide fast plumbing support across the following
            areas. If your area is nearby, contact us to confirm availability.
          </p>
        </div>

        {/* Areas list */}
        <div className="mt-6 rounded-3xl border bg-white p-5">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {business.areas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm"
              >
                <span className="h-2 w-2 rounded-full bg-black" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Local trust line */}
        <p className="mt-4 text-sm text-neutral-600">
          Local technicians • Same-day service available • WhatsApp support
        </p>
      </div>
    </section>
  );
}
