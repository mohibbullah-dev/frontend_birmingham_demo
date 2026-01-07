import { business } from "../data/business";

export default function FloatingButtons() {
  const waLink = `https://wa.me/${
    business.whatsappNumber
  }?text=${encodeURIComponent(business.whatsappPrefill)}`;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center gap-3 px-4 md:hidden">
      <a
        href={`tel:${business.phoneTel}`}
        className="w-full max-w-40 rounded-full border bg-white px-5 py-3 text-center text-sm font-semibold shadow-md"
      >
        Call
      </a>

      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="w-full max-w-40 rounded-full bg-black px-5 py-3 text-center text-sm font-semibold text-white shadow-md"
      >
        WhatsApp
      </a>
    </div>
  );
}
