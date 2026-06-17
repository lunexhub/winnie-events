import { createFileRoute } from "@tanstack/react-router";
import heroGala from "@/assets/hero-gala.jpg";
import imgConference from "@/assets/service-conference.jpg";
import imgConservation from "@/assets/service-conservation.jpg";
import imgConcert from "@/assets/service-concert.jpg";
import imgLaunch from "@/assets/service-launch.jpg";
import imgFounder from "@/assets/founder.jpg";
import imgDetail from "@/assets/about-detail.jpg";
import {
  Calendar, Sparkles, Users, Trophy, Heart, Megaphone, GraduationCap,
  MapPin, Mail, Phone, ArrowRight, CheckCircle2, Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NT Events Management | South African Event Specialists" },
      { name: "description", content: "From corporate galas to conservation gatherings — NT Events Management delivers meaningful, world-class events across South Africa." },
      { property: "og:title", content: "NT Events Management" },
      { property: "og:description", content: "Meaningful, well-executed events across South Africa." },
    ],
  }),
  component: Index,
});

const logoUrl = "/logo.svg";

const services = [
  { icon: Sparkles, title: "Corporate Events & Galas", desc: "Elegant, on-brand corporate experiences and black-tie galas." },
  { icon: Users, title: "Conferences & Exhibitions", desc: "End-to-end conferencing — from venue to delegate experience." },
  { icon: Megaphone, title: "Product & Company Launches", desc: "Launches that create buzz and convert attention into loyalty." },
  { icon: Star, title: "Concerts & Major Public Events", desc: "Large-scale production with crowd flow and safety dialed in." },
  { icon: Heart, title: "Fundraisers & Sporting Events", desc: "Purpose-driven events that move people — and money — for good." },
  { icon: MapPin, title: "Tourism & Destination Events", desc: "Bushveld, coastal and city showcases of South African flavour." },
  { icon: Calendar, title: "Venue & Speaker Sourcing", desc: "Hand-picked venues and speakers matched to your audience." },
  { icon: Trophy, title: "Company Retreats", desc: "Off-sites that re-align teams and re-energise leaders." },
  { icon: GraduationCap, title: "Event Training & Skills Development", desc: "SETA-accredited training in events, hospitality and tourism." },
];

const highlights = [
  { year: "2010", title: "Tribute Concert to Miriam Makeba" },
  { year: "2010 & 2011", title: "Siyabakhumbula Awards" },
  { year: "2016", title: "Meetings Africa BONDay" },
  { year: "2017 & 2018", title: "Cabinet Lekgotla" },
  { year: "2017–2020", title: "Bill & Melinda Gates Foundation Events" },
  { year: "2024–2025", title: "BirdLife South Africa Conservation Events" },
  { year: "2025", title: "ICWC International Conference" },
];

const values = [
  { title: "Teamwork", desc: "We rise together — your team, our team, one delivery." },
  { title: "Integrity", desc: "Transparent budgets, honest timelines, kept promises." },
  { title: "Accountability", desc: "Named owners on every workstream, every time." },
  { title: "Results Driven", desc: "Measured against your goals, not our checklist." },
];

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-background/95 border-b border-border/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 sm:gap-3">
          <img src={logoUrl} alt="NT Events Management" className="h-10 sm:h-12 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-foreground/80">
          <a href="#about" className="hover:text-primary transition-smooth">About</a>
          <a href="#services" className="hover:text-primary transition-smooth">Services</a>
          <a href="#story" className="hover:text-primary transition-smooth">Our Story</a>
          <a href="#experience" className="hover:text-primary transition-smooth">Experience</a>
          <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground bg-gradient-brand shadow-elegant hover:scale-[1.03] transition-smooth"
        >
          <span className="hidden sm:inline">Plan your event</span>
          <span className="sm:hidden">Contact</span>
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroGala}
        alt="Elegant South African gala dinner setting"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-40 animate-float"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 pt-24 sm:pt-24 pb-6 sm:pb-6 text-primary-foreground animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] sm:text-[10px] tracking-wider uppercase backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          <span className="hidden sm:inline">Proudly South African · Est. by Winnie Malete</span>
          <span className="sm:hidden">SA · Since 2011</span>
        </div>
        <h1 className="mt-4 sm:mt-3 text-[40px] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl sm:leading-[1.08] font-semibold max-w-4xl">
          Events that move people, <span className="italic text-gradient-brand bg-clip-text">beautifully</span>.
        </h1>
        <p className="mt-4 sm:mt-3 max-w-2xl text-[14px] leading-[1.6] sm:text-sm lg:text-base sm:leading-relaxed text-white/95 font-normal">
          From corporate galas in Sandton to conservation gatherings in the bushveld — NT Events Management designs and delivers experiences that reflect excellence, attention to detail, and personalised service.
        </p>
        <div className="mt-5 sm:mt-5 flex flex-col sm:flex-row gap-3 sm:gap-3">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-5 py-3 sm:py-2.5 text-[15px] sm:text-sm font-semibold bg-gradient-brand text-primary-foreground shadow-pink hover:scale-[1.03] transition-smooth">
            Start a project <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-5 py-3 sm:py-2.5 text-[15px] sm:text-sm font-semibold border border-white/40 text-white hover:bg-white/10 transition-smooth">
            Explore our services
          </a>
        </div>
        <dl className="mt-6 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-4 max-w-3xl">
          {[
            { k: "13+", v: "Years of experience" },
            { k: "200+", v: "Events delivered" },
            { k: "SETA", v: "Accredited training" },
            { k: "9", v: "Service disciplines" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="font-display text-[28px] sm:text-2xl lg:text-3xl text-white leading-none">{s.k}</dt>
              <dd className="mt-1 text-[9px] sm:text-[9px] uppercase tracking-[0.1em] text-white/75 leading-tight">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-secondary font-semibold">About Us</span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            A South African events company built on <span className="text-gradient-brand">passion, purpose & family</span>.
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            NT Events Management specialises in professional event planning, coordination, and management. We create meaningful, well-executed events that reflect excellence, attention to detail, and personalised service.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            With experience across corporate, public, conservation and tourism events, NT Events offers end-to-end solutions tailored to each client's needs — managed seamlessly from concept to completion.
          </p>
          <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-3 sm:gap-4">
            {["End-to-end coordination", "Relationship-based service", "SETA accredited training", "Trusted by repeat clients"].map((p) => (
              <div key={p} className="flex items-start gap-2.5 sm:gap-3 rounded-lg sm:rounded-xl bg-card border border-border p-3 sm:p-4 shadow-card-soft">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-foreground leading-snug">{p}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 sm:-inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-[2rem] sm:rounded-[3rem]" />
          <img
            src={imgDetail}
            alt="Pink roses and blue accents on an elegant event table"
            width={1280}
            height={960}
            loading="lazy"
            className="relative rounded-2xl sm:rounded-[2rem] shadow-elegant w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-pink max-w-[280px] sm:max-w-xs hidden sm:block">
            <p className="font-display text-lg sm:text-xl text-foreground italic leading-tight">"From concept to completion — seamlessly."</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">Our promise</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-secondary font-semibold">Our Services</span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Nine disciplines. <span className="text-gradient-brand">One trusted partner.</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground">
            Strategic planning, flawless execution, and innovative solutions — without compromising on detail, quality, or budget.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative rounded-xl sm:rounded-2xl border border-border bg-card p-5 sm:p-7 transition-smooth hover:-translate-y-1 hover:shadow-elegant overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth bg-gradient-brand" />
                <div className="relative">
                  <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-brand text-primary-foreground shadow-pink group-hover:bg-white group-hover:text-primary transition-smooth">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-foreground group-hover:text-white transition-smooth">{s.title}</h3>
                  <p className="mt-2 sm:mt-3 text-sm text-muted-foreground group-hover:text-white/90 transition-smooth leading-relaxed">{s.desc}</p>
                  <span className="mt-4 sm:mt-6 inline-block text-xs font-mono tracking-widest text-secondary group-hover:text-white/80 transition-smooth">
                    0{i + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const items = [
    { src: imgConference, label: "Conferences", tag: "Corporate" },
    { src: imgConcert, label: "Concerts & Public Events", tag: "Production" },
    { src: imgConservation, label: "Conservation Events", tag: "Bushveld" },
    { src: imgLaunch, label: "Launches & Activations", tag: "Brand" },
  ];
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-secondary font-semibold">Recent Worlds We've Built</span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">A glimpse of the moments.</h2>
          </div>
          <p className="text-sm sm:text-base text-white/70 max-w-md">Every event is a different story — and a different room of feelings to choreograph.</p>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-14 grid sm:grid-cols-2 gap-4 sm:gap-6">
          {items.map((it, i) => (
            <figure
              key={it.label}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl ${i % 3 === 0 ? "sm:row-span-2 aspect-[4/3] sm:aspect-[4/5]" : "aspect-[4/3] sm:aspect-[16/10]"}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <figcaption className="absolute bottom-0 p-5 sm:p-8">
                <span className="text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-secondary-glow">{it.tag}</span>
                <p className="mt-1 sm:mt-2 font-display text-xl sm:text-2xl">{it.label}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-4 bg-gradient-brand opacity-30 blur-3xl rounded-full" />
          <img
            src={imgFounder}
            alt="Winnie Malete, founder of NT Events Management"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative rounded-2xl sm:rounded-3xl shadow-elegant w-full aspect-[4/5] object-cover"
          />
        </div>
        <div className="lg:col-span-7">
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-secondary font-semibold">In the Beginning…</span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            The brainchild of <span className="text-gradient-brand">Winnie Malete</span>.
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            With over <strong className="text-foreground">13 years of experience</strong> in the event industry, Winnie followed her passion and built a company to fill a niche in the South African market. Her industry knowledge, creativity, innovation and natural gift for coordination shape every event we deliver.
          </p>
          <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl border border-border bg-gradient-soft p-5 sm:p-7 shadow-card-soft">
            <p className="font-display text-xl sm:text-2xl text-foreground italic leading-snug">
              "The initials <span className="text-gradient-brand not-italic font-semibold">NT</span> stand for Nomvula and Tshego — a mother-and-daughter combination that reflects the heart behind the brand."
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              The faces in our logo symbolise this special bond and the family foundation upon which the company was built.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-5 sm:gap-6">
            <div>
              <h3 className="font-display text-lg sm:text-xl text-primary">Our Vision</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">To be recognised as Event Specialists and a leading contributor in the South African events industry.</p>
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl text-secondary">Our Mission</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">To provide quality event solutions and world-class service for every client and every event.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 sm:gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground max-w-xl leading-tight">
            The values <span className="text-gradient-brand">we deliver by.</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md">A short list — applied without exception.</p>
        </div>
        <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((v, i) => (
            <div key={v.title} className="rounded-xl sm:rounded-2xl bg-card p-5 sm:p-7 border border-border shadow-card-soft hover:shadow-pink transition-smooth">
              <div className="font-mono text-xs text-secondary">0{i + 1}</div>
              <h3 className="mt-2 sm:mt-3 font-display text-xl sm:text-2xl text-foreground">{v.title}</h3>
              <p className="mt-2 sm:mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-secondary font-semibold">Experience Highlights</span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            A track record of <span className="text-gradient-brand">notable moments.</span>
          </h2>
        </div>
        <ol className="mt-10 sm:mt-12 lg:mt-16 relative border-l-2 border-border ml-2 sm:ml-3 space-y-8 sm:space-y-10">
          {highlights.map((h) => (
            <li key={h.title} className="pl-6 sm:pl-8 relative">
              <span className="absolute -left-[9px] sm:-left-[11px] top-1.5 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gradient-brand shadow-pink ring-4 ring-background" />
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-secondary">{h.year}</p>
              <p className="mt-1 font-display text-lg sm:text-xl lg:text-2xl text-foreground leading-tight">{h.title}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 sm:mt-16 lg:mt-20 rounded-2xl sm:rounded-3xl bg-gradient-brand p-6 sm:p-10 lg:p-14 text-primary-foreground shadow-elegant">
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/80 font-semibold">Memberships</span>
          <h3 className="mt-2 sm:mt-3 font-display text-2xl sm:text-3xl lg:text-4xl max-w-3xl leading-tight">Proud members of the industry bodies that move South Africa's events sector forward.</h3>
          <div className="mt-6 sm:mt-8 grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { abbr: "SAACI", full: "South African Association for the Conference Industry" },
              { abbr: "GAUWIT", full: "Gauteng Women in Tourism" },
              { abbr: "SACIA", full: "Southern African Communications Industries Association" },
            ].map((m) => (
              <div key={m.abbr} className="rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur p-5 sm:p-6 border border-white/20">
                <p className="font-display text-2xl sm:text-3xl">{m.abbr}</p>
                <p className="mt-2 text-sm text-white/85 leading-snug">{m.full}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-ink text-white relative overflow-hidden">
      <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full blur-3xl opacity-30 bg-gradient-brand" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-secondary-glow font-semibold">Let's create something memorable</span>
        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
          Your next event, <span className="text-gradient-brand">unforgettable</span>.
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
          Tell us a little about what you're planning. We'll be in touch within one business day to start shaping it.
        </p>

        <div className="mt-8 sm:mt-10 lg:mt-12 grid sm:grid-cols-3 gap-3 sm:gap-4">
          <a href="mailto:winniem@nteventsmanagement.co.za" className="group rounded-xl sm:rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-5 sm:p-6 hover:bg-white/10 transition-smooth text-left">
            <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-glow" />
            <p className="mt-3 sm:mt-4 text-xs uppercase tracking-widest text-white/60">Email</p>
            <p className="mt-1 text-sm sm:text-base font-medium break-all leading-snug">winniem@nteventsmanagement.co.za</p>
          </a>
          <a href="tel:+27739296993" className="group rounded-xl sm:rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-5 sm:p-6 hover:bg-white/10 transition-smooth text-left">
            <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-glow" />
            <p className="mt-3 sm:mt-4 text-xs uppercase tracking-widest text-white/60">Mobile</p>
            <p className="mt-1 text-sm sm:text-base font-medium">+27 73 929 6993</p>
          </a>
          <div className="rounded-xl sm:rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-5 sm:p-6 text-left">
            <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-glow" />
            <p className="mt-3 sm:mt-4 text-xs uppercase tracking-widest text-white/60">Office</p>
            <p className="mt-1 text-sm sm:text-base font-medium leading-snug">29 Katakoroe Street, Birch Acres,<br />Kempton Park, 1618</p>
          </div>
        </div>

        <a
          href="mailto:winniem@nteventsmanagement.co.za?subject=New%20event%20enquiry"
          className="mt-8 sm:mt-10 lg:mt-12 inline-flex items-center gap-2 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold bg-gradient-brand text-primary-foreground shadow-pink hover:scale-[1.03] transition-smooth"
        >
          Send us a brief <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        <div>
          <img src={logoUrl} alt="NT Events Management" className="h-12 sm:h-14 w-auto brightness-110" />
          <p className="mt-4 sm:mt-5 text-sm leading-relaxed max-w-sm">
            Nikki Nana Events (Pty) Ltd — trading as NT Events Management. Proudly South African, family founded.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <p className="text-white font-semibold uppercase tracking-widest text-xs">Company</p>
          <p>Reg No. 2012/030565/07</p>
          <p>VAT No. 4280271190</p>
          <p>CSD No. MAAA0075947</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="text-white font-semibold uppercase tracking-widest text-xs">Contact</p>
          <p className="break-all">winniem@nteventsmanagement.co.za</p>
          <p>+27 73 929 6993</p>
          <p>29 Katakoroe Street, Birch Acres, Kempton Park, 1618</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2 text-xs text-white/50">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} NT Events Management. All rights reserved.</p>
          <a href="https://www.lunexweb.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-smooth">
            Built by Lunexweb
          </a>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  const phone = "27739296993";
  const message = encodeURIComponent("Hi NT Events, I'd like to chat about an event.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 inline-flex items-center gap-2 rounded-full pl-3 pr-4 sm:pl-4 sm:pr-5 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white bg-whatsapp shadow-lg hover:scale-105 transition-smooth animate-fade-up"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="sm:w-[22px] sm:h-[22px]">
        <path d="M12.04 2C6.58 2 2.18 6.4 2.18 11.86c0 1.92.5 3.8 1.45 5.45L2.05 22l4.81-1.26a9.79 9.79 0 0 0 5.18 1.48h.01c5.46 0 9.86-4.4 9.86-9.86C21.91 6.4 17.5 2 12.04 2zm0 17.72h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.05.8.81-2.98-.19-.31a8.13 8.13 0 1 1 15.06-4.28 8.13 8.13 0 0 1-7.19 8.08zm4.57-6.24c-.25-.13-1.49-.73-1.72-.82-.23-.08-.4-.13-.56.13-.17.25-.64.81-.79.98-.15.17-.29.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.74-.66-1.25-1.48-1.39-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.07-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.47-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.12 0 1.25.91 2.46 1.03 2.79.13.17 1.8 2.74 4.35 3.84.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.49-.61 1.71-1.21.22-.59.22-1.1.15-1.21-.07-.11-.23-.17-.49-.3z" />
      </svg>
      <span className="text-sm">WhatsApp us</span>
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Showcase />
      <Story />
      <Values />
      <Experience />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
