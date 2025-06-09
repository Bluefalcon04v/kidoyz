import { Heading, IHeading } from "./Heading";

export function Card({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="relative bg-primary w-full h-full">{children}</div>;
}

function CardImage({ ...props }) {
  return <img {...props} />;
}

function CardTitle({ variant, children }: IHeading) {
  return <Heading variant={variant}>{children}</Heading>;
}

Card.Image = CardImage;
Card.Title = CardTitle;
