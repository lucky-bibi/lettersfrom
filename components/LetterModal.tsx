import React, { useState, useEffect } from 'react';
import { Letter, FolderType } from '../types';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { differenceInDays, differenceInHours, parseISO } from 'date-fns';

interface LetterModalProps {
  letter: Letter | null;
  onClose: () => void;
}

const LetterModal: React.FC<LetterModalProps> = ({ letter, onClose }) => {
  const [showScan, setShowScan] = useState(false);
  const [timeString, setTimeString] = useState('');

  // Real-time counter effect
  useEffect(() => {
    if (!letter) return;

    const calculateTime = () => {
      const startDate = parseISO(letter.date);
      const now = new Date();
      
      const totalDays = differenceInDays(now, startDate);
      // Calculate remaining hours roughly (just difference in hours % 24 isn't quite right if we want total hours, 
      // but the request said "00,000 days 000,000 hours passed". 
      // Usually this means "X days AND Y hours" or "Total X hours".
      // Let's assume the wireframe meant "X days, Total Y hours" or simply "X days Y hours".
      // Given the visual "00,000일 000,000시간", it might mean total duration. 
      // Let's display Total Days and Total Hours separately or nicely formatted.
      // However, usually "X days Y hours" is better.
      // But looking at "00,000일 000,000시간", let's calculate total hours passed.
      
      const totalHours = differenceInHours(now, startDate);
      
      // Let's format as "X일 Y시간" where Y is the hours part of the day, or just total hours?
      // "00,000시간" usually implies total hours.
      // Let's try to match the prompt literally: "00,000일 000,000시간이 지남"
      // It looks like two separate counters.
      
      return `${totalDays.toLocaleString()}일 ${totalHours.toLocaleString()}시간`;
    };

    setTimeString(calculateTime());
    
    // Update every minute
    const timer = setInterval(() => {
      setTimeString(calculateTime());
    }, 60000);

    return () => clearInterval(timer);
  }, [letter]);

  if (!letter) return null;

  const prefix = letter.type === FolderType.SENT ? '보낸 지' : '받은 지';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 font-sans-kr">
      <div 
        className="absolute inset-0 bg-white/95 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-[1400px] h-screen sm:h-[90vh] shadow-2xl sm:border border-black flex flex-col md:flex-row overflow-hidden animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Left: Image Area (Centered with Padding) */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-full relative bg-white flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-black/10 p-8 md:p-16 group">
           <img 
            src={showScan ? letter.scanImage : letter.designImage} 
            alt="Letter Visual" 
            className="max-w-full max-h-full object-contain transition-transform duration-500"
          />
          
          {/* Toggle Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
             <div className={`w-2 h-2 rounded-full transition-colors border border-black ${!showScan ? 'bg-black' : 'bg-transparent'}`} />
             <div className={`w-2 h-2 rounded-full transition-colors border border-black ${showScan ? 'bg-black' : 'bg-transparent'}`} />
          </div>

          {/* Navigation Arrows (Hover) */}
          <button 
            onClick={() => setShowScan(!showScan)}
            className="absolute inset-0 w-full h-full flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10"
          >
             <div className="p-4 bg-white rounded-full hover:scale-110 transition-transform">
                <ArrowLeft size={24} color="black" />
             </div>
             <div className="p-4 bg-white rounded-full hover:scale-110 transition-transform">
                <ArrowRight size={24} color="black" />
             </div>
          </button>
          
          <div className="absolute top-6 left-6 text-black font-bold text-xs uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-sm">
            {showScan ? 'Original Scan' : 'Typo Design'}
          </div>
        </div>

        {/* Right: Content Area */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-full p-8 md:p-16 overflow-y-auto no-scrollbar flex flex-col">
          {/* 1. Large Time Counter (Headline) */}
          <div className="mb-12 border-b-2 border-black pb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-black break-keep">
              {prefix} {timeString}
            </h1>
          </div>

          <div className="flex-1 space-y-10">
             {/* 2. Metadata List */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4">
                <div>
                  <h4 className="text-sm text-gray-400 font-bold mb-1">
                    {letter.type === FolderType.SENT ? '보낸 날' : '받은 날'}
                  </h4>
                  <p className="text-lg font-medium">{letter.date}</p>
                </div>

                <div>
                  <h4 className="text-sm text-gray-400 font-bold mb-1">나와의 관계</h4>
                  <p className="text-lg font-medium">#{letter.relationship}, {letter.sender === '나' ? letter.receiver : letter.sender}</p>
                </div>

                <div>
                  <h4 className="text-sm text-gray-400 font-bold mb-1">연상 장소</h4>
                  <p className="text-lg font-medium">{letter.place}</p>
                </div>
             </div>

             {/* 3. Content */}
             <div className="pt-4">
               <h4 className="text-sm text-gray-400 font-bold mb-4">편지 내용</h4>
               <p className="whitespace-pre-line leading-loose text-lg text-gray-900 text-justify">
                 {letter.content}
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterModal;