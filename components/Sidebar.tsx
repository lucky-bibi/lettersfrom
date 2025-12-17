import React from 'react';
import { FolderType } from '../types';

interface SidebarProps {
  activeFolder: FolderType | 'ALL';
  onSelectFolder: (folder: FolderType | 'ALL') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeFolder, onSelectFolder }) => {
  return (
    <aside className="w-full md:w-[400px] flex-shrink-0 h-auto md:h-screen sticky top-0 flex flex-col justify-between bg-white z-30 overflow-hidden">
      {/* Header */}
      {/*
      <div className="p-8 md:p-12 z-20">
        <h1 
          className="text-sm md:text-lg font-bold tracking-tighter cursor-pointer mb-1 font-sans-kr" 
          onClick={() => onSelectFolder('ALL')}
        >
          letters<br />from
        </h1>
        <p className="text-gray-400 text-sm mt-2">나의 편지들</p>  
      </div>
      */}
      
      {/* Navigation */}
       {/* nav className에 justify-center 삭제해서 메뉴 위치 변경*/}
      <nav className="flex-1 flex flex-col px-8 pt-4 md:px-12 space-y-12 z-20 relative">
        {/* All Letters Link */}
        <button
          onClick={() => onSelectFolder('ALL')}
          className={`text-left text-2xl md:text-3xl transition-all duration-300 font-bold z-20 relative ${
            activeFolder === 'ALL' ? 'text-black translate-x-2' : 'text-gray-300 hover:text-gray-500'
          }`}
        >
          All
        </button>

        {/* Sent Box with Irregular Mailbox Image */}
        <div className="relative group z-10">
           <button
            onClick={() => onSelectFolder(FolderType.SENT)}
            className={`relative z-20 text-left text-2xl md:text-3xl transition-all duration-300 font-bold ${
              activeFolder === FolderType.SENT ? 'text-black translate-x-2' : 'text-gray-300 hover:text-gray-500'
            }`}
          >
            {FolderType.SENT}
          </button>
          
          {/* Red Mailbox Image - Floating Irregularly */}
          {/* 
           <div className="absolute -top-16 left-[140px] w-32 md:w-48 opacity-90 rotate-12 pointer-events-none transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1531564701487-f238224b7ce3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Red Mailbox" 
                className="w-full h-auto shadow-xl rounded-sm object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all"
              />
           </div>
           */}
        </div>

        {/* Received Box with Irregular Gift/Letter Image */}
        <div className="relative group z-10">
           <button
            onClick={() => onSelectFolder(FolderType.RECEIVED)}
            className={`relative z-20 text-left text-2xl md:text-3xl transition-all duration-300 font-bold ${
              activeFolder === FolderType.RECEIVED ? 'text-black translate-x-2' : 'text-gray-300 hover:text-gray-500'
            }`}
          >
            {FolderType.RECEIVED}
          </button>

          {/* Gift Box/Letter Image - Floating Irregularly */}
          {/* 
          <div className="absolute -bottom-8 left-[100px] w-36 md:w-56 opacity-90 -rotate-6 pointer-events-none transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=400&q=80" 
                alt="Gift Box with Letters" 
                className="w-full h-auto shadow-xl rounded-sm object-cover mix-blend-multiply grayscale-[0.2] group-hover:grayscale-0 transition-all"
              />
           </div>
           */}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-8 md:p-12 text-sm text-gray-400 font-medium z-20 cursor-pointer hover:text-black transition-colors">
        <p>2025 Seulbi,Lee</p>
      </div>
    </aside>
  );
};

export default Sidebar;