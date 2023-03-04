import { useState } from "react";
import { evaluate } from "mathjs";
import { RiDivideFill } from "react-icons/ri";
import {
  MdClear,
  MdAdd,
  MdRemove,
  MdClose,
  MdKeyboard,
  MdMinimize,
} from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { TbEqual } from "react-icons/tb";
import { BsDot } from "react-icons/bs";
import { AiFillCloseCircle, AiFillMinusCircle } from "react-icons/ai";
function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setResult((prev) => prev + value);
  };

  const handleClear = () => {
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const res = evaluate(result);
      setResult(res.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="rounded-lg shadow-lg w-80 h-96 relative rounded-xl bg-white shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 p-8">
      <div class="absolute top-0 left-0 right-0 h-8 bg-slate-100 px-2 text-xl text-gray-500">
        <div className="font-bold text-center">Calculator</div>
        <div className="flex items-center space-x-1  absolute left-2 top-0 bottom-0">
          <button className="bg-red-500 rounded-full h-4 w-4"></button>
          <button className="bg-green-500 rounded-full h-4 w-4"></button>
        </div>
      </div>
      <div class="text-4xl font-bold mb-6 mt-6 h-12 border border-blue-50 shadow text-right p-1 text-white">
        {result}
      </div>
      <div class="grid grid-cols-4 gap-2">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick("9")}
        >
          9
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded grid justify-center items-center"
          onClick={() => handleClick("/")}
        >
          <RiDivideFill />
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick("6")}
        >
          6
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  grid justify-center items-center"
          onClick={() => handleClick("*")}
        >
          <MdClose />
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick("3")}
        >
          3
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  grid justify-center items-center"
          onClick={() => handleClick("+")}
        >
          <MdAdd />
        </button>
        <button
          class="bg-blue-500 col-span-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  grid justify-center items-center"
          onClick={() => handleClick(".")}
        >
          <BsDot />
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  grid justify-center items-center"
          onClick={() => handleClick("-")}
        >
          <MdRemove />
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-3  grid justify-center items-center"
          onClick={() => handleCalculate()}
        >
          <TbEqual />
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  grid justify-center items-center"
          onClick={() => handleClear()}
        >
          <FiDelete />
        </button>
      </div>
    </div>
  );
}

export default Calculator;
