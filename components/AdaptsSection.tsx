import { CHECKINS } from "@/lib/content";
import CheckinCard from "./CheckinCard";

export default function AdaptsSection() {
  return (
    <section className="section checkins">
      <div className="container">
        <div className="smallcaps">Adapts with your day</div>
        <h2 className="title-large checkins-head" style={{ margin: "16px 0 0" }}>
          Cal Club meets you where you are — morning, midday, and night.
        </h2>
        <p
          className="body-large"
          style={{ margin: "16px 0 0", maxWidth: "54ch", color: "var(--text-detail)" }}
        >
          Cal Club watches how your day is actually unfolding — what you&apos;ve eaten, what
          you&apos;ve trained, what you still have time to do — and shows up at the right moments
          with the answer for that moment.
        </p>

        <div className="checkins-grid">
          {CHECKINS.map((c) => (
            <CheckinCard
              key={c.screen}
              src={c.src}
              alt={c.alt}
              tint={c.tint}
              fade={c.fade}
              label={c.label}
              title={c.title}
              body={c.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
