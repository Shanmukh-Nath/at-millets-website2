import React from 'react';
import { Section, Reveal, ImagePlaceholder, Button } from '../components/Components';
import { Language, PageContent } from '../types';

interface GenericPageProps {
  data: PageContent;
  lang: Language;
}

export const GenericPage: React.FC<GenericPageProps> = ({ data, lang }) => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-brand-dark text-white py-16 md:py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl"></div>
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{data.title[lang]}</h1>
          {data.subtitle && <p className="text-xl text-brand-goldLight opacity-90">{data.subtitle[lang]}</p>}
        </Reveal>
      </div>

      {data.sections.map((section, idx) => (
        <Section key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-cream/50'}>
          {section.type === 'image-text' && (
            <div className={`grid md:grid-cols-2 gap-12 items-center ${section.reverse ? 'md:flex-row-reverse' : ''}`}>
               <Reveal className={section.reverse ? 'md:order-2' : ''}>
                  <div className="space-y-4">
                     <h2 className="text-3xl font-serif text-brand-dark font-bold">{section.title?.[lang]}</h2>
                     <p className="text-gray-700 leading-relaxed text-lg">{section.content?.[lang]}</p>
                  </div>
               </Reveal>
               <Reveal delay={200} className={section.reverse ? 'md:order-1' : ''}>
                  <ImagePlaceholder desc={section.imageDesc || 'Araku Visual'} url={section.unsplashUrl || '#'} heightClass="h-80" />
               </Reveal>
            </div>
          )}

          {section.type === 'text' && (
             <Reveal>
               <div className="max-w-3xl mx-auto text-center">
                 {section.title && <h2 className="text-3xl font-serif font-bold mb-6 text-brand-dark">{section.title[lang]}</h2>}
                 <p className="text-xl text-gray-700 leading-relaxed font-light">{section.content?.[lang]}</p>
               </div>
             </Reveal>
          )}

          {section.type === 'stats' && (
             <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                {section.items?.map((item: any, i: number) => (
                   <Reveal key={i} delay={i * 100}>
                      <div className="p-6 border border-brand-gold/20 rounded-lg bg-white shadow-sm">
                         <div className="text-4xl font-bold text-brand-gold mb-2">{item.value}</div>
                         <div className="text-gray-600 font-medium uppercase tracking-wider text-sm">{item.label[lang]}</div>
                      </div>
                   </Reveal>
                ))}
             </div>
          )}
          
          {section.type === 'process' && (
             <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-green/20 hidden md:block -translate-y-1/2"></div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
                   {section.items?.map((item: any, i: number) => (
                      <Reveal key={i} delay={i * 150} className="flex flex-col items-center text-center">
                         <div className="w-16 h-16 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg border-4 border-brand-cream">
                            {i + 1}
                         </div>
                         <h3 className="font-bold text-brand-dark">{item.title[lang]}</h3>
                      </Reveal>
                   ))}
                </div>
             </div>
          )}

          {section.type === 'grid' && (
             <div className="grid md:grid-cols-3 gap-8">
                {section.items?.map((item: any, i: number) => (
                   <Reveal key={i} delay={i * 100}>
                      <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-gold text-center h-full">
                         <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title[lang]}</h3>
                         <p className="text-gray-600">{item.desc}</p>
                      </div>
                   </Reveal>
                ))}
             </div>
          )}

          {section.type === 'form' && (
            <Reveal>
                <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                    <h3 className="text-2xl font-serif text-brand-dark mb-6 text-center">{section.title?.[lang]}</h3>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:outline-none" />
                        </div>
                        <Button className="w-full justify-center">Submit</Button>
                    </form>
                </div>
            </Reveal>
          )}
        </Section>
      ))}
    </div>
  );
};