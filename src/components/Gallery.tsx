import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: '/And NEW IFBB PRO @fkaplancann at the amateur Olympia Italy!Absolutely incredible look today, und.jpg',
    title: 'Amateur Olympia Italy',
  },
  {
    url: '/Yarışma sonrası kendi adıma yaptığım ilk paylaşım olarak bu postta biraz duygularımı dile getirm copy.jpg',
    title: 'IFBB Pro Card',
  },
  {
    url: '/🈴 (1) copy.jpg',
    title: 'Training Focus',
  },
  {
    url: '/🈴 (2) copy.jpg',
    title: 'Intense Session',
  },
  {
    url: '/🈴 copy.jpg',
    title: 'Leg Development',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const slider = document.getElementById('gallery-slider');
    if (!slider || isPaused) return;

    const scrollWidth = slider.scrollWidth / 2;
    let scrollPosition = 0;
    const speed = 0.5;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += speed;
        if (scrollPosition >= scrollWidth) {
          scrollPosition = 0;
        }
        slider.scrollLeft = scrollPosition;
      }
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section id="gallery" className="bg-black py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
            Transformations
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Years of dedication captured in moments of triumph.
          </p>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div
          id="gallery-slider"
          className="flex gap-2 sm:gap-3 md:gap-6 overflow-x-hidden px-1 sm:px-2 md:px-0"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[140px] xs:w-[160px] sm:w-[180px] md:w-[220px] lg:w-[320px] h-[140px] xs:h-[160px] sm:h-[180px] md:h-[280px] lg:h-[400px] group cursor-pointer overflow-hidden rounded-lg border border-zinc-800"
              onClick={() => setSelectedImage(index % images.length)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-1 xs:p-2 sm:p-4 md:p-6">
                <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl font-bold tracking-wide">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-6 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-red-600 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} className="md:w-10 md:h-10" />
          </button>
          <img
            src={images[selectedImage].url}
            alt={images[selectedImage].title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
