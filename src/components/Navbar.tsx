import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="fixed w-full z-30 top-0 left-0 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex-shrink-0 text-white font-bold text-lg cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Furkan
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-red-500">
              About
            </button>
            <button onClick={() => scrollToSection('coaching')} className="text-white hover:text-red-500">
              Coaching
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-red-500">
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="text-white">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 px-4 pb-4">
          <div className="flex flex-col space-y-3 pt-2">
            <button onClick={() => scrollToSection('about')} className="text-white text-left">
              About
            </button>
            <button onClick={() => scrollToSection('coaching')} className="text-white text-left">
              Coaching
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-white text-left">
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded self-start"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
