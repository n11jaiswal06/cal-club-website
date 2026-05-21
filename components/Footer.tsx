import Image from "next/image";
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
                <Image
                  src="/assets/instagram-icon.webp"
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden="true"
                />
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
          <div className="footer-copy">
            © 2026 Cal Club. Made in India with{" "}
            <svg
              className="footer-heart"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M12 21s-7.5-4.6-9.5-9.4C1 8 3.2 4.5 6.7 4.5c2 0 3.6 1.1 4.5 2.6.9-1.5 2.5-2.6 4.5-2.6 3.5 0 5.7 3.5 4.2 7.1C19.5 16.4 12 21 12 21z"
                fill="#D95F28"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
