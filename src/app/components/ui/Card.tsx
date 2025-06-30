import { CustomImage, ICardImage } from "./CardImage";
import { Heading, IHeading } from "./Heading";
import { Button, IButton } from "./Button";
import { CloseSvg } from "@/../public/svg";
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

function CardCloseButton({ ...props }) {
  return (
    <button className="group top-8 right-4 absolute" {...props}>
      <CloseSvg />
    </button>
  );
}

Card.Image = CardImage;
Card.Title = CardTitle;
Card.Button = CardButton;
Card.Text = CardText;
Card.CloseButton = CardCloseButton;
