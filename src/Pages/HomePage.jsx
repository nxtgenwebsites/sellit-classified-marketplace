import React from 'react'
import BannerSlider from '../components/BannerSlider';
import Marquee from '../components/Marquee';
import FeaturedAds from '../components/FeaturedAds';
import RecentlyAds from '../components/RecentlyAds';
import PopularCategories from '../components/PopularCategories';
import BuisnessProfile from '../components/BuisnessProfile';
import GoogleBanner from "../components/GoogleBanner";

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
    )
}

export default Homepage
