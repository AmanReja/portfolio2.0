import React from "react";
import game from "../assets/images/Project images/game.png";
// import imbs from "../assets/images/Project images/imbs.png";
import book from "../assets/images/Project images/book.png";
import myntra from "../assets/images/Project images/myntra.png";
import recipe from "../assets/images/Project images/recipe.png";
import tictac from "../assets/images/Project images/tictac.png";
import todo from "../assets/images/Project images/todo.png";
import cal from "../assets/images/Project images/cal.png";
import text from "../assets/images/Project images/text.png";
import wal from "../assets/images/Project images/wal.png";
import jel from "../assets/images/Project images/jewl.png";

import travel from "../assets/images/Project images/travel.png";
import task from "../assets/images/Project images/task.png";

const Card = () => {
  const project = [
    {
      name: "Book Shop",
      img: book,
      wlink: "https://front-book-mu.vercel.app/",
    },
    {
      name: "Wallpaper Downloader",
      img: wal,
      wlink: "https://wallpaperapp-w8f3.vercel.app/",
    },
    {
      name: "Travelia(working)",
      img: travel,
      wlink: "https://travel-frontend-delta-steel.vercel.app/",
    },
    {
      name: "Gaming website",
      img: game,
      wlink: "https://gaming-website-one.vercel.app/",
    },

    {
      name: "Get recipes",
      img: recipe,
      wlink: "https://recipe-api-lyart.vercel.app/",
    },
    {
      name: "Tictacto",
      img: tictac,
      wlink: "https://tic-tac-to-xi.vercel.app/",
    },
    {
      name: "Todo List",
      img: todo,
      wlink: "https://todu-list-ten.vercel.app/",
    },
    {
      name: "Calculator",
      img: cal,
      wlink: "https://calculator2-0-vert.vercel.app/",
    },

    {
      name: "Task Master",
      img: task,
      wlink: "https://task-frontend-three-liard.vercel.app/",
    },
    // {
    //   name: "jewelary App",
    //   img: jel,
    //   wlink: "#",
    // },
    // {
    //   name: "Location tracker",
    //   img: Loca,
    //   wlink: "https://tracker-frontend-zeta.vercel.app/",
    // },
    // {
    //   name: "Attendance Marker(react native)",
    //   img: Mark,
    //   wlink: "",
    // },
    // {
    //   name: "Blog post(Redux)",
    //   img: Blog,
    //   wlink: "",
    // },
  ];

  return (
    <div id="projects">
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">My Projects</h1>
      </div>
      <section
        id="Projects"
        className="w-full gap-[50px] px-[30px] flex-wrap flex flex-row justify-between"
      >
        {project.map((item) => (
          <div className="w-82  bg-gradient-to-l from-[#f5365c] to-[#fb6340] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src={item.img}
                alt="Product"
                className="h-50 w-full object-fit rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Brand
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Product Name
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    $149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Card;
