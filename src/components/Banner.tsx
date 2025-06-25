import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import menu01 from "../assets/image/item01.png";
import top from "../assets/image/top.png";
import bottom from "../assets/image/bottom.png";

const Banner = () => {
  return (
    <div className="bg-[#880808] relative">
      <div className="absolute z-10">
        <Image src={top} alt="top" height={600} width={600}></Image>
      </div>
      <div className="max-w-[1800px] relative mx-auto z-50 py-12">
        {/* search start */}
        <div className="flex justify-between items-center">
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
        </div>
        {/* search end */}
        {/* banner start */}
        <div className="flex mt-36">
          <div className=" space-y-3">
            <h1 className="text-8xl text-white">BREAKFAST</h1>
            <p className="w-4xl text-xl font-bold text-white">
              Breakfast, often referred to as the ‘most important meal of the
              day’, provides essential nutrients to kick start our day. It
              includes a variety of foods, like fruits, cereals, dairy products,
              and proteins, that contribute to a balanced diet.{" "}
            </p>
            <div className="flex">
              <div className="">
                <Image
                  src={menu01}
                  alt="menu01"
                  height={200}
                  width={200}
                ></Image>
                <hr className="mt-3 h-1 bg-white w-28 mx-auto border-none" />
              </div>
              <div className="">
                <Image
                  src={menu01}
                  alt="menu01"
                  height={200}
                  width={200}
                ></Image>
                <hr className="mt-3 h-1 bg-white w-28 mx-auto border-none" />
              </div>
              <div className="">
                <Image
                  src={menu01}
                  alt="menu01"
                  height={200}
                  width={200}
                ></Image>
                <hr className="mt-3 h-1 bg-white w-28 mx-auto border-none" />
              </div>
              <div className="">
                <Image
                  src={menu01}
                  alt="menu01"
                  height={200}
                  width={200}
                ></Image>
                <hr className="mt-3 h-1 bg-white w-28 mx-auto border-none" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Image src={menu01} alt="menu01" height={650} width={650}></Image>
          </div>
        </div>
        {/* banner start */}
      </div>
      <div className="absolute bottom-0 right-0 z-10">
        <Image src={bottom} alt="bottom" height={600} width={600}></Image>
      </div>
    </div>
  );
};

export default Banner;
