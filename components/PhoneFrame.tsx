import Image from "next/image";
import type { CSSProperties } from "react";

type Props = {
  src: string;
  alt: string;
  tint: string;
  fade: string;
  priority?: boolean;
  sizes?: string;
  wrapClassName?: string;
  ariaLabel?: string;
};

export default function PhoneFrame({
  src,
  alt,
  tint,
  fade,
  priority,
  sizes,
  wrapClassName,
  ariaLabel,
}: Props) {
  const style = {
    "--phone-tint": tint,
    "--phone-tint-fade": fade,
  } as CSSProperties;

  return (
    <div className={`phone-wrap${wrapClassName ? " " + wrapClassName : ""}`} style={style}>
      <div className="phone" aria-label={ariaLabel}>
        <div className="phone-screen">
          <div className="phone-island" />
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes ?? "(min-width: 1080px) 340px, (min-width: 760px) 320px, 80vw"}
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
        </div>
      </div>
    </div>
  );
}
