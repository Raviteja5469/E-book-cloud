import React, { useEffect } from "react";
import { BookX, Home, MoveLeft, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  // Random quotes about getting lost/finding your way
  const quotes = [
    "Sometimes the most interesting chapters in our story are the ones we didn't plan to write.",
    "Not all those who wander are lost.",
    "Every wrong turn may lead to an even better destination.",
    "The best stories often begin with a detour.",
  ];

  // Randomly select a quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add page title and cleanup
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "404 - Page Not Found";
    
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500/5 dark:bg-blue-400/5 rounded-full"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Animated 404 */}
        <div className="relative mb-12">
          {/* Large 404 Text */}
          <h1 className="text-[150px] md:text-[200px] font-bold text-gray-100 dark:text-gray-800 select-none transition-colors duration-500">
            404
          </h1>

          {/* Animated Book Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="animate-bounce transition-transform duration-300">
              <BookX className="w-24 h-24 md:w-32 md:h-32 text-blue-600 dark:text-blue-400 transform hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

          {/* Animated Lines */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-indigo-600/20 dark:via-indigo-400/20 to-transparent"
                style={{
                  top: `${20 + (i * 15)}%`,
                  left: '-100%',
                  width: '200%',
                  animation: `slideRight 8s ${i * 0.5}s infinite linear`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 transform hover:scale-105 transition-transform duration-300">
          Oops! Page Not Found
        </h2>

        {/* Quote */}
        <div className="max-w-md mx-auto mb-12">
          <p className="text-gray-600 dark:text-gray-300 italic text-lg">
            "{randomQuote}"
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="group px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-xl flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Return Home</span>
          </button>

          <button
            onClick={() => navigate(-1)}
            className="group px-6 py-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Go Back</span>
          </button>

          <button
            onClick={() => window.location.reload()}
            className="group px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            <span>Reload Page</span>
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
