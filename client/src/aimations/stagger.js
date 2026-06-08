import { gsap } from "gsap";
import { MOTION } from "./config";

export const staggerReveal = (elements) => {
  if (!elements?.length) return;

  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: MOTION.y,
    },
    {
      opacity: 1,
      y: 0,
      duration: MOTION.duration,
      stagger: MOTION.stagger,
      ease: MOTION.ease,
    },
  );
};