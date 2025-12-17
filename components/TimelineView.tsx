import React, { useState, useRef, useEffect } from 'react';
import { Letter } from '../types';
import { RELATIONSHIP_FONTS } from '../constants';

interface TimelineViewProps {
  letters: Letter[];
}

const TimelineView: React.FC<TimelineViewProps> = ({ letters }) => {
  const [activeYear, setActiveYear] = useState<string>('ALL');
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Sort letters by date ascending
  const sortedLetters = [...letters].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Group by year
  const grouped = sortedLetters.reduce((acc, letter) => {
    const year = letter.date.split('-')[0];
    if (!acc[year]) acc[year] = [];
    acc[year].push(letter);
    return acc;
  }, {} as Record<string, Letter[]>);

  const years = Object.keys(grouped).sort();

  const scrollToYear = (year: string) => {
    setActiveYear(year);
    if (year === 'ALL') {
      if (scrollRef.current) scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      yearRefs.current[year]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Auto-scroll logic
  useEffect(() => {
    let animationFrameId: number;
    
    const scroll = () => {
      if (!isPaused && scrollRef.current) {
        // Scroll speed: 1px per frame roughly, adjust as needed (0.5 for slower)
        scrollRef.current.scrollTop += 1;
        
        // Loop back to top if reached bottom (optional, for now just stops)
        // if (scrollRef.current.scrollTop + scrollRef.current.clientHeight >= scrollRef.current.scrollHeight) {
        //   scrollRef.current.scrollTop = 0;
        // }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div 
      className="h-full overflow-y-auto no-scrollbar relative" 
      ref={scrollRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Sticky Time Tabs */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-black py-4 px-6 sm:px-12 flex items-center justify-center gap-6 overflow-x-auto no-scrollbar">
        <button 
          onClick={() => scrollToYear('ALL')}
          className={`text-sm font-bold uppercase tracking-widest whitespace-nowrap hover:text-black transition-colors ${activeYear === 'ALL' ? 'text-black' : 'text-gray-400'}`}
        >
          Timeline
        </button>
        {years.map(year => (
          <button
            key={year}
            onClick={() => scrollToYear(year)}
            className={`text-sm font-bold uppercase tracking-widest hover:text-black transition-colors ${activeYear === year ? 'text-black' : 'text-gray-400'}`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Credit Roll Content - Centered, No Lines */}
      <div className="max-w-3xl mx-auto px-6 py-24 sm:px-12 flex flex-col items-center text-center pb-[50vh]">
        {years.map(year => (
          <div 
            key={year} 
            ref={(el) => { yearRefs.current[year] = el; }} // Fix: Return void explicitly logic handled in ref callback
            className="mb-48 w-full"
          >
            {/* Year - Bold Only, Same Size as content (approx) */}
            <div className="mb-24">
               <h2 className="text-2xl sm:text-3xl font-bold text-black select-none">
                {year}
              </h2>
            </div>

            <div className="space-y-32">
              {grouped[year].map(letter => (
                <div key={letter.id} className="relative group flex flex-col items-center">
                   {/* Metadata - Minimal, centered */}
                   <div className="mb-6 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                      {letter.date} — {letter.receiver}
                   </div>

                   {/* Content - Same size as year, relationship font */}
                   <div className={`text-2xl sm:text-3xl leading-snug break-keep max-w-2xl mx-auto ${RELATIONSHIP_FONTS[letter.relationship]}`}>
                     "{letter.content}"
                   </div>
                   
                   <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-300 font-sans-kr uppercase tracking-widest">
                      From. {letter.sender}
                   </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center py-24 text-gray-200 text-xs uppercase tracking-[0.5em]">
           Fin
        </div>
      </div>
    </div>
  );
};

export default TimelineView;