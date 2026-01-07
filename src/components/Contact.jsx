import { useMemo, useState } from "react";
import { business } from "../data/business";

function encode(text) {
  return encodeURIComponent(text);
}

export default function Contact() {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [issue, setIssue] = useState("");

  const waLinkBase = useMemo(() => {
    return `https://wa.me/${business.whatsappNumber}`;
  }, []);

  const composedMessage = useMemo(() => {
    const lines = [
      `Hi, I need plumbing service in ${business.city}.`,
      name.trim() ? `Name: ${name.trim()}` : null,
      area.trim() ? `Area: ${area.trim()}` : null,
      issue.trim() ? `Problem: ${issue.trim()}` : null,
      `Please confirm availability and expected cost before visiting.`,
    ].filter(Boolean);

    return lines.join("\n");
  }, [name, area, issue]);

  const waLink = `${waLinkBase}?text=${encode(composedMessage)}`;

  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-5xl grid gap-6 lg:grid-cols-2">
        {/* Left: CTA + details */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Book a Visit in {business.city}
          </h2>
          <p className="mt-2 text-neutral-700">
            Send your details below and open WhatsApp with a ready message.
            We’ll confirm time and pricing before coming.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${business.phoneTel}`}
              className="w-full rounded-2xl border bg-white px-5 py-3 text-center text-sm font-semibold hover:bg-neutral-50 sm:w-auto"
            >
              Call {business.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${business.whatsappPrefill}`}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-2xl bg-black px-5 py-3 text-center text-sm font-semibold text-white hover:opacity-90 sm:w-auto"
            >
              WhatsApp (Quick)
            </a>
          </div>

          <div className="mt-6 rounded-3xl border bg-neutral-50 p-5">
            <div className="text-sm font-semibold">Areas Served</div>
            <p className="mt-2 text-sm text-neutral-700">
              {business.areas.join(" • ")}
            </p>
            <p className="mt-3 text-xs text-neutral-600">
              Hours: {business.serviceHours}
            </p>
          </div>
        </div>

        {/* Right: Form + Map */}
        <div className="grid gap-4">
          <div className="rounded-3xl border bg-white p-5">
            <div className="text-sm font-semibold">Send details</div>
            <p className="mt-1 text-sm text-neutral-700">
              This form does not submit to a server. It creates a WhatsApp
              message.
            </p>

            <div className="mt-4 grid gap-3">
              <label className="grid gap-1">
                <span className="text-sm font-medium">
                  Your name (optional)
                </span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-2xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                  placeholder="e.g., Ahmed"
                />
              </label>

              <label className="grid gap-1">
                <span className="text-sm font-medium">Your area</span>
                <input
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="rounded-2xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                  placeholder="e.g., Nasr City"
                />
              </label>

              <label className="grid gap-1">
                <span className="text-sm font-medium">Problem</span>
                <textarea
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  className="min-h-[110px] rounded-2xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                  placeholder="e.g., water leak under sink / short circuit in kitchen"
                />
              </label>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-black px-5 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
              >
                Open WhatsApp Message
              </a>

              <p className="text-xs text-neutral-600">
                Tip: Add a photo/video of the problem in WhatsApp for faster
                diagnosis.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border bg-white">
            <iframe
              title="Map"
              src={business.mapEmbedUrl}
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
