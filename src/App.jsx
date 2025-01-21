import { useState } from "react";
import "./App.css";
import Counter from "./counters/Counter";
import BinaryCounter from "./counters/BinaryCounter";

function App() {
  const [isStarted, setIsStarted] = useState([false, false, false, false]);
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const updateCounter = (index, value) => {
    setCounters((prev) => prev.map((c, i) => (i === index ? value : c)));
  };

  const updateIsStarted = (index, value) => {
    setIsStarted((prev) => prev.map((s, i) => (i === index ? value : s)));
  };

  const handleStart = () => {
    setIsStarted([true, true, true, true]);
  };

  const handleReset = () => {
    setCounters([0, 0, 0, 0]);
    setIsStarted([false, false, false, false]);
  };

  const handleStop = (index) => {
    setIsStarted((prev) => prev.map((val, i) => (i === index ? false : val)));
  };

  return (
    <>
      <h1>Chronomètre</h1>

      <div className="timer">
        <h3>Incrémente de 1</h3>
        <Counter
          incr={1}
          isStarted={isStarted[0]}
          setIsStarted={(value) => updateIsStarted(0, value)}
          counter={counters[0]}
          setCounter={(value) => updateCounter(0, value)}
        />
        <button onClick={() => handleStop(0)} disabled={!isStarted[0]}>
          Stop
        </button>
      </div>

      <div className="timer">
        <h3>Incrémente de 2</h3>
        <Counter
          incr={2}
          isStarted={isStarted[1]}
          setIsStarted={(value) => updateIsStarted(1, value)}
          counter={counters[1]}
          setCounter={(value) => updateCounter(1, value)}
        />
        <button onClick={() => handleStop(1)} disabled={!isStarted[1]}>
          Stop
        </button>
      </div>

      <div className="timer">
        <h3>Compteur cyclique</h3>
        <Counter
          incr={1}
          isStarted={isStarted[2]}
          setIsStarted={(value) => updateIsStarted(2, value)}
          counter={counters[2]}
          setCounter={(value) => updateCounter(2, value)}
          cyclic={true}
        />
        <button onClick={() => handleStop(2)} disabled={!isStarted[2]}>
          Stop
        </button>
      </div>

      <div className="timer">
        <h3>Compteur binaire</h3>
        <BinaryCounter
          incr={1}
          isStarted={isStarted[3]}
          setIsStarted={(value) => updateIsStarted(3, value)}
          counter={counters[3]}
          setCounter={(value) => updateCounter(3, value)}
        />
        <button onClick={() => handleStop(3)} disabled={!isStarted[3]}>
          Stop
        </button>
      </div>

      <button
        onClick={handleStart}
        disabled={isStarted.every((starter) => starter)}
      >
        Start
      </button>
      <button
        onClick={handleReset}
        disabled={counters.every((count) => count === 0)}
      >
        Reset
      </button>
    </>
  );
}

export default App;
