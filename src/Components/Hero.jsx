import React from 'react'
import { Star, ChevronDown, Coffee } from 'lucide-react'
import { Link } from 'react-router-dom'
import bgImage from '../assets/bg.jpg'


export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* background image */}
      <div className="absolute inset-0">
        <img 
          src={bgImage} 
          alt="Coffee background" 
          className="w-full h-full object-cover object-center"
        />
        {/* dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto w-full">
        {/* badge */}
        <div className="mb-4 inline-block">
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/15 shadow-inner">
            <Star className="text-amber-400 fill-amber-400" size={16} />
            <span className="text-xs font-semibold tracking-wide uppercase">Premium Coffee Experience</span>
            <Star className="text-amber-400 fill-amber-400" size={16} />
          </div>
        </div>

        <h1 className="font-bold mb-4 leading-tight tracking-tight text-white drop-shadow-2xl text-6xl lg:text-7xl xl:text-8xl">
          <span className="block">Sip & Chill</span>
        </h1>

        <p className="text-amber-100 font-light mb-3 text-xl lg:text-2xl xl:text-3xl">Where Every Sip Tells a Story</p>
        <p className="text-stone-200/90 max-w-3xl mx-auto mb-10 leading-relaxed text-base lg:text-lg xl:text-xl">Discover the perfect blend of artisan coffee, cozy ambiance, and unforgettable moments. Crafted for those who savor quality and comfort.</p>

        <div className="flex justify-center mb-16">
          <Link to="/gallery" className="group relative bg-linear-to-r from-orange-600 to-amber-500 text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black">
            Explore Menu
            <span className="absolute inset-0 rounded-full ring-0 group-hover:ring-2 ring-white/30 transition-all"></span>
          </Link>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="text-amber-300/80 mx-auto" size={32} strokeWidth={2.5} />
        </div>
      </div>
    </section>
  )
}
