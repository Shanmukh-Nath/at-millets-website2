import React from 'react';
import { Section, Reveal, ImagePlaceholder, BentoCard } from '../components/Components';
import { RECIPES } from '../constants';
import { Language } from '../types';
import { Heart, Users, Sprout } from 'lucide-react';

export const RecipesPage: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      
      {/* Header Section focusing on Women & Family */}
      <div className="bg-white py-16 text-center px-4 border-b border-stone-200">
          <Reveal>
             <div className="flex justify-center mb-4 text-brand-green">
                 <Users size={40} />
             </div>
             <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
               {lang === 'te' ? 'గ్రామీణ మహిళల ఆరోగ్యం & కుటుంబ బలం' : 'For Rural Women & Family Strength'}
             </h1>
             <p className="text-lg text-stone-600 max-w-2xl mx-auto italic">
               "{lang === 'te' ? 'మిల్లెట్స్ తింటే బిడ్డలు బలిష్టులు! తక్కువ నీళ్లు, ఎక్కువ లాభం.' : 'Millets make children strong! Less water, more profit.'}"
             </p>
          </Reveal>
      </div>

      <Section>
         <div className="grid md:grid-cols-3 gap-8">
            {RECIPES.map((recipe, idx) => (
               <Reveal key={recipe.id} delay={idx * 100}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-stone-100 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                     {/* Image */}
                     <div className="relative h-56">
                        <ImagePlaceholder desc={recipe.imageDesc} url={recipe.unsplashUrl} heightClass="h-full" />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-dark uppercase tracking-wider shadow-sm">
                            Healthy Choice
                        </div>
                     </div>
                     
                     {/* Content */}
                     <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-2xl font-serif font-bold text-brand-dark mb-3 leading-tight">
                           {recipe.title[lang]}
                        </h3>
                        <div className="w-12 h-1 bg-brand-gold/50 mb-4"></div>
                        <p className="text-stone-600 mb-6 leading-relaxed flex-grow">
                           {recipe.desc[lang]}
                        </p>
                        
                        {/* Benefits Icons */}
                        <div className="flex items-center gap-4 text-xs font-bold text-stone-400 border-t border-stone-100 pt-4 mt-auto">
                            <span className="flex items-center gap-1 text-brand-green"><Heart size={14} /> Health</span>
                            <span className="flex items-center gap-1 text-brand-gold"><Sprout size={14} /> Natural</span>
                        </div>
                     </div>
                  </div>
               </Reveal>
            ))}
         </div>
      </Section>

      {/* Economic Benefit Section */}
      <Section className="bg-brand-cream/50">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-brand-dark mb-6">
                  {lang === 'te' ? 'ఆర్థిక ప్రయోజనాలు' : 'Economic Benefits'}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                      <h4 className="font-bold text-xl mb-2 text-brand-green">
                          {lang === 'te' ? 'తక్కువ ఖర్చు' : 'Low Cost'}
                      </h4>
                      <p className="text-stone-600">
                          {lang === 'te' ? 'తక్కువ నీళ్లు, ఎరువులు అవసరం లేదు. మీ పెట్టుబడి తగ్గుతుంది.' : 'Requires less water and fertilizers. Reduces your investment cost.'}
                      </p>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                      <h4 className="font-bold text-xl mb-2 text-brand-gold">
                          {lang === 'te' ? 'ఎక్కువ ఆదాయం' : 'High Income'}
                      </h4>
                      <p className="text-stone-600">
                          {lang === 'te' ? 'మీ భూమిలో మిల్లెట్స్ పండించి ఎక్కువ డబ్బు సంపాదించండి!' : 'Grow millets in your land and earn more money! High market demand.'}
                      </p>
                  </div>
              </div>
          </div>
      </Section>
    </div>
  );
};