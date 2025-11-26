import React from 'react';
import { Coffee, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hbg1 from '../assets/Hbg1.jpg';

export default function AboutTeaser() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white" id="about-teaser">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 tracking-tight text-stone-800">Crafted With Passion</h2>
          <p className="text-stone-600 leading-relaxed mb-6 text-base sm:text-lg lg:text-xl">From ethically sourced beans to artisan brewing methods, we focus on quality, sustainability, and community. Step into an ambiance designed to slow you down and lift you up.</p>
          <ul className="space-y-3 lg:space-y-4 mb-8 text-stone-700 text-base lg:text-lg">
            <li className="flex items-start gap-3"><Coffee className="text-amber-600 flex-shrink-0" size={24}/> Signature small-batch roasts</li>
            <li className="flex items-start gap-3"><Heart className="text-rose-500 flex-shrink-0" size={24}/> Cozy corners for connection</li>
            <li className="flex items-start gap-3"><Coffee className="text-amber-600 flex-shrink-0" size={24}/> Seasonal flavor rotations</li>
          </ul>
          <Link to="/services" className="inline-block rounded-full bg-linear-to-r from-amber-500 to-orange-500 text-white px-8 lg:px-10 py-3 lg:py-4 font-semibold text-base lg:text-lg shadow hover:shadow-lg hover:scale-[1.03] transition">Discover Our Services</Link>
        </div>
        <div className="relative w-full">
          <div className="rounded-3xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[28rem] w-full shadow-lg">
            <img 
              src={Hbg1} 
              alt="Crafted with Passion" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
