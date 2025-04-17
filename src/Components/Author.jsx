import React from 'react';
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

const Author = () => {
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
                {/* Author Container */}
                <div className="
                    bg-white dark:bg-slate-800
                    rounded-2xl
                    shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                    dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                    overflow-hidden
                    border border-slate-100 dark:border-slate-700
                ">
                    {/* Top Section */}
                    <div className="
                        relative
                        bg-gradient-to-r from-indigo-500 to-violet-500
                        dark:from-indigo-600 dark:to-violet-600
                        px-8 py-12
                    ">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" 
                                style={{
                                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                                }}
                            />
                        </div>

                        <div className="relative flex flex-col md:flex-row items-center gap-8">
                            {/* Author Image */}
                            <div className="
                                w-40 h-40 md:w-48 md:h-48
                                rounded-full
                                overflow-hidden
                                border-4 border-white/90 dark:border-slate-700
                                shadow-2xl
                                transform hover:scale-105 transition-transform duration-300
                            ">
                                <img 
                                    src={author.image} 
                                    alt={author.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Author Quick Info */}
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    {author.name}
                                </h2>
                                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                                    <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                                        <Book className="w-5 h-5" />
                                        <span>{author.totalBooks} Books</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                                        <Award className="w-5 h-5" />
                                        <span>{author.awards} Awards</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                                        <Star className="w-5 h-5" />
                                        <span>{author.averageRating} Rating</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                                        <User className="w-5 h-5" />
                                        <span>{author.readersCount} Readers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="p-8">
                        {/* Author Bio */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
                                About the Author
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                {author.bio}
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                {author.description}
                            </p>
                        </div>

                        {/* Author Expertise */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
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
                                        "
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="
                                px-6 py-3
                                bg-indigo-600 hover:bg-indigo-700
                                dark:bg-indigo-500 dark:hover:bg-indigo-600
                                text-white
                                rounded-xl
                                flex items-center gap-2
                                font-medium
                                transition-all duration-300
                                shadow-lg hover:shadow-xl
                                transform hover:translate-y-[-2px]
                            ">
                                <BookOpen className="w-5 h-5" />
                                <span>View All Books</span>
                            </button>

                            <button className="
                                px-6 py-3
                                bg-white hover:bg-slate-50
                                dark:bg-slate-700 dark:hover:bg-slate-600
                                text-slate-800 dark:text-white
                                rounded-xl
                                flex items-center gap-2
                                font-medium
                                transition-all duration-300
                                shadow-lg hover:shadow-xl
                                transform hover:translate-y-[-2px]
                                border border-slate-200 dark:border-slate-600
                            ">
                                <Globe className="w-5 h-5" />
                                <span>Visit Website</span>
                            </button>

                            <button className="
                                px-6 py-3
                                bg-violet-50 hover:bg-violet-100
                                dark:bg-violet-900/30 dark:hover:bg-violet-900/50
                                text-violet-600 dark:text-violet-400
                                rounded-xl
                                flex items-center gap-2
                                font-medium
                                transition-all duration-300
                                shadow-lg hover:shadow-xl
                                transform hover:translate-y-[-2px]
                            ">
                                <ExternalLink className="w-5 h-5" />
                                <span>Full Profile</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Author;
