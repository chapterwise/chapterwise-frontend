"use client";
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Head from 'next/head';
import Image from 'next/image';

// Import SVG icons from assets folder
// Assuming your SVG files are named icon1.svg, icon2.svg, etc.
// and are located in the assets folder

const HelpCenter = () => {
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (id: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    { id: 'product', title: 'PRODUCT INFORMATION', iconSrc: '/assets/icon-2.svg' },
    { id: 'try', title: 'TRY BEFORE YOU BUY', iconSrc: '/assets/icon-3.svg' },
    { id: 'general', title: 'GENERAL QUESTIONS', iconSrc: '/assets/icon-4.svg' },
    { id: 'orders', title: 'ORDERS & PAYMENT', iconSrc: '/assets/icon-5.svg' },
    { id: 'returns', title: 'RETURNS', iconSrc: '/assets/icon-6.svg' },
    { id: 'shipping', title: 'SHIPPING & TRACKING', iconSrc: '/assets/icon-7.svg' },
    { id: 'account', title: 'MY ACCOUNT', iconSrc: '/assets/icon-8.svg' },
  ];


  const productQuestions = [
    { 
      id: 'new-reader', 
      question: 'Where to start for a new reader?'
    },
    { 
      id: 'books-available',
      question: 'What books are available?'
    },
    { 
      id: 'latest-additions', 
      question: 'What are the latest additions?'
    },
    { 
      id: 'offer-eBooks', 
      question: 'Do you offer eBooks?'
    },
    { 
      id: 'wanted-books', 
      question: 'What if a book I want is not in the catalogue?'
    },
    {
      id: 'catalogue-update',
      question: 'What are the latest additions to your collection?'
    },
    {
      id: 'rare-books',
      question: 'Do you have rare, vintage or out-of-print books?'
    },
    {
      id: 'book-condition',
      question: 'Are the books sanitized or checked before being rented?'
    },
    {
      id: 'book-availability',
      question: 'How do I know if a book is available?'
    },
    {
      id: 'advance-reservation',
      question: 'Can I reserve a book in advance?'
    },
    {
      id: 'other-languages',
      question: 'Do you have books in other languages?'
    }
    

  ];

  return (
    <div className="bg-[#1A0A2E] min-h-screen text-white">
      <Head>
        <title>ChapterWise - Help Center</title>
        <meta name="description" content="ChapterWise help center and FAQ" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-center text-4xl font-bold mb-10">HELP CENTER</h1>
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full py-3 px-10 bg-transparent border border-white/30 text-white focus:outline-none focus:border-white"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-[#1A0A2E] border border-white/20 rounded-lg p-6 flex flex-col items-center justify-center hover:border-white/40 transition-all cursor-pointer"
            >
              <div className="bg-[#2A1A3E] rounded-full p-4 mb-3">
                <Image 
                  src={category.iconSrc} 
                  alt={category.title}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="text-center">
                <p className="font-bold">{category.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

     

        {/* Product Information FAQ */}
        <section className="mb-12">
          <h2 className="text-center text-3xl font-bold mb-8">PRODUCT INFORMATION</h2>
          
          <div className="border-t border-white/20 mb-4"></div>
          
          {productQuestions.map((item) => (
            <div key={item.id} className="border-b border-white/20">
              <button 
                className="w-full py-4 flex justify-between items-center text-left hover:text-white/80"
                onClick={() => toggleQuestion(item.id)}
              >
                <span className="pr-8">{item.question}</span>
                <ChevronDownIcon 
                  className={`w-6 h-6 transition-transform ${expandedQuestions[item.id] ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedQuestions[item.id] && (
                <div className="pb-4 text-white/80">
                  <p>Answer content would go here.</p>
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default HelpCenter;