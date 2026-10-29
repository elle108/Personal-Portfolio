import { MapPin } from "lucide-react";
import Section from "../Section";
import { experience } from "@/data/site";

// Work history laid out as a timeline
function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've been building & breaking things"
      className="bg-gradient-to-b from-transparent via-lilac/40 to-transparent"
    >
      <ol className="relative space-y-6 before:absolute before:bottom-4 before:left-[11px] before:top-4 before:w-0.5 before:bg-gradient-to-b before:from-pink before:via-lavender before:to-baby md:before:left-[calc(12rem+11px)]">
        {experience.map((job) => (
          <li key={job.role + job.company} className="relative grid gap-2 pl-10 md:grid-cols-[12rem_1fr] md:gap-10 md:pl-0">
            <p className="pt-6 text-sm font-bold text-ink-soft md:text-right">{job.date}</p>

            <span
              className={
                "absolute left-0 top-6 grid h-6 w-6 place-items-center rounded-full border-4 border-cream md:left-[12rem] " +
                (job.current ? "bg-rose" : "bg-pink")
              }
              aria-hidden="true"
            />

            <article className="rounded-3xl border border-line bg-paper p-6 shadow-card transition hover:-translate-y-0.5 md:ml-10">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                <div>
                  <h3 className="font-display text-xl text-ink sm:text-2xl">{job.role}</h3>
                  <p className="font-semibold text-rose">{job.company}</p>
                </div>
                <div className="flex items-center gap-2">
                  {job.current && (
                    <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-[#2f7a5b]">Current</span>
                  )}
                  {job.location && (
                    <span className="inline-flex items-center gap-1 text-sm text-ink-soft">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                  )}
                </div>
              </div>

              {job.summary && <p className="mt-3 leading-relaxed text-ink-soft">{job.summary}</p>}

              {job.bullets.length > 0 && (
                <ul className="mt-3 space-y-2 text-ink-soft">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {job.tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-ink-soft ring-1 ring-line">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
