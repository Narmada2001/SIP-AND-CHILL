import React from 'react'
import { Star, ChevronDown, Coffee } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hbg1 from '../assets/Hbg1.jpg'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28" id="home">
      {/* background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#4a2010] via-[#3d1a0d] to-[#2d150b] animate-gradient"></div>

      {/* decorative coffee cup outlines */}
      <div className="absolute top-32 left-24 opacity-20">
        <Coffee size={140} strokeWidth={1.5} className="text-amber-900" />
      </div>
      <div className="absolute bottom-32 right-32 opacity-15">
        <Coffee size={200} strokeWidth={1} className="text-amber-900" />
      </div>
      <div className="absolute bottom-20 right-1/4 opacity-10">
        <Coffee size={160} strokeWidth={1} className="text-amber-900" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* badge */}
        <div className="mb-6 inline-block">
          <div className="flex items-center gap-2 sm:gap-3 bg-black/20 backdrop-blur-md px-5 sm:px-7 py-2 sm:py-3 rounded-full border border-white/15 shadow-inner">
            <Star className="text-amber-400 fill-amber-400" size={18} />
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">Premium Coffee Experience</span>
            <Star className="text-amber-400 fill-amber-400" size={18} />
          </div>
        </div>

        <h1 className="font-bold mb-4 leading-tight tracking-tight text-white drop-shadow-xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block bg-clip-text text-transparent bg-linear-to-r from-amber-50 via-white to-amber-50">Sip & Chill</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-[2.1rem] text-amber-100 font-light mb-4">Where Every Sip Tells a Story</p>
        <p className="text-base sm:text-lg md:text-xl text-stone-200/90 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">Discover the perfect blend of artisan coffee, cozy ambiance, and unforgettable moments. Crafted for those who savor quality and comfort.</p>

        <div className="flex justify-center">
          <Link to="/gallery" className="group relative bg-linear-to-r from-orange-600 to-amber-500 text-white px-10 sm:px-12 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#3d1a0d]">
            Explore Menu
            <span className="absolute inset-0 rounded-full ring-0 group-hover:ring-2 ring-white/30 transition-all"></span>
          </Link>
        </div>

        <div className="mt-12 md:mt-16 animate-bounce">
          <ChevronDown size={30} className="text-amber-300/80 mx-auto" strokeWidth={2.5} />
        </div>
      </div>
    </section>
  )
}
