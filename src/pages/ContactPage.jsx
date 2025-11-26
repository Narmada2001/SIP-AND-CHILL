import React from 'react';
import { MapPin, Phone, Mail, Clock, Users, Send } from 'lucide-react';
import bg from '../assets/bg.jpg';

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full bg-amber-100 text-amber-700">Contact</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">Get In Touch</h1>
          <p className="text-stone-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">Have questions or want to book a table? We'd love to hear from you. Reach out and let's start a conversation.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative bg-linear-to-b from-white via-stone-50 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">We're Here For You</h2>
            <div className="w-24 h-1 bg-linear-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Contact Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {/* Location */}
            <div className="group relative bg-white border-2 border-stone-100 rounded-3xl p-8 hover:shadow-2xl hover:border-amber-200 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-linear-to-br from-amber-400 via-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                <MapPin className="text-white" size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">Visit Us</h3>
              <p className="text-stone-600 leading-relaxed text-base">123 Coffee Street<br/>Brew City, BC 12345<br/><span className="text-sm text-stone-500 mt-1 inline-block">Easy parking available</span></p>
            </div>

            {/* Phone */}
            <div className="group relative bg-white border-2 border-stone-100 rounded-3xl p-8 hover:shadow-2xl hover:border-amber-200 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-linear-to-br from-amber-400 via-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                <Phone className="text-white" size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">Call Us</h3>
              <p className="text-stone-600 leading-relaxed text-base"><a href="tel:+15551234567" className="font-semibold text-amber-600 hover:text-amber-700">+1 (555) 123-4567</a><br/>Available 7 days a week<br/><span className="text-sm text-stone-500">Mon–Sun: 7AM – 9PM</span></p>
            </div>

            {/* Email */}
            <div className="group relative bg-white border-2 border-stone-100 rounded-3xl p-8 hover:shadow-2xl hover:border-amber-200 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-linear-to-br from-amber-400 via-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                <Mail className="text-white" size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">Email Us</h3>
              <p className="text-stone-600 leading-relaxed text-base"><a href="mailto:hello@sipandchill.com" className="font-semibold text-amber-600 hover:text-amber-700">hello@sipandchill.com</a><br/>Quick response guaranteed<br/><span className="text-sm text-stone-500">Within 24 hours</span></p>
            </div>
          </div>

          {/* Secondary Info Grid */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Opening Hours */}
            <div className="group relative bg-linear-to-br from-amber-50 to-orange-50 border-2 border-amber-100 rounded-3xl p-8 hover:shadow-xl hover:border-amber-300 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Clock className="text-amber-600" size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Opening Hours</h3>
              <div className="space-y-2 text-stone-700">
                <p className="flex justify-between"><span className="font-medium">Monday – Friday</span> <span>7:00 AM – 8:00 PM</span></p>
                <p className="flex justify-between"><span className="font-medium">Saturday – Sunday</span> <span>8:00 AM – 9:00 PM</span></p>
                <p className="text-sm text-amber-700 mt-3 font-medium">Open every day of the year!</p>
              </div>
            </div>

            {/* Group Bookings */}
            <div className="group relative bg-linear-to-br from-amber-50 to-orange-50 border-2 border-amber-100 rounded-3xl p-8 hover:shadow-xl hover:border-amber-300 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Users className="text-amber-600" size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Group Bookings</h3>
              <p className="text-stone-700 leading-relaxed">Planning an event with 9+ guests? We offer tailored arrangements including private seating, custom menus, and dedicated service.</p>
              <p className="text-sm text-amber-700 mt-3 font-medium">Call us to discuss your needs!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-16 sm:py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Visit?</h2>
          <p className="text-stone-300 mb-8 text-base sm:text-lg max-w-2xl mx-auto">Reserve your table now and experience the perfect blend of quality coffee and cozy ambiance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/reserve" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
              <Send size={20} />
              Reserve a Table
            </a>
            <a href="tel:+15551234567" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-amber-400/60 text-amber-300 font-semibold hover:bg-amber-900/30 transition-all">
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
