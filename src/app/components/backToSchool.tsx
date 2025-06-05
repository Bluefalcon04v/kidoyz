import React from "react";
import { Heading } from "./custom/heading";
import { RabbitHeadingImg } from "../../../public/images";

const BackToSchool = () => {
  return (
    <div className="my-20">
      <Heading variant="main" size="xl" image={RabbitHeadingImg}> 
        Back to school sale !
      </Heading>
    </div>
  );
};

export default BackToSchool;
