import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HomeProductCard } from "../HomeSectionCard/HomeProductCard";
// import { Button } from "@headlessui/react";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Button } from "@mui/material";

export const HomeSectionCarousel = ({ data, sectionName }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const responsive = {
      0: { items: 1 },
      720: { items: 2.4 },
      1024: { items: 4.5 },
   };

   const slidePrev = () => setActiveIndex(activeIndex - 1);
   const slideNext = () => setActiveIndex(activeIndex + 1);
   const syncActiveIndex = ({ item }) => setActiveIndex(item);

   const items = [1, 1, 1, 1, 1, 1].map((item) => <HomeProductCard />);

   return (
      <div className="relative">
         <h2 className="text-2xl font-semibold">{sectionName}</h2>
         <div className="relative p-5">
            <AliceCarousel
               autoPlay
               autoPlayStrategy="none"
               autoPlayInterval={3000}
               animationDuration={1000}
               animationType="fadeout"
               touchTracking={false}
               disableDotsControls
               disableButtonsControls
               items={items}
               mouseTracking
               responsive={responsive}
               onSlideChanged={syncActiveIndex}
               activeIndex={activeIndex}
            />
            {/* Arrow Left */}
            {activeIndex !== 0 && (
               <Button
                  className="z-50"
                  variant="contained"
                  sx={{
                     position: "absolute",
                     top: "8rem",
                     left: "0rem",
                     transform: "translateX(-50%) rotate(-90deg)",
                     bgcolor: "transparent",
                  }}
                  aria-label="précédent"
                  onClick={slidePrev}
               >
                  <KeyboardArrowLeft
                     sx={{ transform: "rotate(90deg)", color: "black" }}
                  />
               </Button>
            )}
            {/* Arrow Right */}
            {activeIndex !== items.length - 5 && (
               <Button
                  className="z-50"
                  variant="contained"
                  sx={{
                     position: "absolute",
                     top: "8rem",
                     right: "0rem",
                     transform: "translateX(50%) rotate(90deg)",
                     bgcolor: "transparent",
                  }}
                  aria-label="suivant"
                  onClick={slideNext}
               >
                  <KeyboardArrowLeft
                     sx={{ transform: "rotate(90deg)", color: "black" }}
                  />
               </Button>
            )}
         </div>
      </div>
   );
};
