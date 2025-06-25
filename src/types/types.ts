export interface FoodItem {
  id: number;
  name: string;
  image: string;
  category: "Breakfast" | "Lunch" | "Dinner";
  price: number;
}
