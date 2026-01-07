import { useState } from "react";
import { business } from "../data/business";

function Item({ q, a, open, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="w-full text-left rounded-3xl border bg-white p-5 hover:bg-neutral-50"
      aria-expanded={open}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="font-semibold">{q}</div>
        <div className="mt-0.5 text-sm text-neutral-600">
          {open ? "−" : "+"}
        </div>
      </div>

      {open && (
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">{a}</p>
      )}
    </button>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-4 py-10 bg-neutral-50">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Questions
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-neutral-700">
            Quick answers before you book a visit.
          </p>
        </div>

        <div className="mt-6 grid gap-3">
          {business.faqs.map((f, idx) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIndex === idx}
              onToggle={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))}
            />
          ))}
        </div>

        <p className="mt-4 text-sm text-neutral-600">
          Still have a question? Contact us on WhatsApp and we’ll respond
          quickly.
        </p>
      </div>
    </section>
  );
}
