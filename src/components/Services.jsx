import { business } from "../data/business";

function DotIcon() {
  return <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-black" />;
}

export default function Services() {
  const waLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappPrefill)}`;

  return (
    <section className="px-4 py-10 bg-neutral-50">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
              What we do
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Plumbing & Electrical Services
            </h2>
            <p className="mt-2 max-w-2xl text-neutral-700">
              Clear pricing before work starts. Fast support across Birmingham —
              message us with your area and issue.
            </p>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-black px-5 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
          >
            Get a Quick Quote (WhatsApp)
          </a>
        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {business.services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <DotIcon />
                <div>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    {s.desc}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-2xl border px-4 py-3 text-sm font-semibold hover:bg-neutral-50"
                >
                  Book this service
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mini “How it works” */}
        <div className="mt-10 rounded-3xl border bg-white p-6">
          <h3 className="text-lg font-bold">How it works</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border p-4">
              <div className="text-xs font-semibold text-neutral-600">
                STEP 1
              </div>
              <div className="mt-1 font-semibold">Message / Call</div>
              <div className="mt-2 text-sm text-neutral-700">
                Share your area and the problem on WhatsApp.
              </div>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="text-xs font-semibold text-neutral-600">
                STEP 2
              </div>
              <div className="mt-1 font-semibold">Confirm price</div>
              <div className="mt-2 text-sm text-neutral-700">
                We confirm visit time and expected cost before coming.
              </div>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="text-xs font-semibold text-neutral-600">
                STEP 3
              </div>
              <div className="mt-1 font-semibold">Fix & warranty</div>
              <div className="mt-2 text-sm text-neutral-700">
                Professional work with a short service warranty.
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="mt-4 text-xs text-neutral-600">
          Note: Final price depends on the issue and parts needed — we confirm
          before starting work.
        </p>
      </div>
    </section>
  );
}
