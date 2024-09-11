import React from "react";
import ExtensionIcon from "@mui/icons-material/Extension";
import Slider from "@/components/slider/Slider";
import Card from "@/components/cards/Card";

const Home = () => {
  return (
    <div className=" w-full h-100vh ">
      <div className="flex justify-center w-full flex-col gap-6  h-[70vh] px-10 mt-12">
        <h2 className="text-[2rem] text-[#FB9808] italic font-extrabold -mt-8">
          Supertool For WhatsApp
        </h2>
        <div className="w-[50%] h-[1px] bg-gray-400"></div>
        <h4 className="text-gray-500 text-md -mt-4 tracking-[1.2px]">
          Smart Chrome Extension For WhatsApp Web
        </h4>
        <p className="w-[55%] text-[1.1rem] leading-7 text-gray-400">
          JONI enhances WhatsApp Web with cool features to increase your
          productivity and save you time on a daily basis
        </p>
        <div className=" flex  w-full">
          <button
            className="mt-1 bg-[#FB9808] py-3 px-2 w-[12rem] rounded-md text-white font-semibold flex gap-3 items-center justify-center
              hover:bg-white hover:text-[#FB9808] hover:border border-gray-500 transition-colors duration-300 ease-in-out"
          >
            <ExtensionIcon /> Add To Chrome
          </button>
        </div>
      </div>
      <div className="mt-[10rem] bg-[#FFFCF2] w-full h-[180vh] flex items-center justify-center flex-col py-16">
        <div className="flex flex-col gap-4 items-center tracking-wider">
          <h2 className="text-center text-[3rem] p-3 pt-0 font-extrabold">
            Upgrade your business
          </h2>
          <p className="-mt-4 text-xl">
            Use our special tools for <span className="font-bold hover:text-orange-500 transition-colors ease-in-out cursor-pointer"> marketing</span>,{" "}
            <span className="font-bold hover:text-orange-500 transition-colors ease-in-out cursor-pointer"> support</span>, <span className="font-bold hover:text-orange-500 transition-colors ease-in-out cursor-pointer"> productivity.</span>
          </p>
        </div>
        <div className="flex mt-[8rem] w-full h-full justify-evenly">
          <Card title="Basic" source='/scheduler.svg'/>
          <Card title="Campaigns" source='/campaigns.svg'/>
          <Card title="Task" source='/tasks.svg'/>
        </div>
        {/* <Slider /> */}
      </div>
    </div>
  );
};

export default Home;
