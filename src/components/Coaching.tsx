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
    <section id="coaching" className="bg-zinc-950 py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
            Online Coaching
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Elite coaching for those who demand excellence. My programs are built on discipline,
            precision, and proven results — the same principles that earned my IFBB Pro card.
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-black p-6 md:p-8 border border-zinc-800 hover:border-red-600/50 transition-all duration-500 group ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <feature.icon
                size={48}
                className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          ref={ctaRef}
          className={`bg-gradient-to-r from-red-900/20 to-red-600/20 border border-red-600/30 p-8 md:p-12 text-center transition-all duration-1000 ${
            ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Ready to Transform?</h3>
          <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg">
            Limited spots available. Only for those committed to the process.
          </p>
          <a
            href="mailto:furkankaplancan@coach.com"
            className="inline-flex items-center gap-2 md:gap-3 bg-red-600 hover:bg-red-700 text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold tracking-wider transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={24} />
            APPLY FOR COACHING
          </a>
        </div>
      </div>
    </section>
  );
}
