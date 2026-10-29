import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Cloud, Sparkle } from "../Decor";
import Icon from "../Icon";
import { currently, profile } from "@/data/site";

// Landing hero with intro, calls to action, and a "currently" snapshot
function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
      {/* Soft pastel backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-blush blur-3xl" />
        <div className="absolute -right-24 top-10 h-[24rem] w-[24rem] rounded-full bg-lilac blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-sky blur-3xl" />
        <Cloud className="absolute left-[6%] top-28 w-28 animate-float opacity-90" />
        <Cloud className="absolute right-[8%] top-44 w-40 animate-float-slow opacity-80" />
        <Cloud className="absolute bottom-24 right-[30%] w-24 animate-float opacity-70" />
        <Sparkle className="absolute left-[48%] top-32 h-5 w-5 text-pink" />
        <Sparkle className="absolute right-[18%] top-[22rem] h-4 w-4 text-lavender" />
        <Sparkle className="absolute left-[12%] top-[26rem] h-3 w-3 text-baby" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-4 py-1.5 text-sm font-semibold text-ink-soft shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose" />
            </span>
            QA Specialist at BizStream
          </p>

          <h1 className="font-display text-[2.6rem] leading-[1.05] text-ink sm:text-7xl">
            Hi, I'm {profile.firstName}
            <span className="text-rose">.</span>
            <br />
            <span className="italic text-ink-soft">I make software</span>{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">work for people.</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-pink/60 sm:bottom-2 sm:h-4" aria-hidden="true" />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-rose"
            >
              See my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-pink bg-paper px-6 py-3 font-semibold text-rose transition hover:bg-blush"
            >
              Get in touch
            </Link>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 font-semibold text-ink-soft hover:text-rose"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            )}
            <div className="flex items-center gap-1 pl-1">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full text-ink-soft transition hover:bg-blush hover:text-rose"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full text-ink-soft transition hover:bg-blush hover:text-rose"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* "Currently" card stack */}
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2.5rem] bg-gradient-to-br from-pink/40 via-lilac to-sky" aria-hidden="true" />
          <div className="rounded-[2rem] border border-white bg-paper/90 p-6 shadow-card backdrop-blur sm:p-8">
            <p className="mb-5 font-display text-2xl italic text-ink">Currently…</p>
            <ul className="space-y-3">
              {currently.map((c, i) => (
                <li
                  key={c.label}
                  className="flex items-center gap-4 rounded-2xl p-3 transition hover:bg-cream"
                >
                  <span
                    className={
                      "grid h-12 w-12 shrink-0 place-items-center rounded-2xl " +
                      ["bg-blush text-rose", "bg-lilac text-violet", "bg-sky text-[#3f7fc0]"][i % 3]
                    }
                  >
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.16em] text-ink-soft/80">{c.label}</span>
                    <span className="block font-semibold text-ink">{c.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
