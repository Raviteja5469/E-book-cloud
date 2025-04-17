import React from 'react'
import BookSlider from '../Components/BookSlider';
import Footer from '../Components/Footer';

const Explore = () => {
  
  const books = [
    
  ]

  return (
    <>
      <BookSlider title="Top Rated" books={books} />
      <BookSlider title="Most Popular" books={books} />
      <BookSlider title="Romantic" books={books} />
      <BookSlider title="Drama" books={books} />
      <BookSlider title="Action" books={books} />
      <Footer />
    </>
  );
  
}

export default Explore
