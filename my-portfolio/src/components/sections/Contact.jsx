import { useState } from "react";
import { CheckCircle2, Linkedin, Loader2, Send } from "lucide-react";
import Section from "../Section";
import { Cloud } from "../Decor";
import { profile } from "@/data/site";

const empty = { name: "", email: "", message: "", botcheck: "" };

const inputClass =
  "w-full rounded-2xl border border-line bg-cream px-4 py-3 text-ink placeholder:text-ink-soft/60 outline-none transition focus:border-pink focus:bg-paper focus:ring-4 focus:ring-pink/25";

// Contact section with a form that emails Elle directly
function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Hidden honeypot field: real people never fill it in
    if (form.botcheck) return;

    setStatus("sending");
    setError("");
    try {
      // Loaded on demand so Firebase isn't part of the initial page load
      const { sendMessage } = await import("@/lib/sendMessage");
      await sendMessage(form);
      setForm(empty);
      setStatus("sent");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <Section id="contact" className="pb-28">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blush via-lilac to-sky p-6 sm:p-12">
        <Cloud className="pointer-events-none absolute -right-10 -top-6 w-56 opacity-70" />
        <Cloud className="pointer-events-none absolute -bottom-8 left-10 w-40 opacity-60" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-rose">Contact</p>
            <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">Let's chat!</h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
              Whether it's a role, a project, a SWE event, or you just want to swap Stardew Valley farm layouts, my inbox is open. Messages go straight to my email.
            </p>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-paper/80 px-5 py-2.5 font-semibold text-ink shadow-sm transition hover:text-rose"
            >
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
          </div>

          <div className="rounded-[2rem] bg-paper p-6 shadow-card sm:p-8">
            {status === "sent" ? (
              <div className="flex flex-col items-center py-10 text-center" role="status">
                <CheckCircle2 className="h-12 w-12 text-rose" />
                <p className="mt-4 font-display text-2xl text-ink">Message sent!</p>
                <p className="mt-2 text-ink-soft">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-full px-5 py-2 font-semibold text-rose hover:bg-blush"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-bold text-ink">Name</span>
                    <input name="name" value={form.name} onChange={update} required autoComplete="name" className={inputClass} placeholder="Your name" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-bold text-ink">Email</span>
                    <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" className={inputClass} placeholder="you@example.com" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-bold text-ink">Message</span>
                  <textarea name="message" value={form.message} onChange={update} required rows={5} className={`${inputClass} resize-y`} placeholder="Hi Elle! I'd love to talk about…" />
                </label>

                <input
                  type="checkbox"
                  name="botcheck"
                  checked={Boolean(form.botcheck)}
                  onChange={(e) => setForm((f) => ({ ...f, botcheck: e.target.checked ? "on" : "" }))}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {status === "error" && (
                  <p className="rounded-2xl bg-blush px-4 py-3 text-sm font-semibold text-rose" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white shadow-soft transition hover:bg-rose disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
