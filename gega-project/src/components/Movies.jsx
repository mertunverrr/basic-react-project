import React from "react";
import Movie1 from "../assets/mv1.jpg";
import Movie2 from "../assets/mv2.jpg";
import Movie3 from "../assets/mv3.jpg";
import Movie4 from "../assets/mv4.jpg";
import Movie5 from "../assets/mv5.jpg";
import Movie6 from "../assets/mv6.jpg";
import New1 from "../assets/new1.jpg";
import New2 from "../assets/new2.jpg";
import New3 from "../assets/new3.jpg";
import New4 from "../assets/new4.jpg";
import New5 from "../assets/new5.jpg";
import { FaArrowRight, FaCaretRight } from "react-icons/fa";
function Movies() {
  return (
    <section className="py-24 bg-black">
      <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
        <div className="basis-2/3">
          <div className="flex space-x-2 divide-x divide-gega-red divide-opacity-50 mb-8">
            <h2 className="text-gega-red">
              <a href="#">Latest</a>
            </h2>
            <h2>
              <a
                className="text-gega-grey p1-2 hover:text-gega-red duration-500"
                href="#"
              >
                Popular
              </a>
            </h2>
            <h2>
              <a
                className="text-gega-grey p1-2 hover:text-gega-red duration-500"
                href="#"
              >
                Best
              </a>
            </h2>
          </div>
          <div className="flex flex-wrap">
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src={Movie1}
                className="group-hover:scale-110 group-hover:opacity-50"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  Oblivion
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, illo?
                </p>
                <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a className="hover:text-gega-red" href="#">
                    <FaCaretRight />
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src={Movie2}
                className="group-hover:scale-110 group-hover:opacity-50"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  Into the Wild
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, illo?
                </p>
                <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a className="hover:text-gega-red" href="#">
                    <FaCaretRight />
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src={Movie3}
                className="group-hover:scale-110 group-hover:opacity-50"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  Mullholland Drive
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, illo?
                </p>
                <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a className="hover:text-gega-red" href="#">
                    <FaCaretRight />
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src={Movie4}
                className="group-hover:scale-110 group-hover:opacity-50"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  Blade Runner
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, illo?
                </p>
                <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a className="hover:text-gega-red" href="#">
                    <FaCaretRight />
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src={Movie5}
                className="group-hover:scale-110 group-hover:opacity-50"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  The Forest
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, illo?
                </p>
                <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a className="hover:text-gega-red" href="#">
                    <FaCaretRight />
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src={Movie6}
                className="group-hover:scale-110 group-hover:opacity-50"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  Sky Fall
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, illo?
                </p>
                <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a className="hover:text-gega-red" href="#">
                    <FaCaretRight />
                  </a>
                  <a className="hover:text-gega-red" href="#">
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3 pl-10 lg:pl-0">
          <h2 className="text-gega-grey mb-8">Hot News</h2>
          <div className="flex flex-wrap lg:flex-nowrap flex-row lg:flex-col lg:h-full lg:pb-16 justify-start lg:justify-between space-y-4">
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <img src={New1} className="h-full w-full object-cover" />
              </div>
              <div className="pl-6 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae, quod!
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                  ON NOW 01 2022
                </p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <img src={New2} className="h-full w-full object-cover" />
              </div>
              <div className="pl-6 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae, quod!
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                  ON NOW 01 2022
                </p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <img src={New3} className="h-full w-full object-cover" />
              </div>
              <div className="pl-6 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae, quod!
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                  ON NOW 01 2022
                </p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <img src={New4} className="h-full w-full object-cover" />
              </div>
              <div className="pl-6 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae, quod!
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                  ON NOW 01 2022
                </p>
              </div>
            </div>
            <div className="flex items-center group basis-3/4 md:basis-1/2">
              <div className="basis-1/3 h-full">
                <img src={New5} className="h-full w-full object-cover" />
              </div>
              <div className="pl-6 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae, quod!
                </p>
                <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                  ON NOW 01 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movies;
