import Image from "next/image";

type Props = {
  href?: string;
  priority?: boolean;
};

export default function BrandMark({ href, priority }: Props) {
  const inner = (
    <>
      <Image
        src="/assets/cal-club-logo.png"
        alt=""
        width={39}
        height={39}
        className="brand-logo"
        priority={priority}
      />
      <span className="brand">Cal Club</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="brand-mark" aria-label="Cal Club">
        {inner}
      </a>
    );
  }
  return <div className="brand-mark">{inner}</div>;
}
