import React from "react";
import {
  Book,
  BookOpen,
  Library,
  ChevronRight,
  Bookmark,
  GraduationCap,
  BookText
} from "lucide-react";

// Import your images
import educational from "../assets/fantasy-genre.jpeg";
import academic from "../assets/romance-genre.jpeg";
import reference from "../assets/scifi-genre.jpeg";

const PopularGenres = () => {
  const genres = [
    {
      title: "Educational Books",
      description: "Enhance your learning journey with our comprehensive collection",
      icon: Book,
      color: "from-blue-600 to-blue-800",
      image: educational,
      count: "10,000+ Books"
    },
    {
      title: "Academic Resources",
      description: "Access premium academic materials and research papers",
      icon: GraduationCap,
      color: "from-purple-600 to-blue-600",
      image: academic,
      count: "5,000+ Resources"
    },
    {
      title: "Reference Materials",
      description: "Explore our vast collection of reference materials",
      icon: BookText,
      color: "from-blue-500 to-cyan-600",
      image: reference,
      count: "8,000+ Documents"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-medium mb-2 block">
            DISCOVER KNOWLEDGE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Categories
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our extensive collection of educational materials across various disciplines
          </p>
        </div>

        {/* Main content area: Genres on left, Quote on right */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Genre List (Left Side) */}
          <div className="flex flex-col gap-6 md:w-1/2">
            {genres.map((genre, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl shadow-lg hover:shadow-xl
                           transition-all duration-300 transform hover:-translate-y-1
                           bg-gradient-to-r from-gray-800 to-gray-900 text-white"
              >
                {/* Icon */}
                <div className="p-3 bg-white/10 rounded-lg">
                  <genre.icon className="w-6 h-6 text-blue-400" />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{genre.title}</h3>
                  <p className="text-sm text-gray-300">{genre.description}</p>
                  <span className="text-xs text-blue-200">{genre.count}</span>
                </div>

                {/* Button */}
                <button className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300">
                  <span>Browse</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          {/* Added md:w-1/2 to take half width on medium screens+, added styling for the quote */}
          <div className="md:w-1/2 flex items-center justify-center p-8">
            <figure className="max-w-screen-md mx-auto text-center">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v-3h-1c-.4 0-.7-.1-.9-.4-.3-.3-.4-.6-.4-1 0-.4.1-.7.4-1 .2-.3.5-.4.9-.4h1V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v-3h-1c-.4 0-.7-.1-.9-.4-.3-.3-.4-.6-.4-1 0-.4.1-.7.4-1 .2-.3.5-.4.9-.4h1V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"The only limit to our realization of tomorrow will be our doubts of today."</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="profile picture"/>
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">Franklin D. Roosevelt</cite>
                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Former U.S. President</cite>
                    </div>
                </figcaption>
            </figure>
          </div>
        </div>


        {/* Bottom CTA - kept as is */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 rounded-full
                           bg-blue-600 hover:bg-blue-700 text-white
                           transition-all duration-300 transform hover:scale-105
                           shadow-lg hover:shadow-blue-500/30">
            <Library className="w-5 h-5 mr-2" />
            <span>View All Categories</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularGenres;