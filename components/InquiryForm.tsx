"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CircleCheck, Loader2 } from "lucide-react";

const options = {
  me: [
    { value: "personal", label: "I'm carrying a lot and want support for me" },
    { value: "business", label: "I run a business and I've become the bottleneck" },
    { value: "unsure", label: "I'm not sure yet. Let's talk" },
  ],
  team: [
    { value: "enterprise", label: "Develop our leaders and managers" },
    { value: "business", label: "Support me and my key people as owners" },
    { value: "workshop", label: "A workshop or speaker for our team" },
    { value: "unsure", label: "Not sure yet. Let's talk" },
  ],
};

const match: Record<string, string> = {
  personal: "Personal Meantorship™",
  business: "Business Meantorship™",
  enterprise: "Enterprise Meantorship™",
  workshop: "a team workshop",
  unsure: "the right fit, together",
};

export default function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [mode, setMode] = useState<"me" | "team">("me");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [picked, setPicked] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setPicked(String(data.need || "unsure"));
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, mode }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  const input =
    "w-full border border-white/15 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-teal focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(94,200,210,0.15)]";

  return (
    <div className="glass relative overflow-hidden p-6 shadow-2xl shadow-black/50 md:p-8">
      <div className="glow-line absolute inset-x-0 top-0 h-px" />
      <p className="flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-sun">
        <span className="h-px w-8 bg-sun/70" />
        Start with a conversation
      </p>
      <h2 className={`mt-3 font-bold leading-tight ${compact ? "text-2xl" : "text-3xl"}`}>Tell us what's going on</h2>
      <p className="mt-2 text-sm leading-relaxed text-white/65">
        A discovery session is not a sales call. It's a real conversation about where you are and where you want to go.
      </p>

      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 border border-teal/30 bg-teal/10 p-6 text-center"
          >
            <CircleCheck className="mx-auto h-10 w-10 text-teal" />
            <p className="mt-3 font-display text-xl font-bold text-white">You're in the right place.</p>
            <p className="mt-2 text-sm text-white/70">
              We'll reach out to set up your discovery session and start the conversation around {match[picked] ?? match.unsure}.
            </p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} className="mt-6 space-y-3" exit={{ opacity: 0 }}>
            <div className="grid grid-cols-2 border border-white/15" role="tablist">
              {(["me", "team"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  role="tab"
                  aria-selected={mode === m}
                  onClick={() => setMode(m)}
                  className={`py-3 text-xs font-bold uppercase tracking-[0.16em] transition-all ${
                    mode === m ? "bg-sun text-ink" : "text-white/75 hover:text-white"
                  }`}
                >
                  {m === "me" ? "Support for me" : "For my team"}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input name="firstName" required placeholder="First name" className={input} />
              <input name="lastName" required placeholder="Last name" className={input} />
            </div>
            <input name="email" type="email" required placeholder={mode === "team" ? "Work email" : "Email"} className={input} />
            {mode === "team" && <input name="company" placeholder="Company" className={input} />}
            <select name="need" required defaultValue="" className={`${input} appearance-none`}>
              <option value="" disabled className="bg-navy-900">
                Which sounds most like you?
              </option>
              {options[mode].map((o) => (
                <option key={o.value} value={o.value} className="bg-navy-900">
                  {o.label}
                </option>
              ))}
            </select>
            {!compact && <textarea name="message" rows={3} placeholder="Anything you want us to know? (optional)" className={input} />}
            <button
              type="submit"
              disabled={status === "sending"}
              className="group flex w-full items-center justify-center gap-2 bg-sun py-4 text-sm font-bold uppercase tracking-[0.16em] text-ink transition-all hover:bg-sun-soft hover:shadow-[0_0_32px_rgba(236,192,68,0.45)] disabled:opacity-70"
            >
              {status === "sending" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Request my discovery session
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
            {status === "error" && <p className="text-center text-xs text-sun">Something went wrong. Email hello@bettermeant.co and we'll get back to you.</p>}
            <p className="text-center text-xs text-white/40">No pressure. No pitch. Just honesty.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
