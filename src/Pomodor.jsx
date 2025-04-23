import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Todo from './assets/Todo.jpg'

function Pomodor() {
  const [inputMinutes, setInputMinutes] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => {
    const minutes = parseInt(inputMinutes, 10);
    if (!isNaN(minutes) && minutes > 0) {
      setTimeLeft(minutes * 60);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimeLeft(0);
    setInputMinutes("");
  };

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="relative min-h-screen px-4 py-6 bg-transparent">
      
  <Link
    to="/"  className="absolute top-0 right-4 sm:top-6 sm:right-8"><img className="w-10 sm:w-12 md:w-14" src={Todo}></img></Link>
    <div className="flex flex-col items-center justify-center text-center space-y-6">
<h1 className="text-lg sm:text-xl md:text-2xl font-serif text-gray-800">"Either you run the day or, <br/> the day runs you."</h1>

    <div className="flex items-center justify-center 
                    bg-blue-900 rounded-full h-80 w-80
                    mx-auto my-auto">
      <div className="flex flex-col items-center justify-center text-center h-72 w-72
                      bg-red-950 text-white rounded-full space-y-3 px-4
                       ">
        {!isRunning && (
          <input
            type="number"
            placeholder="min"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(e.target.value)}
            className="text-black text-xs  text-center mb-1 mt-14 rounded"
          />
        )}
        <h1 className=" text-4xl mb-1 mt-16 ">{formatTime(timeLeft)}</h1>
        <div className="flex  flex-grow gap-3 ">
          <button
            onClick={handleStart}
            disabled={isRunning}
            className="bg-green-500 px-4 py-2 h-10 w-14 mt-10 text-center rounded hover:bg-green-600 disabled:opacity-50"
          >
            Start
          </button>
          <button
            onClick={handleReset}
            className="bg-red-500 px-1  py-0.5 h-10 w-14 mt-10 rounded hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Pomodor;
