import React, { useEffect, useState } from 'react'
import { Coffee, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(()=> {
    const handle = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact Us', to: '/contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled ? 'backdrop-blur-md bg-white/90 shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'}`}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 text-gray-900 hover:text-amber-600 transition-colors">
          <span className="p-2 rounded-lg bg-linear-to-br from-amber-100 to-orange-100">
            <Coffee size={26} className="text-amber-600" />
          </span>
          <span className="text-2xl font-bold tracking-tight">Sip & Chill</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `text-gray-700 transition-colors font-medium relative group ${isActive ? 'text-amber-600' : 'hover:text-amber-600'}`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </NavLink>
          ))}

          {/* CTA Button */}
          <NavLink to="/reserve"
            className={({isActive}) => `ml-4 px-6 py-2.5 rounded-full bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all ${isActive ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-white' : ''}` }>
            Reserve Now
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `font-medium text-lg py-2 transition-colors ${isActive ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink 
              to="/reserve"
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) => `mt-2 px-6 py-3 rounded-full bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold text-center shadow-lg ${isActive ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-white' : ''}`}
            >
              Reserve Now
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
