import React from 'react';

// Mock data for books - replace with your actual data
const booksData = [
  {
    id: 1,
    title: "SITA - WARRIOR OF MITHILA",
    author: "AMISH",
    price: "₹99.00",
    format: "ENGLISH",
    category: "SPIRITUAL",
    image: "/api/placeholder/200/300"
  },
  {
    id: 2,
    title: "AUTOBIOGRAPHY OF A YOGI",
    author: "PARAMAHANSA YOGANANDA",
    price: "₹99.00",
    format: "ENGLISH",
    category: "SPIRITUAL",
    image: "/api/placeholder/200/300"
  },
  {
    id: 3,
    title: "TALES FROM SOUTH CHINA SEA",
    author: "CHARLES LILEY",
    price: "₹99.00",
    format: "ENGLISH",
    category: "SPIRITUAL",
    image: "/api/placeholder/200/300"
  },
  {
    id: 4,
    title: "BHAGAVAD GITA - AS IT IS",
    author: "A.C. BHAKTIVEDANTA SWAMI PRABHUPADA",
    price: "₹99.00",
    format: "ENGLISH",
    category: "SPIRITUAL",
    image: "/api/placeholder/200/300"
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
  book: {
    id: number;
    title: string;
    author: string;
    price: string;
    format: string;
    category: string;
    image: string;
  };
}

// Since you mentioned you have the BookCard component, 
// I'm creating a placeholder that you can replace with your actual component
const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={book.image} 
          alt={book.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-gray-100 text-xs px-2 py-1 rounded">{book.format}</span>
        </div>
        <div className="absolute top-2 right-2">
          <span className="bg-gray-100 text-xs px-2 py-1 rounded">{book.category}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-sm mb-1 line-clamp-2">{book.title}</h3>
        <p className="text-xs text-gray-600 mb-2">{book.author}</p>
        <p className="font-bold text-sm">{book.price}</p>
      </div>
    </div>
  );
};

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
            <BookCard key={`${book.id}-${index}`} book={book} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ChapterWisePage;