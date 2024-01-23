import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const SuperQuality = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="text-left flex flex-col gap-5 md:w-3/4">
        <h2 className="text-4xl font-bold ">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="font-montserrat text-lg leading-7 font-light">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="font-montserrat text-lg leading-7 font-light">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button/>
      </div>
      <div className="flex py-14 justify-center">
        <Image
          src="/assets/images/shoe8.svg"
          alt="shoe8"
          width="570"
          height="522"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default SuperQuality;
