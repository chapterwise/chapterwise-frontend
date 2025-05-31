import React from 'react';
import { ChevronDown, ArrowRight, BookOpen, Users, Zap } from 'lucide-react';

const ChapterWiseLanding = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with book image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        
        {/* Book illustration placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-96 h-64 bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg shadow-2xl transform rotate-12 opacity-30"></div>
            <div className="absolute -top-4 -left-4 w-96 h-64 bg-gradient-to-br from-white to-gray-200 rounded-lg shadow-2xl transform -rotate-6 opacity-40"></div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            why <span className="text-blue-500 font-black">buy?</span> when you<br />
            can <span className="text-blue-500 font-black">borrow!!</span>
          </h1>
          
          <button 
            onClick={() => scrollToSection('rent-section')}
            className="mt-16 flex items-center mx-auto text-gray-300 hover:text-white transition-colors group"
          >
            <span className="mr-2">Scroll down to Get Started</span>
            <ChevronDown className="h-5 w-5 animate-bounce group-hover:text-blue-400" />
          </button>
        </div>
      </section>

      {/* Rent Read Repeat Section */}
      <section id="rent-section" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center bg-blue-600/20 rounded-full px-6 py-2 mb-8">
              <span className="text-blue-400 text-sm font-medium">1/28 x 1152</span>
            </div>
          </div>
          
          <h2 className="text-7xl md:text-9xl font-black mb-8 leading-none">
            RENT READ<br />REPEAT
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            YOUR GATEWAY TO ENDLESS STORIES AND CHAPTERS
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center group">
              <span className="mr-2">click here to shop</span>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-colors flex items-center group">
              SHOP NOW
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Beyond Screens Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Beyond Screens<br />
              <span className="text-purple-400">Within Reach</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We're a group of techies who love books and dream big. This book rental venture is our first step into entrepreneurship—learning, experimenting, and building something meaningful. We believe in the joy of reading, the power of community, and the importance of digital detox.
            </p>
            
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition-colors">
              ABOUT US
            </button>
          </div>
          
          <div className="relative">
            {/* Video placeholder */}
            <div className="bg-gray-800 rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-400">Video Content</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose ChapterWISE?</h2>
            <p className="text-xl text-gray-400">Discover the benefits of our book rental service</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Vast Collection</h3>
              <p className="text-gray-400">Access thousands of books across all genres and categories</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Driven</h3>
              <p className="text-gray-400">Join a community of book lovers and share recommendations</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
              <p className="text-gray-400">Quick delivery and easy returns for seamless reading experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold">chapterWISE</span>
            </div>
            <p className="text-gray-400">© 2025 ChapterWISE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChapterWiseLanding;