import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ChartFrame from "@/components/ChartFrame";
import { Sparkle } from "@/components/Decor";
import { candyStory, sheetsChartUrl } from "@/data/candyStory";

const linkClass = "break-words font-semibold text-rose underline decoration-pink underline-offset-2 hover:text-ink";

// Renders one chart slot from the story content
function Chart({ chart }) {
  if (chart === "swarm") {
    return <ChartFrame src="/candy/swarm.html" name="swarm" title="Candy swarm chart grouped by form or flavor (D3)" height={420} />;
  }
  if (chart === "altair") {
    return <ChartFrame src="/candy/altair.html" name="altair" title="Price vs. win percentage with a peanut filter (Altair)" height={420} />;
  }
  // Google Sheets chart: shows once its "Publish chart" link is added in src/data/candyStory.js
  if (sheetsChartUrl) {
    return <ChartFrame src={sheetsChartUrl} title="Win percentage by ingredient (Google Sheets)" height={400} minWidth={620} />;
  }
  return (
    <div className="my-8 grid h-48 place-items-center rounded-3xl border border-dashed border-pink bg-blush/40 text-center text-ink-soft">
      Chart 1 (Google Sheets) is coming soon.
    </div>
  );
}

// Plain text and link pieces, used for citations and source lines
function Parts({ parts }) {
  return parts.map((part, i) => {
    if (part === "pageLink") {
      const url = window.location.origin + candyStory.path;
      return (
        <a key={i} href={url} className={linkClass}>
          {url}
        </a>
      );
    }
    if (typeof part === "string") return <span key={i}>{part}</span>;
    return (
      <a key={i} href={part.href} target="_blank" rel="noreferrer" className={linkClass}>
        {part.text || part.href}
      </a>
    );
  });
}

// Data story page for the Halloween candy visualization project
function CandyStory() {
  return (
    <article className="px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
      <div className="mx-auto max-w-3xl">
        <Link to="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-rose">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>

        <header className="mb-12">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-rose">
            <Sparkle className="h-3 w-3 text-pink" /> Data story
          </p>
          <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">{candyStory.title}</h1>
          <p className="mt-4 text-lg italic leading-relaxed text-ink-soft">{candyStory.subtitle}</p>
          <p className="mt-2 font-semibold text-ink-soft">{candyStory.byline}</p>
        </header>

        <div className="space-y-5 text-lg leading-relaxed text-ink">
          {candyStory.blocks.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} className="pt-8 font-display text-3xl text-ink">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="list-disc space-y-2 pl-6 marker:text-pink">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === "chart") return <Chart key={i} chart={block.chart} />;
            return <p key={i}>{block.parts ? <Parts parts={block.parts} /> : block.text}</p>;
          })}
        </div>

        <section className="mt-16 border-t border-line pt-10">
          <h2 className="font-display text-3xl text-ink">Sources</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-ink-soft marker:text-pink">
            {candyStory.sources.map((parts, i) => (
              <li key={i}>
                <Parts parts={parts} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}

export default CandyStory;
