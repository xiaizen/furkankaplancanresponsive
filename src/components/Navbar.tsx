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
      <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 xs:h-14 sm:h-16">
          <div
            className="flex-shrink-0 text-white font-bold text-base xs:text-lg cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Furkan
          </div>

          <div className="hidden md:flex items-center space-x-4 xs:space-x-6">
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
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="text-white text-xl xs:text-2xl">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 px-2 xs:px-4 pb-2 xs:pb-4">
          <div className="flex flex-col space-y-2 xs:space-y-3 pt-1 xs:pt-2">
            <button onClick={() => scrollToSection('about')} className="text-white text-left text-base xs:text-lg">
              About
            </button>
            <button onClick={() => scrollToSection('coaching')} className="text-white text-left text-base xs:text-lg">
              Coaching
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-white text-left text-base xs:text-lg">
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-2 xs:px-4 py-1 xs:py-2 rounded self-start text-base xs:text-lg"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
