import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function SlickSlider() {
// const [progress, setProgress] = useState()
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(()=>{
    // document.querySelector(".slick-dots li:nth-child(1)").setAttribute("id", "id_1").onclick = alert('123');
    // document.querySelector(".slick-dots .slick-active").onclick = alert('123');
    const activeClass = document.querySelector('.slick-dots .slick-active').className
    setSlideIndex(activeClass)
  },[slideIndex])

  
  console.log("🚀 ~ file: slickSlider.js:14 ~ SlickSlider ~ slideIndex", slideIndex)
  
  var settings = {
    customPaging: function (i) {
      return (
        <div onClick={()=>setSlideIndex(2)}>
        <CircularProgressbar
        strokeWidth={10}
        className={
          "dot w-7 md:h-[2rem] h-[1.09em]  cursor-pointer" +
          ("active")
        }
        value={slideIndex ? '100' : '0'}
        text={`${i + 1}`}
      />
        </div>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7100,
    pauseOnHover: false,
  };
  return (
    <div className="relative">
      <div className="">
        <div className="w-screen h-screen overflow-hidden keen-slider">
          <Slider {...settings}>
            <Slide
              video_url={"/assets/loop_1.mp4"}
              title="Abdul Samad Al Qurashi"
              sub_title="Journey of Beauty"
              title_link="/"
            />
            <Slide
              video_url={"/assets/loop_2.mp4"}
              title="Arab Games"
              sub_title="I am Arabic"
              title_link="#"
            />
            <Slide
              video_url={"/assets/loop_3.mp4"}
              title="Sama Damas"
              sub_title="Be Brilliant"
              title_link="#"
            />
            <Slide
              video_url={"/assets/loop_4.mp4"}
              title="Jeep Cherokee"
              sub_title="Wildly Civilized"
              title_link="#"
            />
            <Slide
              video_url={"/assets/loop_5.mp4"}
              title="Zabeel"
              sub_title="Bedouin"
              title_link="#"
            />
            <Slide
              video_url={"/assets/loop_6.mp4"}
              title="Nissan Rogue"
              sub_title="World of distraction"
              title_link="#"
            />
            <Slide
              video_url={"/assets/loop_7.mp4"}
              title="Nissan"
              sub_title="ELECTRIFY EVERY DAY"
              title_link="#"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
}

function Slide({ video_url, title, sub_title, title_link }) {
  const videoEl = useRef(null);
  var arr = [];
  const handleLoadedMetadata = () => {
    const video = videoEl.current;
    if (!video) return;
    console.log(`The video is ${video.duration} seconds long.`);
  };

  return (
    <div className="bloc-video">
      <video
        ref={videoEl}
        autoPlay="autoplay"
        muted
        preload="auto"
        loop
        //   className="absolute z-10 object-cover w-full h-full"
      >
        <source src={video_url} />
      </video>
      <div className="absolute md:bottom-6 bottom-14 md:right-2 right-auto md:left-auto left-0 grid z-10 px-4 pb-4 text-[#F0E6CC] md:pb-8 md:pr-14 md:pl-0 md:text-right md:self-end">
        <h3 className="GroteskMedium text-[4.26vw] md:text-[1.38vw] leading-[1.2] mb-1 md:mb-2 tracking-[0.02em] font-medium">
          {title}
        </h3>
        <Link
          href={title_link}
          className="FormulaCondensed text-[8vw] md:text-[4.44vw] font-bold leading-[1.2] mb-2 md:mb-1 uppercase tracking-[0.02em] pointer-events-auto"
        >
          {sub_title}
        </Link>
      </div>
    </div>
  );
}
