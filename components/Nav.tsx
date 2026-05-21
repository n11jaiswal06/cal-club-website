"use client";

import { useEffect, useState, type MouseEvent } from "react";
import BrandMark from "./BrandMark";

type Props = {
  onDownloadClick: () => void;
};

export default function Nav({ onDownloadClick }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onDownloadClick();
  };

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        <BrandMark href="#top" priority />
        <div className="nav-spacer" />
        <a href="#top" className="btn" onClick={handleClick}>
          Download
        </a>
      </div>
    </nav>
  );
}
