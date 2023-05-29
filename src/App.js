import { useCallback, useState } from "react";
import "./App.css";

let abr = undefined;

function App() {
  const [time, setTime] = useState(0);
  const [flag, setFlag] = useState(false);

  const HandleStart = () => {
    console.log("watch started");
    abr = setInterval(() => {
      setTime((x) => x + 1);
    }, 1000);
    setFlag(true);
  };
  const HandleStop = () => {
    console.log("watch stopped");
    clearInterval(abr);
    setFlag(false);
  };
  const HandleReset = () => {
    setTime(0);
    console.log("watch reset");
    clearInterval(abr);
    setFlag(false);
  };

  return (
    <>
      <div className="App  h-screen bg-sky-950 py-20">
        <h1 className="text-center text-4xl text-white font-bold my-10">Stop Watch</h1>
        <div className="watchbg py-10 flex justify-center items-center">
          <div className="flex  text-white w-40 rounded-full">
            <div className="flex justify-center p-2">
              <h1 className=" text-center text-9xl">{time}</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="control-buttons my-10">
            <button
              disabled={flag}
              onClick={HandleStart}
              className="bg-gray-200 hover:bg-gray-400 font-bold px-6 py-2 rounded mx-4"
            >
              Start
            </button>

            <button
              onClick={HandleStop}
              className="bg-gray-200 hover:bg-gray-400 font-bold px-6 py-2 rounded mx-4"
            >
              Stop
            </button>

            <button
              onClick={HandleReset}
              className="bg-gray-200 hover:bg-gray-400 font-bold px-6 py-2 rounded mx-4"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
