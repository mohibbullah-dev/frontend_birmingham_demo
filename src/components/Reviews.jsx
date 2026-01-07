import { business } from "../data/business";

export default function Reviews() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Customer feedback
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            What Customers Say
          </h2>
          <p className="mt-2 text-neutral-700">
            Sample layout for customer reviews (replace with real Google reviews).
          </p>
          <p className="mt-2 text-sm text-neutral-600">{business.reviewsNote}</p>
        </div>

        {/* Reviews */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {business.reviews.map((r, index) => (
            <div
              key={index}
              className="rounded-3xl border bg-white p-5 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 text-sm">★ ★ ★ ★ ★</div>

              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                “{r.text}”
              </p>

              <div className="mt-4 text-sm font-semibold">{r.name}</div>

              <div className="text-xs text-neutral-500">Verified customer</div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="mt-4 text-sm text-neutral-600">
          More reviews available upon request • WhatsApp support available
        </p>
      </div>
    </section>
  );
}
