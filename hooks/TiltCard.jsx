import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

function useTiltCard(options) {
  const tiltRef = useRef(null); // Initializing ref to null

  useEffect(() => {
    if (tiltRef.current) { // Check if tiltRef.current is not null
      VanillaTilt.init(tiltRef.current, options);
    }

    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) { // Ensure vanillaTilt exists before calling destroy
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return { tiltRef };
}

export default useTiltCard;