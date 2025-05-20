"use client";
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Head from 'next/head';

// Icon components
const RocketIcon = () => (
  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.566 17.842c-.945 1.052-1.89 2.104-2.835 3.155-.143.159-.286.318-.429.475-.454.5-1.259.542-1.767.09-.506-.45-.542-1.253-.088-1.754.244-.267.488-.535.733-.802l2.835-3.155c.399-.45 1.095-.486 1.551-.086.458.397.494 1.086.095 1.536-.032.023-.063.027-.095.04zm12.43-16.6C19.25-.476 15.935-.47 14.189 1.13 11.241 3.77 8.294 6.412 5.346 9.054c-.173.154-.294.355-.336.584-.104.592-.185 1.189-.293 1.78-.076.42-.177.835-.24 1.258-.043.29.055.596.239.822.12.148.258.279.392.418l3.13 3.13c.14.139.28.266.427.388.36.21.75.21 1.114.113.703-.188 1.414-.349 2.12-.522.265-.065.476-.222.647-.426 2.632-2.947 5.263-5.894 7.901-8.834 1.533-1.695 1.56-4.861.034-6.582-.034.022-.073.039-.102.056zm-3.207 6.777c-.662.662-1.727.662-2.39 0-.662-.662-.661-1.727 0-2.388.662-.662 1.728-.662 2.39 0 .66.661.661 1.726 0 2.388z" />
  </svg>
);

const BulbIcon = () => (
  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.5 4c.276 0 .5.224.5.5v.5h1v-.5c0-.276.224-.5.5-.5s.5.224.5.5v.5h.5c.276 0 .5.224.5.5s-.224.5-.5.5h-.5v1h2c.276 0 .5.224.5.5s-.224.5-.5.5h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2v-1h-.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h.5v-.5c0-.276.224-.5.5-.5zm2.5 4h-5c-.276 0-.5.224-.5.5s.224.5.5.5h.5v5.5c0 .827.673 1.5 1.5 1.5h1c.827 0 1.5-.673 1.5-1.5v-5.5h.5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5z" />
  </svg>
);

const TagIcon = () => (
  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.484 15.696l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm10.516 11.304h-8v1h8v-1zm0-5h-8v1h8v-1zm0-5h-8v1h8v-1zm4-5h-24v20h24v-20zm-1 19h-22v-18h22v18z" />
  </svg>
);

const InfoIcon = () => (
  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 3.055l-6 1.221 1.716 8.384.174-.035c.49-.082.809-.552.724-.982l-1.707-8.354 5.093-1.034c.282-.059.423-.25.418-.459-.006-.21-.155-.396-.439-.461l-17.647-3.588c-.213-.045-.405.01-.498.121l-.021.022c-.104.124-.119.306-.004.46l2.156 2.91-2.8.569-.706-.95c-.099-.134-.241-.205-.378-.205-.079 0-.155.017-.219.045l-1.993.82c-.131.054-.229.161-.275.3s-.031.286.038.409l1.335 2.37c.041.073.103.136.175.177.076.042.163.063.246.063.036 0 .071-.004.105-.012l2.546-.519 7.867 9.069-5.935 1.207.862-3.205c.039-.146.014-.301-.067-.424s-.214-.201-.364-.211l-6.562-.398c-.16-.01-.312.062-.41.188-.096.127-.123.29-.073.439l2.67 7.853c.053.155.177.277.333.323.038.011.079.016.118.016.118 0 .235-.046.321-.13l1.3-1.272 2.936-.599 1.159 5.7c.051.250.283.428.543.428.034 0 .069-.003.104-.01.3-.061.492-.349.431-.647l-1.22-5.998 5.247-1.066.12.592c.043.211.205.379.417.437.048.013.097.02.147.02.159 0 .311-.074.411-.206l2.733-3.683c.088-.12.12-.276.082-.422-.038-.147-.147-.265-.291-.321l-1.492-.574 3.463-.705c.143-.031.266-.118.338-.241.071-.123.091-.273.052-.413l-1.827-6.598zm-14.818 1.407l-2.088.424-1.35-1.82 3.438.696zm-3.276 1.168l-1.776.361-1.35-1.82 3.126.635zm-3.119 1.882l1.275 2.27-1.994.407-1.663-2.95 2.382-.273zm4.371 13.363l-2.165-6.364 4.075.247-1.91 7.117zm7.722-1.569l-.932-4.583 4.68-.953.968 3.386-4.716 2.15zm2.437-8.092c-.163 0-.311-.059-.442-.151-.137-.095-.255-.23-.328-.403-.073-.174-.096-.359-.078-.542.021-.2.094-.392.222-.545.121-.144.271-.25.447-.301.161-.047.343-.046.509.012.153.054.3.15.415.284.123.141.207.317.24.509.031.177.013.361-.055.532-.065.166-.168.305-.309.407-.148.107-.304.164-.468.192-.048.005-.102.006-.153.006zm1.004-1.382c-.031-.175-.108-.329-.239-.45-.13-.12-.274-.182-.423-.191-.156-.009-.3.038-.424.129-.125.091-.212.217-.242.352-.035.134-.023.273.026.394.047.118.124.212.211.268.097.062.198.081.311.082.103.001.215-.017.32-.083.102-.064.176-.158.204-.275.029-.118.023-.227-.016-.338.047.075.069.184.042.291-.027.106-.091.184-.175.233-.085.05-.17.063-.253.055-.085-.007-.175-.041-.249-.101-.074-.06-.135-.14-.175-.235-.043-.1-.054-.208-.033-.319.023-.118.072-.229.165-.325.091-.095.214-.158.368-.163.149-.005.294.044.428.143.133.097.226.242.27.417.044.173.033.336-.033.485-.063.147-.159.265-.295.35-.142.09-.281.134-.43.144-.146.01-.292-.02-.428-.087-.133-.067-.249-.159-.334-.277-.086-.119-.138-.253-.156-.396-.018-.147.004-.275.062-.392.061-.12.146-.222.266-.299.118-.078.243-.125.376-.133.128-.007.252.019.35.071l-.034-.042c-.09-.104-.221-.17-.35-.187-.144-.019-.281.008-.404.07-.123.063-.229.16-.305.289-.079.132-.115.266-.12.417-.006.145.03.29.099.429.068.137.17.25.289.337.12.088.25.137.389.154.137.016.274-.008.406-.069.127-.06.242-.147.329-.26.088-.115.138-.247.156-.386.017-.138-.007-.269-.064-.393zm-9.355 6.986l-2.99.608-.762-.365 2.56-5.18.936 4.554.256.383zm-1.741-5.354l-1.797 3.643-5.352 1.089-1.593-4.683 8.742-.049z" />
  </svg>
);

const ReturnIcon = () => (
  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z" />
  </svg>
);

const BoxIcon = () => (
  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.33 3.271a3.5 3.5 0 0 1 3.437-3.25L14.5 0a3.5 3.5 0 0 1 3.434 3.21l.637 4.248a2.497 2.497 0 0 1 2.43 2.496v9.501a4.5 4.5 0 0 1-4.5 4.5h-6a4.5 4.5 0 0 1-4.5-4.5V9.954a2.5 2.5 0 0 1 2.25-2.483L5.33 3.27zm8.772-.771l-6 .002a2 2 0 0 0-1.98 1.717L5.5 6.948l.16.005h12.84l-.16-.005-.6-4a2 2 0 0 0-1.973-1.711l-1.697-.006zM21 9.95H3v9.499a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9.95zm-14.5 2.002a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm12.702-.771l-8.52 8.519a.75.75 0 1 1-1.06-1.06l8.52-8.52a.75.75 0 1 1 1.06 1.061z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" />
  </svg>
);

const RefillIcon = () => (
  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12h2c0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10c-2.777 0-5.287 1.141-7.099 2.977l2.061 2.061-6.962 1.354 1.305-7.013 2.179 2.18c2.172-2.196 5.182-3.559 8.516-3.559 6.627 0 12 5.373 12 12zm-13-6v8h-2v-8h2zm-1.5 13.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" />
  </svg>
);

const HelpCenter = () => {
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (id: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    { id: 'specialty', title: 'SPECIALTY LAUNCHES', icon: <RocketIcon /> },
    { id: 'product', title: 'PRODUCT INFORMATION', icon: <BulbIcon /> },
    { id: 'try', title: 'TRY BEFORE YOU BUY', icon: <TagIcon /> },
    { id: 'general', title: 'GENERAL QUESTIONS', icon: <InfoIcon /> },
    { id: 'orders', title: 'ORDERS & PAYMENT', icon: <TruckIcon /> },
    { id: 'returns', title: 'RETURNS', icon: <ReturnIcon /> },
    { id: 'shipping', title: 'SHIPPING & TRACKING', icon: <BoxIcon /> },
    { id: 'account', title: 'MY ACCOUNT', icon: <UserIcon /> },
    { id: 'refill', title: 'AUTO-REFILL SUBSCRIPTIONS', icon: <RefillIcon /> },
  ];

  const specialtyQuestions = [
    { 
      id: 'gift-codes', 
      question: 'Can I use e-gift codes on specialty product launches?'
    },
    { 
      id: 'return-policy', 
      question: 'What is the return policy for the Jeremy Scott x SpoiledChild collaboration?'
    },
    { 
      id: 'multiple-hoodies', 
      question: 'I love the hoodie! Can I buy more than one to make sure I get the right size or share with my friends?'
    },
    { 
      id: 'hoodie-sizes', 
      question: 'What are the sizes of the Jeremy Scott x SpoiledChild hoodie?'
    },
    { 
      id: 'more-info', 
      question: 'How can I find out more about the products in the Jeremy Scott x SpoiledChild collaboration?'
    },
  ];

  const productQuestions = [
    { 
      id: 'apply-serum', 
      question: 'How do I apply the hair + scalp serum?'
    },
    { 
      id: 'results-timeline', 
      question: 'When can I expect results from using the hair + scalp serum?'
    },
    { 
      id: 'greasy-hair', 
      question: 'Will the hair + scalp serum make my hair greasy?'
    },
    { 
      id: 'irritation', 
      question: 'What if the hair + scalp serum irritates my scalp?'
    },
    { 
      id: 'product-lifespan', 
      question: 'How long should my hair products last?'
    },
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
                {category.icon}
              </div>
              <div className="text-center">
                <p className="font-bold">{category.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Specialty Launches FAQ */}
        <section className="mb-12">
          <h2 className="text-center text-3xl font-bold mb-8">SPECIALTY LAUNCHES</h2>
          
          <div className="border-t border-white/20 mb-4"></div>
          
          {specialtyQuestions.map((item) => (
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