import { DuckHeadingImg, NABox1, NABox2, NABox3,  NABox4,  NABox5, NABox6, NABox7 } from "@/../public/images";
import { Heading } from "./ui/Heading";
import React from "react";
import Image from "next/image";

const NewArrivals = () => {
    return (
        <div className="my-20">
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
            <Image src={NABox1} height={273} width={600} alt="NA-Box 1" className="shadow-black/70 hover:shadow-2xl object-center transition-all ease-in-out bento-box" style={{ gridArea: "bento-box-1" }}></Image>
            <Image src={NABox2} height={300} width={300} alt="NA-Box 2" className="shadow-black/70 hover:shadow-2xl object-center transition-all ease-in-out bento-box" style={{ gridArea: "bento-box-2" }}></Image>
            <Image src={NABox3} height={300} width={400} alt="NA-Box 3" className="shadow-black/70 hover:shadow-2xl object-center transition-all ease-in-out bento-box" style={{ gridArea: "bento-box-3" }}></Image>
            <Image src={NABox4} height={800} width={400} alt="NA-Box 4" className="shadow-black780 hover:shadow-2xl object-center transition-all ease-in-out bento-box" style={{ gridArea: "bento-box-4" }}></Image>
            <Image src={NABox5} height={300} width={700} alt="NA-Box 5" className="shadow-black/70 hover:shadow-2xl object-center transition-all ease-in-out bento-box" style={{ gridArea: "bento-box-5" }}></Image>
            <Image src={NABox6} height={500} width={300} alt="NA-Box 6" className="shadow-black/70 hover:shadow-2xl object-center transition-all ease-in-out bento-box" style={{ gridArea: "bento-box-6" }}></Image>
            <Image src={NABox7} height={300} width={700} alt="NA-Box 7" className="shadow-black/70 hover:shadow-2xl object-center transition-all ease-in-out bento-box" style={{ gridArea: "bento-box-7" }}></Image>
        </div>
    );
};
