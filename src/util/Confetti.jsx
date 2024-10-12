import { useEffect, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ConfettiEl = () => {
  const { width, height } = useWindowSize();
  const [runConfetti, setRunConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRunConfetti(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Confetti
      className="container"
      width={width}
      height={height}
      numberOfPieces={1500}
      recycle={false}
      run={runConfetti}
      gravity={0.1}
    />
  );
};

export default ConfettiEl;
