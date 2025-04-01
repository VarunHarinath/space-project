import React from "react";
import VideoPlayer from "../components/HomePageComponents/VideoPlayer";
import HeroSection from "../components/HomePageComponents/HeroSection";
import Offerings from "../components/HomePageComponents/Offerings";
import Pricing from "../components/HomePageComponents/Pricing";
import CtaSection from "../components/HomePageComponents/CtaSection";

const HomePage = () => {
  return (
    <>
      <VideoPlayer />
      <HeroSection />
      <Offerings />
      <Pricing />
      <CtaSection />
    </>
  );
};

export default HomePage;
