import React from "react";
import {
  Book,
  Sparkles,
  Lightbulb,
  Star,
  Medal,
  Brain,
  BookOpen,
  GraduationCap,
  ScrollText,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 
                    dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 -top-10 -left-10 bg-blue-400 rounded-full mix-blend-multiply 
                      filter blur-3xl animate-blob"/>
        <div className="absolute w-96 h-96 -top-10 -right-10 bg-purple-400 rounded-full mix-blend-multiply 
                      filter blur-3xl animate-blob animation-delay-2000"/>
        <div className="absolute w-96 h-96 -bottom-10 left-10 bg-pink-400 rounded-full mix-blend-multiply 
                      filter blur-3xl animate-blob animation-delay-4000"/>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 
                         backdrop-blur-sm mb-8">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-800 dark:text-blue-200 font-medium">
              Welcome to the Future of Reading
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900
                         dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
            Discover, Learn, <br/>
            <span className="italic">Transform.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Embark on a journey through countless worlds of knowledge, imagination, and wonder. 
            Your perfect reading companion awaits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <Link to="/library"
              className="group inline-flex items-center px-8 py-4 rounded-xl
                       bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600
                       text-white font-medium text-lg transition-all duration-300
                       transform hover:scale-105 hover:shadow-xl"
            >
              Start Reading Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </Link>

            <button className="inline-flex items-center px-8 py-4 rounded-xl
                             bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                             border-2 border-gray-200 dark:border-gray-700
                             text-gray-800 dark:text-gray-200 font-medium text-lg
                             hover:shadow-xl transition-all duration-300
                             transform hover:scale-105">
              View Collections
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Smart Learning",
                description: "AI-powered recommendations based on your interests and reading habits"
              },
              {
                icon: Medal,
                title: "Premium Content",
                description: "Access to exclusive books, articles, and educational resources"
              },
              {
                icon: Lightbulb,
                title: "Interactive Features",
                description: "Notes, highlights, bookmarks, and study tools at your fingertips"
              }
            ].map((feature, index) => (
              <div key={index} 
                   className="group p-8 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm
                            border border-gray-200 dark:border-gray-700
                            hover:bg-white/80 dark:hover:bg-gray-800/80
                            transition-all duration-300 transform hover:-translate-y-1">
                <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6
                                      group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative py-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                    border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Readers", value: "100K+" },
              { label: "Books Available", value: "50K+" },
              { label: "Categories", value: "100+" },
              { label: "Daily Reads", value: "25K+" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
