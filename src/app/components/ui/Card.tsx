import { Heading } from "./Heading";

//compound component

export function Card({ children }) {
  return <div className="bg-primary w-full h-full">{children}</div>;
}

function CardImage(props) {
  return <img {...props} />;
}

function CardTitle({ variant, children }) {
  return <Heading variant={variant} >{children}</Heading>;
}

Card.Image = CardImage;
Card.Title = CardTitle;
