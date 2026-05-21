import StoreButtons from "./StoreButtons";

export default function FinalCTA() {
  return (
    <section className="cta-final">
      <div className="container">
        <h2 className="display-large">Cal&nbsp;Club.</h2>
        <p className="body-large">The AI nutrition coach for people who work out.</p>
        <div className="btn-row">
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}
