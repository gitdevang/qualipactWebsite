import { useRef } from "react";

const useTorchEffect = () => {
  const torchRef = useRef();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    torchRef.current.style.left = `${e.clientX - rect.left}px`;
    torchRef.current.style.top = `${e.clientY - rect.top}px`;
  };

  return { torchRef, handleMouseMove };
};

export default useTorchEffect;
