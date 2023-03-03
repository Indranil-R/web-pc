import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaFileAlt,
  FaDesktop,
  FaCalculator,
  FaCalendar,
  FaCamera,
  FaCog,
  FaPowerOff,
} from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";

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

export default function DialogMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
      >
        <FiMenu />
      </button>

      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0"
          onClose={() => setOpen(false)}
        >
          <div className="min-h-screen text-center">
            <Dialog.Overlay className="fixed inset-0" />

            <div
              className="fixed z-10 left-0 bottom-12 mt-2 w-48 border-2 border-gray-300 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
              static
            >
              <div className="p-2 bg-gray-100">
                <ul className="flex flex-col space-y-2">
                  <h1 className="text-center font-bold">All Apps</h1>
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
                  <FaPowerOff className="text-lg text-gray-600 hover:text-gray-800" />
                </div>
              </div>
            </div>

            {/* <div
              className="fixed right-0 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-64 border border-red-500"
            >
              <div className="p-2 bg-gray-100">
                <ul className="flex flex-col space-y-2">
                  <h1 className="text-center font-bold">All Apps</h1>
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
                  <FaPowerOff className="text-lg text-gray-600 hover:text-gray-800" />
                </div>
              </div>
            </div> */}
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
