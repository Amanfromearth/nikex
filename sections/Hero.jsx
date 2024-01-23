import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
import { statistics } from "@/constants";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full flex justify-center min-h-screen xl:flex-row flex-col"
    >
      <div className="realtive xl:w-2/5 flex flex-col justify-center items-start gap-10 w-full max-xl:padding-x pt-28">
        <p className="text-coral-red font-montserrat text-lg">
          Our Summer Collections
        </p>
        <h1 className="text-8xl font-bold">
          The New Arrival
          <br />
          <span className="text-coral-red">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-lg">
          Discover stylish Nike arrivals, quality
          <br /> comfort, and innovation for your active life.
        </p>
        <Button />
        <div className="flex pt-10 gap-12">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-bold text-4xl">{stat.value}</p>
              <p className="font-montserrat pl-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Image
          src="/assets/images/big-shoe1.png"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
