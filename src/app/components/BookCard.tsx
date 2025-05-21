import React from 'react';
import Image from 'next/image';

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

export default function BookCard({
  title,
  author,
  imageUrl,
  price,
  originalPrice,
  series,
  bookNumber,
  categories = [],
  quote
}: BookCardProps) {
  return (
    <div className="max-w-sm mx-auto">
      {/* Card Container */}
      <div className="relative bg-white rounded-lg p-4 shadow-lg">
        {/* Categories */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          {categories.map((category, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-200 bg-opacity-80 rounded-md text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Book Cover with Glow Effect */}
        <div className="relative mx-auto rounded-md overflow-hidden mb-4">
          <div className="absolute inset-0 bg-pink-200 blur-2xl opacity-50"></div>
          <div className="relative aspect-[3/4] w-full max-w-xs mx-auto">
            <Image
              src={imageUrl}
              alt={`${title} book cover`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Book Info */}
        <div className="mt-4 text-center">
          {series && bookNumber && (
            <p className="text-xs text-gray-500 mb-1">
              {series} BOOK {bookNumber}
            </p>
          )}
          <h2 className="text-4xl font-bold uppercase tracking-wider mb-1">{title}</h2>
          <h3 className="text-xl uppercase font-medium tracking-wider mb-2">{author}</h3>
          
          {quote && (
            <div className="my-3 text-xs italic text-gray-600">
              <p>"{quote.text}"</p>
              <p>— {quote.source}</p>
            </div>
          )}
          
          <div className="flex justify-center items-center mt-4">
            <span className="text-2xl font-bold">₹{price}</span>
            {originalPrice && (
              <span className="text-lg text-gray-500 line-through ml-2">₹{originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}