import React from "react";
import {
  BookMarked,
  Users,
  Search,
  Clock,
  BookmarkCheck,
  Cloud,
  Star,
  Download,
  Library,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const AboutPage = () => {
  // Statistics data
  const stats = [
    { value: "100K+", label: "Books Available", icon: Library },
    { value: "50K+", label: "Active Readers", icon: Users },
    { value: "1M+", label: "Downloads", icon: Download },
    { value: "4.8", label: "User Rating", icon: Star },
  ];

  // Features data
  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description:
        "Find books instantly with our intelligent AI-powered search system",
      color: "blue",
    },
    {
      icon: BookMarked,
      title: "Personalized Library",
      description:
        "Create and organize your own digital book collection with custom shelves",
      color: "indigo",
    },
    {
      icon: Clock,
      title: "Reading Progress",
      description: "Track your reading time and set personalized goals",
      color: "violet",
    },
    {
      icon: Users,
      title: "Multi-device Sync",
      description:
        "Seamlessly switch between devices while reading without losing progress",
      color: "purple",
    },
    {
      icon: BookmarkCheck,
      title: "Smart Bookmarks",
      description:
        "Add notes, highlights, and bookmarks to your favorite passages",
      color: "fuchsia",
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Access your books anywhere with secure cloud synchronization",
      color: "pink",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Updated Logo */}
            <div className="flex justify-center items-center mb-8 relative">
              <Library className="w-16 h-16 text-blue-600 dark:text-blue-400" />
              <Sparkles className="absolute top-2 right-4 w-6 h-6 text-yellow-300 animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-6">
              Discover the World of Digital Reading
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Welcome to Book Cloud, your premier destination for digital
              reading. We're transforming how people discover, access, and enjoy
              books in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4 mx-auto" />
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Reading Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of readers who have already discovered the joy of
            digital reading with Book Cloud.
          </p>
          <Link
            to="/explore"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
          >
            Get Started Now
            <Library className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
