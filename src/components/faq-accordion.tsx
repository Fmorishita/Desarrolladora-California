"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  q: string;
  a: string;
}

export function FAQAccordion({
  items,
  tone = "light",
}: {
  items: FAQItem[];
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <div
      className={cn(
        "divide-y",
        tone === "dark" ? "divide-bone/12" : "divide-border",
      )}
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "font-display text-lg leading-snug",
                  tone === "dark" ? "text-bone" : "text-ink",
                )}
              >
                {item.q}
              </span>
              <Plus
                className={cn(
                  "size-5 shrink-0 text-copper transition-transform duration-300",
                  isOpen && "rotate-45",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "max-w-2xl text-sm leading-relaxed sm:text-base",
                    tone === "dark" ? "text-bone/70" : "text-ink/70",
                  )}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
