import { Link } from "react-router-dom";
import { Camera, PawPrint } from "lucide-react";
import Section from "@/components/Section";
import Icon from "@/components/Icon";
import { Cloud, Sparkle } from "@/components/Decor";
import { personal } from "@/data/site";

// Any image dropped into these folders shows up automatically
const toPhotos = (modules) =>
  Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, src]) => {
      const file = path.split("/").pop();
      return { src, file, caption: personal.captions[file] };
    });

const pupPhotos = toPhotos(
  import.meta.glob("../assets/personal/pup/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG}", { eager: true, import: "default" })
);
const lifePhotos = toPhotos(
  import.meta.glob("../assets/personal/life/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG}", { eager: true, import: "default" })
);

const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];
const tints = ["bg-blush", "bg-lilac", "bg-sky", "bg-mint", "bg-butter"];
const iconTints = ["text-rose", "text-violet", "text-[#3f7fc0]", "text-[#2f7a5b]", "text-[#9a6b00]"];

// Polaroid-style photo, or a soft placeholder until real photos are added
function Polaroid({ photo, index, placeholder }) {
  return (
    <figure
      className={`${tilts[index % tilts.length]} rounded-2xl bg-paper p-3 pb-4 shadow-card transition duration-300 hover:z-10 hover:rotate-0 hover:scale-[1.03]`}
    >
      {photo ? (
        <img src={photo.src} alt={photo.caption || "Photo from Elle's life"} loading="lazy" className="aspect-square w-full rounded-xl object-cover" />
      ) : (
        <div className={`grid aspect-square w-full place-items-center rounded-xl ${tints[index % tints.length]}`}>
          <Camera className="h-8 w-8 text-ink-soft/50" aria-hidden="true" />
        </div>
      )}
      <figcaption className="mt-3 px-1 text-center font-display text-sm italic text-ink-soft">
        {photo?.caption || placeholder || " "}
      </figcaption>
    </figure>
  );
}

// "Off the clock" page: pup, hobbies, and life photos
function Personal() {
  const pupGrid = pupPhotos.length ? pupPhotos : [null, null, null];
  const lifeGrid = lifePhotos.length ? lifePhotos : [null, null, null, null];

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-10 pt-32 sm:px-6 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute -right-24 -top-20 h-96 w-96 rounded-full bg-blush blur-3xl" />
          <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-mint blur-3xl" />
          <Cloud className="absolute right-[10%] top-32 w-32 animate-float" />
          <Sparkle className="absolute left-[40%] top-28 h-5 w-5 text-pink" />
        </div>
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-rose">
            <Sparkle className="h-3 w-3 text-pink" /> Off the clock
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-tight text-ink sm:text-6xl">
            The <span className="italic text-rose">non-technical</span> stuff
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{personal.intro}</p>
        </div>
      </section>

      <Section id="pup" className="pt-8">
        <div className="grid items-center gap-10 rounded-[2.5rem] bg-gradient-to-br from-butter via-paper to-blush p-6 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-paper text-rose shadow-sm">
              <PawPrint className="h-6 w-6" />
            </span>
            <h2 className="font-display text-4xl text-ink">Meet {personal.pup.name}</h2>
            <p className="mt-3 text-lg leading-relaxed text-ink-soft">{personal.pup.blurb}</p>
            {personal.pup.facts.length > 0 && (
              <dl className="mt-6 grid grid-cols-2 gap-3">
                {personal.pup.facts.map((f) => (
                  <div key={f.label} className="rounded-2xl bg-paper/80 p-3">
                    <dt className="text-xs font-bold uppercase tracking-[0.16em] text-ink-soft/80">{f.label}</dt>
                    <dd className="font-semibold text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {pupGrid.map((photo, i) => (
              <Polaroid key={photo?.file ?? i} photo={photo} index={i} placeholder={!photo && i === 0 ? "pup pics coming soon" : undefined} />
            ))}
          </div>
        </div>
      </Section>

      <Section id="hobbies" eyebrow="Hobbies" title="Things that make me happy">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {personal.hobbies.map((h, i) => (
            <div key={h.name} className={`rounded-3xl ${tints[i % tints.length]} p-6 transition hover:-translate-y-1`}>
              <span className={`mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-paper shadow-sm ${iconTints[i % iconTints.length]}`}>
                <Icon name={h.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl text-ink">{h.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{h.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="gallery" eyebrow="Snapshots" title="Life lately">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {lifeGrid.map((photo, i) => (
            <Polaroid key={photo?.file ?? i} photo={photo} index={i + 1} />
          ))}
        </div>
      </Section>

      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-display text-2xl italic text-ink-soft">Want to talk shop instead?</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link to="/#projects" className="rounded-full bg-ink px-6 py-3 font-semibold text-white shadow-soft hover:bg-rose">
              See my projects
            </Link>
            <Link to="/#contact" className="rounded-full border border-pink bg-paper px-6 py-3 font-semibold text-rose hover:bg-blush">
              Say hi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Personal;
