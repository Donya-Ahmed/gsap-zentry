import TiltTitle from "../TiltTitle/TiltTitle";
const footerLinks = [
  {
    title: "Explore",
    links: ["Home", "Prologue", "About", "Contact"],
  },
  {
    title: "Products",
    links: ["Radiant", "Nexus", "Zigma", "Azul"],
  },
  {
    title: "Follow Us",
    links: ["Discord", "X", "Youtube", "    Medium"],
  },
  {
    title: "Resources",
    links: ["Media Kit"],
  },
];
export default function Footer() {
  return (
    <footer className="w-screen bg-violet-300 min-h-dvh">
      <TiltTitle
        text="Zentry"
        className=" text-center  text-black font-zentry"
        maxFont={745}
      />

      <div className="container mx-auto px-8 md:px-8">
        <div className="grid  grid-cols-2 md:grid-cols-10   gap-4">
          <div className="col-span-2  ">
            {" "}
            <img
              src={`${import.meta.env.BASE_URL}img/play.svg`}
              className="translate-x-[1px] translate-y-[3px] w-[50px]"
            />{" "}
            <img
              src={`${import.meta.env.BASE_URL}img/play.svg`}
              className="translate-x-[1px] -translate-y-4 rotate-180 w-[50px]"
            />
          </div>
          {footerLinks.map((item, index) => (
            <div key={index} className="col-span-2  ">
              <h5 className="text-[10px] font-general">{item.title}</h5>
              <ul>
                {item.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className=" text-xl  text-black  "
                  >
                    <button className="  clip-path-btn py-3 px-4 rounded-2xl text-black/70 bg-transparent hover:bg-black  hover:text-violet-300  click:bg-black  click:text-violet-300 transition-all duration-500">
                      {" "}
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        
        </div>
          <div className="py-16 items-center flex justify-between font-general text-[10px]">
            <p>©Zentry 2024. All rights reserved</p>
            <p>Privacy Policy</p>
          </div>
      </div>
    </footer>
  );
}
