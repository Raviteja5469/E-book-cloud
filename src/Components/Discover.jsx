import React from "react";
import { BookOpen, Mail, Github, Chrome } from "lucide-react";

const Discover = () => {
  const stats = [
    { label: "100K+ Books", id: 1 },
    { label: "50+ Genres", id: 2 }, 
    { label: "Free Access", id: 3 }
  ];

  const signInOptions = [
    {
      icon: Mail,
      text: "Sign in with Email",
      style: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white",
      id: 1
    },
    {
      icon: Chrome, 
      text: "Sign in with Google",
      style: "bg-white hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600",
      id: 2
    },
    {
      icon: Github,
      text: "Sign in with GitHub", 
      style: "bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white",
      id: 3
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="
          flex flex-col md:flex-row
          items-center justify-between
          gap-12 md:gap-20
          bg-white/95 dark:bg-gray-900/90
          backdrop-blur-sm
          rounded-3xl
          p-8 md:p-12
          shadow-2xl
          border border-gray-100/20 dark:border-gray-700/50
        ">
          {/* Left Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6 group">
              <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 
                                 transform group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-3xl md:text-4xl font-bold 
                           bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300
                           bg-clip-text text-transparent">
                Discover & Read More
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Join our community of book lovers. Get personalized recommendations, 
              track your reading progress, and connect with fellow readers.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {stats.map(stat => (
                <span key={stat.id} className="
                  px-4 py-2 
                  bg-blue-50 dark:bg-gray-700/50
                  text-blue-600 dark:text-blue-400
                  rounded-full 
                  text-sm font-medium
                  transition-all duration-300
                  hover:transform hover:scale-105
                  hover:shadow-md
                  cursor-default
                ">
                  {stat.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Sign In Options */}
          <div className="
            w-full md:w-auto
            flex flex-col gap-4
            min-w-[320px]
          ">
            {signInOptions.map(option => (
              <button key={option.id} className={`
                w-full
                px-6 py-3
                ${option.style}
                rounded-xl
                flex items-center justify-center gap-3
                font-medium
                transition-all duration-300
                shadow-md hover:shadow-xl
                transform hover:scale-[1.02]
                focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
              `}>
                <option.icon className="w-5 h-5" />
                <span>{option.text}</span>
              </button>
            ))}

            {/* Terms */}
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              By signing in, you agree to our{' '}
              <a href="#" className="
                text-blue-600 dark:text-blue-400 
                hover:underline 
                transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                rounded
              ">
                Terms
              </a>
              {' '}and{' '}
              <a href="#" className="
                text-blue-600 dark:text-blue-400 
                hover:underline
                transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                rounded
              ">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;

