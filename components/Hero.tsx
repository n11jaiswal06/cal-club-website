"use client";

import { useEffect, useRef } from "react";
import PhoneFrame from "./PhoneFrame";
import StoreButtons, { type StoreButtonsHandle } from "./StoreButtons";

type Props = {
  pulseSignal: number;
};

export default function Hero({ pulseSignal }: Props) {
  const ctaRef = useRef<StoreButtonsHandle>(null);

  useEffect(() => {
    if (pulseSignal === 0) return;
    ctaRef.current?.pulse();
  }, [pulseSignal]);

  return (
    <header id="top">
      <div className="container hero">
        <div className="hero-grid">
          <div>
            <h1 className="display-large hero-text">
              The AI nutrition coach for people who work out.
            </h1>
            <p className="body-large hero-sub">
              Cal Club knows your training, your goals, and the food you actually eat — and coaches
              you in real time.
            </p>
            <div className="smallcaps ember hero-credential">Founded by ex-cult.fit</div>
            <div className="btn-row hero-cta-row">
              <StoreButtons ref={ctaRef} />
            </div>
          </div>

          <div className="hero-phone-col">
            <PhoneFrame
              src="/assets/dawn.png"
              alt="Cal Club — Morning Brief screen. Good morning, Naman. You've started your day well with breakfast. To keep your protein on track, perhaps consider a Chicken Salad for lunch."
              tint="rgba(217,130,100,0.38)"
              fade="rgba(217,130,100,0.06)"
              priority
              sizes="(min-width: 1080px) 252px, (min-width: 760px) 238px, 80vw"
              wrapClassName="hero-phone"
              ariaLabel="Cal Club app — Morning Brief screen"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
