"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PageTitle from "@/components/ui/PageTItle";
import { MapPin, Check } from "lucide-react";

import {
  radialGradient,
  linearGradient,
  solids,
} from "../../constants/colorConstants";

type Props = {};

export default function ThemePage({ }: Props) {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("");

  useEffect(() => {
    const savedColor = localStorage.getItem("selectedColor");
    if (savedColor) {
      setSelectedColor(savedColor);
    }
  }, []);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleColortext = (color: string) => {
    setTextColor(color);
  };

  const handleSaveClick = () => {
    localStorage.setItem("selectedColor", selectedColor);
  };

  const solids = [
    "bg-black",
    "bg-gray-200",
    "bg-white",
    "bg-blue-400",
    "bg-red-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-indigo-400",
    "bg-teal-400",
    "bg-orange-400",
  ];

  const linearGradient = [
    "bg-gradient-to-r from-cyan-400 to-blue-400",
    "bg-gradient-to-r from-sky-400 to-indigo-400",
    "bg-gradient-to-r from-white to-gray-400",
    "bg-gradient-to-r from-blue-400 to-green-400",
    "bg-gradient-to-r from-red-400 to-yellow-400",
    "bg-gradient-to-r from-green-400 to-teal-400",
    "bg-gradient-to-r from-yellow-400 to-orange-400",
    "bg-gradient-to-r from-purple-400 to-pink-400",
    "bg-gradient-to-r from-pink-400 to-red-400",
    "bg-gradient-to-r from-indigo-400 to-purple-400",
    "bg-gradient-to-r from-teal-400 to-blue-400",
    "bg-gradient-to-r from-orange-400 to-red-400",
  ];

  const radialGradient = [
    "bg-[radial-gradient(circle_at_center,_#ffcccc,_#ccccff)]",
    "bg-[radial-gradient(circle_at_center,_#ccffcc,_#ffffcc)]",
    "bg-[radial-gradient(circle_at_center,_#e0b0ff,_#ffccff)]",
    "bg-[radial-gradient(circle_at_center,_#ffdab9,_#ccff99)]",
    "bg-[radial-gradient(circle_at_center,_#b2dfdb,_#b3cde0)]",
    "bg-[radial-gradient(circle_at_center,_#ffc0cb,_#e0ffff)]",
    "bg-[radial-gradient(circle_at_center,_#e0e0d1,_#ffb3ff)]",
    "bg-[radial-gradient(circle_at_center,_#ccffff,_#ffccff)]",
    "bg-[radial-gradient(circle_at_center,_#ccccff,_#ffecb3)]",
    "bg-[radial-gradient(circle_at_center,_#d9d9d9,_#f2f2f2)]",
  ];

  const foreground = ["black", "white", "gray-500"];

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex-1">
        <div className="flex md:flex-row justify-between items-center py-3 px-6 bg-gray-50 border-b ">
          <PageTitle title="Themes" />
          <button className="flex justify-evenly rounded-md items-center p-2 rounded bg-gray-100 font-semibold">
            <p className="max-sm:hidden">RAABIN SINGH S A</p>
            <img
              width={40}
              height={40}
              className="rounded-full "
              src="https://lh3.googleusercontent.com/pw/AP1GczPf9Jb1kDanO6UocdsOzcWWg3T1VpBi0kdPNpc7VMSecx3zy91pdT1Z9YUm5EYEo68uRscOUUvXJovgM9dJWew4FqY4TWXaQZcfiTdbUs7lRqXz1j6k8JJ-28coLF8QJ7lpwEzx6ihoY5YKcGYU8Z-p=w651-h869-s-no-gm?authuser=0"
            />
          </button>
        </div>
        <main>
          <div className="flex flex-col md:flex-row m-4 p-4 md:p-8 justify-between items-center bg-gray-200 rounded-md shadow-sm">
            <div className="ml-4 rounded-md text-lg max-sm:text-sm font-bold">
              Apply a skin to your profile
            </div>
            <div className="flex justify-evenly gap-4 mt-4 md:mt-0">
              <button className="bg-gray-100 p-2 max-sm:text-sm rounded-md">
                + Custom
              </button>
              <button
                className="rounded-md bg-black text-white p-2 max-sm:text-sm"
                onClick={handleSaveClick}
              >
                Save
              </button>
            </div>
          </div>
          <div className="flex max-lg:flex-col">
            <div className="p-2 w-full md:w-[500px] ">
              <h1 className="text-lg font-bold">Solids</h1>
              <div className="flex gap-2 w-[500px] max-sm:w-full flex-wrap">
                {solids.map((color) => (
                  <div
                    key={color}
                    className={`w-10 h-10 ${color}  border cursor-pointer flex items-center justify-center`}
                    onClick={() => handleColorClick(color)}
                  >
                    {selectedColor === color && <Check />}
                  </div>
                ))}
              </div>
              <h1 className="text-lg font-bold">Linear Gradient</h1>
              <div className="flex gap-2 w-[500px] max-sm:w-full flex-wrap">
                {linearGradient.map((gradient) => (
                  <div
                    key={gradient}
                    className={`w-10 h-10 ${gradient}  border cursor-pointer flex items-center justify-center`}
                    onClick={() => handleColorClick(gradient)}
                  >
                    {selectedColor === gradient && <Check />}
                  </div>
                ))}
              </div>
              <h1 className="text-lg font-bold">Radial Gradient</h1>
              <div className="flex gap-2 max-sm:w-full flex-wrap">
                {radialGradient.map((gradient) => (
                  <div
                    key={gradient}
                    className={`w-10 h-10 ${gradient}  border cursor-pointer flex items-center justify-center`}
                    onClick={() => handleColorClick(gradient)}
                  >
                    {selectedColor === gradient && <Check />}
                  </div>
                ))}
              </div>
              <h1 className="text-lg font-bold">Text Color</h1>
              <div className=" flex gap-2 max-sm:w-full">
                {foreground.map((color) => (
                  <div
                    key={color}
                    className={`w-10 h-10 bg-${color}  border cursor-pointer flex items-center justify-center`}
                    onClick={() => handleColortext(color)}
                  >
                    {textColor === color && <Check />}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full border p-2">
              <div
                className={`w-full ${selectedColor} rounded-xl text-${textColor}`}
              >
                <div
                  className={`p-2 border-dashed ${selectedColor} rounded-md `}
                >
                  <div className="font-sans  leading-tight min-h-screen bg-grey-lighter p-8">
                    <div
                      className={` ${selectedColor} max-w-lg relative  mx-auto bg-white rounded-lg overflow-hidden shadow-lg`}
                    >
                      <div
                        className={`rounded-xl  border-dashed border-2 overflow-hidden p-2`}
                      >
                        <img
                          className=" w-full object-cover rounded-xl h-40"
                          src="https://th.bing.com/th/id/OIP.mmgqLAo7CqmHU2-V1_pBfwHaEm?rs=1&pid=ImgDetMain"
                        />
                      </div>
                      <div
                        className={`border-black ${selectedColor} px-4 pb-6`}
                      >
                        <div className="text-center rounded-full border-dashed border-2 absolute top-20 sm:text-left sm:flex mb-4">
                          <img
                            width={128}
                            height={128}
                            className="rounded-full"
                            src="https://lh3.googleusercontent.com/pw/AP1GczPf9Jb1kDanO6UocdsOzcWWg3T1VpBi0kdPNpc7VMSecx3zy91pdT1Z9YUm5EYEo68uRscOUUvXJovgM9dJWew4FqY4TWXaQZcfiTdbUs7lRqXz1j6k8JJ-28coLF8QJ7lpwEzx6ihoY5YKcGYU8Z-p=w651-h869-s-no-gm?authuser=0"
                          />
                        </div>

                        <div className="py-16">
                          <h3 className="font-bold text-2xl mb-1">
                            Raabin singh S A
                          </h3>
                          <div className="inline-flex text-grey-dark sm:flex items-center font-semibold ">
                            (MERN) Full Stack Developer
                          </div>
                          <div className="inline-flex text-grey-dark sm:flex items-center font-semibold  pt-2">
                            <MapPin />
                            TAMIL NADU
                          </div>
                          <div
                            className={`mt-4 inline-flex text-grey-dark sm:flex items-center rounded-lg border-gray-200 border-dashed p-2 border-2 ${selectedColor}`}
                          >
                            <p className="">
                            Extremely talented and driven frontend developer with a love for creating user-friendly experiences.strong enthusiasm for computer programming and
                            solving of issues.  I now have real experience developing web applications with React.js and the MERN stack.
                            </p>
                          </div>
                          <div className="mt-4">
                            <p>Bio</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
