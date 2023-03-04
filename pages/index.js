import { AiFillWindows } from "react-icons/ai";
import { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiUserCircle } from "react-icons/hi";
import {
  FaFileAlt,
  FaDesktop,
  FaCalculator,
  FaCalendar,
  FaCamera,
  FaPowerOff,
} from "react-icons/fa";
import Router from "next/router";
import Head from "next/head";
import Calculator from "@/components/calculator";

const options = [
  { icon: <FaFileAlt className="text-lg text-gray-600" />, name: "Notes" },
  { icon: <FaDesktop className="text-lg text-gray-600" />, name: "Display" },
  {
    icon: <FaCalculator className="text-lg text-gray-600" />,
    name: "Calculator",
  },
  { icon: <FaCalendar className="text-lg text-gray-600" />, name: "Calendar" },
  { icon: <FaCamera className="text-lg text-gray-600" />, name: "Camera" },
];

export default function Home() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentHours, setCurrentHours] = useState("");
  const [currentMinutes, setCurrentMinutes] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString());
      setCurrentHours(now.getHours());
      setCurrentMinutes(now.getMinutes());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('background.jpg')` }}
      >

      <Calculator/>

        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 pr-4 flex justify-between items-center h-12">
          <button
            className="text-white text-2xl p-px"
            onClick={() => setOpen(true)}
          >
            <AiFillWindows className="ml-3" />
          </button>
          <div className="relative">
            <button className="px-2 py-1 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white">
              Edge
            </button>
            <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-gray-700 ring-opacity-5 transition-opacity">
              {isMenuOpen && (
                <ul className="flex flex-col space-y-2">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 hover:bg-gray-700 rounded-md p-2 w-full transition-colors duration-200 ease-in-out"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {option.icon}
                      <span className="text-base font-medium text-gray-300">
                        {option.name}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-white text-xs">
            <p className="font-bold">
              {currentHours < 10 ? "0" : ""}
              {currentHours}:{currentMinutes < 10 ? "0" : ""}
              {currentMinutes}
            </p>
            <div className="mt-px">{currentDate}</div>
          </div>
        </div>
      </section>

      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0"
          onClose={() => setOpen(false)}
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />

          <div className="min-h-screen text-center">
            <Dialog.Overlay className="fixed inset-0" />

            <div className="fixed z-10 left-0 bottom-12 mt-2 w-48  bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
              <Transition.Child
                show={open}
                as={Fragment}
                enter="transition duration-300 transform ease-in-out"
                enterFrom="opacity-0 translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition duration-300 transform ease-in-out"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-2"
              >
                <div className="p-2 ">
                  <ul className="flex flex-col space-y-2">
                    <h1 className="text-center font-bold">Menu Bar</h1>
                    {options.map((option, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 hover:bg-gray-200 rounded-md p-2 w-full"
                      >
                        {option.icon}
                        <span className="text-base font-medium text-gray-700">
                          {option.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                      <HiUserCircle className="text-3xl mr-2 text-gray-600" />
                      <span className="text-gray-700 font-medium text-lg">
                        Indranil
                      </span>
                    </div>
                    <button onClick={() => Router.push("/login")}>
                      <FaPowerOff className="text-lg text-gray-600 hover:text-gray-800" />
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
