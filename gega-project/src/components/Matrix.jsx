import React from "react";
import MatrixImg from "../assets/matrix.png";

function Matrix() {
  return (
    <section className="bg-gega-white">
      <div className="container flex items-center justify-center relative ">
        <div className="md:basis-1/3 lg:basis-1/2">
          <img
            src={MatrixImg}
            alt="Matrix Image"
            className="lg:absolute lg:bottom-0 "
          />
        </div>
        <div className="md:basis 1/3 lg:basis-1/2">
          <div className="flex flex-col justify-center py-10">
            <h3 className="tracking-wider text-gega-melon">
              Action, Drama, Thriller
            </h3>
            <h2 className="mb-2">Matrix Reloaded</h2>
            <p className="text-sm mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              iste tempora molestias consectetur deleniti veniam quis aliquam
              quia nisi tempore?
            </p>
            <h3 className="tracking-wider text-gega-red">
              8 wins 34 nominations
            </h3>
          </div>
        </div>
        <div className="left-0 absolute -top-12 lg:left-10 w-24 h-24 bg-gega-melon rounded-full text-center flex items-center -rotate-45">
          <p className="font-gemunu uppercase font-bold text-xl text-gega-red">
            Oldie & Goldie
          </p>
        </div>
      </div>
    </section>
  );
}

export default Matrix;
