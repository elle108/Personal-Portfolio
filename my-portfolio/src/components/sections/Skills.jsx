import { Award, Heart } from "lucide-react";
import Section from "../Section";
import { certifications, leadership, skills } from "@/data/site";

const chipTints = ["bg-blush text-rose", "bg-lilac text-violet", "bg-sky text-[#3f7fc0]", "bg-mint text-[#2f7a5b]", "bg-butter text-[#9a6b00]"];

// Skills, certifications, and leadership
function Skills() {
  return (
    <Section id="skills" eyebrow="Skills & leadership" title="My toolkit">
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-[2rem] border border-line bg-paper p-6 shadow-card sm:p-8">
          <div className="space-y-6">
            {skills.map((s, i) => (
              <div key={s.group}>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-ink-soft/80">{s.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className={`rounded-full px-3.5 py-1.5 text-sm font-semibold ${chipTints[i % chipTints.length]}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-dashed border-line pt-6">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-ink-soft/80">
              <Award className="h-4 w-4 text-rose" /> Certifications
            </h3>
            <ul className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <li key={c} className="rounded-2xl border border-line bg-cream px-4 py-2 text-sm font-semibold text-ink">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          {leadership.map((l) => (
            <article key={l.role} className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blush via-paper to-lilac p-6 shadow-card sm:p-8">
              <Heart className="absolute -right-4 -top-4 h-24 w-24 rotate-12 fill-pink/25 text-transparent" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">{l.date}</p>
              <h3 className="mt-2 font-display text-xl text-ink">{l.role}</h3>
              <p className="font-semibold text-ink-soft">{l.org}</p>
              <p className="mt-3 leading-relaxed text-ink-soft">{l.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Skills;
