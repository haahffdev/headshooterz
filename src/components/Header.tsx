import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <nav className="bg-black/90 text-white p-4 shadow-purple-500/20 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-500">☠ xXH34DSH00T3RZXx ☠</div>
        <div className="flex gap-6">
          <a href="#home" className="hover:text-red-500 transition-colors">INICIO</a>
          <a href="#members" className="hover:text-red-500 transition-colors">LIDERES</a>
          <a href="#server" className="hover:text-red-500 transition-colors">SERVIDOR</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;