import BrandMark from "./BrandMark";
import Footer from "./Footer";

type Props = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, lastUpdated, children }: Props) {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <BrandMark href="/" priority />
          <div className="nav-spacer" />
          <a href="/" className="btn">
            Back to home
          </a>
        </div>
      </nav>

      <main className="legal-page">
        <div className="container">
          <h1 className="legal-title">{title}</h1>
          <p className="legal-meta">Last updated: {lastUpdated}</p>
          <div className="legal-prose">{children}</div>
        </div>
      </main>

      <Footer />
    </>
  );
}
