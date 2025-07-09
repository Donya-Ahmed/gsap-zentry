import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { useLocoScroll } from "../../Hooks/useLocoScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLocationArrow } from "react-icons/fa";
const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

gsap.registerPlugin(ScrollTrigger);
export default function NavBar() {
  const { progress } = useLocoScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navBarRef = React.useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!navBarRef.current) return;
    // state 1 at hero section
    if (progress <= 10) {
      setIsNavVisible(true);
      navBarRef.current.classList.remove("floating-nav");
    }
    // state 2 at scroll down
    else if (progress < lastScrollY) {
      setIsNavVisible(true);
      navBarRef.current.classList.add("floating-nav");
    }
    // state 3 at scroll up
    else if (progress > lastScrollY) {
      setIsNavVisible(false);
      navBarRef.current.classList.remove("floating-nav");
    }
    setLastScrollY(progress);
  }, [progress, lastScrollY]);
  useEffect(() => {
    gsap.to(navBarRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      ease: "none",
    });
  }, [isNavVisible]);
  return (
    <header
      ref={navBarRef}
      className={`
   fixed inset-0 top-4 border-none h-16 z-50 duration-700 transition-all sm:inset-x-4`}
    >
      <nav className="flex items-center justify-between px-4 size-full py-5">
        <div className="flex items-center gap-3">
          <img className="w-10" src="/img/logo.png" alt="logo" />
          <Button
            text={"Products"}
            className={"!bg-black"}
            rightIcon={<FaLocationArrow  className="scale-[0.5] " />}
            backgroundColor="!bg-white"
          />
        </div>
        <div className=" hidden lg:flex items-center gap-4">
          {navItems.map((item, index) => (
            <button key={index} className="nav-hover-btn">
              {item}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
