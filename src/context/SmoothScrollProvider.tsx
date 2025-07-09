import React, {
  createContext,
  useRef,
  useLayoutEffect,
  useState,
  ReactNode,
} from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LocoContextType {
  locoScroll: LocomotiveScroll | null;
  isReady: boolean;
  progress: number;
}

export const LocoContext = createContext<LocoContextType>({
  locoScroll: null,
  isReady: false,
  progress: 0,
});

interface Props {
  children: ReactNode;
}

export const SmoothScrollProvider = ({ children }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locoScrollInstance = useRef<LocomotiveScroll | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const scrollElement = document.querySelector<HTMLElement>(".main-container");
    if (!scrollElement) {
      console.error("❌ .main-container not found");
      return;
    }

    locoScrollInstance.current = new LocomotiveScroll({
      el: scrollElement,
      smooth: true,
      lerp: 0.1,
      multiplier: 1.5,
    });

    const loco = locoScrollInstance.current;

    loco.on("scroll", (obj) => {
      ScrollTrigger.update();
      setProgress(obj.scroll.y);
    });

    ScrollTrigger.scrollerProxy(scrollElement, {
      scrollTop(value) {
        return arguments.length
          ? loco.scrollTo(value!, { duration: 0, disableLerp: true })
          : loco.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollElement.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => loco.update());
    ScrollTrigger.refresh();

    setIsReady(true);

    return () => {
      loco.destroy();
      ScrollTrigger.removeEventListener("refresh", () => loco.update());
    };
  }, []);

  return (
    <LocoContext.Provider
      value={{
        locoScroll: locoScrollInstance.current,
        isReady,
        progress,
      }}
    >
      <div id="smooth-scroll" ref={scrollRef}>
        {children}
      </div>
    </LocoContext.Provider>
  );
};