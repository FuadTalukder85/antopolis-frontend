import { StaticImageData } from "next/image";

export interface FoodItem {
  id: number;
  name: string;
  image: string | StaticImageData;
  category: "Breakfast" | "Lunch" | "Dinner";
  price: number;
}
