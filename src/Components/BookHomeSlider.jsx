import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import BookCard from "./BookCard";

const BookHomeSlider = ({title, books}) => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
    }
  };

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
      // Check initial state
      handleScroll();
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="py-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {title}
            </h2>
            <div className="w-20 h-1 bg-indigo-500 dark:bg-indigo-400 rounded-full"></div>
          </div>
          
          {/* Mobile View All Button */}
          <button className="
            sm:hidden
            px-4 py-2
            text-indigo-600 dark:text-indigo-400
            font-medium
            hover:bg-indigo-50 dark:hover:bg-indigo-900/30
            rounded-lg
            transition-colors duration-300
          ">
            View All
          </button>
        </div>

        {/* Book Slider */}
        <div className="relative group">
          <div
            ref={scrollRef}
            className="
              flex gap-6 
              overflow-x-auto 
              scroll-smooth 
              scrollbar-hide 
              pb-4
              -mx-4 
              px-4
              snap-x 
              snap-mandatory
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Book Cards */}
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />

            {/* See More Card */}
            <div className="
              min-w-[280px]
              flex flex-col 
              items-center 
              justify-center
              bg-gradient-to-br 
              from-indigo-500 
              to-indigo-600 
              dark:from-indigo-600 
              dark:to-indigo-700
              rounded-2xl 
              p-6 
              group/card 
              cursor-pointer 
              transition-all 
              duration-300 
              hover:shadow-xl
              hover:scale-[1.02]
              snap-center
            ">
              <ArrowRight className="
                w-12 h-12 
                text-white 
                mb-4 
                transform 
                group-hover/card:translate-x-2 
                transition-transform 
                duration-300
              " />
              <h3 className="
                text-xl 
                font-bold 
                text-white 
                mb-2 
                transform 
                group-hover/card:translate-x-2 
                transition-transform 
                duration-300
              ">
                See More
              </h3>
              <p className="
                text-white/80 
                text-sm 
                text-center 
                transform 
                group-hover/card:translate-x-2 
                transition-transform 
                duration-300
              ">
                Discover our complete collection
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className={`
              absolute left-2 top-1/2 -translate-y-1/2 
              p-3
              rounded-full
              bg-white dark:bg-slate-800
              shadow-lg hover:shadow-xl
              border border-slate-200 dark:border-slate-700
              text-slate-700 dark:text-white
              transition-all duration-300
              opacity-0 group-hover:opacity-100
              ${showLeftButton ? 'translate-x-0' : '-translate-x-full'}
              hidden sm:flex
              hover:scale-110
              disabled:opacity-0
              disabled:cursor-not-allowed
            `}
            disabled={!showLeftButton}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollRight}
            className={`
              absolute right-2 top-1/2 -translate-y-1/2 
              p-3
              rounded-full
              bg-white dark:bg-slate-800
              shadow-lg hover:shadow-xl
              border border-slate-200 dark:border-slate-700
              text-slate-700 dark:text-white
              transition-all duration-300
              opacity-0 group-hover:opacity-100
              ${showRightButton ? 'translate-x-0' : 'translate-x-full'}
              hidden sm:flex
              hover:scale-110
              disabled:opacity-0
              disabled:cursor-not-allowed
            `}
            disabled={!showRightButton}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookHomeSlider;
