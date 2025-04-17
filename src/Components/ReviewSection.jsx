import React from "react";
import { 
  Star,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  BookOpen,
  CheckCircle,
  Award,
  GraduationCap
} from "lucide-react";

const ReviewSection = () => {
  // Updated review stats for educational context
  const reviewStats = {
    average: 4.8,
    total: 2462,
    learningOutcome: "98%",
    certificateEarned: "85%",
    distribution: [
      { stars: 5, count: 1850, percentage: 75 },
      { stars: 4, count: 400, percentage: 16 },
      { stars: 3, count: 150, percentage: 6 },
      { stars: 2, count: 42, percentage: 2 },
      { stars: 1, count: 20, percentage: 1 },
    ]
  };

  const reviews = [
    {
      id: 1,
      user: {
        name: "Dr. Sarah Johnson",
        image: "https://placehold.co/100x100",
        role: "Education Professional",
        coursesCompleted: 28
      },
      rating: 5,
      date: "2024-02-20",
      content: "The educational content is exceptionally well-structured. The learning materials are comprehensive and the interactive elements really help in understanding complex concepts. Perfect for both self-paced learning and classroom implementation.",
      likes: 245,
      dislikes: 12,
      isVerified: true,
      badge: "Top Educator"
    },
    {
      id: 2,
      user: {
        name: "Prof. Michael Clark",
        image: "https://placehold.co/100x100",
        role: "Academic Researcher",
        coursesCompleted: 15
      },
      rating: 4,
      date: "2024-02-18",
      content: "The academic rigor of this material is impressive. The research references are current and well-cited. Would highly recommend for advanced studies, though some prerequisites might be needed for beginners.",
      likes: 178,
      dislikes: 8,
      isVerified: true,
      badge: "Research Expert"
    }
    // Add more reviews as needed
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Learning Feedback & Reviews
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Verified feedback from educators and learners worldwide
          </p>
          <div className="w-20 h-1 bg-blue-600 rounded-full mt-4"></div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Star,
              title: "Average Rating",
              value: reviewStats.average,
              subtitle: "Out of 5 stars"
            },
            {
              icon: BookOpen,
              title: "Active Learners",
              value: reviewStats.total,
              subtitle: "Worldwide users"
            },
            {
              icon: CheckCircle,
              title: "Learning Success",
              value: reviewStats.learningOutcome,
              subtitle: "Completion rate"
            },
            {
              icon: Award,
              title: "Certifications",
              value: reviewStats.certificateEarned,
              subtitle: "Achievement rate"
            }
          ].map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <stat.icon className="w-8 h-8 text-blue-600 mb-3" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* Rating and Reviews Container */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Rating Overview */}
          <div className="lg:w-1/3">
            <div className="sticky top-4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              {/* Rating Distribution */}
              <div className="space-y-3 mb-6">
                {reviewStats.distribution.map((stat) => (
                  <div key={stat.stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-12">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {stat.stars}
                      </span>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${stat.percentage}%` }}
                      />
                    </div>
                    <div className="w-12 text-right text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.percentage}%
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Review Button */}
              <button className="
                w-full px-6 py-3
                bg-blue-600 hover:bg-blue-700
                text-white font-medium
                rounded-xl
                flex items-center justify-center gap-2
                transform transition-all duration-300
                hover:scale-105
                shadow-lg hover:shadow-blue-500/30
              ">
                <MessageCircle className="w-5 h-5" />
                <span>Share Your Learning Experience</span>
              </button>
            </div>
          </div>

          {/* Right Column - Reviews List */}
          <div className="lg:w-2/3">
            <div className="space-y-6">
              {reviews.map((review) => (
                <div 
                  key={review.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  {/* Review Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <img 
                        src={review.user.image} 
                        alt={review.user.name}
                        className="w-12 h-12 rounded-full border-2 border-blue-200"
                      />
                      {review.badge && (
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                          {review.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {review.user.name}
                        </h4>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          • {review.user.role}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {review.content}
                  </p>

                  {/* Review Actions */}
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">{review.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors">
                      <ThumbsDown className="w-4 h-4" />
                      <span className="text-sm">{review.dislikes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
