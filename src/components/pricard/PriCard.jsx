import Image from "next/image";
import React from "react";
import styles from "./card.module.scss"; // Assuming you intend to use some styles from SCSS
import DoneAllIcon from "@mui/icons-material/DoneAll";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const PriCard = ({ points, title, info }) => {
  return (
    <div
      className={`${styles.custom_container} w-[18rem] min-h-[20rem] bg-white rounded-[1.6rem] shadow-lg flex flex-col justify-between`} // Make it a flex container to manage content layout
    >
      <div
        className={`${styles.wrapper} flex flex-col items-center py-1 w-full cursor-pointer`}
      >
        {/* Header Section */}
        <div className="w-full h-[4rem] flex items-center justify-center">
          <h2 className="text-green-600 font-bold tracking-[1.2px]">{info}</h2>
        </div>

        {/* Title */}
        <h2
          className={`${styles.title} font-extrabold text-4xl text-center hover:text-orange-500 transition-colors ease-in-out`}
        >
          {title}
        </h2>

        {/* Description */}
        <p className="text-center mt-2">
          Simply schedule one-time or recurring messages that arrive exactly at
          the right time.
        </p>

        {/* Points List */}
        <ul className="mt-8 flex gap-3 flex-col p-3 align-baseline grow overflow-auto px-4">
          {points.map((point, index) => (
            <li key={index} className="flex">
              <DoneAllIcon className="text-green-600 mr-2" /> {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section (always at the bottom) */}
      <div className="flex justify-center py-4 w-[100%] items-center">
        <button className="w-[80%] py-2 px-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
          Start For Free
        </button>
      </div>
    </div>
  );
};

export default PriCard;
