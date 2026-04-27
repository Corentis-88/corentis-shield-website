"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CookieChoice = "all" | "essential" | "reject";

const storageKey = "corentis_cookie_choice";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showChoices, setShowChoices] = useState(false);

  useEffect(() => {
    const storedChoice = window.localStorage.getItem(storageKey);
    setIsVisible(!storedChoice);
  }, []);

  function saveChoice(choice: CookieChoice) {
    window.localStorage.setItem(storageKey, choice);
    window.dispatchEvent(new CustomEvent("corentis-cookie-consent", { detail: choice }));
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="card-base card-premium mx-auto max-w-5xl p-5 shadow-glow sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="text-base font-semibold text-white">Cookies and privacy choices</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Corentis uses essential storage to remember your cookie choice and support the
              website. We do not currently run analytics or marketing cookies. If those are added
              later, they should stay off until you choose to allow them.
            </p>
            {showChoices && (
              <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <p className="font-semibold text-white">Essential</p>
                  <p className="mt-1">Required for the website and to remember this choice.</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <p className="font-semibold text-white">Analytics and marketing</p>
                  <p className="mt-1">Not currently active. These remain off unless accepted.</p>
                </div>
              </div>
            )}
            <p className="mt-3 text-xs leading-5 text-slate-400">
              Read the{" "}
              <Link href="/cookies" className="text-cyan-100 underline">
                cookie information
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-cyan-100 underline">
                privacy information
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <button
              type="button"
              onClick={() => saveChoice("all")}
              className="rounded-lg bg-cyanx px-4 py-3 text-sm font-semibold text-ink transition hover:bg-cyan-200"
            >
              Accept all
            </button>
            <button
              type="button"
              onClick={() => saveChoice("reject")}
              className="rounded-lg border border-slate-600/60 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyanx/60 hover:bg-cyanx/10"
            >
              Reject non-essential
            </button>
            <button
              type="button"
              onClick={() => saveChoice("essential")}
              className="rounded-lg border border-slate-600/60 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyanx/60 hover:bg-cyanx/10"
            >
              Essential only
            </button>
            <button
              type="button"
              onClick={() => setShowChoices((current) => !current)}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-white/[0.06]"
            >
              {showChoices ? "Hide choices" : "Manage choices"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
