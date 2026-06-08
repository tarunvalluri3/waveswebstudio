import { gsap } from "gsap";
import { MOTION } from "./config";

export const reveal = (element) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: MOTION.y,
    },
    {
      opacity: 1,
      y: 0,
      duration: MOTION.duration,
      ease: MOTION.ease,
    },
  );
};