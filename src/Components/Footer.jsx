import React from 'react'
import { Heart, Coffee } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center">
        <p className="text-sm text-stone-500">&copy; 2024 Sip & Chill. All rights reserved. Made with <Heart className="inline text-red-500" size={14}/> and <Coffee className="inline text-amber-500" size={14}/></p>
      </div>
    </footer>
  )
}
