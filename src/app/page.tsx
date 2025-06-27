import Banner from "@/components/Banner";
import FoodItem from "@/components/FoodItem";
import OurTeam from "@/components/OurTeam";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <FoodItem />
      <Testimonials />
      <OurTeam />
    </div>
  );
}
