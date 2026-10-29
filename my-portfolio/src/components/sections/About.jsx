import { GraduationCap } from "lucide-react";
import Section from "../Section";
import { about, education } from "@/data/site";

const tints = ["bg-blush", "bg-lilac", "bg-sky"];

// About section: bio, focus areas, and education
function About() {
  return (
    <Section id="about" eyebrow="About me" title="Curious about how things work, and how to make them better.">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}

          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {about.interests.map((item, i) => (
              <div key={item.title} className={`rounded-3xl ${tints[i % 3]} p-5`}>
                <p className="font-display text-lg text-ink">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[2rem] border border-line bg-paper p-6 shadow-card sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-butter text-[#b8860b]">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3 className="font-display text-2xl text-ink">Education</h3>
          </div>
          <ol className="relative space-y-6 border-l-2 border-dashed border-pink/70 pl-6">
            {education.map((e) => (
              <li key={e.degree} className="relative">
                <span className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-4 border-paper bg-pink" />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">{e.date}</p>
                <p className="mt-1 font-semibold text-ink">{e.degree}</p>
                <p className="text-sm text-ink-soft">{e.school}</p>
                <p className="mt-1 text-sm text-ink-soft">{e.detail}</p>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </Section>
  );
}

export default About;
