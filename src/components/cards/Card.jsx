import Image from "next/image";
import React from "react";
import styles from "./card.module.scss"; // Assuming you intend to use some styles from SCSS
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const Card = ({ source, title }) => {
  return (
    <div
      className={`${styles.custom_container} w-[22rem] h-[35rem] bg-white rounded-[1.6rem] shadow-lg `}
    >
      <div
        className={`${styles.wrapper} flex flex-col items-center py-10 w-full h-full cursor-pointer `}
      >
        <div className="w-full h-[10rem] flex items-center justify-center">
          <Image src={source} width={145} height={145} alt="ihs" />
        </div>
        <h2
          className={`${styles.title} font-extrabold text-4xl text-center hover:text-orange-500 transition-colors ease-in-out`}
        >
          {title}
        </h2>
        <p>
          Simply schedule one-time or recurring messages that arrive exactly at
          the right time.
        </p>
        <ul className="mt-8 flex gap-3 flex-col">
          <li><DoneAllIcon /> Import from Excel / CSV</li>
          <li><DoneAllIcon /> Repeat every day/week/month</li>
          <li><DoneAllIcon /> Unlimited recipients</li>
        </ul>
        <button><PlayArrowIcon/> Watch Scheduler</button>
      </div>
    </div>
  );
};

export default Card;
