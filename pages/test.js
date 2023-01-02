import Link from "next/link";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";


const videosArr = [
  {
    video_url:"/assets/loop_1.mp4",
    title:"Abdul Samad Al Qurashi",
    sub_title:"Journey of Beauty",
    title_link:"/"
  },
  {
    video_url:"/assets/loop_2.mp4",
    title:"Arab Games",
    sub_title:"I am Arabic",
    title_link:"#",
  },
  {
    video_url:"/assets/loop_3.mp4",
    title:"Sama Damas",
    sub_title:"Be Brilliant",
    title_link:"#",
  },
  {
    video_url:"/assets/loop_4.mp4",
    title:"Jeep Cherokee",
    sub_title:"Wildly Civilized",
    title_link:"#"
  },
  {
    video_url:"/assets/loop_5.mp4",
    title:"Zabeel",
    sub_title:"Bedouin",
    title_link:"#"
  },
  {
    video_url:"/assets/loop_6.mp4",
    title:"Nissan Rogue",
    sub_title:"World of distraction",
    title_link:"#"
  },
  {
    video_url:"/assets/loop_7.mp4",
    title:"Nissan",
    sub_title:"ELECTRIFY EVERY DAY",
    title_link:"#",
  }

];

export default function Test() {
  const [x, setX] = useState(0);
  
  const handleChangeSlide = (id) => {
    setX(100 * id);
  };
  

  return (
    <div className="slider relative">
      {videosArr.map((slide, i) => (
        <div
          className={`slide`}
          key={i}
          style={{ transform: `translateX(${-x}%)` }}
        >
          <div className="bloc-video">
            <video
              ref={slide.videoEl}
              autoPlay="autoplay"
              muted
              preload="auto"
              loop
              //   className="absolute z-10 object-cover w-full h-full"
            >
              <source src={slide.video_url} />
            </video>
            <div className="absolute md:bottom-6 bottom-14 md:right-2 right-auto md:left-auto left-0 grid z-10 px-4 pb-4 text-[#F0E6CC] md:pb-8 md:pr-14 md:pl-0 md:text-right md:self-end">
              <h3 className="GroteskMedium text-[4.26vw] md:text-[1.38vw] leading-[1.2] mb-1 md:mb-2 tracking-[0.02em] font-medium">
                {slide.title}
              </h3>
              <Link
                href={slide.title_link}
                className="FormulaCondensed text-[8vw] md:text-[4.44vw] font-bold leading-[1.2] mb-2 md:mb-1 uppercase tracking-[0.02em] pointer-events-auto"
              >
                {slide.sub_title}
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="fixed pr-[4rem] flex right-0 bottom-6 z-50">
        {videosArr.map((nav, i) => (
          <div
            className="number cursor-pointer"
            onClick={() => handleChangeSlide(i)}
          >
            <CircularProgressbar
              strokeWidth='20'
              key={i}
              className={
                "dot w-7 md:h-[2rem] h-[1.09em]" + "active"
              }
              value={50}
              text={`${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
