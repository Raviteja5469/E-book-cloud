import React, { useState } from "react";
import { 
    BookOpen, 
    Share2, 
    Star, 
    Eye, 
    Download,
    BookmarkPlus,
    Heart,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import midnightlibrary from '../assets/midnight-library.jpg';

const BookDetail = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Sample book data with multiple images
    const book = {
        title: "The Midnight Library",
        author: "Matt Haig",
        images: [
            midnightlibrary,
            midnightlibrary,
            midnightlibrary,
        ],
        rating: 4.8,
        totalReviews: 2462,
        genre: ["Fiction", "Fantasy", "Contemporary"],
        publishedDate: "2020",
        totalPages: 384,
        readTime: "6.4 hours",
        readers: "125K",
        likes: "45K",
        description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % book.images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + book.images.length) % book.images.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column - Book Cover Carousel */}
                    <div className="lg:w-1/3">
                        <div className="
                            relative
                            aspect-[2/3]
                            rounded-2xl
                            overflow-hidden
                            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                            dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                            group
                        ">
                            {/* Carousel Container */}
                            <div 
                                className="relative w-full h-full"
                                style={{
                                    transform: `translateX(-${currentSlide * 100}%)`,
                                    transition: 'transform 0.5s ease-in-out'
                                }}
                            >
                                {book.images.map((image, index) => (
                                    <img 
                                        key={index}
                                        src={image} 
                                        alt={`${book.title} - View ${index + 1}`}
                                        className="
                                            absolute top-0
                                            w-full h-full 
                                            object-cover
                                            group-hover:scale-105
                                            transition-transform duration-300
                                        "
                                        style={{ left: `${index * 100}%` }}
                                    />
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button 
                                onClick={prevSlide}
                                className="
                                    absolute left-4 top-1/2 -translate-y-1/2
                                    p-2 rounded-full
                                    bg-white/80 hover:bg-white
                                    text-slate-800
                                    transition-all duration-200
                                    shadow-lg
                                    opacity-0 group-hover:opacity-100
                                    transform -translate-x-8 group-hover:translate-x-0
                                "
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button 
                                onClick={nextSlide}
                                className="
                                    absolute right-4 top-1/2 -translate-y-1/2
                                    p-2 rounded-full
                                    bg-white/80 hover:bg-white
                                    text-slate-800
                                    transition-all duration-200
                                    shadow-lg
                                    opacity-0 group-hover:opacity-100
                                    transform translate-x-8 group-hover:translate-x-0
                                "
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Dots Navigation */}
                            <div className="
                                absolute bottom-4 left-1/2 -translate-x-1/2
                                flex items-center gap-2
                                bg-black/20
                                px-4 py-2
                                rounded-full
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300
                            ">
                                {book.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`
                                            w-2 h-2 rounded-full
                                            transition-all duration-300
                                            ${currentSlide === index 
                                                ? 'bg-white w-4' 
                                                : 'bg-white/50 hover:bg-white/75'}
                                        `}
                                    />
                                ))}
                            </div>

                            {/* Quick Action Buttons */}
                            <div className="
                                absolute top-4 right-4
                                flex flex-col gap-2
                                transform translate-x-12 group-hover:translate-x-0
                                opacity-0 group-hover:opacity-100
                                transition-all duration-300
                            ">
                                {[
                                    { icon: Eye, label: "Preview" },
                                    { icon: Download, label: "Download" },
                                    { icon: Share2, label: "Share" }
                                ].map((action, index) => (
                                    <button
                                        key={index}
                                        className="
                                            p-2 rounded-full
                                            bg-white/80 hover:bg-white
                                            text-slate-800
                                            transition-all duration-200
                                            shadow-lg
                                            hover:scale-110
                                        "
                                    >
                                        <action.icon className="w-5 h-5" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Book Details */}
                    <div className="lg:w-2/3">
                        {/* Title and Author */}
                        <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-2">
                            {book.title}
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
                            by <span className="font-semibold">{book.author}</span>
                        </p>

                        {/* Genre Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {book.genre.map((tag, index) => (
                                <span 
                                    key={index}
                                    className="
                                        px-4 py-1.5
                                        bg-indigo-50 dark:bg-indigo-900/30
                                        text-indigo-600 dark:text-indigo-400
                                        rounded-full
                                        text-sm font-medium
                                        hover:bg-indigo-100 dark:hover:bg-indigo-900/50
                                        transition-colors duration-300
                                        cursor-pointer
                                    "
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Rating and Reviews */}
                        <div className="flex items-center gap-6 mb-8">
                            <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i}
                                            className={`w-5 h-5 ${
                                                i < Math.floor(book.rating)
                                                    ? 'text-yellow-400 fill-current'
                                                    : 'text-slate-300 dark:text-slate-600'
                                            }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-slate-900 dark:text-white font-medium">
                                    {book.rating}
                                </span>
                            </div>
                            <span className="text-slate-600 dark:text-slate-400">
                                {book.totalReviews.toLocaleString()} reviews
                            </span>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            {[
                                { label: "Published", value: book.publishedDate },
                                { label: "Pages", value: book.totalPages },
                                { label: "Read Time", value: book.readTime },
                                { label: "Readers", value: book.readers }
                            ].map((stat, index) => (
                                <div key={index}>
                                    <div className="text-slate-600 dark:text-slate-400 text-sm mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="font-semibold text-slate-900 dark:text-white">
                                        {stat.value}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                            {book.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <button className="
                                px-8 py-4
                                bg-indigo-600 hover:bg-indigo-700
                                dark:bg-indigo-500 dark:hover:bg-indigo-600
                                text-white
                                rounded-xl
                                flex items-center gap-2
                                font-medium
                                transition-all duration-300
                                shadow-lg hover:shadow-xl
                                transform hover:translate-y-[-2px]
                            ">
                                <BookOpen className="w-5 h-5" />
                                <span>Start Reading</span>
                            </button>

                            <button 
                                onClick={() => setIsBookmarked(!isBookmarked)}
                                className={`
                                    px-8 py-4
                                    rounded-xl
                                    flex items-center gap-2
                                    font-medium
                                    transition-all duration-300
                                    shadow-lg hover:shadow-xl
                                    transform hover:translate-y-[-2px]
                                    ${isBookmarked 
                                        ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'}
                                `}
                            >
                                <BookmarkPlus className="w-5 h-5" />
                                <span>{isBookmarked ? 'Saved to Library' : 'Save to Library'}</span>
                            </button>

                            <button 
                                onClick={() => setIsLiked(!isLiked)}
                                className={`
                                    p-4
                                    rounded-xl
                                    flex items-center gap-2
                                    transition-all duration-300
                                    shadow-lg hover:shadow-xl
                                    transform hover:translate-y-[-2px]
                                    ${isLiked
                                        ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'}
                                `}
                            >
                                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
