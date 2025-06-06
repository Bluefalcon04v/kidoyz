import { StaticImageData } from "next/image";

export interface IReelCard {
  image: string | StaticImageData;
  sellingPrice: string;
  actualPrice: string;
  title: string;
}
