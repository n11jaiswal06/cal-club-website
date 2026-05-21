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
                <a href="mailto:hello@calclub.app">hello@calclub.app</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="smallcaps footer-col-title">Follow</div>
            <div className="footer-social">
              {/* TODO: real Instagram URL */}
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="16"
                    height="16"
                    rx="4.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="14.6" cy="5.4" r="1" fill="currentColor" />
                </svg>
              </a>
              {/* TODO: real X / Twitter URL */}
              <a href="#" aria-label="X">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M3 3l14 14M17 3L3 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="legal">
            {/* TODO: real Privacy Policy route */}
            <a href="#">Privacy Policy</a>
            <span>·</span>
            {/* TODO: real Terms of Service route */}
            <a href="#">Terms of Service</a>
          </div>
          <div>© 2026 Cal Club. Made in India.</div>
        </div>
      </div>
    </footer>
  );
}
