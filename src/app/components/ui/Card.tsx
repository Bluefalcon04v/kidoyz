import { CardImage as CustomImage, ICardImage } from "./CardImage";
import { Heading, IHeading } from "./Heading";
import { Button, IButton } from "./Button";
import { IText, Text } from "./Text";
import { cn } from "@/utils/cn";
export function Card({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        "relative w-full h-full cursor-pointer transition-all ease-in-out",
        className
      )}
    >
      {children}
    </div>
  );
}

function CardImage({ variant, ...props }: ICardImage) {
  return <CustomImage variant={variant} {...props} />;
}

function CardTitle({ variant, children, ...props }: IHeading) {
  return (
    <Heading variant={variant} {...props}>
      {children}
    </Heading>
  );
}

function CardButton({ variant, children, ...props }: IButton) {
  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  );
}

function CardText({ variant, children, ...props }: IText) {
  return (
    <Text variant={variant} {...props}>
      {children}
    </Text>
  );
}

Card.Image = CardImage;
Card.Title = CardTitle;
Card.Button = CardButton;
Card.Text = CardText;
