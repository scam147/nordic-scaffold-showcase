import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Globe,
  Bus,
  Bed,
  ShieldCheck,
  Check,
  HardHat,
  Wrench,
  Factory,
  Building2,
  MapPin,
  Clock,
} from "lucide-react";

import heroWorker from "@/assets/hero-worker.png";
import moleMascot from "@/assets/mole-mascot.png";
import facadeScaffolding from "@/assets/facade-scaffolding.png";
import redVan from "@/assets/red-van.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Marek Ställningar — Lešenárske práce v Švédsku",
      },
      {
        name: "description",
        content:
          "Lešenárska firma Marek Ställningar: priemysel aj fasády v Švédsku, čoskoro Nórsko a Dánsko. Doprava aj ubytovanie hradené, 100 EUR/h. Zavolajte +421 915 330 901.",
      },
      { property: "og:title", content: "Marek Ställningar — Lešenárske práce v Švédsku" },
      {
        property: "og:description",
        content:
          "Priemysel aj fasády. Stabilná práca v overených firmách, doprava aj ubytovanie hradené. Švédsko, čoskoro Nórsko a Dánsko.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const checklist = [
  "Práca na priemyselných objektoch aj fasádach",
  "Stabilná práca v overených firmách",
  "Dlhodobé projekty po celom Švédsku",
  "Doprava hradená",
  "Ubytovanie hradené",
  "Istota a férové podmienky",
];

const benefits = [
  { icon: Bus, title: "Doprava hradená", text: "Zabezpečíme aj cestu do Švédska, nemusíte riešiť nič sami." },
  { icon: Bed, title: "Ubytovanie hradené", text: "Bývanie priamo pri projektoch, pohodlne a bez starostí." },
  { icon: ShieldCheck, title: "Istota a férové podmienky", text: "Overené firmy, včasná výplata a férová odmena za každú hodinu." },
];

const services = [
  { icon: HardHat, title: "Lešenie", text: "Stavba a demontáž lešení na všetkých typoch objektov." },
  { icon: Wrench, title: "Montáž", text: "Profesionálna montáž konštrukcií podľa severských noriem." },
  { icon: Factory, title: "Priemysel", text: "Dlhodobé projekty v priemyselných závodoch po celom Švédsku." },
  { icon: Building2, title: "Fasády", text: "Lešenie a práce na fasádach bytových aj rodinných domov." },
];

const countries = [
  {
    flag: "flag-se",
    name: "Švédsko",
    status: "Aktívne",
    text: "Pôsobíme tu dlhodobo. Stabilné projekty v overených firmách po celej krajine.",
    active: true,
  },
  {
    flag: "flag-no",
    name: "Nórsko",
    status: "V pláne",
    text: "Rozširujeme sa. Rovnaké podmienky, rovnaká férová práca.",
    active: false,
  },
  {
    flag: "flag-dk",
    name: "Dánsko",
    status: "V pláne",
    text: "Ďalšia zastávka na našej ceste Severom. Informácie čoskoro.",
    active: false,
  },
];

function Flag({ variant, className = "" }: { variant: string; className?: string }) {
  return <span aria-hidden className={`inline-block h-4 w-6 shrink-0 rounded-sm flag-${variant} ${className}`} />;
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Expansion />
        <RateBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <Flag variant="se" className="h-5 w-7" />
          <span className="font-display text-lg leading-none tracking-tight">
            Marek <span className="text-primary">Ställningar</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-muted-foreground md:flex">
          <a href="#vyhody" className="transition-colors hover:text-foreground">Výhody</a>
          <a href="#sluzby" className="transition-colors hover:text-foreground">Služby</a>
          <a href="#kde" className="transition-colors hover:text-foreground">Kde pôsobíme</a>
          <a href="#kontakt" className="transition-colors hover:text-foreground">Kontakt</a>
        </nav>
        <a
          href="tel:+421912699669"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
        >
          <Phone className="size-4" />
          <span className="hidden sm:inline">+421 915 330 901</span>
          <span className="sm:hidden">Zavolať</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 size-[32rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
            Poctivá práca · Férová odmena
          </span>
          <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-primary">Marek</span>
            <br />
            Ställningar
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Lešenárske práce v <strong className="text-foreground">Švédsku</strong> —{" "}
            priemysel aj fasády. Ideme na to s rozumom, s rukami a s férovým
            prístupom. Ďalej smerujeme do Nórska a Dánska.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm font-medium">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="tel:+421912699669"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-base text-primary-foreground transition-transform hover:scale-105"
            >
              <Phone className="size-5" />
              Zavolajte nám
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-bold transition-colors hover:bg-accent"
            >
              Chcem vedieť viac
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroWorker}
            alt="Lešenár s rúrou na ramene pred lešením so švédskou vlajkou"
            width={1024}
            height={1536}
            className="aspect-[3/4] w-full rounded-3xl border border-border object-cover shadow-2xl"
          />
          <div className="absolute bottom-5 left-5 rounded-2xl bg-primary px-5 py-3 font-display text-2xl text-primary-foreground shadow-xl">
            100 EUR<span className="text-base">/h</span>
          </div>
          <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-background/85 px-4 py-2 text-sm font-bold backdrop-blur">
            <Flag variant="se" /> Švédsko
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="vyhody" className="border-y border-border bg-card/50">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-3">
        {benefits.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-3xl border border-border bg-card p-6">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Icon className="size-6" />
            </span>
            <h3 className="mt-4 font-display text-lg">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="sluzby" className="relative overflow-hidden">
      <img
        src={facadeScaffolding}
        alt="Fasáda pokrytá lešením na pozadí severského mestečka"
        width={1536}
        height={1024}
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 lg:py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-secondary">Naše práce</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">Priemysel aj fasády</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-3xl border border-border bg-card/90 p-6 backdrop-blur transition-colors hover:border-primary/50"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expansion() {
  return (
    <section id="kde" className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-secondary">Kde pôsobíme</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Švédsko dnes. Nórsko a Dánsko čoskoro.
            </h2>
          </div>
          <img
            src={redVan}
            alt="Červené dodávkové auto s rúrami lešenia na streche na švédskej ceste"
            width={1536}
            height={1024}
            loading="lazy"
            className="hidden w-64 rounded-2xl border border-border object-cover shadow-lg lg:block"
          />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {countries.map((c) => (
            <div
              key={c.name}
              className={`rounded-3xl border p-6 ${
                c.active ? "border-primary/60 bg-card" : "border-border bg-card/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <Flag variant={c.flag} className="h-5 w-7" />
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    c.active
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {c.status}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RateBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col items-center gap-8 overflow-hidden rounded-4xl bg-primary p-8 text-primary-foreground sm:flex-row sm:p-12">
        <img
          src={moleMascot}
          alt="Maskot krtko v prilbe a reflexnej vieste s rúrami lešenia"
          width={1024}
          height={1024}
          loading="lazy"
          className="w-44 shrink-0 drop-shadow-xl sm:w-56"
        />
        <div>
          <p className="font-display text-5xl sm:text-6xl">
            100 EUR<span className="text-3xl sm:text-4xl">/h</span>
          </p>
          <p className="mt-4 font-display text-xl leading-snug sm:text-2xl">
            Krtko vie, kde je dobrá robota.
            <br />
            A my vieme, kde sú dobré peniaze.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center lg:py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-secondary">Kontaktuj nás</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">Potrebujete lešenie?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Pracujeme po celom Švédsku — priemysel, fasády aj nové projekty. Zavolajte
          nám a dohodneme si termín, všetko ostatné vyriešime my.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+421912699669"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-display text-xl text-primary-foreground transition-transform hover:scale-105"
          >
            <Phone className="size-6" />
            +421 915 330 901
          </a>
          <a
            href="https://marekstallningar.sk"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-4 font-bold transition-colors hover:bg-accent"
          >
            <Globe className="size-5 text-primary" />
            marekstallningar.sk
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-primary" /> Z Kysúc do Švédska — a čoskoro ďalej
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="size-4 text-primary" /> Dlhodobé projekty aj krátke akcie
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const items = [
    { icon: HardHat, label: "Lešenie" },
    { icon: Wrench, label: "Montáž" },
    { icon: Factory, label: "Priemysel" },
    { icon: Building2, label: "Fasády" },
  ];
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2 font-display">
          <Flag variant="se" className="h-4 w-6" />
          Marek <span className="text-primary">Ställningar</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold text-muted-foreground">
          {items.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-1.5">
              <Icon className="size-4" /> {label}
            </span>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Marek Ställningar</p>
      </div>
    </footer>
  );
}
