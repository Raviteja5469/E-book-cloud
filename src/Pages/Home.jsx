import React from "react";
import Hero from "../Components/Hero";
import PopularGenres from "../Components/PopularGenres";
import BookHomeSlider from "../Components/BookHomeSlider";
import Discover from "../Components/Discover";
import Footer from "../Components/Footer";
import Features from "../Components/Features";
import Advantages from "../Components/Advantages";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularGenres />
      <Features />
      <BookHomeSlider title="Featured Books"/>
      <BookHomeSlider title="Recommended Books" />
      <Advantages />
      <Discover />
      <Footer />
    </div>
  );
};

export default Home;
