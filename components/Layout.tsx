import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { NAV_ITEMS, LANGUAGES, UI_TEXT } from '../constants';
import { Language } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (l: Language) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we are on the home page
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Header style logic:
  // If scrolled -> Dark + Compact
  // If NOT scrolled but NOT Home -> Dark (so white text is visible on light pages)
  // If NOT scrolled and IS Home -> Transparent
  const headerClass = (isScrolled || !isHome) 
    ? 'bg-brand-dark shadow-xl py-3' 
    : 'bg-transparent py-6';

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${headerClass}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex flex-col group">
            <h1 className={`font-serif text-2xl md:text-3xl font-bold text-white group-hover:text-brand-gold transition-colors`}>
              AT Millets
            </h1>
            <span className="text-[10px] md:text-xs text-brand-cream tracking-[0.3em] uppercase opacity-80">Araku Naturals</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.id} 
                to={item.path}
                className={({ isActive }) => 
                  `text-sm font-medium tracking-wide transition-all hover:-translate-y-0.5 ${isActive ? 'text-brand-gold scale-105' : 'text-white/90 hover:text-brand-goldLight'}`
                }
              >
                {item.label[lang]}
              </NavLink>
            ))}
            
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-white hover:text-brand-gold transition-colors border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
                <Globe size={14} />
                <span className="uppercase text-xs font-bold tracking-wider">{lang}</span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-none border border-brand-green/10 shadow-xl py-1 hidden group-hover:block animate-fade-in text-gray-800">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`block w-full text-left px-4 py-3 text-sm hover:bg-brand-cream/50 transition-colors ${lang === l.code ? 'font-bold text-brand-green bg-brand-cream' : ''}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={() => setLang(lang === 'te' ? 'en' : lang === 'en' ? 'hi' : 'te')} className="text-white border border-white/30 rounded px-2 py-1 text-xs uppercase font-bold">
              {lang}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-1">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-brand-dark z-[-1] transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-28 px-8`}>
            <div className="flex flex-col gap-8 border-l border-white/10 pl-8">
                {NAV_ITEMS.map((item) => (
                <NavLink 
                    key={item.id} 
                    to={item.path}
                    className={({ isActive }) => 
                    `text-2xl font-serif tracking-wide ${isActive ? 'text-brand-gold' : 'text-white'}`
                    }
                >
                    {item.label[lang]}
                </NavLink>
                ))}
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-white/60 text-sm">
                <p>Araku Naturals Pvt Ltd</p>
                <p className="mt-2 text-xs">Serving Health Since 2024</p>
            </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-stone-50">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-brand-cream pt-20 pb-10 border-t border-brand-green/30">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="space-y-6">
                <h3 className="font-serif text-3xl text-brand-gold">AT Millets</h3>
                <p className="text-sm opacity-70 leading-relaxed max-w-xs font-light">
                    {lang === 'te' ? 'ప్రకృతి ఒడి నుండి నేరుగా మీ ఇంటికి.' : 'From nature\'s lap directly to your home. Pure, tribal-sourced, and sustainable.'}
                </p>
            </div>
            <div className="space-y-6">
                <h4 className="font-bold uppercase tracking-[0.2em] text-xs text-brand-gold">Links</h4>
                <ul className="space-y-3 text-sm opacity-80">
                    <li><NavLink to="/about" className="hover:text-white transition-colors hover:pl-2 duration-300">{NAV_ITEMS[1].label[lang]}</NavLink></li>
                    <li><NavLink to="/products" className="hover:text-white transition-colors hover:pl-2 duration-300">{NAV_ITEMS[2].label[lang]}</NavLink></li>
                    <li><NavLink to="/contact" className="hover:text-white transition-colors hover:pl-2 duration-300">{NAV_ITEMS[5].label[lang]}</NavLink></li>
                </ul>
            </div>
            <div className="space-y-6">
                <h4 className="font-bold uppercase tracking-[0.2em] text-xs text-brand-gold">Contact</h4>
                <ul className="space-y-4 text-sm opacity-80">
                    <li className="flex items-start gap-3"><MapPin size={18} className="text-brand-gold shrink-0" /> Visakhapatnam, Andhra Pradesh, India</li>
                    <li className="flex items-center gap-3"><Phone size={18} className="text-brand-gold shrink-0" /> +91 98765 43210</li>
                    <li className="flex items-center gap-3"><Mail size={18} className="text-brand-gold shrink-0" /> info@atmillets.com</li>
                </ul>
            </div>
            <div className="space-y-6">
                <div className="border border-white/10 p-6 rounded-none bg-white/5 backdrop-blur-sm">
                    <h5 className="text-brand-gold font-bold mb-2 text-sm uppercase tracking-wider">FSSAI Certified</h5>
                    <p className="text-xs font-mono opacity-70">Lic No. 12345678901234</p>
                    <div className="mt-4 flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-600/20 border border-green-500/50"></div>
                        <div className="w-8 h-8 rounded-full bg-yellow-600/20 border border-yellow-500/50"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-16 border-t border-white/5 pt-8 text-center text-xs opacity-40 tracking-wider">
            {UI_TEXT.footerText[lang]}
        </div>
      </footer>
    </div>
  );
};