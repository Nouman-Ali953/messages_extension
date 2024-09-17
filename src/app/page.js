import React from "react";
import ExtensionIcon from "@mui/icons-material/Extension";
import Card from "@/components/cards/Card";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { SwipeableDrawer } from "@mui/material";
const Home = () => {
  return (
    <div className=" w-full h-100vh ">
      <div className="flex justify-center w-full flex-col gap-6  h-[70vh] px-10 mt-12">
        <h2 className="text-[2rem] text-[#FB9808] italic font-extrabold -mt-8">
          Boost Your WhatsApp Efficiency with THE ZENDER
        </h2>
        <div className="h-[1px] bg-gray-400 w-[65%]"></div>
        <h4 className="text-gray-500 text-md -mt-4 tracking-[1.2px] w-[70%]">
          Easily schedule WhatsApp messages, manage groups communication, and
          automate tasks.
        </h4>
        <p className="w-[55%] text-[1.1rem] leading-7 text-gray-400 tracking-wider font-sans">
          Perfect for business owners and group admins looking to streamline
          their workflow and save time.
        </p>

        <div className="flex w-full">
          <button
            className="mt-1 bg-[#FB9808] py-3 px-2 w-[14rem] rounded-md text-white font-semibold flex gap-3 items-center justify-center
      transition-all duration-300 ease-in-out group hover:w-[16rem]"
          >
            <ExtensionIcon />
            Add To Chrome
            {/* Arrow moves forward and fades in with opacity transition */}
            <ArrowRightAltIcon className="ml-1 transform transition-all duration-300 opacity-0 translate-x-[-10px] group-hover:translate-x-0 group-hover:opacity-100" />
          </button>
        </div>

      </div>
      <div className="mt-[10rem] bg-[#FFFCF2] w-full min-h-[180vh] flex items-center justify-center flex-col py-16">
        <div className="flex flex-col gap-4 items-center tracking-wider">
          <h2 className="text-center text-[3rem] p-3 pt-0 font-extrabold">
            Upgrade your business
          </h2>
          <p className="-mt-4 text-xl text-center">
            Use our special tools for{" "}
            <span className="font-bold hover:text-orange-500 transition-colors ease-in-out cursor-pointer">
              {" "}
              marketing
            </span>
            ,{" "}
            <span className="font-bold hover:text-orange-500 transition-colors ease-in-out cursor-pointer">
              {" "}
              support
            </span>
            ,{" "}
            <span className="font-bold hover:text-orange-500 transition-colors ease-in-out cursor-pointer">
              {" "}
              productivity.
            </span>
          </p>
        </div>
        <div className="flex mt-[8rem] w-full h-full justify-evenly flex-wrap gap-8">
          <Card title="Basic" source="/scheduler.svg" />
          <Card title="Campaigns" source="/campaigns.svg" />
          <Card title="Task" source="/tasks.svg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
