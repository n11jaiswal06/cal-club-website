"use client";

import { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";

export default function HeroPulseHost() {
  const [pulseSignal, setPulseSignal] = useState(0);

  const handleDownloadClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.setTimeout(() => setPulseSignal((n) => n + 1), 480);
  };

  return (
    <>
      <Nav onDownloadClick={handleDownloadClick} />
      <Hero pulseSignal={pulseSignal} />
    </>
  );
}
