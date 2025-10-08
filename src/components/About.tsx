import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();

  return (
    <section id="about" className="bg-black py-10 xs:py-14 sm:py-16 md:py-24 px-2 xs:px-4 md:px-6">
      <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-8 md:gap-16 items-center">
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="absolute inset-0 bg-red-600/20 blur-3xl"></div>
            <img
              src="/🈴 copy.jpg"
              alt="Furkan Kaplancan"
              className="relative w-full h-[180px] xs:h-[240px] sm:h-[320px] md:h-[400px] lg:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-lg"
            />
          </div>

          <div
            ref={textRef}
            className={`transition-all duration-1000 delay-300 ${
              textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 xs:mb-6 md:mb-8 tracking-tight">
              The Journey
            </h2>
            <div className="h-1 w-12 xs:w-20 md:w-24 bg-red-600 mb-4 xs:mb-6 md:mb-8"></div>

            <div className="space-y-2 xs:space-y-4 md:space-y-6 text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                From the streets of Turkey to the IFBB Pro stage, my journey has been defined by
                unwavering discipline and an obsession with excellence.
              </p>
              <p>
                Every rep, every meal, every sacrifice has been calculated. Bodybuilding isn't just
                what I do — it's who I am. It's a lifestyle built on science, dedication, and the
                relentless pursuit of perfection.
              </p>
              <p>
                My approach combines old-school intensity with modern methodology. Mental fortitude
                is just as crucial as physical strength. Champions aren't born — they're forged through
                consistency, focus, and the courage to push beyond limits.
              </p>
              <p className="text-red-500 font-semibold tracking-wider">
                This is not a hobby. This is legacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
