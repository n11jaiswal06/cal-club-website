"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

export type StoreButtonsHandle = {
  pulse: () => void;
};

const StoreButtons = forwardRef<StoreButtonsHandle>(function StoreButtons(_props, ref) {
  const iosRef = useRef<HTMLAnchorElement>(null);
  const androidRef = useRef<HTMLAnchorElement>(null);

  useImperativeHandle(ref, () => ({
    pulse() {
      const buttons = [iosRef.current, androidRef.current].filter(
        (b): b is HTMLAnchorElement => b !== null
      );
      buttons.forEach((b) => {
        b.classList.remove("pulse");
        // Force reflow so the animation can re-trigger
        void b.offsetWidth;
        b.classList.add("pulse");
      });
      window.setTimeout(() => {
        buttons.forEach((b) => b.classList.remove("pulse"));
      }, 1500);
    },
  }));

  return (
    <>
      {/* TODO: real App Store link */}
      <a href="#" className="btn btn-lg" data-cta="ios" ref={iosRef}>
        <svg width="14" height="16" viewBox="0 0 14 16" fill="#FAF8F4" aria-hidden="true">
          <path d="M10.2 8.5c0-1.7 1.4-2.5 1.5-2.6-.8-1.2-2-1.3-2.5-1.4-1-.1-2 .6-2.6.6-.5 0-1.4-.6-2.3-.6-1.2 0-2.3.7-2.9 1.8-1.2 2.1-.3 5.3.9 7 .6.8 1.2 1.7 2.1 1.7.9 0 1.2-.5 2.2-.5 1 0 1.3.5 2.2.5.9 0 1.5-.8 2.1-1.6.7-.9 1-1.8 1-1.9-.1 0-1.9-.7-1.9-2.9zM8.8 3.4c.5-.6.8-1.4.7-2.3-.7 0-1.5.5-2 1.1-.4.5-.9 1.3-.7 2.2.8.1 1.6-.4 2-1z" />
        </svg>
        Download for iOS
      </a>
      {/* TODO: real Play Store link */}
      <a href="#" className="btn btn-lg" data-cta="android" ref={androidRef}>
        <svg width="14" height="16" viewBox="0 0 14 16" fill="#FAF8F4" aria-hidden="true">
          <path d="M10.3 7.1l1-1.7a.2.2 0 00-.4-.2l-1 1.7a4.7 4.7 0 00-3.9 0l-1-1.7a.2.2 0 10-.4.2l1 1.7C3.5 7.9 2.3 9.3 2.1 11h9.8c-.2-1.7-1.4-3.1-3.1-3.9zM5 9.6a.5.5 0 110-1 .5.5 0 010 1zm4 0a.5.5 0 110-1 .5.5 0 010 1zM2.1 11.7v2.8a1 1 0 002 0v-2.8h-2zm7.8 0v2.8a1 1 0 002 0v-2.8h-2zm-3.9 0v3.4a1 1 0 002 0v-3.4H6z" />
        </svg>
        Get on Android
      </a>
    </>
  );
});

export default StoreButtons;
