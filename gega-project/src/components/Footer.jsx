import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gega-grey">
      <div className="container flex  flex-col md:flex-row px-10 lg:px-0 pb-8 pt-8">
        <div className="basis-1/3">
          <a
            href=""
            className="ml-4 md:pl-0 text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey"
          >
            GEGA
          </a>
          <p className="text-sm mt-2">2024 Mert Ünver No &copy; COPYRIGHT</p>
        </div>
        <div className="basis-1/3">
          <h2 className="mb-2 text-gega-red">LINKS</h2>
          <div className="grid grid-cols-5 gap-2 uppercase">
            <a
              href="#"
              className="col-span-2 hover:text-gega-melon duration-300"
            >
              Movies
            </a>
            <a
              href="#"
              className="col-span-2 hover:text-gega-melon duration-300"
            >
              Celebrities
            </a>
            <a
              href="#"
              className="col-span-2 hover:text-gega-melon duration-300"
            >
              Blog
            </a>
            <a
              href="#"
              className="col-span-2 hover:text-gega-melon duration-300"
            >
              News
            </a>
            <a
              href="#"
              className="col-span-2 hover:text-gega-melon duration-300"
            >
              About
            </a>
          </div>
        </div>
        <div className="basis-1/3">
          <h2 className="mb-2 text-gega-red">FOLLOW US</h2>
          <form action="" className="flex">
            <input
              className="py-1 px-2 bg-transparent border border-gega-red placeholder:text-xs outline-none"
              type="text"
              placeholder="TYPE YOUR EMAIL"
            />
            <button className="py-1 px-2  border border-gega-red bg-gega-red font-gemunu uppercase">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
