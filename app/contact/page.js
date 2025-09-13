"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle,
  Info,
  Clock,
  X
} from "lucide-react";

// Contact page for Ghar Basai
// Next.js + Tailwind + Framer Motion + lucide-react
// Default export is the React component

export default function ContactPage() {
  const hasOffice = false; // toggle to true if central office available

  const [form, setForm] = useState({ name: "", contact: "", category: "Booking Help", message: "" });
  const [sending, setSending] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [faqFilter, setFaqFilter] = useState("All");

  const faqs = [
    { q: "How can I book a stay?", a: "Use the booking flow on each listing or contact us via WhatsApp/call and we'll help you reserve the right family stay.", tag: "Booking" },
    { q: "Are there weekend getaway packages available?", a: "Yes, Ghar Basai offers specially curated weekend getaway packages perfect for short family trips or quick escapes. These packages usually include a 2-night stay, meals, and family-friendly activities, making them convenient and hassle-free. You can also choose from budget, standard, or luxury options depending on your preference.", tag: "Booking" },
    { q: "Do you provide cancellation support?", a: "Yes — cancellation and refund policies depend on the property. We'll help escalate urgent issues via our emergency helpline.", tag: "Support" },
    { q: "Can I speak directly with a representative for urgent issues?", a: "Absolutely! For urgent booking or stay-related issues, you can call our Emergency Helpline or use the Click-to-Call button on our Contact page. Our support team prioritizes urgent requests to ensure quick resolution.", tag: "Support" },
    { q: "What kind of family packages are available?", a: "We list family-friendly stays across budgets: family suites, meal packages and kids-friendly activities. Use filters on the listings page to find suitable packages.", tag: "Packages" },
    { q: "Is there any special assistance for senior citizens or infants?", a: "Many of our partners offer special assistance on request, please mention requirements in message or contact the helpline.", tag: "Support" }
  ];

  const categories = ["All", "Booking", "Support", "Packages"];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setShowConfirm(true);
      setForm({ name: "", contact: "", category: "Booking Help", message: "" });
    }, 900);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-emerald-50 py-30 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-700">Ghar Basai</h1>
            <p className="mt-1 text-sm text-gray-600">We’re here to make your family stay hassle-free.</p>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white p-3 rounded-2xl shadow-sm">
              <Phone size={18} />
              <div className="text-sm">
                <div className="text-gray-700">Helpline</div>
                <div className="font-medium">+91 98765 43210 (WhatsApp)</div>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white p-3 rounded-2xl shadow-sm">
              <Clock size={18} />
              <div className="text-sm">
                <div className="text-gray-700">Working hours</div>
                <div className="font-medium">Mon–Sat, 9:00 AM – 8:00 PM</div>
              </div>
            </div>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.section initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-2 bg-white p-6 rounded-3xl shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
              <div className="flex items-center gap-2">
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm shadow-sm">
                  <MessageCircle size={16} /> Chat via WhatsApp
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input required name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-lg border-gray-200 shadow-sm p-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Your full name" />
              </div>

              <div>
                <label className="text-sm text-gray-600">Email / Phone</label>
                <input required name="contact" value={form.contact} onChange={handleChange} className="mt-1 w-full rounded-lg border-gray-200 shadow-sm p-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="your@email.com or +91 9xxxx" />
              </div>

              <div>
                <label className="text-sm text-gray-600">Subject (optional)</label>
                <select name="category" value={form.category} onChange={handleChange} className="mt-1 w-full rounded-lg border-gray-200 p-3 shadow-sm outline-none focus:ring-2 focus:ring-emerald-200">
                  <option>Booking Help</option>
                  <option>Feedback</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex items-center justify-end">
                <div className="text-sm text-gray-500">Average response time: ~12 hours</div>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-gray-600">Message</label>
                <textarea required name="message" value={form.message} onChange={handleChange} rows={5} className="mt-1 w-full rounded-lg border-gray-200 shadow-sm p-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Tell us how we can help..." />
              </div>

              <div className="md:col-span-2 flex items-center gap-3">
                <button type="submit" disabled={sending} className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 text-white rounded-2xl shadow hover:scale-[1.01] active:scale-95 transition-transform">
                  {sending ? (
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle></svg>
                  ) : (
                    <CheckCircle size={16} />
                  )}
                  <span>{sending ? "Sending..." : "Send Message"}</span>
                </button>

                <button type="button" onClick={() => { setForm({ name: "", contact: "", category: "Booking Help", message: "" }); }} className="px-4 py-3 border rounded-2xl text-sm text-gray-700">Clear</button>

                <div className="ml-auto text-sm text-gray-500">Emergency helpline: <span className="font-medium text-emerald-700">+91 91234 00000</span></div>
              </div>
            </form>

            <div className="mt-6 rounded-xl overflow-hidden">
              {hasOffice ? (
                <iframe title="Ghar Basai Office" className="w-full h-56 md:h-40 border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3"></iframe>
              ) : (
                <div className="flex items-center gap-4 p-6 bg-emerald-50 rounded-xl">
                  <MapPin size={36} className="text-emerald-700" />
                  <div>
                    <div className="text-lg font-semibold text-emerald-700">We are available across India</div>
                    <div className="text-sm text-gray-600">No central office required — our partners operate PAN India. Use WhatsApp or the helpline for faster assistance.</div>
                  </div>
                </div>
              )}
            </div>
          </motion.section>

          <motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="bg-white p-5 rounded-2xl shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="text-lg font-semibold">Quick Support</div>
                <Info size={16} className="text-gray-400" />
              </div>

              <div className="flex flex-col gap-3">
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-50 transition">
                  <MessageCircle size={18} />
                  <div>
                    <div className="text-sm font-medium">WhatsApp</div>
                    <div className="text-xs text-gray-500">Fast bookings & queries</div>
                  </div>
                </a>

                <a href="tel:+919123400000" className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-50 transition">
                  <Phone size={18} />
                  <div>
                    <div className="text-sm font-medium">Click to Call</div>
                    <div className="text-xs text-gray-500">Mobile-friendly support</div>
                  </div>
                </a>

                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-50 transition">
                  <Mail size={18} />
                  <div>
                    <div className="text-sm font-medium">Email Support</div>
                    <div className="text-xs text-gray-500">support@gharbasai.com</div>
                  </div>
                </a>
              </div>

              <div className="mt-4 border-t pt-4 flex items-center gap-3">
                <Facebook size={18} />
                <Instagram size={18} />
                <Linkedin size={18} />
                <Youtube size={18} />
                <div className="ml-auto text-xs text-gray-400">Follow us for updates</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="text-lg font-semibold">FAQs</div>
                <div className="flex items-center gap-2">
                  {categories.map((c) => (
                    <button key={c} onClick={() => setFaqFilter(c)} className={`text-xs px-3 py-1 rounded-full ${faqFilter === c ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700"}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {faqs.filter(f => faqFilter === "All" ? true : f.tag === faqFilter).map((f, idx) => (
                  <details key={idx} className="bg-emerald-50/40 rounded-lg p-3">
                    <summary className="cursor-pointer font-medium">{f.q}</summary>
                    <p className="mt-2 text-sm text-gray-600">{f.a}</p>
                  </details>
                ))}

                {faqs.filter(f => faqFilter === "All" ? true : f.tag === faqFilter).length === 0 && (
                  <div className="text-sm text-gray-500">No FAQs for this category.</div>
                )}
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow text-sm">
              <div className="font-semibold mb-2">Trust & Safety</div>
              <ul className="space-y-2 text-gray-600">
                <li>✔️ Verified partners across India</li>
                <li>✔️ Secure payments & transparent pricing</li>
                <li>✔️ 24/7 emergency helpline</li>
              </ul>
            </div>
          </motion.aside>
        </div>

        <AnimatePresence>
          {showConfirm && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center">
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-3xl p-6 shadow-xl w-[92%] max-w-md">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-emerald-100 rounded-full">
                    <CheckCircle size={28} className="text-emerald-700" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Thanks! We received your message.</h3>
                    <p className="text-sm text-gray-600 mt-1">Our team will review and get back to you at the contact you provided (avg response time ~12 hours).</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button onClick={() => setShowConfirm(false)} className="px-4 py-2 rounded-lg bg-emerald-600 text-white">Close</button>
                </div>
              </motion.div>

              <button onClick={() => setShowConfirm(false)} className="absolute top-6 right-6 p-2 rounded-full bg-white shadow"><X size={18} /></button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}