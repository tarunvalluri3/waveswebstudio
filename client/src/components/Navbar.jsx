import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation, useNavigate, Link } from "react-router-dom";
import { gsap } from "gsap";

const nav = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

// 👇 ONLY CHANGE HERE
const Navbar = ({ logoRef }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const underlineRef = useRef(null);
  const linksRef = useRef([]);
  const menuRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const activeIndex = nav.findIndex(
      (item) => item.path === location.pathname,
    );

    const el = linksRef.current[activeIndex];
    if (!el || !underlineRef.current) return;

    gsap.to(underlineRef.current, {
      x: el.offsetLeft,
      width: el.offsetWidth,
      duration: 0.55,
      ease: "power3.out",
    });
  }, [location.pathname]);

  const handleHover = (index) => {
    const el = linksRef.current[index];
    if (!el) return;

    gsap.to(underlineRef.current, {
      x: el.offsetLeft,
      width: el.offsetWidth,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    const activeIndex = nav.findIndex(
      (item) => item.path === location.pathname,
    );
    const el = linksRef.current[activeIndex];
    if (!el) return;

    gsap.to(underlineRef.current, {
      x: el.offsetLeft,
      width: el.offsetWidth,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    if (openMenu && menuRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        menuRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power3.out" },
      ).fromTo(
        menuRef.current.querySelectorAll("li"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: "power4.out",
        },
        "-=0.3",
      );
    }
  }, [openMenu]);

  const handleMobileNavigate = (path) => {
    const tl = gsap.timeline({
      onComplete: () => {
        setOpenMenu(false);
        navigate(path);
      },
    });

    tl.to(menuRef.current.querySelectorAll("li"), {
      y: 20,
      opacity: 0,
      stagger: 0.05,
      duration: 0.3,
      ease: "power2.inOut",
    }).to(
      menuRef.current,
      {
        opacity: 0,
        scale: 0.98,
        duration: 0.5,
        ease: "power3.inOut",
      },
      "-=0.1",
    );
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-black pt-0.5">
      <div className="max-w-7xl mx-auto flex justify-between p-4 items-center">
        {/* 🔥 ONLY CHANGE HERE */}
        <NavLink
          to="/"
          ref={logoRef}
          className="font-semibold text-[22px] tracking-[-0.02em]"
        >
          Wav<span className="text-red-600">e</span>s.
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex relative" onMouseLeave={handleLeave}>
          <ul className="flex gap-8 relative">
            {nav.map((item, index) => (
              <li
                key={item.path}
                ref={(el) => (linksRef.current[index] = el)}
                onMouseEnter={() => handleHover(index)}
                className="cursor-pointer"
              >
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className="text-[15px] font-medium"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <span
            ref={underlineRef}
            className="absolute bottom-0 h-[2px] bg-red-600 rounded-full"
            style={{ width: 0 }}
          />
        </div>

        {/* CTA */}
        <div className="hidden lg:flex">
          <Link
            to="/book-call"
            className="
      text-black
      text-[15px]
      font-medium
      border-b
      border-red-600
      pb-1
      w-fit
      hover:border-black/40
      transition-all
      duration-300
    "
          >
            Schedule a Call →
          </Link>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setOpenMenu(true)}>Menu</button>

          {openMenu && (
            <div
              ref={menuRef}
              className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-white"
            >
              <button
                onClick={() => setOpenMenu(false)}
                className="absolute top-4 right-4 text-xl"
              >
                ✕
              </button>

              <ul className="flex flex-col gap-10 text-lg">
                {nav.map((item) => (
                  <li key={item.path}>
                    <button
                      onClick={() => handleMobileNavigate(item.path)}
                      className={`relative tracking-tight transition-all duration-300 ${
                        location.pathname === item.path
                          ? "text-white after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-6 after:h-[2px] after:bg-red-600"
                          : "text-white"
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
