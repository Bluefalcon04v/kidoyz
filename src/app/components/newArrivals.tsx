import { DuckHeadingImg, NABox1, NABox2, NABox3,  NABox5, NABox6, NABox7 } from "@/../public/images";
import { Heading } from "./ui/Heading";
import React from "react";
import Image from "next/image";

const NewArrivals = () => {
    return (
        <div className="my-20 h-screen">
            <Heading variant="main" size="xl" image={DuckHeadingImg}>
                New Arrivals
            </Heading>
            <BentoGrid />
        </div>
    );
};

export default NewArrivals;

const BentoGrid = () => {
    return (
        <div className="grid-container-style bg-teal mt-8 p-16 rounded-3xl w-full h-full">
            <Image src={NABox1} height={200} width={200} alt="NA-Box 1" className="hover:shadow-inner object-center bento-box" style={{ gridArea: "bento-box-1" }}></Image>
            <Image src={NABox2} height={200} width={200} alt="NA-Box 2" className="object-center bento-box" style={{ gridArea: "bento-box-2" }}></Image>
            <Image src={NABox3} height={200} width={200} alt="NA-Box 3" className="object-center bento-box" style={{ gridArea: "bento-box-3" }}></Image>
            <Image src={NABox6} height={600} width={200} alt="NA-Box 4" className="object-center bento-box" style={{ gridArea: "bento-box-4" }}></Image>
            <Image src={NABox5} height={200} width={200} alt="NA-Box 5" className="object-center bento-box" style={{ gridArea: "bento-box-5" }}></Image>
            <Image src={NABox6} height={200} width={200} alt="NA-Box 6" className="object-center bento-box" style={{ gridArea: "bento-box-6" }}></Image>
            <Image src={NABox7} height={200} width={200} alt="NA-Box 7" className="object-center bento-box" style={{ gridArea: "bento-box-7" }}></Image>
        </div>
    );
};
