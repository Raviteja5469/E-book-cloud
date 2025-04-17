import React from 'react'
import {
  Shield,
  HeartHandshake,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const Advantages = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Why Choose Our Digital Library?
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Experience the future of reading with our innovative digital library platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Enhanced Security",
                description: "Military-grade encryption for your reading data and privacy",
                color: "bg-blue-50 dark:bg-blue-900/10"
              },
              {
                icon: HeartHandshake,
                title: "Seamless Experience",
                description: "Smart interface optimized for readers of all generations",
                color: "bg-emerald-50 dark:bg-emerald-900/10"
              },
              {
                icon: Sparkles,
                title: "Fresh Content Daily",
                description: "New titles and features updated every day",
                color: "bg-amber-50 dark:bg-amber-900/10"
              },
              {
                icon: TrendingUp,
                title: "Vibrant Community",
                description: "Connect with millions of passionate readers worldwide",
                color: "bg-rose-50 dark:bg-rose-900/10"
              }
            ].map((advantage, index) => (
              <div 
                key={index}
                className={`
                  flex items-start gap-6
                  p-8
                  ${advantage.color}
                  rounded-xl
                  hover:transform hover:scale-105
                  transition-all duration-300
                  border border-slate-100 dark:border-slate-800
                  shadow-sm hover:shadow-xl
                `}
              >
                <advantage.icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Advantages
