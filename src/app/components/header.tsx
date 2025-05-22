'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Search, User, Bell, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  return (
    <header className="w-full bg-opacity-10 ">      
      <div className="bg-black  text-white py-4 relative">
        <div className="container  mx-auto flex items-center px-4">
          <div className="w-1/5 mr-4">
            <Link href="/" className="flex items-center">
              <Image
                src="assets/chapterwise.svg"
                alt="Logo"
                width={100}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button 
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                className="flex items-center font-medium"
              >
                Explore <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isExploreOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg z-50">
                  <ul className="py-1">
                    <li><Link href="/categories" className="block px-4 py-2 hover:bg-gray-100">Categories</Link></li>
                    <li><Link href="/authors" className="block px-4 py-2 hover:bg-gray-100">Authors</Link></li>
                    <li><Link href="/genres" className="block px-4 py-2 hover:bg-gray-100">Genres</Link></li>
                  </ul>
                </div>
              )}
            </div>
            
            <Link href="/directory" className="font-medium">Directory</Link>
            <Link href="/shelf" className="font-medium">Shelf</Link>
            <Link href="/about-us" className="font-medium">About Us</Link>
            <Link href="/donate" className="font-medium">Donate</Link>
          </nav>
          
          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 mx-8">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search by Directory"
                className="w-full py-2 pl-4 pr-10 rounded bg-white text-gray-800 focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
          </div>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300">
              <User className="h-6 w-6" />
            </button>
            <button className="text-white hover:text-gray-300">
              <Bell className="h-6 w-6" />
            </button>
            <button className="text-white hover:text-gray-300">
              <ShoppingBag className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;