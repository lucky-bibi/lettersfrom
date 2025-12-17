
import React from 'react';
import { Letter } from '../types';

interface ThumbnailListProps {
  letters: Letter[];
  onLetterClick: (letter: Letter) => void;
}

const ThumbnailList: React.FC<ThumbnailListProps> = ({ letters, onLetterClick }) => {
  return (
    <div className="h-full overflow-y-auto no-scrollbar scroll-smooth">
      <div className="p-6 sm:p-12 bg-white max-w-[1600px] mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-24">
          {letters.map((letter, index) => (
            <div 
              key={letter.id}
              onClick={() => onLetterClick(letter)}
              className="break-inside-avoid group cursor-pointer mb-24"
            >
              {/* 1. Header & Text Section (Top) */}
              <div className="mb-5 pl-1">
                {/* Badge & Title Row */}
                <div className="flex items-start gap-2 mb-4">
                  <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs font-sans-kr">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-base font-bold leading-none text-black">
                      {letter.sender}
                    </h3>
                    {/*
                    <p className="text-lg font-bold text-gray-800 mt-2">
                      {letter.relationship} · {letter.place}
                    </p>
                    */}
                  </div>
                </div>

                {/* Description with Vertical Line */}
                <div className="ml-2 border-l border-black pl-5 py-1 mt-6">
                  <div className="text-sm leading-relaxed text-gray-900 text-justify font-sans-kr whitespace-pre-line line-clamp-[5]">
                    {letter.content}
                  </div>
                  <div className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {letter.date}
                  </div>
                </div>
              </div>

              {/* 2. Image Section (Bottom) */}
              <div className="relative w-full overflow-hidden bg-gray-50">
                {/* Scan Image (Absolute - Reveal on Hover) */}
                <img 
                  src={letter.scanImage} 
                  alt="Original Scan"
                  className="w-full h-auto object-cover absolute inset-0 z-0 scale-105"
                />
                {/* Design Image (Relative - Default - fades out on hover) */}
                <img 
                  src={letter.designImage} 
                  alt="Typography Design"
                  className="relative z-10 w-full h-auto object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailList;
