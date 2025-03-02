"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Download, Music2, Play } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-violet-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and App Name */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                <Image src="/hope.svg" alt="logo" width={32} height={32} />
              </Link>
            </div>
            <Link href="/" className="ml-2 text-xl font-semibold text-white-1">
              HOPE
            </Link>
          </div>

          {/* Middle Image */}
          <div className="flex items-center">
            <Image
              src="/kirby.gif"
              alt="middle-image"
              width={64}
              height={64}
              className="mx-4"
            />
          </div>

          {/* Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/presets" className="flex items-center text-white font-bold hover:text-[#FFD700]">
              <Music2 className="mr-2 w-5 h-5 font-bold" /> Presets
            </Link>
            <Link href="/sounds" className="flex items-center text-white font-bold hover:text-[#FFD700]">
              <Play className="mr-2 w-5 h-5 font-bold" /> Custom
            </Link>
            <Link href="/download" className="flex items-center text-white font-bold hover:text-[#FFD700]">
              <Download className="mr-2 w-5 h-5 font-bold" /> Desktop app
            </Link>
          </div>


          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#FFD700] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/presets" className="flex items-center text-white font-bold hover:text-[#FFD700]">
              <Music2 className="mr-2 w-5 h-5 font-bold" /> Presets
            </Link>
            <Link href="/sounds" className="flex items-center text-white font-bold hover:text-[#FFD700]">
              <Play className="mr-2 w-5 h-5 font-bold" /> Custom
            </Link>
            <Link href="/download" className="flex items-center text-white font-bold hover:text-[#FFD700]">
              <Download className="mr-2 w-5 h-5 font-bold" /> Download
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
