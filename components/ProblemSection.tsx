import { PROBLEMS } from "@/lib/content";

export default function ProblemSection() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="smallcaps">Why most nutrition apps fail you</div>
        <h2 className="title-large problem-head" style={{ margin: "16px 0 0" }}>
          Logging your food isn&apos;t the same as knowing what to eat.
        </h2>
        <div className="problem-rows">
          {PROBLEMS.map((p) => (
            <div className="problem-row" key={p.num}>
              <div className="problem-num">{p.num}</div>
              <div className="problem-title">{p.title}</div>
              <div className="problem-body">{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
