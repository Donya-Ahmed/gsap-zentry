import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";
import RoundedClipPath from "../RoundedClipPath/RoundedClipPath";
import TiltCard from "../TiltCard/TiltCard";
import Button from "../Button/Button";

export default function Contact() {
  return (
    <section className="bg-blue-50 w-screen overflow-hidden h-dvh relative">
      {/* Outer wrapper for swordman */}
      <div className="relative w-full flex justify-center top-[50%] -translate-y-1/2">
        {/* Black container with overflow-hidden */}
        <div className="px-20 bg-black rounded-lg relative my-20 py-20  h-full lg:h-[50%] w-[80%] mx-auto overflow-hidden">
          {/* contact-1 */}
          <div className="rounded-clip absolute top-0 left-16 h-auto w-72 hidden lg:block">
            <TiltCard>
              <img
                className="contact-clip-path-1 object-cover"
                src={`${import.meta.env.BASE_URL}img/contact-1.webp`}
                alt="contact-bg"
              />
            </TiltCard>
            <RoundedClipPath />
          </div>

          {/* contact-2 */}
          <div className="absolute rounded-clip bottom-0 left-16 h-auto w-72 rotate-[53deg] translate-y-[55px] overflow-hidden  hidden lg:block">
            <TiltCard>
              <img
                className="contact-clip-path-2 object-cover"
                src={`${import.meta.env.BASE_URL}img/contact-2.webp`}
                alt="contact-bg"
              />
            </TiltCard>
            <RoundedClipPath />
          </div>

          {/* Text content */}
          <div className="flex flex-col items-center justify-center gap-5 mt-40 lg:mt-0">
            <p className="font-general text-[10px] uppercase text-blue-50">
              Join Zentry
            </p>
            <AnimatedTitle
              text={
                "let&#39;s b<b>u</b>ild the <br/> new era of <br/> g<b>a</b>ming t<b>o</b>gether."
              }
              className="text-blue-50 !text-4xl md:!text-[4.5rem] w-full  !leading-[.9] !px-0"
            />
            <Button className="!bg-white !text-black !px-8" text="Contact Us" />
          </div>
        </div>

        {/*  Swordman moved OUTSIDE to escape overflow-hidden */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60  lg:left-auto  lg:right-28 xl:right-20 lg:top-28 lg:w-64 z-20">
          <img
            className="absolute md:scale-125"
            src={`${import.meta.env.BASE_URL}img/swordman-partial.webp`}
          />
          <div className="rounded-clip">
            <TiltCard>
              <img
                className="sword-man-clip-path md:scale-125"
                src={`${import.meta.env.BASE_URL}img/swordman.webp`}
              />
            </TiltCard>
            <RoundedClipPath />
          </div>
        </div>
      </div>
    </section>
  );
}
