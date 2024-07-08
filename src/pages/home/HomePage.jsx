import React from "react";

import { HomeSectionCarousel } from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";

const HomePage = () => {
   return (
      <div>
         <HomeCarousel />
         <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
            <HomeSectionCarousel data={""} sectionName={"section 1"}/>
            <HomeSectionCarousel data={""} sectionName={"section 2"}/>
            <HomeSectionCarousel data={""} sectionName={"section 3"}/>
            <HomeSectionCarousel data={""} sectionName={"section 4"}/>
            <HomeSectionCarousel data={""} sectionName={"section 5"}/>
         </div>
      </div>
   );
};

export default HomePage;
