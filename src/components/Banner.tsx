"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import menu01 from "../assets/image/item01.png";
import menu02 from "../assets/image/item02.png";
import menu03 from "../assets/image/item03.png";
import menu04 from "../assets/image/item04.png";

const Banner = () => {
  const menuImages = [menu01, menu02, menu03, menu04];
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(true);

  const handleClick = (index: number) => {
    if (index === activeIndex) return;
    // Only allow adjacent index clicks
    if (Math.abs(index - activeIndex) === 1) {
      setDirection(index > activeIndex);
      setPrevIndex(activeIndex);
      setActiveIndex(index);
    }
  };
  const bgColors = ["#880808", "#0A4669", "#953553", "#036566"];
  const changeColors = ["#A52A2A", "#0A3659", "#A95C68", "#003333"];
  return (
    <motion.div
      className="bg-[#880808] relative overflow-hidden"
      initial={{ backgroundColor: bgColors[activeIndex] }}
      animate={{ backgroundColor: bgColors[activeIndex] }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div className="absolute -top-48 -left-48 z-10">
        <motion.div
          className="w-[1000px] h-[1000px] rounded-full"
          animate={{ backgroundColor: changeColors[activeIndex] }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content */}
      <div className="lg:max-w-[1800px] relative mx-auto z-50 py-12">
        {/* Search Section */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-between items-center"
        >
          <h5 className="text-3xl font-bold text-white">RESTAURANT</h5>
          <div className="relative">
            <input
              type="text"
              placeholder="Search...."
              className="bg-white text-[#2D2D2D] font-semibold text-2xl py-2 px-16 rounded-2xl w-[821px]"
            />
            <span className="absolute top-2.5 left-2.5 text-[#414141] text-2xl">
              <CiSearch />
            </span>
          </div>
        </motion.div>

        {/* Banner Body */}
        <div className="flex mt-36 gap-6">
          {/* Left Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-8xl text-white">BREAKFAST</h1>
            <p className="w-4xl text-xl font-bold text-white">
              Breakfast, often referred to as the ‘most important meal of the
              day’, provides essential nutrients to kick start our day. It
              includes a variety of foods, like fruits, cereals, dairy products,
              and proteins, that contribute to a balanced diet.
            </p>

            {/* Menu Items */}
            <div className="flex gap-4">
              {menuImages.map((img, index) => (
                <motion.div
                  key={index}
                  onClick={() => handleClick(index)}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.4 }}
                >
                  <Image
                    src={img}
                    alt={`menu${index + 1}`}
                    height={200}
                    width={200}
                  />
                  {activeIndex === index && (
                    <motion.hr
                      className="mt-3 h-1 bg-white w-28 mx-auto border-none"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      style={{ originX: 0 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Images with Enter/Exit Circular Motion */}
          <div className="w-full flex justify-end relative overflow-visible h-[625px]">
            <AnimatePresence>
              {/* Outgoing Image */}
              {prevIndex !== null && prevIndex !== activeIndex && (
                <motion.div
                  key={`prev-${prevIndex}`}
                  className="absolute top-0 right-0"
                  initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  animate={
                    direction
                      ? { opacity: 0, x: -200, y: 200, rotate: -90 }
                      : { opacity: 0, x: 200, y: -200, rotate: 90 }
                  }
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  style={{
                    originX: 1,
                    originY: 0.5,
                    zIndex: 1,
                  }}
                >
                  <Image
                    src={menuImages[prevIndex]}
                    alt={`prev-${prevIndex}`}
                    height={650}
                    width={650}
                  />
                </motion.div>
              )}

              {/* Incoming Image */}
              <motion.div
                key={`active-${activeIndex}`}
                className="absolute top-0 right-0"
                initial={
                  direction
                    ? { opacity: 0, x: 200, y: -200, rotate: 90 }
                    : { opacity: 0, x: -200, y: 200, rotate: -90 }
                }
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                style={{
                  originX: 1,
                  originY: 0.5,
                  zIndex: 2,
                }}
              >
                <Image
                  src={menuImages[activeIndex]}
                  alt={`active-${activeIndex}`}
                  height={650}
                  width={650}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* bottom */}
      {/* Bottom circle that only animates when menu image changes */}
      <motion.div
        className="absolute -bottom-[420px] -right-[420px] z-10"
        key={activeIndex} // triggers re-animation only when activeIndex changes
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.1, 0.25, 1],
          times: [0, 0.5, 1],
        }}
      >
        <motion.div
          className="w-[1000px] h-[1000px] rounded-full"
          animate={{ backgroundColor: changeColors[activeIndex] }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
