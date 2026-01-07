import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import FloatingButtons from "./components/FloatingButtons";
import Areas from "./components/Areas";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <Services />
      <Areas />
      <Pricing />
      <Reviews />
      <FAQ />
      <Contact />

      <footer className="border-t bg-white px-4 py-8">
        <div className="mx-auto max-w-5xl text-xs text-neutral-600">
          <div className="font-semibold text-neutral-700">Demo website concept</div>
          <p className="mt-2">
            This page is a demo concept for local plumbing businesses in Birmingham.
            Replace business name, phone/WhatsApp, areas, and reviews with real details.
          </p>
        </div>
      </footer>
      <FloatingButtons />
    </div>
  );
}
