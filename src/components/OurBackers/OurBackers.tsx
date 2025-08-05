import  { useEffect } from "react";
import OurBackersItem from "../OurBackersItem/OurBackersItem";
import { MainContainer } from "../../App";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default function OurBackers() {
    useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia(); 
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
        trigger: ".ourBackers-section",
        start: "top top",
        end: "+=1000px",
        pin: ".left-column-content-backers",
        pinSpacing: false,
        scroller: MainContainer,
        // markers: true,
      });
      });

      return () => mm.revert(); 
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="ourBackers-section bg-black w-screen overflow-hidden py-8">
      <div className="container mx-auto px-4 grid grid-cols-6 mt-20 gap-4">
        <div className="left-column-content-backers col-span-2 lg:col-span-2 hidden lg:block">
          <div>
            <p className="text-[10px] text-blue-50 max-w-64">
              Our backers include top-tier VCs, funds, and companies, providing
              expertise, network and resources to fuel our project's success.
            </p>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-3">
          {" "}
          <div>
            <OurBackersItem
              item={
                <>
                  O<b>U</b>R PARTNERS
                </>
              }
              aside={""}
            />
            <OurBackersItem item={<>YZiLabs</>} aside={"BACKERS"} />
            <OurBackersItem item={<>Coinbase Ventures</>} aside={"BACKERS"} />
            <OurBackersItem item={<>Pantera Capital</>} aside={"BACKERS"} />
            <OurBackersItem item={<>DeFiance Capital</>} aside={"BACKERS"} />
            <OurBackersItem item={<>Animoca Brands</>} aside={"BACKERS"} />
            <OurBackersItem item={<>SkyVision Capital</>} aside={"BACKERS"} />
            <OurBackersItem item={<>Play Venture</>} aside={"BACKERS"} />
            <OurBackersItem item={<>Vessel Capital</>} aside={"BACKERS"} />
            <OurBackersItem item={<>Arche Fund</>} aside={"BACKERS"} />
            <OurBackersItem item={<>MarblexGAMING</>} aside={"GAMING"} />
            <OurBackersItem item={<>Fnatic</>} aside={"GAMING"} />
            <OurBackersItem item={<>XSETGAMING</>} aside={"GAMING"} />
            <OurBackersItem item={<>Jambo</>} aside={"WEB3"} />
            <OurBackersItem item={<>AWS</>} aside={"BRANDS"} />
          </div>
        </div>
      </div>
    </section>
  );
}