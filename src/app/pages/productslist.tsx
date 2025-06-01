import React from 'react';
import BookCard from '../components/BookCard';
// Mock data for books - replace with your actual data
const booksData = [
  {
    title: "SITA - WARRIOR OF MITHILA",
    author: "AMISH",
    imageUrl: "/api/placeholder/200/300",
    price: 99.00,
    originalPrice: 199.00,
    series: "Ram Chandra Series",
    bookNumber: 2,
    categories: ["Spiritual", "Fiction", "Mythology"],
    quote: {
      text: "The strength of a woman lies not in what she can destroy, but in what she can protect.",
      source: "Sita - Warrior of Mithila"
    }
  },
  {
    title: "AUTOBIOGRAPHY OF A YOGI",
    author: "PARAMAHANSA YOGANANDA",
    imageUrl: "/api/placeholder/200/300",
    price: 99.00,
    categories: ["Spiritual", "Biography", "Philosophy"],
    quote: {
      text: "The season of failure is the best time for sowing the seeds of success.",
      source: "Autobiography of a Yogi"
    }
  },
  {
    title: "TALES FROM SOUTH CHINA SEA",
    author: "CHARLES LILEY",
    imageUrl: "/api/placeholder/200/300",
    price: 99.00,
    categories: ["Adventure", "Travel", "Fiction"],
    quote: {
      text: "Every journey begins with a single step into the unknown.",
      source: "Tales from South China Sea"
    }
  },
  {
    title: "BHAGAVAD GITA - AS IT IS",
    author: "A.C. BHAKTIVEDANTA SWAMI PRABHUPADA",
    imageUrl: "/api/placeholder/200/300",
    price: 99.00,
    categories: ["Spiritual", "Philosophy", "Religious"],
    quote: {
      text: "You have a right to perform your prescribed duty, but not to the fruits of action.",
      source: "Bhagavad Gita"
    }
  }
];

// Duplicate the data multiple times to match the layout in the image
const allBooks = [
  ...booksData,
  ...booksData,
  ...booksData,
  ...booksData,
  ...booksData
];

interface BookCardProps {
  title: string;
  author: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  series?: string;
  bookNumber?: number;
  categories?: string[];
  quote?: {
    text: string;
    source: string;
  };
}



const ChapterWisePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Book of the Day Banner */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 mb-2">Book of the Day • March 23, 2023 • Rating 4.5/5 ⭐</p>
          <h1 className="text-6xl font-bold mb-4">ATOMIC HABITS</h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <span className="text-lg">JAMES CLEAR</span>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allBooks.map((book, index) => (
            <BookCard 
              key={`${book.title}-${index}`}
              title={book.title}
              author={book.author}
              imageUrl={book.imageUrl}
              price={book.price}
              originalPrice={book.originalPrice}
              series={book.series}
              bookNumber={book.bookNumber}
              categories={book.categories}
              quote={book.quote}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ChapterWisePage;