import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <section id="hero" className="relative min-h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10"></div>
        <img
          src="/🈴 (2) copy.jpg"
          alt="Furkan Kaplancan Training"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-20 text-center px-4 md:px-6 max-w-3xl md:max-w-5xl">
        <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-3 md:mb-6 tracking-tight leading-tight">
          Furkan Kaplancan
        </h1>
        <div className="h-px w-20 md:w-32 bg-red-600 mx-auto mb-3 md:mb-6"></div>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 md:mb-4 font-light tracking-wide">
          IFBB Pro Bodybuilder & Online Coach
        </p>
        <p className="text-sm sm:text-base md:text-xl text-gray-400 mb-6 md:mb-12 font-light tracking-widest">
          DISCIPLINE. FOCUS. EVOLUTION.
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-red-600 hover:bg-red-700 text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold tracking-wider transition-all duration-300 transform hover:scale-105"
        >
          CONTACT ME
        </button>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
