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
      <a
        href="#"
        className="store-badge store-badge-apple"
        ref={iosRef}
        aria-label="Download on the App Store"
      >
        <svg
          className="store-badge-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.523 12.677c-.027-2.717 2.219-4.025 2.322-4.087-1.265-1.85-3.232-2.103-3.93-2.13-1.673-.17-3.265 1-4.115 1-.85 0-2.158-.974-3.55-.948-1.825.026-3.512 1.061-4.45 2.696-1.9 3.293-.483 8.157 1.357 10.83.9 1.31 1.97 2.78 3.37 2.728 1.358-.054 1.87-.873 3.51-.873 1.64 0 2.1.873 3.527.846 1.46-.026 2.385-1.336 3.272-2.653 1.04-1.52 1.464-2.99 1.48-3.07-.033-.013-2.835-1.086-2.863-4.34zM14.846 4.692C15.59 3.795 16.09 2.547 15.953 1.31c-1.064.043-2.353.708-3.122 1.605-.69.793-1.292 2.062-1.13 3.276 1.185.092 2.4-.602 3.145-1.5z" />
        </svg>
        <span className="store-badge-text">
          <span className="store-badge-top">Download on the</span>
          <span className="store-badge-bottom">App Store</span>
        </span>
      </a>

      {/* TODO: real Play Store link */}
      <a
        href="#"
        className="store-badge store-badge-google"
        ref={androidRef}
        aria-label="Get it on Google Play"
      >
        <svg
          className="store-badge-icon"
          viewBox="0 0 512 512"
          aria-hidden="true"
        >
          <path
            fill="#34A853"
            d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"
          />
          <path
            fill="#FBBC04"
            d="M104.6 499L325.3 277.7l60.1 60.1L104.6 499z"
          />
          <path
            fill="#4285F4"
            d="M104.6 13C97.2 16.8 92.3 24.5 92.3 34.6v442.8c0 10.1 4.9 17.8 12.3 21.6l220.7-221.4L104.6 13z"
          />
          <path
            fill="#EA4335"
            d="M483.7 227.5l-98.4-56.5-67.2 67.3 67.2 67.3 98.4-56.5c12.2-7 12.2-24.7 0-31.6z"
          />
        </svg>
        <span className="store-badge-text">
          <span className="store-badge-top">GET IT ON</span>
          <span className="store-badge-bottom">Google Play</span>
        </span>
      </a>
    </>
  );
});

export default StoreButtons;
