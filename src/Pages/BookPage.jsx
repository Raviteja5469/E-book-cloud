import React from "react";
import BookDetail from "../Components/BookDetail";
import AuthorSection from "../Components/AuthorSection";
import Footer from "../Components/Footer";
import ReviewSection from "../Components/ReviewSection";
import BookSlider from "../Components/BookSlider";

const BookPage = () => {
  return (
    <div>
      <BookDetail />
      <AuthorSection />
      <ReviewSection />
      <BookSlider title="Similar Books" />
      <BookSlider title="Similar Genre" />
      <Footer />
    </div>
  );
};

export default BookPage;
