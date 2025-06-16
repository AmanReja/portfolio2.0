import React from "react";
import Dev from "../assets/dev.svg";
import Card from "./Card";
import "../App.css";

import profile from "../assets/images/Project images/profile.jpg";

const Features = () => {
  return (
    <>
      <div className=" w-full h-auto">
        <div className="w-full h-auto  flex justify-center items-center">
          <div className="w-full h-auto flex justify-center items-center relative mb-[80px]">
            <img
              className="rounded-full z-20 absolute bottom-[300px] bg-white w-[180px] h-[180px] shadow-2xl object-cover"
              src={profile}
              alt=""
            />

            <div
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 0, 100% 35%, 99% 56%, 75% 78%, 50% 100%, 29% 81%, 0 55%, 0% 35%, 0 0)",
              }}
              className="shadow-2xl bg-lime-300 h-[400px] rounded-[20px] w-[400px] flex flex-col items-center z-10 px-[10px] pt-[100px]"
            >
              <div className="w-full flex h-[80px] justify-around mt-[50px]">
                <div className="w-[100px] flex items-center flex-col">
                  <h1 className="text-[25px] font-bold text-white">30</h1>
                  <p>Git Repo</p>
                </div>
                <div className="w-[100px] flex items-center flex-col">
                  <h1 className="text-[25px] font-bold text-white">12</h1>
                  <p>Review</p>
                </div>
                <div className="w-[100px] flex items-center flex-col">
                  <h1 className="text-[25px] text-white font-bold">80</h1>
                  <p>Leet Resolved</p>
                </div>
              </div>

              <button class="cssbuttons-io">
                <span>
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                  </svg>
                  Contact Me
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className=" sm:overflow-visible overflow-hidden sm:h-[640px] h-auto flex sm:flex-row flex-col  w-full">
        <div className=" h-full   sm:w-[30%] w-full flex-col items-center sm:place-items-start text-center sm:text-left flex gap-[30px] p-10 pr-[30px]">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="#6434eb"
              class="icon icon-tabler icons-tabler-filled icon-tabler-heart"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
            </svg>
          </div>
          <div className="">
            <h1
              style={{ fontFamily: "montserrat", fontWeight: 500 }}
              className="text-[30px] "
            >
              Awsome features
            </h1>
            <p style={{ fontFamily: "" }} className="font-thin text-[19px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              voluptas exercitationem dolor autem ut minus assumenda debitis
              laboriosam fuga minima expedita culpa?
            </p>
          </div>
          <div className="sm:w-[400px] w-full justify-center sm:items-start items-center  flex  flex-col gap-[15px]">
            <div className="flex  items-center gap-3">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="52"
                height="52"
                viewBox="0 0 50 50"
                fill="red"
              >
                <path d="M47.16,21.221l-5.91-0.966c-0.346-1.186-0.819-2.326-1.411-3.405l3.45-4.917c0.279-0.397,0.231-0.938-0.112-1.282 l-3.889-3.887c-0.347-0.346-0.893-0.391-1.291-0.104l-4.843,3.481c-1.089-0.602-2.239-1.08-3.432-1.427l-1.031-5.886 C28.607,2.35,28.192,2,27.706,2h-5.5c-0.49,0-0.908,0.355-0.987,0.839l-0.956,5.854c-1.2,0.345-2.352,0.818-3.437,1.412l-4.83-3.45 c-0.399-0.285-0.942-0.239-1.289,0.106L6.82,10.648c-0.343,0.343-0.391,0.883-0.112,1.28l3.399,4.863 c-0.605,1.095-1.087,2.254-1.438,3.46l-5.831,0.971c-0.482,0.08-0.836,0.498-0.836,0.986v5.5c0,0.485,0.348,0.9,0.825,0.985 l5.831,1.034c0.349,1.203,0.831,2.362,1.438,3.46l-3.441,4.813c-0.284,0.397-0.239,0.942,0.106,1.289l3.888,3.891 c0.343,0.343,0.884,0.391,1.281,0.112l4.87-3.411c1.093,0.601,2.248,1.078,3.445,1.424l0.976,5.861C21.3,47.647,21.717,48,22.206,48 h5.5c0.485,0,0.9-0.348,0.984-0.825l1.045-5.89c1.199-0.353,2.348-0.833,3.43-1.435l4.905,3.441 c0.398,0.281,0.938,0.232,1.282-0.111l3.888-3.891c0.346-0.347,0.391-0.894,0.104-1.292l-3.498-4.857 c0.593-1.08,1.064-2.222,1.407-3.408l5.918-1.039c0.479-0.084,0.827-0.5,0.827-0.985v-5.5C47.999,21.718,47.644,21.3,47.16,21.221z M25,32c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7C32,28.866,28.866,32,25,32z"></path>
              </svg>
              <p className="text-[20px] font-thin">
                Carefully crafted components
              </p>
            </div>
            <div className="flex  items-center gap-3">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="html"
                width={52}
                height={52}
              >
                <path
                  fill="#E44D26"
                  d="M3.345 21.601 1.419 0h21.162l-1.928 21.597L11.987 24l-8.642-2.399z"
                ></path>
                <path
                  fill="#F16529"
                  d="m12 22.164 7.003-1.941L20.65 1.766H12v20.398z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M12 9.778H8.494l-.242-2.713H12V4.416H5.357l.063.71.651 7.301H12V9.778zm0 6.88-.012.003-2.95-.797-.189-2.113H6.19l.371 4.16 5.427 1.506.012-.003v-2.756z"
                ></path>
                <path
                  fill="#FFF"
                  d="M11.991 9.778v2.649h3.262l-.308 3.436-2.955.797v2.756l5.431-1.505.04-.448.623-6.975.065-.711h-.714l-5.444.001zm0-5.362v2.649h6.399l.053-.596.121-1.343.063-.711-6.636.001z"
                ></path>
              </svg>
              <p className="text-[20px] font-thin">Amezing page rendering</p>
            </div>
            <div className="flex  items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                id="phone"
                width="52"
                height="52"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 512 512"
              >
                <path
                  id="Icon_6_"
                  d="M358.856 32H153.143C130.512 32 112 50.326 112 72.728v366.545C112 461.674 130.512 480 153.143 480h205.713C381.488 480 400 461.674 400 439.272V72.728C400 50.326 381.488 32 358.856 32zM364 400H148V112h216v288z"
                ></path>
              </svg>
              <p className="text-[20px] font-thin">Responsive Layouts</p>
            </div>
          </div>
        </div>
        <div className="  h-full flex justify-center sm:w-[70%] w-full ">
          <div className="h-[100%]   sm:w-[80%] w-full flex flex-wrap p-3  justify-center gap-[30px]">
            <div className="w-[280px] p-6 flex flex-col gap-[20px] rounded-[5px] shadow-xl h-[300px] bg-sky-300">
              <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 120"
                  id="podcasts"
                  width={40}
                  height={40}
                  fill="blue"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="60"
                      x2="60"
                      y1="-104.13"
                      y2="15.87"
                      gradientTransform="translate(0 104)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#73d9f0"></stop>
                      <stop offset="1" stop-color="#73d9f0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#a)"
                    fill-rule="evenodd"
                    d="M94,120H26A25.9482,25.9482,0,0,1,0,94V26A25.9482,25.9482,0,0,1,26,0H94a25.9482,25.9482,0,0,1,26,26V94A25.9482,25.9482,0,0,1,94,120Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M74.9,79.7l.5-4.4a8.85417,8.85417,0,0,0,0-2.3,23,23,0,1,0-30.8,0,17.63337,17.63337,0,0,0,0,2.3l.5,4.4a28,28,0,1,1,29.8,0ZM73.2,94.9l.6-5.5a37.125,37.125,0,1,0-27.6-.1l.6,5.5a41.84979,41.84979,0,1,1,26.4.1Z"
                  ></path>
                  <circle cx="60" cy="52" r="10" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M55.9,66.5l-1.4.5a7.61676,7.61676,0,0,0-4.9,7.8l2.7,24.3A7.85757,7.85757,0,0,0,60,106a7.70934,7.70934,0,0,0,7.7-6.9l2.6-24.3A7.37888,7.37888,0,0,0,65.4,67l-1.3-.5A11.58079,11.58079,0,0,0,55.9,66.5Z"
                  ></path>
                </svg>
              </div>
              <h1
                style={{ fontFamily: "montserrat" }}
                className="font-bold text-2xl text-white"
              >
                Best Quality
              </h1>
              <p className="font-thin text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita minima voluptas{" "}
              </p>
            </div>
            <div className="w-[280px] p-6 flex flex-col gap-[20px] floter duration-75 h-[300px] rounded-[5px] sm:translate-y-[-50px] sm:translate-x-[-50px] bg-red-400">
              <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 120"
                  id="podcasts"
                  width={40}
                  height={40}
                  fill="blue"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="60"
                      x2="60"
                      y1="-104.13"
                      y2="15.87"
                      gradientTransform="translate(0 104)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#73d9f0"></stop>
                      <stop offset="1" stop-color="#73d9f0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#a)"
                    fill-rule="evenodd"
                    d="M94,120H26A25.9482,25.9482,0,0,1,0,94V26A25.9482,25.9482,0,0,1,26,0H94a25.9482,25.9482,0,0,1,26,26V94A25.9482,25.9482,0,0,1,94,120Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M74.9,79.7l.5-4.4a8.85417,8.85417,0,0,0,0-2.3,23,23,0,1,0-30.8,0,17.63337,17.63337,0,0,0,0,2.3l.5,4.4a28,28,0,1,1,29.8,0ZM73.2,94.9l.6-5.5a37.125,37.125,0,1,0-27.6-.1l.6,5.5a41.84979,41.84979,0,1,1,26.4.1Z"
                  ></path>
                  <circle cx="60" cy="52" r="10" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M55.9,66.5l-1.4.5a7.61676,7.61676,0,0,0-4.9,7.8l2.7,24.3A7.85757,7.85757,0,0,0,60,106a7.70934,7.70934,0,0,0,7.7-6.9l2.6-24.3A7.37888,7.37888,0,0,0,65.4,67l-1.3-.5A11.58079,11.58079,0,0,0,55.9,66.5Z"
                  ></path>
                </svg>
              </div>
              <h1
                style={{ fontFamily: "montserrat" }}
                className="font-bold text-2xl text-white"
              >
                Best Quality
              </h1>
              <p className="font-thin text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita minima voluptas{" "}
              </p>
            </div>
            <div className="w-[280px] p-6 flex flex-col gap-[20px] h-[300px] rounded-[5px] sm:translate-x-[-100px] bg-gray-800">
              <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 120"
                  id="podcasts"
                  width={40}
                  height={40}
                  fill="blue"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="60"
                      x2="60"
                      y1="-104.13"
                      y2="15.87"
                      gradientTransform="translate(0 104)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#73d9f0"></stop>
                      <stop offset="1" stop-color="#73d9f0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#a)"
                    fill-rule="evenodd"
                    d="M94,120H26A25.9482,25.9482,0,0,1,0,94V26A25.9482,25.9482,0,0,1,26,0H94a25.9482,25.9482,0,0,1,26,26V94A25.9482,25.9482,0,0,1,94,120Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M74.9,79.7l.5-4.4a8.85417,8.85417,0,0,0,0-2.3,23,23,0,1,0-30.8,0,17.63337,17.63337,0,0,0,0,2.3l.5,4.4a28,28,0,1,1,29.8,0ZM73.2,94.9l.6-5.5a37.125,37.125,0,1,0-27.6-.1l.6,5.5a41.84979,41.84979,0,1,1,26.4.1Z"
                  ></path>
                  <circle cx="60" cy="52" r="10" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M55.9,66.5l-1.4.5a7.61676,7.61676,0,0,0-4.9,7.8l2.7,24.3A7.85757,7.85757,0,0,0,60,106a7.70934,7.70934,0,0,0,7.7-6.9l2.6-24.3A7.37888,7.37888,0,0,0,65.4,67l-1.3-.5A11.58079,11.58079,0,0,0,55.9,66.5Z"
                  ></path>
                </svg>
              </div>
              <h1
                style={{ fontFamily: "montserrat" }}
                className="font-bold text-2xl text-white"
              >
                Best Quality
              </h1>
              <p className="font-thin text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita minima voluptas{" "}
              </p>
            </div>

            <div className="w-[280px] p-6 flex flex-col gap-[20px] h-[300px] rounded-[5px] bg-violet-800">
              <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 120"
                  id="podcasts"
                  width={40}
                  height={40}
                  fill="blue"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="60"
                      x2="60"
                      y1="-104.13"
                      y2="15.87"
                      gradientTransform="translate(0 104)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#73d9f0"></stop>
                      <stop offset="1" stop-color="#73d9f0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#a)"
                    fill-rule="evenodd"
                    d="M94,120H26A25.9482,25.9482,0,0,1,0,94V26A25.9482,25.9482,0,0,1,26,0H94a25.9482,25.9482,0,0,1,26,26V94A25.9482,25.9482,0,0,1,94,120Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M74.9,79.7l.5-4.4a8.85417,8.85417,0,0,0,0-2.3,23,23,0,1,0-30.8,0,17.63337,17.63337,0,0,0,0,2.3l.5,4.4a28,28,0,1,1,29.8,0ZM73.2,94.9l.6-5.5a37.125,37.125,0,1,0-27.6-.1l.6,5.5a41.84979,41.84979,0,1,1,26.4.1Z"
                  ></path>
                  <circle cx="60" cy="52" r="10" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M55.9,66.5l-1.4.5a7.61676,7.61676,0,0,0-4.9,7.8l2.7,24.3A7.85757,7.85757,0,0,0,60,106a7.70934,7.70934,0,0,0,7.7-6.9l2.6-24.3A7.37888,7.37888,0,0,0,65.4,67l-1.3-.5A11.58079,11.58079,0,0,0,55.9,66.5Z"
                  ></path>
                </svg>
              </div>
              <h1
                style={{ fontFamily: "montserrat" }}
                className="font-bold text-2xl text-white"
              >
                Best Quality
              </h1>
              <p className="font-thin text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita minima voluptas{" "}
              </p>
            </div>
            <div className="w-[280px] p-6 flex flex-col gap-[20px]  h-[300px] sm:translate-y-[-50px] sm:translate-x-[-50px] rounded-[5px] bg-orange-500">
              <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 120"
                  id="podcasts"
                  width={40}
                  height={40}
                  fill="blue"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="60"
                      x2="60"
                      y1="-104.13"
                      y2="15.87"
                      gradientTransform="translate(0 104)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#73d9f0"></stop>
                      <stop offset="1" stop-color="#73d9f0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#a)"
                    fill-rule="evenodd"
                    d="M94,120H26A25.9482,25.9482,0,0,1,0,94V26A25.9482,25.9482,0,0,1,26,0H94a25.9482,25.9482,0,0,1,26,26V94A25.9482,25.9482,0,0,1,94,120Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M74.9,79.7l.5-4.4a8.85417,8.85417,0,0,0,0-2.3,23,23,0,1,0-30.8,0,17.63337,17.63337,0,0,0,0,2.3l.5,4.4a28,28,0,1,1,29.8,0ZM73.2,94.9l.6-5.5a37.125,37.125,0,1,0-27.6-.1l.6,5.5a41.84979,41.84979,0,1,1,26.4.1Z"
                  ></path>
                  <circle cx="60" cy="52" r="10" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M55.9,66.5l-1.4.5a7.61676,7.61676,0,0,0-4.9,7.8l2.7,24.3A7.85757,7.85757,0,0,0,60,106a7.70934,7.70934,0,0,0,7.7-6.9l2.6-24.3A7.37888,7.37888,0,0,0,65.4,67l-1.3-.5A11.58079,11.58079,0,0,0,55.9,66.5Z"
                  ></path>
                </svg>
              </div>
              <h1
                style={{ fontFamily: "montserrat" }}
                className="font-bold text-2xl text-white"
              >
                Best Quality
              </h1>
              <p className="font-thin text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita minima voluptas{" "}
              </p>
            </div>
            <div className="w-[280px]  p-6 flex flex-col gap-[20px] h-[300px] rounded-[5px] sm:translate-x-[-100px] floter duration-500 bg-green-500">
              <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 120"
                  id="podcasts"
                  width={40}
                  height={40}
                  fill="blue"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="60"
                      x2="60"
                      y1="-104.13"
                      y2="15.87"
                      gradientTransform="translate(0 104)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#73d9f0"></stop>
                      <stop offset="1" stop-color="#73d9f0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#a)"
                    fill-rule="evenodd"
                    d="M94,120H26A25.9482,25.9482,0,0,1,0,94V26A25.9482,25.9482,0,0,1,26,0H94a25.9482,25.9482,0,0,1,26,26V94A25.9482,25.9482,0,0,1,94,120Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M74.9,79.7l.5-4.4a8.85417,8.85417,0,0,0,0-2.3,23,23,0,1,0-30.8,0,17.63337,17.63337,0,0,0,0,2.3l.5,4.4a28,28,0,1,1,29.8,0ZM73.2,94.9l.6-5.5a37.125,37.125,0,1,0-27.6-.1l.6,5.5a41.84979,41.84979,0,1,1,26.4.1Z"
                  ></path>
                  <circle cx="60" cy="52" r="10" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M55.9,66.5l-1.4.5a7.61676,7.61676,0,0,0-4.9,7.8l2.7,24.3A7.85757,7.85757,0,0,0,60,106a7.70934,7.70934,0,0,0,7.7-6.9l2.6-24.3A7.37888,7.37888,0,0,0,65.4,67l-1.3-.5A11.58079,11.58079,0,0,0,55.9,66.5Z"
                  ></path>
                </svg>
              </div>
              <h1
                style={{ fontFamily: "montserrat" }}
                className="font-bold text-2xl text-white"
              >
                Best Quality
              </h1>
              <p className="font-thin text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita minima voluptas{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
