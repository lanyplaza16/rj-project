import "../../styles/componentes/Header/Header.scss";
import { Menu } from "../Menu/Menu";

import React, { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-green-500 via-yellow-500 to-pink-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-white">REPINTAR</div>
        <button
          className="lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        < Menu />
      </div>
    </header>
  );
};