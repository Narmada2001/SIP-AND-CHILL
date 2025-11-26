import React, { useState } from 'react'
import { Leaf, Coffee, Heart, Award } from 'lucide-react'

const services = [
  { icon: <Leaf size={48} />, title: 'Fresh Ingredients', text: 'We source only the finest, locally-grown ingredients for every dish and drink.', color: 'from-emerald-300 to-teal-400' },
  { icon: <Coffee size={48} />, title: 'Artisan Coffee', text: 'Expertly roasted beans crafted into the perfect cup every time.', color: 'from-amber-300 to-orange-400' },
  { icon: <Heart size={48} />, title: 'Cozy Atmosphere', text: 'A warm, inviting space designed for relaxation and connection.', color: 'from-rose-300 to-pink-400' },
  { icon: <Award size={48} />, title: 'Expert Baristas', text: 'Our passionate team brings experience and care to every cup.', color: 'from-blue-300 to-indigo-400' }
]

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section className="py-28" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-14">
          <span className="inline-block mb-4 text-sm font-bold uppercase tracking-widest px-6 py-2 rounded-full bg-amber-50 text-amber-600">Our Promise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="max-w-3xl mx-auto text-gray-600">Experience the perfect blend of quality, comfort, and craftsmanship in every visit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              className="relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 group overflow-hidden"
            >
              <div className={`w-20 h-20 mb-6 rounded-2xl flex items-center justify-center text-white shadow-lg bg-linear-to-br ${s.color} group-hover:scale-105 transition-transform duration-400`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-700">{s.title}</h3>
              <p className="text-gray-600">{s.text}</p>

              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-amber-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
