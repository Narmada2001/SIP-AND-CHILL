import React, { useState } from 'react';
import { Phone, MapPin, Clock, Users } from 'lucide-react';
import bg from '../assets/bg.jpg';
import { useNavigate } from 'react-router-dom';

export default function BookTablePage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim()) errs.phone = 'Phone is required';
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
      // mock reservation action
      setTimeout(() => setSubmitted(false), 4000);
    }
  }

  return (
    <section className="relative min-h-screen pt-28 pb-24 overflow-hidden" id="book-table">
      {/* background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full bg-amber-100 text-amber-700">Reservation</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">Reserve Your Table</h1>
          <p className="max-w-2xl mx-auto text-stone-200/80 text-base sm:text-lg">Plan your next cozy moment with us. Fill in a few details and we'll make sure everything is prepared when you arrive.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Form */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-amber-100 mb-1" htmlFor="name">Name *</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-stone-300/50 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Jane Doe" />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-100 mb-1" htmlFor="phone">Phone *</label>
                  <input id="phone" name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-stone-300/50 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="(555) 123-4567" />
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-amber-100 mb-1" htmlFor="date">Date</label>
                  <input type="date" id="date" name="date" value={form.date} onChange={handleChange} className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-100 mb-1" htmlFor="time">Time</label>
                  <input type="time" id="time" name="time" value={form.time} onChange={handleChange} className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-100 mb-1" htmlFor="guests">Guests</label>
                  <select id="guests" name="guests" value={form.guests} onChange={handleChange} className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                    {[1,2,3,4,5,6,7,8].map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-amber-100 mb-1" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-stone-300/50 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-100 mb-1" htmlFor="notes">Special Requests</label>
                  <textarea id="notes" name="notes" rows={3} value={form.notes} onChange={handleChange} className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-stone-300/50 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Allergies, celebrations..." />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button type="submit" className="flex-1 rounded-full bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold px-8 py-3 shadow hover:shadow-lg hover:scale-[1.02] transition disabled:opacity-50">Reserve Table</button>
                <button type="button" onClick={() => navigate('/contact')} className="flex-1 rounded-full border border-amber-400/40 text-amber-300 font-semibold px-8 py-3 hover:bg-amber-900/30 transition">Contact Us</button>
              </div>
              {submitted && <div className="mt-4 text-sm font-medium text-amber-200 bg-white/10 rounded-lg px-4 py-3">Reservation received! We will confirm shortly.</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
