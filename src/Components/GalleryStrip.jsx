import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee } from 'lucide-react';

const colors = [
  'from-amber-300 via-orange-300 to-yellow-400',
  'from-purple-300 via-violet-300 to-fuchsia-400',
  'from-teal-300 via-cyan-300 to-blue-400',
  'from-green-300 via-emerald-300 to-teal-400'
];

export default function GalleryStrip() {
  return (
    <section className="py-16 bg-white" id="gallery-strip">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-800 mb-3">Ambience Snapshots</h2>
            <p className="text-stone-600 max-w-xl text-base sm:text-lg">A quick peek at the colors, textures and mood that make our space feel like home.</p>
          </div>
          <Link to="/gallery" className="inline-block px-6 py-3 rounded-full bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold shadow hover:shadow-lg hover:scale-[1.03] transition">Explore Gallery</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colors.map((c, i) => (
            <div key={i} className={`relative aspect-square rounded-2xl overflow-hidden bg-linear-to-br ${c} flex items-center justify-center shadow-sm hover:shadow-lg transition group`}>\n              <Coffee size={70} className="text-white/40 group-hover:scale-110 transition-transform" />\n              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />\n            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
