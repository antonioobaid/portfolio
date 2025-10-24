'use client';
import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 transition-colors duration-300 border-b-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Antonio Portfolio</h1>
        <div className="hidden md:flex gap-6 items-center">
          <a href="#intro" className="hover:text-blue-500 dark:hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:scale-110 transition"
          >
            {theme === 'light' ? <BsMoonStarsFill /> : <BsSunFill />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:scale-110 transition"
          >
            {theme === 'light' ? <BsMoonStarsFill /> : <BsSunFill />}
          </button>
          <div onClick={() => setOpen(!open)}>
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden text-center">
          <a href="#intro" className="hover:text-blue-500 dark:hover:text-blue-400" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
