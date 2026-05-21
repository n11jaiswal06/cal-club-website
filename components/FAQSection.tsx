"use client";

import { useRef, useState } from "react";
import { FAQS } from "@/lib/content";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="smallcaps">Frequently asked</div>
        <h2 className="title-large" style={{ margin: "16px 0 0" }}>
          Questions about Cal Club
        </h2>

        <div className="faq-card">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            const panel = panelRefs.current[i];
            const maxHeight = isOpen && panel ? panel.scrollHeight : 0;
            return (
              <div className={`faq-row${isOpen ? " open" : ""}`} key={i}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 8l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className="faq-a"
                  ref={(el) => {
                    panelRefs.current[i] = el;
                  }}
                  style={{ maxHeight: `${maxHeight}px` }}
                >
                  <div className="faq-a-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="body-small faq-foot">
          Still have questions? Email us at{" "}
          <a href="mailto:hello@calclub.app">hello@calclub.app</a>.
        </p>
      </div>
    </section>
  );
}
