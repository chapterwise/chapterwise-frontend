"use client";
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Head from 'next/head';
import Image from 'next/image';



const HelpCenter = () => {
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (id: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    { id: 'product', title: 'PRODUCT INFORMATION', iconSrc: '/assets/icon-1.svg' },
    { id: 'orders', title: 'ORDERS & PAYMENT', iconSrc: '/assets/icon-2.svg' },
    { id: 'returns', title: 'RETURNS', iconSrc: '/assets/icon-3.svg' },
    { id: 'account', title: 'MY ACCOUNT', iconSrc: '/assets/icon-4.svg' },
    { id: 'general', title: 'GENERAL QUESTIONS', iconSrc: '/assets/icon-5.svg' },
    { id: 'community', title: 'COMMUNITY (REDDIT)', iconSrc: '/assets/icon-6.svg' },
  ];

  const productQuestions = [
    { 
      id: 'new-reader', 
      question: 'Where to start for a new reader?',
      answer: 'Check out our beginner-friendly reads—short, light, and enjoyable.'
    },
    { 
      id: 'available-books', 
      question: 'What books are available?',
      answer: 'Browse our catalogue by genre, author, or popularity.'
    },
    { 
      id: 'ebooks', 
      question: 'Do you offer eBooks?',
      answer: 'Not at the moment. We focus purely on physical book rentals.'
    },
    { 
      id: 'book-not-available', 
      question: 'What if a book I want isn\'t in the catalogue?',
      answer: 'You can suggest new titles through the feedback form—we\'d love to know what you\'re looking for!'
    },
    { 
      id: 'latest-additions', 
      question: 'What are the latest additions to your collection?',
      answer: 'We update our collection frequently. Check our "New Arrivals" board or ask us in person.'
    },
    { 
      id: 'catalogue-updates', 
      question: 'How often do you update your catalogue?',
      answer: 'We refresh our collection regularly based on requests and new finds.'
    },
    { 
      id: 'rare-books', 
      question: 'Do you have rare, vintage, or out-of-print books?',
      answer: 'Occasionally! Drop us a message if you\'re on the hunt for something special.'
    },
    { 
      id: 'book-sanitization', 
      question: 'Are the books sanitized or checked before being rented?',
      answer: 'Yes, all books are cleaned and checked to ensure they\'re in good condition.'
    },
    { 
      id: 'book-reservation', 
      question: 'Can I reserve a book in advance?',
      answer: 'Yes. Just email us your request, and we\'ll hold the book for you if it\'s available.'
    },
    { 
      id: 'other-languages', 
      question: 'Do you offer books in languages other than English?',
      answer: 'Not yet, but we\'re working to expand our collection. Let us know your preferences, and we\'ll prioritize them for future updates.'
    },
    { 
      id: 'kids-books', 
      question: 'Are there books for kids or young readers?',
      answer: 'Absolutely! We have a dedicated section for children\'s books and young adult fiction.'
    },
  ];

  const ordersQuestions = [
    { 
      id: 'pricing-plans', 
      question: 'What are the pricing plans?',
      answer: 'We have simple rental pricing based on book type and rental duration. Ask us for details or check our pricing [here].'
    },
    { 
      id: 'payment-methods', 
      question: 'How do I make a payment?',
      answer: 'We currently accept payments in cash or via UPI during the in-person handover.'
    },
    { 
      id: 'security-deposit', 
      question: 'Is there a security deposit?',
      answer: 'Generally no, but for select high-value books, we may request a small refundable deposit.'
    },
    { 
      id: 'multiple-books', 
      question: 'Can I rent multiple books at once?',
      answer: 'Yes, you\'re welcome to borrow multiple books. We\'ll guide you on pricing for bundle rentals.'
    },
    { 
      id: 'receipt', 
      question: 'Can I get a receipt for my rental?',
      answer: 'Yes, we can provide a digital receipt upon request.'
    },
    { 
      id: 'discounts', 
      question: 'Do you offer discounts for students or bulk rentals?',
      answer: 'We occasionally run promotions. Stay tuned to our website for updates on discounts.'
    },
  ];

  const returnsQuestions = [
    { 
      id: 'borrow-return', 
      question: 'How do I borrow and return a book?',
      answer: 'Books are exchanged in person. Just reach out and we\'ll coordinate the meeting.'
    },
    { 
      id: 'extend-period', 
      question: 'Can I extend my reading period?',
      answer: 'Absolutely! Just drop us an email at chapterwise.blr@gmail.com.'
    },
    { 
      id: 'late-return', 
      question: 'What if I return a book late?',
      answer: 'We\'re flexible—just let us know in advance. If it\'s too delayed, a small fee may apply.'
    },
    { 
      id: 'someone-else-return', 
      question: 'Can someone else return the book on my behalf?',
      answer: 'Yes, as long as we\'re informed ahead of time.'
    },
    { 
      id: 'lost-damaged', 
      question: 'What happens if I lose or damage a book?',
      answer: 'In case of loss or significant damage, we may request a replacement or charge a fee. Reach out to us, and we\'ll work it out together.'
    },
  ];

  const accountQuestions = [
    { 
      id: 'update-details', 
      question: 'How do I update my contact details or preferences?',
      answer: 'Email us at chapterwise.blr@gmail.com, and we\'ll update it for you.'
    },
    { 
      id: 'create-account', 
      question: 'Do I need to create an account to borrow books?',
      answer: 'Not yet. Just contact us directly, and we\'ll handle things manually for now.'
    },
    { 
      id: 'pause-cancel', 
      question: 'Can I pause or cancel my borrowing anytime?',
      answer: 'Yes, simply email us to pause your rentals or opt out for a while.'
    },
    { 
      id: 'borrowing-history', 
      question: 'Can I track my borrowing history?',
      answer: 'Currently, we don\'t have an automated system, but feel free to ask us for details about your past rentals.'
    },
  ];

  const generalQuestions = [
    { 
      id: 'contact', 
      question: 'How can I contact you?',
      answer: 'Easy—just email us at chapterwise.blr@gmail.com.'
    },
    { 
      id: 'donate-books', 
      question: 'Can I donate books to you?',
      answer: 'Yes, we gladly accept good-quality books. Email us to coordinate the handover.'
    },
    { 
      id: 'feedback', 
      question: 'Have feedback or a suggestion?',
      answer: 'We\'re always open to hearing from you—share your thoughts using our feedback form.'
    },
    { 
      id: 'cold-email', 
      question: 'Can I send a cold email just to chat or share something?',
      answer: 'Totally! We love bookish conversations—just write to chapterwise.blr@gmail.com.'
    },
    { 
      id: 'reading-sessions', 
      question: 'Do you host reading sessions or meetups?',
      answer: 'Not yet, but we\'re thinking about it. Let us know if you\'d be interested!'
    },
    { 
      id: 'stay-updated', 
      question: 'What\'s the best way to stay updated on new arrivals and announcements?',
      answer: 'Check the "Updates" section on our website regularly for notifications.'
    },
  ];

  const communityQuestions = [
    { 
      id: 'community-space', 
      question: 'Do you have a community space for discussions?',
      answer: 'Yes! Join our Reddit community to chat with other readers, share reviews, and exchange ideas.'
    },
    { 
      id: 'what-to-post', 
      question: 'What can I post in the community?',
      answer: 'Book reviews, discussion threads, reading challenges, suggestions, memes—basically, anything book-related!'
    },
    { 
      id: 'join-community', 
      question: 'How do I become a part of the community?',
      answer: 'Just visit our Reddit page and hit "Join." Introduce yourself and start a conversation.'
    },
    { 
      id: 'moderation', 
      question: 'Is the community moderated?',
      answer: 'Yes, we keep it friendly, respectful, and spam-free. Please check our posting guidelines.'
    },
    { 
      id: 'suggest-books', 
      question: 'Can I suggest books or features for the rental platform there?',
      answer: 'Absolutely! We actively monitor community feedback and ideas.'
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#1A0A2E] to-black text-white">
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
          <h2 className="text-center text-3xl font-bold mb-8">📘 PRODUCT INFORMATION</h2>
          
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
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Orders & Payment FAQ */}
        <section className="mb-12">
          <h2 className="text-center text-3xl font-bold mb-8">💳 ORDERS & PAYMENT</h2>
          
          <div className="border-t border-white/20 mb-4"></div>
          
          {ordersQuestions.map((item) => (
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
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Returns FAQ */}
        <section className="mb-12">
          <h2 className="text-center text-3xl font-bold mb-8">🔁 RETURNS</h2>
          
          <div className="border-t border-white/20 mb-4"></div>
          
          {returnsQuestions.map((item) => (
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
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* My Account FAQ */}
        <section className="mb-12">
          <h2 className="text-center text-3xl font-bold mb-8">👤 MY ACCOUNT</h2>
          
          <div className="border-t border-white/20 mb-4"></div>
          
          {accountQuestions.map((item) => (
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
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* General Questions FAQ */}
        <section className="mb-12">
          <h2 className="text-center text-3xl font-bold mb-8">❓ GENERAL QUESTIONS</h2>
          
          <div className="border-t border-white/20 mb-4"></div>
          
          {generalQuestions.map((item) => (
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
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Community FAQ */}
        <section className="mb-12">
          <h2 className="text-center text-3xl font-bold mb-8">🗣️ COMMUNITY (REDDIT)</h2>
          
          <div className="border-t border-white/20 mb-4"></div>
          
          {communityQuestions.map((item) => (
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
                  <p>{item.answer}</p>
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