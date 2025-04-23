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
    <div className="py-16 bg-gradient-to-r from-blue-700 to-purple-900 dark:from-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          {/* Header Section */}
          <div className="flex items-center gap-4 mb-8">
            <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Unlock a World of Books
            </h2>
          </div>

          {/* Content Section */}
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
            Sign up to explore our vast library, track your reads, and join a vibrant community of book enthusiasts.
          </p>

          {/* Stats and Sign In Options */}
          <div className="flex flex-wrap justify-between items-center gap-6">
            {/* Stats Section */}
            <div className="flex gap-4">
              {stats.map((stat) => (
                <span
                  key={stat.id}
                  className="px-4 py-2 bg-blue-100 dark:bg-gray-700/70 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium shadow-sm"
                >
                  {stat.label}
                </span>
              ))}
            </div>

            {/* Sign In Options */}
            <div className="flex gap-4">
              {signInOptions.map((option) => (
                <button
                  key={option.id}
                  className={`px-6 py-3 ${option.style} rounded-lg flex items-center gap-2 text-sm font-medium shadow-md`}
                >
                  <option.icon className="w-5 h-5" />
                  <span>{option.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Terms */}
          <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-6">
            By signing in, you agree to our{' '}
            <a
              href="#"
              className="text-blue-700 dark:text-blue-400 hover:underline"
            >
              Terms
            </a>{' '}
            and{' '}
            <a
              href="#"
              className="text-blue-700 dark:text-blue-400 hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;