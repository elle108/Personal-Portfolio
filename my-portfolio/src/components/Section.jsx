import { useReveal } from "@/hooks/useReveal";
import { Sparkle } from "./Decor";
import { cn } from "@/lib/utils";

// Page section with a small eyebrow label, a display heading, and a fade-up reveal
function Section({ id, eyebrow, title, intro, children, className }) {
  const ref = useReveal();

  return (
    <section id={id} className={cn("px-4 py-20 sm:px-6 sm:py-24", className)}>
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <header className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-rose">
                <Sparkle className="h-3 w-3 text-pink" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">{title}</h2>
            )}
            {intro && <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
