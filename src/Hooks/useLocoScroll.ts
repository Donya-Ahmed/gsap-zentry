import { useContext } from "react";
import { LocoContext } from "../context/SmoothScrollProvider";

export const useLocoScroll = () => {
  const context = useContext(LocoContext);

  if (!context) {
    throw new Error("useLocoScroll must be used within a SmoothScrollProvider");
  }

  return context;
};