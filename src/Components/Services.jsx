import React, { useState } from 'react'
import icon1 from '../assets/icon1.jpeg'
import icon2 from '../assets/icon2.jpeg'
import icon3 from '../assets/icon3.jpeg'
import icon4 from '../assets/icon4.jpeg'

const services = [
  { image: icon2, title: 'Fresh Ingredients', text: 'We source only the finest, locally-grown ingredients for every dish and drink.', color: 'from-emerald-300 to-teal-400' },
  { image: icon1, title: 'Artisan Coffee', text: 'Expertly roasted beans crafted into the perfect cup every time.', color: 'from-amber-300 to-orange-400' },
  { image: icon3, title: 'Cozy Atmosphere', text: 'A warm, inviting space designed for relaxation and connection.', color: 'from-rose-300 to-pink-400' },
  { image: icon4, title: 'Expert Baristas', text: 'Our passionate team brings experience and care to every cup.', color: 'from-blue-300 to-indigo-400' }
]

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section className="py-16 sm:py-20 lg:py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block mb-4 text-xs sm:text-sm font-bold uppercase tracking-widest px-6 py-2 rounded-full bg-amber-50 text-amber-600">Our Promise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg lg:text-xl px-4">Experience the perfect blend of quality, comfort, and craftsmanship in every visit.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              className="relative bg-white p-6 lg:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 group overflow-hidden"
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-400">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 group-hover:text-amber-700">{s.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg text-justify leading-relaxed">{s.text}</p>

              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-amber-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
