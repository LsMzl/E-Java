import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HomeCarouselData } from "./HomeCarouselData";

const HomeCarousel = () => {
   const items = HomeCarouselData.map((item) => (
      <img
         className="cursor-pointer"
         src={item.image}
         alt={item.alt}
         role="presentation"
      />
   ));

   return (
      <div className="border">
         <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={1000}
            animationDuration={1000}
            animationType="fadeout"
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            infinite
            items={items}
            mouseTracking
         />
      </div>
   );
};

export default HomeCarousel;
