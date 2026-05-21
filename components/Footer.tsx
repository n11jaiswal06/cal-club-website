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
          <div>© 2026 Cal Club. Made in India.</div>
        </div>
      </div>
    </footer>
  );
}
