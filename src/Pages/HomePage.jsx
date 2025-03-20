import React from "react";
import BannerSlider from "../components/Home/BannerSlider";
import Marquee from "../components/Home/Marquee";
import FeaturedAds from "../components/Home/FeaturedAds";
import RecentlyAds from "../components/Home/RecentlyAds";
import PopularCategories from "../components/Home/PopularCategories";
import BuisnessProfile from "../components/Home/BuisnessProfile";
import GoogleBanner from "../components/Home/GoogleBanner";

const Homepage = () => {
  return (
    <div>
      <>
        <BannerSlider />
        <Marquee />
        <FeaturedAds />
        <RecentlyAds />
        <PopularCategories />
        <BuisnessProfile />
        <GoogleBanner />
      </>
    </div>
  );
};

export default Homepage;
