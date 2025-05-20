'use client';

import { SetStateAction, useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  Book, 
  Lock, 
  Zap, 
  Clock,
  ArrowRight,
  Plus,
  FacebookIcon,
  Instagram,
  Twitter,
  Github
} from 'lucide-react';

export default function MissionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-[url('/bookshelf-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-6xl font-bold mb-8">OUR M<span className="invisible">I</span>SSION</h1>
          <p className="text-lg max-w-3xl">
            FROM CLASSICS TO THRILLERS, EVERY LIBRO DESERVES A READER BECAUSE GREAT STORIES SHOULD BE SHARED NOT SHELVED!
          </p>
        </div>
      </section>

      {/* Mission Statement Box */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="bg-white text-black p-8 max-w-3xl mx-auto text-center">
            <p className="uppercase font-semibold mb-4">TO PROVIDE A MEDIUM FOR DIGITAL DETOX,</p>
            <p className="uppercase font-semibold mb-4">WHILE FOSTERING A COMMUNITY OF READERS, ALL THE</p>
            <p className="uppercase font-semibold">WHILE BEING EASY ON POCKET</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-indigo-900 p-6 rounded">
              <Book className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">CURATED SELECTION</h3>
              <p className="text-sm">Quality titles across multiple genres and languages</p>
            </div>
            <div className="bg-indigo-900 p-6 rounded">
              <Lock className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">USER TRANSPARENCY</h3>
              <p className="text-sm">Always know what you pay for and where your money goes</p>
            </div>
            <div className="bg-indigo-900 p-6 rounded">
              <Zap className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">ACCESSIBILITY</h3>
              <p className="text-sm">Access books on various devices with intuitive navigation</p>
            </div>
            <div className="bg-indigo-900 p-6 rounded">
              <Clock className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">MEMBERSHIP FOR ALL</h3>
              <p className="text-sm">Flexible subscription options for all budgets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded">
              <div className="bg-[url('/code-bg.jpg')] bg-cover bg-center h-64"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">OUR STORY</h2>
              <p className="mb-4">
                Back in college, we started a hobby: trading between ourselves books that we'd enjoyed. What started as a madcap's curiosity can gauge... but by face followed by others.
              </p>
              <p className="mb-4">
                That frustration that so many experience as native digital users, of walking into a bookstore and not knowing where to start and how to get a digital copy / backup... it motivated this service to become a medium that celebrates reading while being easy on the pocket.
              </p>
              <p>
                ...and that's why chapterWISE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="bg-gray-900 p-8 rounded">
            <h2 className="text-3xl font-bold mb-6">OUR TEAM</h2>
            <p className="mb-4">
              We are a group of tech believers, Our ideology is to get tech into reading to push it to the next level.
            </p>
            <p className="mb-4">
              From founding our business, the prelude and fresh breeze to the continuing poem continuing ever after, we want to add a personal touch to every read.
            </p>
            <p>
              ...we hope your reading enjoys.
            </p>
          </div>
        </div>
      </section>

      {/* Why chapterWISE */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">why chapterWISE?</h2>
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">TIRED OF SCREENS FIGHTING FOR YOUR ATTENTION?</h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="bg-white text-black font-bold text-xl w-8 h-8 flex items-center justify-center rounded-full mr-4 flex-shrink-0">1</span>
              <div>
                <h4 className="text-xl font-bold mb-2">BUT LET'S BE HONEST</h4>
                <p className="text-gray-300">We all remember those days when we had to force ourselves to read, but times have changed.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-white text-black font-bold text-xl w-8 h-8 flex items-center justify-center rounded-full mr-4 flex-shrink-0">2</span>
              <div>
                <h4 className="text-xl font-bold mb-2">ENTER YOUR READING AMIGO.</h4>
                <p className="text-gray-300">chapterWISE is here to help you find books that match your interests.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-white text-black font-bold text-xl w-8 h-8 flex items-center justify-center rounded-full mr-4 flex-shrink-0">3</span>
              <div>
                <h4 className="text-xl font-bold mb-2">ON A BUDGET? NO PROBLEM.</h4>
                <p className="text-gray-300">Our membership plans cater to all budget ranges.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-white text-black font-bold text-xl w-8 h-8 flex items-center justify-center rounded-full mr-4 flex-shrink-0">4</span>
              <div>
                <h4 className="text-xl font-bold mb-2">TRY SOMETHING NEW.</h4>
                <p className="text-gray-300">Discover books outside your comfort zone with our recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="bg-gray-900 p-8 rounded flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <p className="text-lg mb-2">So go ahead, try a new author, discover a different genre, or explore a philosophy. Your next favorite book is waiting.</p>
              <button className="bg-indigo-700 text-white px-4 py-2 rounded mt-4">Register</button>
            </div>
            <div className="bg-black p-6 rounded">
              <h3 className="text-3xl font-bold mb-2">chapterW<span className="relative">
                <span className="relative z-10">I</span>
                <span className="absolute -right-1 top-0 h-full w-4 bg-white z-0"></span>
              </span>SE</h3>
              <p className="text-purple-500">Your Reading Companion</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="container mx-auto">
          <p className="text-center text-sm mb-4">FREQUENTLY ASKED QUESTIONS (FAQ)</p>
          <p className="text-center text-xs mb-8">THESE FAQ CONTENT IS DESIGNED TO ADDRESS COMMON CONCERNS AND PROVIDE CLEAR, CONCISE ANSWERS FOR BOTH NEW AND EXPERIENCED BOOKWORMS</p>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { 
                question: "WHAT IS CHAPTERWISE?", 
                answer: "chapterWISE is a digital reading platform that helps you discover and enjoy books that match your interests." 
              },
              { 
                question: "HOW MUCH DOES IT COST?", 
                answer: "We offer various membership plans starting from $5.99 per month." 
              },
              { 
                question: "CAN I USE THIS ON MY TABLET?", 
                answer: "Yes, chapterWISE is available on all major platforms including tablets." 
              },
              { 
                question: "DO YOU HAVE AUDIOBOOKS?", 
                answer: "Yes, we offer a selection of audiobooks as part of our premium membership." 
              },
              { 
                question: "HOW DO YOU SELECT BOOKS?", 
                answer: "Our curation team selects books based on quality, diversity, and reader interests." 
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-800 pb-4">
                <button 
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="mt-2 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white text-black px-6 py-2 rounded">LEARN MORE</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">ABOUT CHAPTERWISE</h3>
              <p className="text-sm text-gray-400 mb-4">
                We've packaged the best books and stories together to create content that is meant to be enjoyed anywhere.
              </p>
              <p className="text-sm text-gray-400">
                Our mission is to make reading accessible for everyone, anywhere by designing beautiful interfaces and user experiences that seamlessly connect readers with the stories they love.
              </p>
              <div className="mt-4 flex space-x-2">
                <button className="bg-indigo-900 text-white text-xs px-3 py-1 rounded">Follow chapterWISE</button>
                <button className="border border-white text-white text-xs px-3 py-1 rounded">JOIN US</button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">KNOW MORE</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><Link href="#">Our Vision</Link></li>
                <li><Link href="#">Collaborations</Link></li>
                <li><Link href="#">Career</Link></li>
                <li><Link href="#">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">SUPPORT</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><Link href="#">Help Center</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Shipping Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">DISCOVER</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><Link href="#">Categories</Link></li>
                <li><Link href="#">New Arrivals</Link></li>
                <li><Link href="#">Top Rated</Link></li>
                <li><Link href="#">Recommendations</Link></li>
              </ul>
              
              <h3 className="text-xl font-bold mt-8 mb-4">CONTACT US</h3>
              <p className="text-sm text-gray-400">
                support@chapterwise.com<br/>
                +1 (555) 123-4567
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 mb-4 md:mb-0">&copy; 2025 chapterWISE. All Rights Reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}