import { useState } from "react";
import { business } from "../data/business";

export default function Header() {
  const [open, setOpen] = useState(false);

  const waLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappPrefill)}`;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="leading-tight">
          <div className="text-base font-semibold">{business.name}</div>
          <div className="text-xs text-neutral-600">{business.tagline}</div>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${business.phoneTel}`}
            className="rounded-xl border px-4 py-2 text-sm bg-white hover:bg-neutral-50"
          >
            Call
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden rounded-xl border px-3 py-2 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu (only CTAs for now) */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto max-w-5xl px-4 py-3 grid grid-cols-2 gap-2">
            <a
              href={`tel:${business.phoneTel}`}
              className="rounded-xl border px-4 py-3 text-center text-sm bg-white hover:bg-neutral-50"
            >
              Call
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-black px-4 py-3 text-center text-sm text-white hover:opacity-90"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
