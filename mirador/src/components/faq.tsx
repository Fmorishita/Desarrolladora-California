"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/faqs";

export function FAQ() {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <div className="divide-y divide-cream/15">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg leading-snug text-cream">{item.q}</span>
              <Plus className={`size-5 shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="max-w-2xl text-sm leading-relaxed text-cream/75 sm:text-base">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
