import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-[400px] gredient w-full"
    >
      <div className="p-[50px] h-full flex flex-col gap-[20px] w-[40%]">
        <h1 className="text-5xl font-light text-white">Portfolio</h1>
        <p className=" w-[400px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          perspiciatis blanditiis quis modi minima corrupti alias beatae, illum
          commodi neque unde. Placeat quas totam consequatur dicta et quos
          mollitia doloremque.
        </p>
        <button className="bg-red-400 text-white p-[10px] h-[50px] w-[200px]">
          Buy Me A Coffe
        </button>
        <button className="bg-sky-400 text-white p-[10px] h-[50px] w-[200px]">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Footer;
