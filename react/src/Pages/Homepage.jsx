import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sensors } from "../Data/sensors";
import { components } from "../Data/components";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection data={sensors} section={"Sensors"} />
        <HomeProductSection data={components} section={"Components"} />
      </div>


    </div>
  );
};

export default Homepage;
