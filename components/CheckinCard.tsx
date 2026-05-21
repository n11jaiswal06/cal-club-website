import PhoneFrame from "./PhoneFrame";

type Props = {
  src: string;
  alt: string;
  tint: string;
  fade: string;
  label: string;
  title: string;
  body: string;
};

export default function CheckinCard({ src, alt, tint, fade, label, title, body }: Props) {
  return (
    <div className="checkin">
      <PhoneFrame
        src={src}
        alt={alt}
        tint={tint}
        fade={fade}
        sizes="(min-width: 1080px) 220px, (min-width: 760px) 200px, 80vw"
      />
      <div className="smallcaps ember checkin-label">{label}</div>
      <h3 className="checkin-title">{title}</h3>
      <p className="checkin-body">{body}</p>
    </div>
  );
}
