import { Target, LineChart, Dumbbell, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Coaching() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const features = [
    {
      icon: Target,
      title: 'Custom Plans',
      description: 'Personalized training and nutrition protocols designed for your specific goals and body type.',
    },
    {
      icon: LineChart,
      title: 'Progress Tracking',
      description: 'Weekly check-ins and data-driven adjustments to ensure continuous improvement.',
    },
    {
      icon: Dumbbell,
      title: 'Science-Based',
      description: 'Evidence-based methodology combined with real-world IFBB Pro experience.',
    },
  ];

  return (
    <section id="coaching" className="bg-zinc-950 py-10 xs:py-14 sm:py-16 md:py-24 px-2 xs:px-4 md:px-6">
      <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-10 xs:mb-12 sm:mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 xs:mb-6 md:mb-8 tracking-tight">
            Online Coaching
          </h2>
          <div className="h-1 w-12 xs:w-20 md:w-24 bg-red-600 mx-auto mb-4 xs:mb-6 md:mb-8"></div>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-400 max-w-full sm:max-w-xl md:max-w-3xl mx-auto leading-relaxed">
            Elite coaching for those who demand excellence. My programs are built on discipline,
            precision, and proven results — the same principles that earned my IFBB Pro card.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 md:gap-8 mb-8 xs:mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-black p-3 xs:p-4 sm:p-6 md:p-8 border border-zinc-800 hover:border-red-600/50 transition-all duration-500 group rounded-lg ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <feature.icon className="w-6 h-6 xs:w-8 xs:h-8 md:w-12 md:h-12 text-red-600 mb-2 xs:mb-4" />
              <h3 className="text-base xs:text-lg md:text-2xl font-bold text-white mb-1 xs:mb-2 md:mb-4">{feature.title}</h3>
              <p className="text-gray-400 text-xs xs:text-sm md:text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          ref={ctaRef}
          className={`bg-gradient-to-r from-red-900/20 to-red-600/20 border border-red-600/30 p-4 xs:p-8 md:p-12 text-center transition-all duration-1000 ${
            ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h3 className="text-lg xs:text-xl md:text-3xl font-bold text-white mb-2 xs:mb-3 md:mb-4">Ready to Transform?</h3>
          <p className="text-gray-300 mb-3 xs:mb-6 md:mb-8 text-xs xs:text-base md:text-lg">
            Limited spots available. Only for those committed to the process.
          </p>
          <a
            href="mailto:furkankaplancan@coach.com"
            className="inline-flex items-center gap-1 xs:gap-2 md:gap-3 bg-red-600 hover:bg-red-700 text-white px-3 xs:px-6 md:px-10 py-2 xs:py-3 md:py-4 text-xs xs:text-base md:text-lg font-semibold tracking-wider transition-all duration-300 transform hover:scale-105 rounded"
          >
            <Mail className="w-4 h-4 xs:w-6 xs:h-6 md:w-6 md:h-6" />
            APPLY FOR COACHING
          </a>
        </div>
      </div>
    </section>
  );
}
