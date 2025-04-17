import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import BookCard from '../Components/BookCard';
import { Link } from 'react-router-dom';

const BookSlider = ({ title, books }) => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle scroll buttons visibility
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -scrollRef.current.offsetWidth : scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Mouse drag handling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="py-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 
                         bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 
                         bg-clip-text text-transparent">
              {title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => scroll('left')}
              disabled={!showLeftButton}
              className={`p-3 rounded-full bg-white dark:bg-gray-800 
                        hover:bg-gray-50 dark:hover:bg-gray-700 
                        border border-gray-200 dark:border-gray-600
                        shadow-lg hover:shadow-xl
                        transition-all duration-300
                        ${!showLeftButton ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                        group`}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300 
                                    group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!showRightButton}
              className={`p-3 rounded-full bg-white dark:bg-gray-800 
                        hover:bg-gray-50 dark:hover:bg-gray-700 
                        border border-gray-200 dark:border-gray-600
                        shadow-lg hover:shadow-xl
                        transition-all duration-300
                        ${!showRightButton ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                        group`}
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300 
                                     group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4
                     snap-x snap-mandatory cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Book Cards */}
            {Array(6).fill(null).map((_, index) => (
              <div key={index} className="snap-start">
                <BookCard />
              </div>
            ))}

            {/* See More Card */}
            <Link
              to="/genre/:id"
              className="min-w-[280px] flex flex-col items-center justify-center 
                       bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 
                       dark:from-indigo-600 dark:via-purple-600 dark:to-indigo-700 
                       rounded-2xl p-6 group/card cursor-pointer 
                       transition-all duration-300 
                       hover:shadow-xl hover:scale-[1.02]
                       snap-start"
            >
              <ArrowRight className="w-12 h-12 text-white mb-4 
                                   transform group-hover/card:translate-x-2 
                                   transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-2 
                           transform group-hover/card:translate-x-2 
                           transition-transform duration-300">
                See More
              </h3>
              <p className="text-white/80 text-sm text-center 
                          transform group-hover/card:translate-x-2 
                          transition-transform duration-300">
                Discover our complete collection
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSlider;
