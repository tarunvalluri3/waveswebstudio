import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const IntroLoader = ({ onFinish, targetRef }) => {
  const overlayRef = useRef(null);
  const wavesRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onFinish(),
    });

    // STEP 1 — Clean fade in
    tl.fromTo(
      wavesRef.current,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      }
    );

    // STEP 2 — Subtext follows
    tl.fromTo(
      subRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // STEP 3 — Pause
    tl.to({}, { duration: 0.25 });

    // STEP 4 — Move WAVES
    if (targetRef?.current) {
      const rect = targetRef.current.getBoundingClientRect();

      const targetX =
        rect.left + rect.width / 2 - window.innerWidth / 2;

      const targetY =
        rect.top + rect.height / 2 - window.innerHeight / 2;

      tl.to(wavesRef.current, {
        x: targetX,
        y: targetY,
        duration: 0.75,
        ease: "power2.inOut",
      });

      tl.to(wavesRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "none",
      });

      tl.to(
        subRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
        },
        "-=0.6"
      );
    }

    // STEP 5 — Overlay fade
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power1.out",
    });
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black z-[999] flex items-center justify-center overflow-hidden"
    >
      {/* 🔥 GRAIN TEXTURE (OPTION 2) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      {/* CONTENT */}
      <div className="relative flex flex-col items-center text-center">
        
        {/* WAVES */}
        <h1
          ref={wavesRef}
          className="
            text-white
            text-[32px] 
            sm:text-[40px] 
            lg:text-[44px]
            font-heading
            font-semibold
            tracking-[-0.02em]
            will-change-transform
          "
        >
          Wav<span className="text-red-600">e</span>s.
        </h1>

        {/* WEB STUDIO */}
        <p
          ref={subRef}
          className="
            text-white/70
            text-[14px]
            sm:text-[16px]
            lg:text-[18px]
            mt-2
            tracking-[0.2em]
            uppercase
            font-sans
          "
        >
          WEB STUDIO
        </p>

      </div>
    </div>
  );
};

export default IntroLoader;