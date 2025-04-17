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

        {/* Genre Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {genres.map((genre, index) => (
            <div
              key={index}
              className="relative group rounded-2xl shadow-xl hover:shadow-2xl 
                         transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Genre Card */}
              <div className="relative h-[450px] overflow-hidden rounded-2xl">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${genre.image})`,
                    filter: 'brightness(0.9)'
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div>
                    <div className="mb-4 p-3 bg-white/10 backdrop-blur-sm rounded-lg w-fit">
                      <genre.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {genre.title}
                    </h3>
                    <p className="text-gray-200 mb-4">
                      {genre.description}
                    </p>
                    <span className="inline-block bg-blue-600/20 text-blue-100 px-3 py-1 rounded-full text-sm">
                      {genre.count}
                    </span>
                  </div>

                  {/* Button */}
                  <button className="w-full mt-6 bg-white/10 hover:bg-white/20 
                                   backdrop-blur-sm border border-white/20
                                   text-white px-6 py-4 rounded-xl
                                   flex items-center justify-center group
                                   transition-all duration-300">
                    <span className="mr-2">Browse Collection</span>
                    <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 
                                           transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 
                              group-hover:opacity-20 transition-opacity duration-300"
                     style={{ backgroundImage: `linear-gradient(to right, ${genre.color})` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
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
