import React from 'react'
import { useState, useEffect } from 'react'
import BookCard from '../Components/BookCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const FullGenre = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const booksPerPage = 12
  const totalBooks = 50 // Example total

  // Example books data
  const books = Array(totalBooks).fill().map((_, i) => ({
    id: i + 1,
    title: `Book ${i + 1}`,
    author: `Author ${i + 1}`,
    rating: (Math.random() * 5).toFixed(1),
    image: `https://picsum.photos/200/300?random=${i}`
  }))

  const totalPages = Math.ceil(totalBooks / booksPerPage)
  const indexOfLastBook = currentPage * booksPerPage
  const indexOfFirstBook = indexOfLastBook - booksPerPage
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen">
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white 
                    dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold 
                         bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900
                         dark:from-white dark:via-indigo-400 dark:to-white
                         bg-clip-text text-transparent
                         mb-4">
              Romance
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 
                          mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover captivating romance stories that will sweep you off your feet
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {['All', 'Contemporary', 'Historical', 'Paranormal', 'Young Adult'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 rounded-full text-sm font-medium
                         bg-white dark:bg-gray-800 
                         hover:bg-indigo-50 dark:hover:bg-gray-700
                         border border-gray-200 dark:border-gray-700
                         text-gray-700 dark:text-gray-300
                         transition-all duration-300
                         hover:shadow-md"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Book Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center items-center gap-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 
                       border border-gray-200 dark:border-gray-700
                       disabled:opacity-50 disabled:cursor-not-allowed
                       hover:bg-gray-50 dark:hover:bg-gray-700
                       transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`
                  w-10 h-10 rounded-lg
                  text-sm font-medium
                  transition-all duration-300
                  ${currentPage === i + 1 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                  }
                  hover:shadow-md
                `}
              >
                {i + 1}
              </button>
            ))}
            
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 
                       border border-gray-200 dark:border-gray-700
                       disabled:opacity-50 disabled:cursor-not-allowed
                       hover:bg-gray-50 dark:hover:bg-gray-700
                       transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullGenre
