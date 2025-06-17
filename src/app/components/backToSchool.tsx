import React from "react";
import { Heading } from "./ui/Heading";
import { RabbitHeadingImg } from "../../../public/images";
import { Card } from "./ui/Card";
import { BACK_TO_SCHOOL_DATA } from "../../constant/const-data";

const BackToSchool = () => {
  return (
    <div className="my-20">
      <Heading variant="main" size="xl" image={RabbitHeadingImg}>
        Back to school sale !
      </Heading>
      <div className="gap-16 grid grid-cols-3 mt-10 h-full">
        {BACK_TO_SCHOOL_DATA.map((item, index) => (
          <Card key={index} className="flex flex-col justify-between gap-2 hover:bg-primary/20 rounded-t-full w-full h-full">
            <Card.Image
              src={item.image}
              className="object-cover"
              variant="top-rounded"
              alt="image"
            ></Card.Image>
            <Card.Text className="justify-start h-full !font-dm-sans font-medium font-medium text-black text-center tracking-[1.5px]" >{item.title}</Card.Text>
            <Card.Text alignment="center" className="mb-2" variant="secondary">
              Rs. {item.price}
            </Card.Text>
            <Card.Button size="lg" variant="primary" className="w-full !font-medium uppercase">
              add to cart
            </Card.Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BackToSchool;
