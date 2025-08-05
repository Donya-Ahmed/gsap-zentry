import HoveredBox from "../HoveredBox/HoveredBox";
import Button from "../Button/Button";

export default function WhoWeAre() {
  return (
    <section className="whoweAre min-h-dvh overflow-hidden relative w-screen">
      <p className="text-xs lg:text-[10px] text-center font-general my-20">
        Welcome to Zentry
      </p>
      <div className="text-5xl  md:text-6xl lg:text-8xl xl-text-9xl font-zentry special-font max-w-[60%] mx-auto">
        <span className="flex items-center justify-center">
          <span className="word">We're </span>
          <span className="word">
            b<b>u</b>ilding
          </span>
        </span>
        <span className="flex items-center justify-center">
          <span className="word">a new</span>
          <HoveredBox img={`${import.meta.env.BASE_URL}img/gallery-2.webp`} />
          <span className="word">reality</span>
        </span>
        <span className="flex items-center justify-center">
          <span className="word">that</span>
          <span className="word">
            rew<b>a</b>rds
          </span>
        </span>
        <span className="flex items-center justify-center">
          <span className="word">
            play<b>e</b>rs
          </span>
          <HoveredBox img={`${import.meta.env.BASE_URL}/img/gallery-4.webp`} />
          <span className="word">and</span>
        </span>
        <span className="flex items-center justify-center">
          <span className="word">
            empow<b>e</b>rs
          </span>
        </span>
        <span className="flex items-center justify-center">
          <span className="word">
            hu<b>m</b>ans
          </span>
          <span className="word">&</span>
          <span className="word">AI</span>
        </span>
        <span className="flex items-center justify-center">
          <span className="word">to</span>
          <HoveredBox img={`${import.meta.env.BASE_URL}/img/gallery-5.webp`} />
          <span className="word">thrive</span>
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-10 items-center justify-center">
              <p className="text-center font-circular-web text-[16px] max-w-96">Zentry envisions a future where players, emerging tech, and a new economy unite at the convergence of gaming and AI.</p>
<Button text="WHO WE Are" className="!bg-black !px-10 !text-white mb-20"></Button>
      </div>
    </section>
  );
}
