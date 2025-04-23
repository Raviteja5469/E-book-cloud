import React from "react";
import { Eye, BookOpen, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import bookpage from "../assets/midnight-library.jpg";

const BookCard = ({ book = {
  title: "The Digital Renaissance",
  author: "Sarah Mitchell",
  genre: "Technology & Society",
  image: bookpage,
  description: "An exploration of how digital transformation is reshaping our relationship with literature and knowledge.",
  rating: 4.8,
} }) => {
  return (
    <Link to="/book/1" className="
      relative 
      bg-white dark:bg-slate-800
      rounded-xl 
      overflow-hidden
      shadow-[0_8px_30px_rgba(0,0,0,0.06)]
      dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)]
      border border-slate-100 dark:border-slate-700
      hover:shadow-[0_8px_35px_rgba(0,0,0,0.1)]
      dark:hover:shadow-[0_8px_35px_rgba(0,0,0,0.3)]
      transition-all duration-300
      min-w-[300px]
      group
    ">
      <div className="relative h-[250px] overflow-hidden">
        <img 
          src={book.image} 
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="
          absolute inset-0
          bg-gradient-to-t from-slate-900/70 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        ">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 text-white mb-2">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">Quick View</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-4 h-4 text-indigo-600" />
          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{book.genre}</span>
        </div>

        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          {book.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 mb-4">
          by {book.author}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(book.rating)
                    ? "text-amber-400"
                    : "text-slate-200 dark:text-slate-600"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-slate-600 dark:text-slate-400 ml-1">
              {book.rating}
            </span>
          </div>

          <button className="
            p-2
            rounded-full
            bg-slate-100 dark:bg-slate-700
            text-slate-600 dark:text-slate-300
            hover:bg-indigo-100 dark:hover:bg-indigo-900/30
            hover:text-indigo-600 dark:hover:text-indigo-400
            transition-colors duration-200
          ">
            <BookOpen className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
