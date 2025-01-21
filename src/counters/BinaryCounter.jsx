/* eslint-disable react/prop-types */
import { useEffect } from "react";

const BinaryCounter = ({ incr, isStarted, counter, setCounter }) => {
  useEffect(() => {
    let timer;
    if (isStarted) {
      if (counter === 2) {
        setCounter(0);
      } else {
        timer = setTimeout(() => {
          setCounter(counter + incr);
        }, 1000);
      }
    }
    return () => clearTimeout(timer);
  }, [counter, incr, isStarted, setCounter]);

  return <p>{counter}</p>;
};

export default BinaryCounter;
