import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const studentTransformations = [
  {
    url: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Client Transformation',
    achievement: '12 Week Transformation',
  },
  {
    url: 'https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Competition Prep',
    achievement: 'First Place Finish',
  },
  {
    url: 'https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Body Recomp',
    achievement: '16 Week Journey',
  },
  {
    url: 'https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Muscle Gain',
    achievement: '20 Weeks Progress',
  },
  {
    url: 'https://images.pexels.com/photos/949131/pexels-photo-949131.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Stage Ready',
    achievement: 'Pro Qualifier Prep',
  },
  {
    url: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    name: 'Strength Phase',
    achievement: '24 Week Bulk',
  },
];

export default function Students() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedImages = [...studentTransformations, ...studentTransformations];

  useEffect(() => {
    const slider = document.getElementById('students-slider');
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
    <section id="students" className="bg-zinc-950 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
            My Students
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Real results from dedicated athletes who trusted the process.
          </p>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>

        <div
          id="students-slider"
          className="flex gap-4 md:gap-6 overflow-x-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedImages.map((student, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[280px] md:w-[400px] h-[400px] md:h-[500px] group cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(index % studentTransformations.length)}
            >
              <img
                src={student.url}
                alt={student.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-4 md:p-6">
                <div>
                  <p className="text-white text-xl md:text-2xl font-bold tracking-wide mb-1">{student.name}</p>
                  <p className="text-red-500 text-sm md:text-base font-semibold">{student.achievement}</p>
                </div>
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
          <div className="max-w-full max-h-full flex flex-col items-center">
            <img
              src={studentTransformations[selectedImage].url}
              alt={studentTransformations[selectedImage].name}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-xl md:text-2xl font-bold mb-1">
                {studentTransformations[selectedImage].name}
              </p>
              <p className="text-red-500 text-base md:text-lg font-semibold">
                {studentTransformations[selectedImage].achievement}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
