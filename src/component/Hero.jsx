import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import heroImg1 from "../assets/hero-1.png";
import heroImg2 from "../assets/hero-2.png";
import heroImg3 from "../assets/hero-3.png";
import "animate.css";
import "aos/dist/aos.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="py-4 md:py-10">
          <div className="flex justify-between items-center p-6 md:p-10 lg:px-16 rounded-xl bg-gradient-to-br from-[#090D20] to-[#444488] h-[210px] md:h-[410px] lg:h-[750px]">
            <div className="space-y-2 md:space-y-4 lg:space-y-6 animate__animated animate__fadeInDown">
              <h1 className="font-bold text-white text-xl md:text-4xl lg:text-5xl text-nowrap">
                Find Your Perfect <br className="block lg:hidden" />
                Code<span className="text-[#2353ce]">Buddy!</span>
              </h1>
              <p className="text-gray-300 textarea-sm md:textarea-md lg:text-lg">
                Connect with passionate learners and build your coding journey
                today.
              </p>
            </div>
            <div className="animate__animated animate__fadeInUp">
              <img className="md:w-120 lg:w-160 " src={heroImg1} alt="Hero1" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-4 md:py-10">
          <div className="flex justify-between items-center p-6 md:p-10 lg:px-16 rounded-xl bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] h-[210px] md:h-[410px] lg:h-[750px]">
            <div className="space-y-2 md:space-y-4 lg:space-y-6 animate__animated animate__fadeInDown">
              <h1 className="font-bold text-white text-xl md:text-4xl lg:text-5xl text-nowrap">
                <span className="text-[#23ce95]">Learn,</span> Code &{" "}
                <br className="block lg:hidden" />
                Level Up!
              </h1>
              <p className="text-gray-300 textarea-sm md:textarea-md lg:text-lg">
                Discover interactive lessons and challenges to sharpen your
                coding journey.
              </p>
            </div>
            <div className="animate__animated animate__fadeInUp">
              <img
                className="w-98 md:w-120 lg:w-160 "
                src={heroImg2}
                alt="Hero2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-4 md:py-10">
          <div className="flex justify-between items-center p-6 md:p-10 lg:px-16 rounded-xl bg-gradient-to-br from-[#0A0F2C] via-[#471434] to-[#5b2694] h-[210px] md:h-[410px] lg:h-[750px]">
            <div className="space-y-2 md:space-y-4 lg:space-y-6 animate__animated animate__fadeInDown">
              <h1 className="font-bold text-white text-xl md:text-4xl lg:text-5xl text-nowrap">
                Share Knowledge, <br className="block lg:hidden" />
                <span className="text-[#cf4e13]">Build Together!</span>
              </h1>
              <p className="text-gray-300 textarea-sm md:textarea-md lg:text-lg">
                Connect with passionate learners and build your coding journey
                today.
              </p>
            </div>
            <div className="animate__animated animate__fadeInUp">
              <img className="md:w-120 lg:w-160 " src={heroImg3} alt="Hero3" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
