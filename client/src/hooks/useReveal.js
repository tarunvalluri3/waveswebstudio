import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import useReducedMotion from "./useReducedMotion";

const useReveal = (
  triggerRef,
  animationCallback,
) => {
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;

    const element = triggerRef?.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animationCallback();

        observer.disconnect();
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [triggerRef, animationCallback, reducedMotion]);
};

export default useReveal;