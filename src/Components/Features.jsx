import React from 'react';
import { 
  BookOpen, 
  GraduationCap,
  Clock,
  Users,
  Award,
  BrainCircuit
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Interactive Learning",
    description: "Enhanced learning experience with AI-powered interactive lessons",
    color: "blue"
  },
  {
    icon: GraduationCap,
    title: "Expert Instruction",
    description: "Learn from industry experts and certified educators",
    color: "violet"
  },
  {
    icon: Clock,
    title: "Self-Paced Learning",
    description: "Flexible schedule that adapts to your learning style",
    color: "indigo"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a global community of passionate learners",
    color: "cyan"
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Earn recognized certificates to showcase your skills",
    color: "emerald"
  },
  {
    icon: BrainCircuit,
    title: "Smart Analytics",
    description: "Track your progress with detailed learning analytics",
    color: "purple"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
            Powerful Features
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Discover a new way of learning with our comprehensive suite of features
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className={`
                absolute inset-0 
                bg-gray-500
                rounded-2xl 
                blur-xl 
                group-hover:opacity-100 
                transition-opacity duration-500
                opacity-0
              `}/>
              
              <div className={`
                relative
                h-full
                bg-slate-800/50
                backdrop-blur-xl
                border border-slate-700
                rounded-2xl
                p-8
                hover:border-${feature.color}-500/50
                transition-all duration-300
                group-hover:transform group-hover:-translate-y-2
              `}>
                <div className={`
                  inline-flex
                  items-center
                  justify-center
                  w-16 h-16
                  rounded-xl
                  bg-gradient-to-br from-${feature.color}-500/20 to-transparent
                  border border-${feature.color}-500/30
                  mb-6
                  group-hover:scale-110
                  transition duration-300
                `}>
                  <feature.icon className={`
                    w-8 h-8 
                    text-${feature.color}-400
                    group-hover:text-${feature.color}-300
                    transition-colors duration-300
                  `}/>
                </div>

                <h3 className={`
                  text-xl
                  font-semibold
                  text-white
                  mb-4
                  group-hover:text-${feature.color}-400
                  transition-colors duration-300
                `}>
                  {feature.title}
                </h3>

                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Decorative Elements */}
                <div className={`
                  absolute bottom-0 left-0 right-0
                  h-1 rounded-b-2xl
                  bg-gradient-to-r from-${feature.color}-500/0 via-${feature.color}-500/50 to-${feature.color}-500/0
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                `}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
