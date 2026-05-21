import BrandMark from "./BrandMark";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <BrandMark />
            <p className="body-small footer-tagline">
              The AI nutrition coach for people who work out.
            </p>
          </div>
          <div>
            <div className="smallcaps footer-col-title">Contact</div>
            <ul className="footer-links">
              <li>
                <a href="mailto:naman@thecalclub.com">naman@thecalclub.com</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="smallcaps footer-col-title">Follow</div>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/calclub.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cal Club on Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="2.5"
                    y="2.5"
                    width="19"
                    height="19"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="legal">
            <a href="/privacy">Privacy Policy</a>
            <span>·</span>
            <a href="/terms">Terms of Service</a>
          </div>
          <div>© 2026 Cal Club. Made in India.</div>
        </div>
      </div>
    </footer>
  );
}
