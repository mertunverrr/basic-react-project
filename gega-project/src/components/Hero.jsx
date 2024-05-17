import React from "react";
import HeroImg from "../assets/batman.jpg";
import { FaPlay, FaArrowRight } from "react-icons/fa6";

function Hero() {
  return (
    <section className="h-64 md:h-96 lg:h-128 group relative">
      <img
        src={HeroImg}
        alt="Main Image"
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
        <div className="container pl-10 lg:pl-5">
          <h3 className="text-gega-melon tracking-wider group-hover:mb-1 duration-300">
            Action, Drama, Thriller
          </h3>
          <h1 className="text-4xl lg:text-6xl text-gega-grey group-hover:mb-1 duration-300">
            The Dark Knight
          </h1>
          <p className="text-sm lg:text-base w-3/4 lg:w-2/3 text-gega-grey group-hover:mb-2 duration-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, beatae placeat minus dolorum nemo eaque molestias
            dolore quaerat nihil dolores?
          </p>
          <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-10 lg:group-hover:mb-20 duration-1000">
            <div className="flex space-x-2 items-center cursor-pointer">
              <a
                href="#"
                className="text-gega-grey uppercase lg:text-lg hover:text-gega-red duration500"
              >
                Watch Trailer
              </a>
              <div className="flex h-8 w-8 text-center justify-center bg-gega-red text-gega-grey items-center rounded-full">
                <FaPlay />
              </div>
            </div>
            <div className="flex space-x-2 items-center cursor-pointer">
              <a
                href="#"
                className="text-gega-grey uppercase lg:text-lg hover:text-gega-red duration500"
              >
                Full Synopsis
              </a>
              <div className="flex h-8 w-8 text-center justify-center bg-gega-red text-gega-grey items-center rounded-full">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-3 absolute bottom-5 left-10 opacity-0 group-hover:opacity-100 duration-1000">
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-red"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey"></div>
      </div>
    </section>
  );
}

export default Hero;
