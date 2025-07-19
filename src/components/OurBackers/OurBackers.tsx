import React from "react";
import OurBackersItem from "../OurBackersItem/OurBackersItem";

export default function OurBackers() {
  return (
    <section className="bg-black w-screen overflow-hidden ">
        <div className="container mx-auto px-4 grid grid-cols-6 mt-20 gap-4">
            <div className="col-span-2 lg:col-span-2">
                <div>
    <p className="text-[10px] text-blue-50 max-w-64">Our backers include top-tier VCs, funds, and companies, providing expertise, network and resources to fuel our project's success.
</p>
</div>
            </div>

<div className="col-span-2 lg:col-span-3"> <div>
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


      </div></div>
        </div>
     
    </section>
  );
}
