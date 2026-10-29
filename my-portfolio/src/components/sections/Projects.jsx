import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Section from "../Section";
import { projects } from "@/data/site";
import { cn } from "@/lib/utils";

const filters = ["All", ...new Set(projects.map((p) => p.category))];
const accents = {
  QA: "from-blush to-pink/40",
  Software: "from-lilac to-lavender/40",
  "Data & ML": "from-sky to-baby/50",
};

// Project grid with category filter chips
function Projects() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've worked on"
      intro="A mix of internship work, research, and class projects, from QA tooling to games to data analysis."
    >
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              active === f ? "bg-ink text-white shadow-soft" : "bg-paper text-ink-soft ring-1 ring-line hover:bg-blush hover:text-rose"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => {
          // `path` links to a page on this site, `link` opens GitHub in a new tab
          const Wrapper = p.path ? Link : p.link ? "a" : "div";
          return (
            <Wrapper
              key={p.title}
              {...(p.path && { to: p.path })}
              {...(p.link && { href: p.link, target: "_blank", rel: "noreferrer" })}
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className={cn("relative h-24 bg-gradient-to-br", accents[p.category])}>
                <span className="absolute left-5 top-5 rounded-full bg-paper/80 px-3 py-1 text-xs font-bold text-ink-soft backdrop-blur">
                  {p.org}
                </span>
                {p.featured && (
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1 text-xs font-bold text-white">
                    <Sparkles className="h-3 w-3" /> Featured
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="flex items-start justify-between gap-3 font-display text-xl text-ink">
                  {p.title}
                  {(p.link || p.path) && (
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink-soft transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-rose" />
                  )}
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-ink-soft ring-1 ring-line">
                      {t}
                    </span>
                  ))}
                </div>
                {p.link && <span className="sr-only">(opens GitHub in a new tab)</span>}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </Section>
  );
}

export default Projects;
