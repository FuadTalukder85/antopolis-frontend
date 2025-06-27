"use client";

import Image from "next/image";
import clientImg from "../assets/image/client.png";
import chefImage from "../assets/image/chefImage.png";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const clients = [
    {
      details:
        "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
      name: "Tayyab Sohail",
      role: "UX/UI Designer",
      image: clientImg,
    },
    {
      details:
        "Simple but delicious. The crust was perfectly crisp with a smoky edge, the tomatoes tasted fresh, and the mozzarella was melty and rich. Classic done right.",
      name: "Nayeem Hasan",
      role: "Software Developer",
      image: clientImg,
    },
    {
      details:
        "Juicy and satisfying. The patties were cooked to perfection, cheese melted like a dream, and the toasted brioche bun held it all together. Great value for a casual bite.",
      name: "Tamim Hasan",
      role: "MERN Developer",
      image: clientImg,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
    customPaging: (i: number) => (
      <button
        className="w-3 h-3 rounded-full bg-gray-300 hover:bg-red-500 transition-all duration-300"
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
    appendDots: (dots: React.ReactNode) => (
      <ul className="flex justify-center items-center gap-2 mt-6">{dots}</ul>
    ),
  };

  return (
    <div className="max-w-[1300px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10 mt-9 overflow-hidden">
      {/* Left: Slider Section with Motion */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-black text-3xl lg:text-5xl font-black mb-4">
          Customer <span className="text-[#AD1519]">Feedback</span>
        </h1>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index}>
                <p className="text-[#3D3D3D] text-2xl font-normal pr-3">
                  {client.details}
                </p>
                <div className="flex gap-4 items-center mt-[138px]">
                  <Image
                    src={client.image}
                    alt="client image"
                    width={74}
                    height={74}
                    className="rounded-full border-2 border-black"
                  />
                  <div>
                    <h2 className="text-[#A52A2A] text-2xl font-bold">
                      {client.name}
                    </h2>
                    <p className="text-black text-lg font-medium">
                      {client.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* Right: Chef Image with Motion */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          backgroundImage: `url(https://i.ibb.co/Rpw0gMM2/photo-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <Image
          src={chefImage}
          width={590}
          height={590}
          alt="chef image"
          className="w-full h-auto max-w-[590px]"
        />
      </motion.div>
    </div>
  );
};

export default Testimonials;
