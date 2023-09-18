import React from "react";
import InputForm from "./InputForm";
import bg from "../bgimg.png";

const Hero = () => {
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden">
      <div className="justify-around items-center pt-10 pb-36 grid sm:grid-cols-3 grid-cols-1">
        <div className="text-left p-12 sm:m-12 col-span-2">
          <h1 className="text-white font-bold text-4xl sm:text-6xl sm:leading-relaxed">
            Ut Tellus Elementum Sagittis Vitae
          </h1>
          <h3 className="text-white mt-3 mr-12 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Est
            placerat in egestas erat.
          </h3>
        </div>
        <div className="justify-center p-6 sm:py-6 mx-3 sm:mr-12 bg-white/20 rounded-3xl">
          <InputForm />
        </div>
      </div>
      <img
        className="absolute h-full md:w-full top-0 opacity-20"
        src={bg}
        alt="EduMaze"
      />
    </div>
  );
};

export default Hero;
