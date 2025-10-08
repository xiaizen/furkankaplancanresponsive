import { Instagram, Youtube, Mail, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/fkaplancan/',
      username: '@furkankaplancan',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://www.youtube.com/@furkankaplancan96',
      username: 'Furkan Kaplancan',
    },
  ];

  return (
    <section id="contact" className="bg-zinc-950 py-16 md:py-24 px-4 md:px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
          Get In Touch
        </h2>
        <div className="h-1 w-24 bg-red-600 mx-auto mb-8 md:mb-12"></div>
        <p className="text-lg md:text-xl text-gray-400 mb-12 md:mb-16">
          Ready to start your journey? Connect with me on social media or reach out directly.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-black border border-zinc-800 hover:border-red-600 p-6 md:p-8 transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <social.icon
                size={40}
                className="text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 md:w-12 md:h-12"
              />
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">{social.label}</h3>
              <p className="text-gray-400">{social.username}</p>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:furkankaplancan@coach.com"
            className="inline-flex items-center gap-2 md:gap-3 bg-red-600 hover:bg-red-700 text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold tracking-wider transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Mail size={20} className="md:w-6 md:h-6" />
            EMAIL ME
          </a>
          <a
            href="https://wa.me/905551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 md:gap-3 bg-green-600 hover:bg-green-700 text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold tracking-wider transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} className="md:w-6 md:h-6" />
            WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}
