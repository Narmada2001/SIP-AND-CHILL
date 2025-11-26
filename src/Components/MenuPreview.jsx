import React from 'react';
import { Coffee, IceCream, Croissant, CupSoda } from 'lucide-react';
import { Link } from 'react-router-dom';
import CappucinoImg from '../assets/Cappucino.jpeg';
import CrosointImg from '../assets/Crosoint.jpeg';
import SandwichImg from '../assets/Sandwich.jpeg';
import CakeImg from '../assets/cake.jpeg';

const items = [
  { icon: <Coffee size={36} />, title: 'Cappuccino', desc: '☕ Creamy Morning Comfort', price: '', image: CappucinoImg },
  { icon: <Croissant size={36} />, title: 'Croissant', desc: '🥐 Buttery Flaky Bliss', price: '', image: CrosointImg },
  { icon: <IceCream size={36} />, title: 'Sandwich', desc: '🥪 Fresh Flavor Stack', price: '', image: SandwichImg },
  { icon: <CupSoda size={36} />, title: 'Cake', desc: '🍰 Sweet Slice Happiness', price: '', image: CakeImg }
];

export default function MenuPreview() {
  return (
    <section className="bg-stone-50" style={{ padding: 'clamp(2.5rem, 5vw + 0.5rem, 4.5rem) 0' }} id="menu-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="text-center" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <span className="inline-block tracking-widest uppercase font-bold px-4 py-1 rounded-full bg-amber-100 text-amber-700" style={{ fontSize: 'clamp(0.625rem, 0.8vw + 0.1rem, 0.75rem)', marginBottom: 'clamp(0.625rem, 1.25vw, 1rem)' }}>Menu Highlights</span>
          <h2 className="font-bold tracking-tight text-stone-800" style={{ fontSize: 'clamp(1.875rem, 3.5vw + 0.5rem, 3.5rem)', marginBottom: 'clamp(0.875rem, 1.75vw, 1.5rem)' }}>A Taste To Remember</h2>
          <p className="max-w-3xl mx-auto text-stone-600 px-4" style={{ fontSize: 'clamp(1rem, 1.2vw + 0.25rem, 1.375rem)' }}>Handcrafted favorites using responsibly sourced ingredients—small batch, high quality, unforgettable flavor.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 'clamp(1.25rem, 2vw, 2rem)' }}>
          {items.map((i, idx) => (
            <div key={i.title} className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition border border-stone-200" style={{ padding: 'clamp(1.25rem, 2vw, 1.75rem)' }}>
              <div className="w-full aspect-4/3 rounded-xl overflow-hidden shadow-md" style={{ marginBottom: 'clamp(0.875rem, 1.5vw, 1.25rem)' }}>
                <img src={i.image} alt={i.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h3 className="font-semibold text-lg mb-1 text-stone-800">{i.title}</h3>
              <p className="text-sm text-stone-500 mb-3">{i.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-amber-600 font-bold">{i.price}</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-amber-50 text-amber-700">Popular</span>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-amber-400/60 transition" />
            </div>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
          <Link to="/gallery" className="inline-block rounded-full bg-linear-to-r from-amber-600 to-orange-500 text-white font-semibold shadow hover:shadow-lg hover:scale-[1.03] transition" style={{ fontSize: 'clamp(0.9375rem, 1vw + 0.25rem, 1.125rem)', padding: 'clamp(0.75rem, 1vw, 1rem) clamp(2rem, 2.5vw, 2.5rem)' }}>View Full Gallery</Link>
        </div>
      </div>
    </section>
  );
}
