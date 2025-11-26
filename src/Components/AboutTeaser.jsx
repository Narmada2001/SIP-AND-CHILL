import React from 'react';
import { Coffee, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hbg1 from '../assets/Hbg1.jpg';

export default function AboutTeaser() {
  return (
    <section className="relative bg-white" style={{ padding: 'clamp(2.5rem, 5vw + 0.5rem, 4.5rem) 0' }} id="about-teaser">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 grid md:grid-cols-2 items-center" style={{ gap: 'clamp(1.5rem, 3.5vw + 0.5rem, 4rem)' }}>
        <div className="max-w-2xl">
          <h2 className="font-bold tracking-tight text-stone-800" style={{ fontSize: 'clamp(1.875rem, 3.5vw + 0.5rem, 3.5rem)', marginBottom: 'clamp(0.875rem, 1.5vw, 1.5rem)' }}>
            Crafted With Passion
          </h2>
          <p className="text-stone-600 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.2vw + 0.25rem, 1.375rem)', marginBottom: 'clamp(1.25rem, 1.75vw, 1.75rem)' }}>From ethically sourced beans to artisan brewing methods, we focus on quality, sustainability, and community. Step into an ambiance designed to slow you down and lift you up.</p>
          <ul className="text-stone-700" style={{ fontSize: 'clamp(0.9375rem, 1vw + 0.25rem, 1.25rem)', marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)', display: 'flex', flexDirection: 'column', gap: 'clamp(0.625rem, 1.25vw, 1rem)' }}>
            <li className="flex items-start gap-3"><Coffee className="text-amber-600 flex-shrink-0" style={{ width: 'clamp(20px, 2vw, 28px)', height: 'clamp(20px, 2vw, 28px)' }}/> Signature small-batch roasts</li>
            <li className="flex items-start gap-3"><Heart className="text-rose-500 flex-shrink-0" style={{ width: 'clamp(20px, 2vw, 28px)', height: 'clamp(20px, 2vw, 28px)' }}/> Cozy corners for connection</li>
            <li className="flex items-start gap-3"><Coffee className="text-amber-600 flex-shrink-0" style={{ width: 'clamp(20px, 2vw, 28px)', height: 'clamp(20px, 2vw, 28px)' }}/> Seasonal flavor rotations</li>
          </ul>
          <Link to="/services" className="inline-block rounded-full bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold shadow hover:shadow-lg hover:scale-[1.03] transition" style={{ fontSize: 'clamp(0.9375rem, 1vw + 0.25rem, 1.25rem)', padding: 'clamp(0.75rem, 1vw, 1rem) clamp(2rem, 2.5vw, 2.75rem)' }}>Discover Our Services</Link>
        </div>
        <div className="relative w-full">
          <div className="rounded-3xl overflow-hidden w-full shadow-lg" style={{ height: 'clamp(15rem, 35vw + 4rem, 28rem)' }}>
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
