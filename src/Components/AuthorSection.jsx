import React from "react";
import { 
  User, 
  Book, 
  Award,
  ExternalLink,
  BookOpen,
  Star,
  Globe
} from "lucide-react";
import MattHaig from '../assets/Matt-Haig.jpg';

const AuthorSection = () => {
  const author = {
    name: "Matt Haig",
    image: MattHaig,
    totalBooks: 28,
    awards: 12,
    readersCount: "2.5M",
    averageRating: 4.6,
    website: "www.authorwebsite.com",
    bio: "Matt Haig is a British author for children and adults. His memoir Reasons to Stay Alive was a number one bestseller, staying in the British top ten for 46 weeks. His children's book A Boy Called Christmas was a runaway hit and is translated in over 40 languages.",
    description: "Matt Haig is known for his ability to write across multiple genres, from children's literature to adult fiction and non-fiction. His work often explores themes of mental health, the modern world, and what it means to be human in an increasingly technological age. His books have been translated into over 40 languages and have received numerous accolades worldwide.",
    expertise: ["Contemporary Fiction", "Mental Health", "Science Fiction", "Children's Literature"]
  };

  return (
    <div className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            About the Author
          </h2>
          <div className="w-20 h-1 bg-indigo-500 dark:bg-indigo-400 rounded-full"></div>
        </div>

        <div className="
          bg-white dark:bg-slate-800
          rounded-2xl
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
          overflow-hidden
          border border-slate-100 dark:border-slate-700
        ">
          <div className="
            relative
            bg-transparent
            px-8 pt-8
          ">
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="
                w-40 h-40 md:w-48 md:h-48
                rounded-full
                overflow-hidden
                shadow-2xl
                transform hover:scale-105 transition-transform duration-300
              ">
                <img 
                  src={author.image} 
                  alt={author.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="
                text-center md:text-left 
                shadow-lg 
                p-6
                rounded-xl
                bg-white dark:bg-slate-800
                border border-slate-100 dark:border-slate-700
                hover:shadow-xl transition-shadow duration-300
              ">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                  {author.name}
                </h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  {[
                    { icon: Book, text: `${author.totalBooks} Books` },
                    { icon: Award, text: `${author.awards} Awards` },
                    { icon: Star, text: `${author.averageRating} Rating` },
                    { icon: User, text: `${author.readersCount} Readers` }
                  ].map((item, index) => (
                    <div key={index} className="
                      flex items-center gap-2 
                      text-slate-600 dark:text-slate-300
                      hover:text-indigo-600 dark:hover:text-indigo-400
                      transition-colors duration-300
                    ">
                      <item.icon className="w-5 h-5" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 pt-5">
            <div className="mb-8">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {author.bio}
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {author.description}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((area, index) => (
                  <span 
                    key={index}
                    className="
                      px-4 py-2
                      bg-indigo-50 dark:bg-indigo-900/30
                      text-indigo-600 dark:text-indigo-400
                      rounded-full
                      text-sm font-medium
                      hover:bg-indigo-100 dark:hover:bg-indigo-900/50
                      transition-colors duration-300
                      cursor-pointer
                    "
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                {
                  icon: BookOpen,
                  text: "View All Books",
                  className: "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white"
                },
                {
                  icon: Globe,
                  text: "Visit Website",
                  className: "bg-white hover:bg-slate-50 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-600"
                },
                {
                  icon: ExternalLink,
                  text: "Full Profile",
                  className: "bg-violet-50 hover:bg-violet-100 dark:bg-violet-900/30 dark:hover:bg-violet-900/50 text-violet-600 dark:text-violet-400"
                }
              ].map((button, index) => (
                <button
                  key={index}
                  className={`
                    px-6 py-3
                    rounded-xl
                    flex items-center gap-2
                    font-medium
                    transition-all duration-300
                    shadow-lg hover:shadow-xl
                    transform hover:translate-y-[-2px]
                    ${button.className}
                  `}
                >
                  <button.icon className="w-5 h-5" />
                  <span>{button.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorSection;
