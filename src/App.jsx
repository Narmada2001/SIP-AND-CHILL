import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import BookTablePage from './pages/BookTablePage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-gray-800 bg-stone-50 min-h-screen flex flex-col">
        <Navbar />
        <ScrollToTop />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reserve" element={<BookTablePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

