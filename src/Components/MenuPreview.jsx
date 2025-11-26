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
    <section className="py-16 sm:py-24 bg-stone-50" id="menu-preview">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="inline-block text-xs tracking-widest uppercase font-bold px-4 py-1 rounded-full bg-amber-100 text-amber-700 mb-4">Menu Highlights</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-stone-800">A Taste To Remember</h2>
          <p className="max-w-2xl mx-auto text-stone-600 text-base sm:text-lg">Handcrafted favorites using responsibly sourced ingredients—small batch, high quality, unforgettable flavor.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i, idx) => (
            <div key={i.title} className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition border border-stone-200">
              <div className="w-full aspect-4/3 rounded-xl overflow-hidden mb-4 shadow-md">
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
        <div className="text-center mt-12">
          <Link to="/gallery" className="inline-block px-8 py-3 rounded-full bg-linear-to-r from-amber-600 to-orange-500 text-white font-semibold shadow hover:shadow-lg hover:scale-[1.03] transition">View Full Gallery</Link>
        </div>
      </div>
    </section>
  );
}
