import React from "react";
import VideoPlayer from "../components/HomePageComponents/VideoPlayer";
import HeroSection from "../components/HomePageComponents/HeroSection";
import Pricing from "../components/HomePageComponents/Pricing";
import CtaSection from "../components/HomePageComponents/CtaSection";
import FistFragment from "../components/HomePageComponents/FistFragment";
import NewsLetter from "../components/HomePageComponents/NewsLetter";
import Gallery from "../components/HomePageComponents/Gallery";

const HomePage = () => {
  return (
    <>
      <FistFragment />
      <VideoPlayer />
      <HeroSection />
      <Gallery />
      <Pricing />
      <CtaSection />
      <NewsLetter />
    </>
  );
};

export default HomePage;
