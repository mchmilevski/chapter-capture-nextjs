import React from 'react';

import { lusitana } from '@/app/ui/fonts';

export default function SubscribeForm() {
  return (
    <div className="bg-white flex flex-col justify-between md:flex-row p-10 md:items-center mt-20">
      <div className="mb-5 md:mb-0 md:w-1/2">
        <div
          className={`${lusitana.className} antialiased text-emerald-800 font-bold text-xl lg:text-3xl`}
        >
          Stay connected
        </div>
        <div className="lg:text-md">Subscribe to receive latest reviews.</div>
      </div>
      <div className="flex flex-row items-center md:w-1/2">
        <input
          placeholder="Your Email Address"
          className="bg-emerald-50 h-10 w-full lg:w-full text-emerald-800 text-sm pl-5 outline-emerald-800 outline-1"
        />
        <button className="bg-emerald-800 h-10 w-12 ml-3 text-white flex flex-row items-center justify-center text-sm md:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="10"
            viewBox="0 0 19 10"
            fill="none"
            role="img"
            aria-label="arrow"
          >
            <path d="M0 5H18" stroke="#FFFFFF" strokeWidth="2"></path>
            <line
              x1="18.2929"
              y1="5.70711"
              x2="13.2929"
              y2="0.707107"
              stroke="#FFFFFF"
              strokeWidth="2"
            ></line>
            <line
              y1="-1"
              x2="7.07107"
              y2="-1"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 19 5)"
              stroke="#FFFFFF"
              strokeWidth="2"
            ></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
