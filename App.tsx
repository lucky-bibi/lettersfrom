import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import ThumbnailList from './components/ThumbnailList';
import TimelineView from './components/TimelineView';
import LetterModal from './components/LetterModal';
import { FolderType, Letter, ViewMode } from './types';
import { MOCK_LETTERS } from './constants';
import { LayoutGrid, List } from 'lucide-react';

const App: React.FC = () => {
  const [activeFolder, setActiveFolder] = useState<FolderType | 'ALL'>('ALL');
  const [viewMode, setViewMode] = useState<ViewMode>('THUMBNAIL');
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

  // Filter letters based on active folder
  const filteredLetters = useMemo(() => {
    if (activeFolder === 'ALL') return MOCK_LETTERS;
    return MOCK_LETTERS.filter(letter => letter.type === activeFolder);
  }, [activeFolder]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-black font-sans-kr">
      {/* Navigation */}
      <Sidebar 
        activeFolder={activeFolder} 
        onSelectFolder={setActiveFolder} 
      />

      {/* Main Content */}
      <main className="flex-1 relative flex flex-col h-screen overflow-hidden">
        {/* Top Bar for View Switcher */}
        <header className="sticky top-0 z-20 flex justify-between items-center px-4 sm:px-8 py-4 bg-white border-b border-black flex-shrink-0">
           <h2 className="text-lg font-bold">
             {activeFolder === 'ALL' ? 'All Letters' : activeFolder}
             <span className="ml-2 text-sm font-normal text-gray-400">
               ({filteredLetters.length})
             </span>
           </h2>

           {/*
           <div className="flex items-center space-x-1 border border-black p-1">
             <button 
               onClick={() => setViewMode('THUMBNAIL')}
               className={`p-2 transition-colors ${viewMode === 'THUMBNAIL' ? 'bg-black text-white' : 'text-gray-400 hover:text-black'}`}
               title="Thumbnail View"
             >
               <LayoutGrid size={18} />
             </button>
             <button 
               onClick={() => setViewMode('TIMELINE')}
               className={`p-2 transition-colors ${viewMode === 'TIMELINE' ? 'bg-black text-white' : 'text-gray-400 hover:text-black'}`}
               title="Timeline View"
             >
               <List size={18} />
             </button>
           </div>
           */}
        </header>

        {/* View Content - Scroll handled inside components now */}
        <div className="flex-1 relative overflow-hidden">
          {viewMode === 'THUMBNAIL' ? (
            <ThumbnailList 
              letters={filteredLetters} 
              onLetterClick={setSelectedLetter} 
            />
          ) : (
            <TimelineView 
              letters={filteredLetters} 
            />
          )}
        </div>
      </main>

      {/* Detail Modal */}
      {selectedLetter && (
        <LetterModal 
          letter={selectedLetter} 
          onClose={() => setSelectedLetter(null)} 
        />
      )}
    </div>
  );
};

export default App;