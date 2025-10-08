import { ShoppingBag, Tag } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Sponsor() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sponsor" className="bg-zinc-950 py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
            Official Partner
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6 md:mb-8"></div>
        </div>

        <div className="bg-gradient-to-br from-blue-900/30 to-blue-600/20 border-2 border-blue-600/40 p-6 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzM3NzNiYSIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjIiLz48L2c+PC9zdmc+')] opacity-20"></div>

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-2xl">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-600 tracking-wider">
                  PROTEIN OCEAN
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 font-light leading-relaxed">
              Premium supplements for elite performance. The fuel behind champions.
            </p>

            <div className="bg-black/50 border-2 border-red-600 p-6 md:p-8 lg:p-10 max-w-lg mx-auto backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4">
                <Tag size={24} className="text-red-600 sm:w-8 sm:h-8" />
                <p className="text-xl sm:text-2xl md:text-3xl text-white font-light">Exclusive Discount</p>
              </div>
              <div className="mb-6">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-red-600 tracking-widest mb-2">
                  FURKAN10
                </div>
                <p className="text-gray-400 text-base md:text-lg">Use code at checkout</p>
              </div>
              <a
                href="https://proteinocean.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 md:gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold tracking-wider transition-all duration-300 transform hover:scale-105"
              >
                <ShoppingBag size={20} className="md:w-6 md:h-6" />
                SHOP NOW
              </a>
            </div>

            <p className="text-gray-400 mt-8 text-sm">
              Get 10% off your entire order with code FURKAN10
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
