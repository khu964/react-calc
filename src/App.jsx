import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300'>
      <div className='bg-gray-800 p-8 rounded-lg shadow-lg w-80'>
        <h1 className='text-3xl font-bold mb-4 text-center text-white'>Calculator</h1>
        <div className='mb-4'>
          <input
            type="text"
            value={input}
            readOnly
            className='w-full text-right bg-gray-700 p-2 rounded-lg text-white mb-2'
          />
          <div className='text-right text-2xl font-semibold text-white'>{result}</div>
        </div>
        <div className='grid grid-cols-4 gap-4'> {/* Increased gap from 2 to 4 */}
          <button onClick={() => handleClick("1")} className="bg-gray-600 p-4 rounded-full text-white hover:bg-gray-500">1</button>
          <button onClick={() => handleClick("2")} className="bg-gray-600 p-4 rounded-full text-white hover:bg-gray-500">2</button>
          <button onClick={() => handleClick("3")} className="bg-gray-600 p-4 rounded-full text-white hover:bg-gray-500">3</button>
          <button onClick={() => handleClick("+")} className="bg-green-500 p-4 rounded-full text-white hover:bg-green-400">+</button>
          <button onClick={() => handleClick("4")} className="bg-gray-600 p-4 rounded-full text-white hover:bg-gray-500">4</button>
          <button onClick={() => handleClick("5")} className="bg-gray-600 p-4 rounded-full text-white hover:bg-gray-500">5</button>
          <button onClick={() => handleClick("6")} className="bg-gray-600 p-4 rounded-full text-white hover:bg-gray-500">6</button>
          <button onClick={() => handleClick("-")} className="bg-red-500 p-4 rounded-full text-white hover:bg-red-400">-</button>
          <button onClick={() => handleClick("7")} className="bg-gray-600 p-4 rounded-full text-white hover:bg-gray-500">7</button>
          <button onClick={() => handleClick("8")} className="bg-gray-600 p-4 rounded-full text-white hover:bg-gray-500">8</button>
          <button onClick={() => handleClick("9")} className="bg-gray-600 p-4 rounded-full text-white hover:bg-gray-500">9</button>
          <button onClick={() => handleClick("*")} className="bg-blue-500 p-4 rounded-full text-white hover:bg-blue-400">*</button>
          <button onClick={clear} className="bg-blue-600 p-4 rounded-full text-white hover:bg-blue-500 ">AC</button>
          <button onClick={() => handleClick("0")} className="bg-gray-600 p-4 rounded-full text-white hover:bg-gray-500 ">0</button>
          <button onClick={() => handleClick(".")} className="bg-gray-600 p-4 rounded-full text-white hover:bg-gray-500">.</button>
          <button onClick={() => handleClick("/")} className="bg-yellow-500 p-4 rounded-full text-white hover:bg-yellow-400">/</button>
          <button onClick={calculate} className="bg-blue-600 p-4 rounded-full text-white hover:bg-blue-500 ">=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
