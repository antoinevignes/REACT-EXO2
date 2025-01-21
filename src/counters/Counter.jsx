/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Counter = ({
  incr,
  isStarted,
  setIsStarted,
  counter,
  setCounter,
  cyclic,
}) => {
  useEffect(() => {
    let timer;
    if (isStarted) {
      if (counter === 20) {
        if (!cyclic) {
          setIsStarted(false);
          setCounter(0);
        } else {
          setCounter(0);
        }
      } else {
        timer = setTimeout(() => {
          setCounter(counter + incr);
        }, 1000);
      }
    }
    return () => clearTimeout(timer);
  }, [counter, incr, isStarted, setIsStarted, setCounter, cyclic]);

  return <p>{counter}</p>;
};

export default Counter;
