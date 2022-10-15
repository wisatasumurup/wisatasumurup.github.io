import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import { Autoplay, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import cards from "../data/cards";
import HeroCard from "./hero-card";

const HeroSection = () => {
  const [indexHero, setIndexHero] = useState(0);

  return (
    <div
      className="bg-cover bg-center bg-fixed pt-36"
      style={{ backgroundImage: `url(${cards[indexHero].image})` }}
    >
      <div className="max-w-7xl p-2 sm:px-6 sm:py-10 lg:px-8 lg:py-24 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="basis-full md:basis-1/3 text-white min-w-0">
            <h2 className="text-xl font-medium mb-2">Selamat datang di</h2>
            <h1 className="text-5xl font-bold font-abril mb-6">
              WISATA
              <br />
              DESA SUMURUP
            </h1>
            <p className="md:text-base border-l-4 border-l-primary pl-4">
              Wisata outdoor yang menawarkan perpaduan suasana alam pegunungan
              yang asri dengan pemandangan langsung dari bendungan Bagong dari
              sisi yang ikonik.
            </p>
          </div>
          <div className="basis-full md:basis-2/3 min-w-0">
            <Swiper
              modules={[EffectCoverflow, Autoplay]}
              onSlideChange={(swiper) => setIndexHero(swiper.activeIndex)}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 30,
                stretch: 30,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView="auto"
              watchSlidesProgress={true}
            >
              {cards.map((data, index) => (
                <SwiperSlide
                  key={`swiper-slide-${index}`}
                  className="max-w-[200px] h-full transition duration-500 ease-in-out"
                >
                  <HeroCard {...data} />
                </SwiperSlide>
              ))}
              <div className="flex items-center justify-center gap-2 mt-6 mb-2">
                <SlideButtons
                  allowSlidePrev={indexHero !== 0}
                  allowSlideNext={indexHero !== cards.length - 1}
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

const SlideButtons = ({ allowSlidePrev, allowSlideNext }) => {
  const swiper = useSwiper();

  return (
    <Fragment>
      <button
        className="rounded-full p-2 aspect-square flex items-center justify-center shadow-lg bg-white hover:bg-secondary disabled:bg-gray-500 text-black disabled:text-white"
        disabled={!allowSlidePrev}
        onClick={allowSlideNext ? () => swiper.slidePrev() : null}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="rounded-full p-2 aspect-square flex items-center justify-center shadow-lg bg-white hover:bg-secondary disabled:bg-gray-500 text-black disabled:text-white"
        disabled={!allowSlideNext}
        onClick={allowSlideNext ? () => swiper.slideNext() : null}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </Fragment>
  );
};

export default HeroSection;
