import { gsap } from "gsap";

export const heroReveal = (
  heading,
  description,
  buttons,
) => {
  const tl = gsap.timeline();

  tl.fromTo(
    heading,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    },
  )
    .fromTo(
      description,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4",
    )
    .fromTo(
      buttons,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3",
    );
};