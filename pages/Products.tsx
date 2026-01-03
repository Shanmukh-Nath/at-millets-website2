import React, { useState, useMemo } from 'react';
import { Section, Reveal, Button, ImagePlaceholder, BentoCard } from '../components/Components';
import { PRODUCTS, UI_TEXT } from '../constants';
import { Language } from '../types';
import { Filter, Check, ArrowRight, Tag, Search, ShoppingBag } from 'lucide-react';

export const ProductsPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = useMemo(() => {
    const cats = Array.from(new Set(PRODUCTS.map(p => p.category)));
    return ['all', ...cats];
  }, []);

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const getCatLabel = (c: string) => {
    if (c === 'all') return lang === 'te' ? 'అన్ని' : lang === 'hi' ? 'सभी' : 'All';
    // Map internal codes to display names
    const map: Record<string, any> = {
      spices: { te: 'సుగంధ ద్రవ్యాలు', en: 'Spices', hi: 'मसाले' },
      coffee: { te: 'కాఫీ', en: 'Coffee', hi: 'कॉफी' },
      millets: { te: 'సిరిధాన్యాలు', en: 'Millets', hi: 'बाजरा' },
      pulses: { te: 'పప్పుధాన్యాలు', en: 'Pulses', hi: 'दालें' },
      forest: { te: 'అటవీ ఉత్పత్తులు', en: 'Forest Produce', hi: 'वन उत्पाद' },
      rice: { te: 'బియ్యం', en: 'Rice', hi: 'चावल' },
      readymix: { te: 'రెడీ మిక్స్', en: 'Ready Mix', hi: 'रेडी मिक्स' },
      flours: { te: 'పిండి', en: 'Flours', hi: 'आटा' },
      snacks: { te: 'స్నాక్స్', en: 'Snacks', hi: 'नाश्ता' },
      pasta: { te: 'పాస్తా', en: 'Pasta', hi: 'पास्ता' },
      sweeteners: { te: 'తీపి', en: 'Sweeteners', hi: 'स्वीटनर' }
    };
    return map[c] ? map[c][lang] : c.charAt(0).toUpperCase() + c.slice(1);
  };

  return (
    <div className="w-full bg-stone-50">
      
      {/* HEADER - RULER STYLE */}
      <div className="pt-28 pb-12 px-6 bg-brand-dark text-white border-b border-brand-green/30 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
                <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold block mb-2">
                    {lang === 'te' ? 'మా కేటలాగ్' : 'Our Catalog'}
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold">
                    {lang === 'te' ? 'ప్రకృతి సంపద' : lang === 'hi' ? 'प्राकृतिक खजाना' : 'Nature\'s Inventory'}
                </h1>
            </div>
            <div className="text-right hidden md:block">
                <p className="text-3xl font-mono text-stone-400">{PRODUCTS.length}</p>
                <p className="text-xs uppercase text-stone-500 tracking-wider">Total SKUs</p>
            </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto min-h-screen">
          <div className="flex flex-col md:flex-row">
              
              {/* STICKY SIDEBAR (Desktop) / SCROLL BAR (Mobile) */}
              <div className="w-full md:w-64 flex-shrink-0 bg-stone-100 md:min-h-screen border-b md:border-b-0 md:border-r border-stone-200 sticky top-[70px] z-30">
                  <div className="p-4 md:p-6 overflow-x-auto md:overflow-visible flex md:block gap-2 scrollbar-hide">
                      <div className="mb-4 hidden md:block">
                          <h3 className="text-xs font-bold uppercase text-stone-400 tracking-widest mb-4 flex items-center gap-2">
                              <Filter size={12} /> Filter
                          </h3>
                      </div>
                      {categories.map(cat => (
                          <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`
                                whitespace-nowrap px-4 py-2 md:py-3 md:px-0 md:w-full text-left text-sm md:border-b md:border-stone-200 md:last:border-0 transition-all flex justify-between items-center group
                                ${activeCategory === cat ? 'bg-brand-gold text-white md:bg-transparent md:text-brand-dark md:font-bold' : 'bg-white md:bg-transparent text-stone-500 hover:text-brand-green'}
                                rounded-full md:rounded-none mb-0 md:mb-0
                            `}
                          >
                              <span className={activeCategory === cat ? 'md:translate-x-2 transition-transform' : ''}>
                                  {getCatLabel(cat)}
                              </span>
                              {activeCategory === cat && <span className="hidden md:inline-block w-1.5 h-1.5 bg-brand-gold rounded-full"></span>}
                          </button>
                      ))}
                  </div>
              </div>

              {/* PRODUCT GRID */}
              <div className="flex-grow p-4 md:p-8">
                  {/* Stats Bar */}
                  <div className="mb-8 flex justify-between items-center border-b border-stone-200 pb-4">
                      <span className="text-xs uppercase tracking-widest text-stone-500">
                          Showing {activeCategory === 'all' ? 'All' : getCatLabel(activeCategory)}
                      </span>
                      <span className="text-xs font-mono text-stone-400">
                          {filteredProducts.length} Items
                      </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProducts.map((product, idx) => (
                          <Reveal key={product.id} delay={idx % 3 * 100}>
                              <BentoCard noPadding className="h-full flex flex-col group hover:border-brand-gold transition-colors duration-300">
                                  {/* Image Area */}
                                  <div className="relative aspect-square overflow-hidden bg-stone-200 border-b border-stone-100">
                                      <ImagePlaceholder 
                                        desc={product.imageDesc} 
                                        url={product.unsplashUrl} 
                                        heightClass="h-full" 
                                        overlay={false} 
                                      />
                                      <div className="absolute top-3 left-3">
                                          <span className="bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider px-2 py-1 border border-stone-200 text-stone-600">
                                              {product.category}
                                          </span>
                                      </div>
                                      
                                      {/* Hover Overlay */}
                                      <div className="absolute inset-0 bg-brand-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center text-white">
                                          <ShoppingBag className="mb-3 text-brand-gold" size={24} />
                                          <p className="text-sm mb-4 leading-relaxed">{product.description[lang]}</p>
                                          <div className="w-8 h-[1px] bg-brand-gold mb-4"></div>
                                          <p className="text-xs font-mono text-stone-400">Sizes: {product.sizes.join(', ')}</p>
                                      </div>
                                  </div>

                                  {/* Info Area */}
                                  <div className="p-5 flex flex-col flex-grow bg-white">
                                      <div className="mb-2">
                                          <h3 className="font-serif font-bold text-lg text-brand-dark leading-tight group-hover:text-brand-gold transition-colors">
                                              {product.name[lang]}
                                          </h3>
                                      </div>
                                      
                                      <div className="mt-auto pt-4 flex items-center gap-2 text-xs text-stone-500 border-t border-dashed border-stone-200">
                                          <Tag size={12} className="text-brand-green" />
                                          <span className="truncate">{product.benefits[lang]}</span>
                                      </div>
                                  </div>
                              </BentoCard>
                          </Reveal>
                      ))}
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};