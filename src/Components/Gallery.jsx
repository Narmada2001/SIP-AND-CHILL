import React from 'react'
import { Star } from 'lucide-react'
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'
import image4 from '../assets/image4.jpeg'
import image5 from '../assets/image5.jpeg'
import image6 from '../assets/image6.jpeg'
import image7 from '../assets/image7.jpeg'
import image8 from '../assets/image8.jpeg'

const gallery = [
  { id: 1, alt: 'Hot Mocha', src: image1 },
  { id: 2, alt: 'Caramel Macha', src: image2 },
  { id: 3, alt: 'Sugar Glazed Croissant', src: image3 },
  { id: 4, alt: 'Chicken Croissant', src: image4 },
  { id: 5, alt: 'Cheese Sandwich', src: image5 },
  { id: 6, alt: 'Chicken Sandwich', src: image6 },
  { id: 7, alt: 'Tres Leches Cake', src: image7 },
  { id: 8, alt: 'Red Velvet Cake', src: image8 }
]

export default function Gallery() {
  return (
    <section className="py-28 bg-linear-to-b from-white to-stone-50" id="gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-14">
          <span className="inline-block mb-4 text-sm font-bold uppercase tracking-widest px-6 py-2 rounded-full bg-amber-50 text-amber-600">Visual Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h2>
          <p className="max-w-3xl mx-auto text-gray-600">A glimpse into our world of artisan coffee, delicious treats, and cozy moments.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {gallery.map((g) => (
            <figure key={g.id} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
              {/* padded image container */}
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                <img
                  src={g.src}
                  alt={g.alt}
                  className="max-h-full max-w-full object-contain rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* subtle border frame */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-stone-200 group-hover:ring-amber-400/60 transition" />

              {/* dark overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* caption */}
              <figcaption className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-semibold text-sm sm:text-base mb-3">{g.alt}</p>
                <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
              </figcaption>

              {/* corner badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow">
                <Star className="text-amber-500" size={16} />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
