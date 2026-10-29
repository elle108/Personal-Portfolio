import { useEffect, useRef, useState } from "react";
import { Loader2, MessageCircleHeart, Send, Sparkles, X } from "lucide-react";
import { profile } from "@/data/site";

// Keep in sync with the guards in api/ask.js
const MAX_CHARS = 500;
const MAX_HISTORY = 8;

const suggestions = [
  "What does Elle do at BizStream?",
  "What QA tools has she used?",
  "Tell me about her AI projects",
];

const greeting = {
  role: "assistant",
  content: `Hi! I can answer questions about ${profile.firstName}'s experience, projects, and skills. What would you like to know?`,
};

// Floating "Ask Elle" chat that answers questions via the /api/ask serverless function
function AskElle() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([greeting]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const ask = async (text) => {
    const question = text.trim();
    if (!question || sending) return;

    const next = [...messages, { role: "user", content: question }];
    setMessages(next);
    setInput("");
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // The greeting is UI-only, so it's left out of what the server sees
        body: JSON.stringify({ messages: next.slice(1).slice(-MAX_HISTORY) }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.reply) throw new Error(data.error || "Ask Elle is unavailable right now.");
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ask(input);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div
          role="dialog"
          aria-label={`Ask ${profile.firstName}`}
          className="flex h-[min(32rem,calc(100vh-7rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-[2rem] border border-line bg-paper shadow-card"
        >
          <div className="flex items-center justify-between bg-gradient-to-br from-blush via-lilac to-sky px-5 py-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-rose" aria-hidden="true" />
              <p className="font-display text-xl text-ink">Ask {profile.firstName}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 text-ink-soft transition hover:bg-paper/70 hover:text-rose"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.map((m, i) => (
              <p
                key={i}
                className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "user" ? "ml-auto bg-ink text-white" : "bg-lilac text-ink"
                }`}
              >
                {m.content}
              </p>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => ask(s)}
                    className="rounded-full border border-line bg-cream px-3 py-1.5 text-xs font-semibold text-ink-soft transition hover:border-pink hover:text-rose"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {sending && (
              <p className="inline-flex items-center gap-2 rounded-2xl bg-lilac px-4 py-2.5 text-sm text-ink-soft">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Thinking…
              </p>
            )}

            {error && (
              <p className="rounded-2xl bg-blush px-4 py-2.5 text-sm font-semibold text-rose" role="alert">
                {error}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-line bg-cream px-3 py-3">
            <label htmlFor="ask-elle-input" className="sr-only">
              Your question
            </label>
            <input
              id="ask-elle-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={MAX_CHARS}
              placeholder="Ask about experience, projects…"
              autoComplete="off"
              className="min-w-0 flex-1 rounded-full border border-line bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition focus:border-pink focus:ring-4 focus:ring-pink/25"
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              className="rounded-full bg-ink p-2.5 text-white shadow-soft transition hover:bg-rose disabled:opacity-50"
              aria-label="Send question"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          <p className="bg-cream px-4 pb-2 text-center text-[0.7rem] text-ink-soft/80">
            AI answers from this site's content and can make mistakes.
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-semibold text-white shadow-soft transition hover:bg-rose"
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <MessageCircleHeart className="h-5 w-5" aria-hidden="true" />}
        {open ? "Close" : `Ask ${profile.firstName}`}
      </button>
    </div>
  );
}

export default AskElle;
