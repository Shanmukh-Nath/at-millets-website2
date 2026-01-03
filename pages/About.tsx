import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Users, Leaf, Globe, Award, Droplet, Clock, Sprout, Sun } from 'lucide-react';
import { Section, Reveal, Button, ImagePlaceholder, BentoCard } from '../components/Components';
import { Language } from '../types';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = {
    title: { te: 'మా కథ', en: 'Our Story', hi: 'हमारी कहानी' },
    sub: { te: 'కేవలం వ్యాపారం కాదు, ఇది ఒక ఉద్యమం.', en: 'Not just a business. A movement.', hi: 'सिर्फ एक व्यवसाय नहीं। एक आंदोलन।' },
    narrative: {
        p1: {
            te: 'తూర్పు కనుమల లోతుల్లో, అరకు లోయ పచ్చని అడవుల మధ్య, మా కథ మొదలవుతుంది. ఇక్కడ నివసించే బోండా, గదబా మరియు కొండదొర తెగలు శతాబ్దాలుగా ప్రకృతితో మమేకమై జీవిస్తున్నారు. వారికి భూమి కేవలం మట్టి కాదు, అది ఒక దేవత.',
            en: 'Deep in the Eastern Ghats, amidst the lush forests of Araku Valley, our story begins. Here, the Bonda, Gadaba, and Kondadora tribes have lived in harmony with nature for centuries. To them, the earth is not just soil; it is a Goddess.',
            hi: 'पूर्वी घाट की गहराइयों में, अరకు घाटी के हरे-भरे जंगलों के बीच, हमारी कहानी शुरू होती है। यहाँ, बोंडा, गदबा और कोंडादोरा जनजातियाँ सदियों से प्रकृति के साथ सद्भाव में रह रही हैं। उनके लिए, पृथ्वी सिर्फ मिट्टी नहीं है; यह एक देवी है।'
        },
        p2: {
            te: 'మేము మధ్యవర్తులం కాదు. మేము వారి కుటుంబ సభ్యులం. గిరిజన రైతులు పండించే స్వచ్ఛమైన ఆహారాన్ని, ఏ రసాయనాలు లేకుండా, వారి కష్టానికి తగిన ఫలితం అందిస్తూ మీ ఇంటికి చేర్చడమే అరకు నేచురల్స్ ఆశయం.',
            en: 'We are not middlemen. We are family. AT Millets was born from a simple promise: to bring the purest, chemical-free produce grown by these tribal guardians directly to your table, ensuring they receive the dignity and prosperity they deserve.',
            hi: 'हम बिचौलिए नहीं हैं। हम परिवार हैं। एटी मिलेट्स का जन्म एक साधारण वादे से हुआ था: इन आदिवासी संरक्षकों द्वारा उगाए गए शुद्धतम, रसायन मुक्त उपज को सीधे आपकी मेज पर लाना, यह सुनिश्चित करना कि उन्हें वह सम्मान और समृद्धि मिले जिसके वे हकदार हैं।'
        }
    },
    values: {
        trust: { title: 'Traceability', te: 'నమ్మకం', desc: 'Know Your Farmer' },
        purity: { title: 'Purity', te: 'స్వచ్ఛత', desc: 'Zero Chemicals' },
        tribe: { title: 'Tribal First', te: 'సమాజం', desc: '100% Profits to Tribe' }
    }
  };

  return (
    <div className="w-full bg-stone-50">
      
      {/* SECTION 1: EMOTIONAL HERO */}
      <div className="relative h-[80vh] w-full overflow-hidden bg-brand-dark flex items-center justify-center">
        <div className="absolute inset-0 opacity-60">
            <ImagePlaceholder desc="Araku Tribal Woman Smiling in Field" url="https://unsplash.com/s/photos/indian-tribal-woman-farmer" heightClass="h-full" overlay={false} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-6 mt-12">
            <Reveal>
                <div className="inline-block border-b border-brand-gold pb-2 mb-6">
                    <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">Guardians of the Soil</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-2xl">
                    {t.title[lang]}
                </h1>
                <p className="text-xl md:text-2xl text-stone-200 font-light italic drop-shadow-lg">
                    "{t.sub[lang]}"
                </p>
            </Reveal>
        </div>
      </div>

      {/* SECTION 2: NARRATIVE - TYPEWRITER STYLE LAYOUT */}
      <Section className="bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto space-y-12">
            <Reveal>
                <p className="text-2xl md:text-3xl font-serif leading-relaxed text-brand-dark first-letter:text-7xl first-letter:font-bold first-letter:text-brand-gold first-letter:mr-3 first-letter:float-left">
                    {t.narrative.p1[lang]}
                </p>
            </Reveal>
            <Reveal delay={200}>
                <div className="flex items-center gap-4 py-8">
                    <div className="h-[1px] flex-grow bg-brand-gold/30"></div>
                    <Leaf className="text-brand-green" size={24} />
                    <div className="h-[1px] flex-grow bg-brand-gold/30"></div>
                </div>
            </Reveal>
            <Reveal delay={400}>
                <p className="text-xl md:text-2xl font-serif leading-relaxed text-stone-600 text-center">
                    {t.narrative.p2[lang]}
                </p>
            </Reveal>
        </div>
      </Section>

      {/* SECTION 3: THE FARMERS (FARMER PORTRAITS BENTO) */}
      <Section className="bg-stone-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-brand-dark mb-2">Meet the Guardians</h2>
            <p className="text-stone-500">The hands that grow your food.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Farmer 1 */}
              <BentoCard noPadding className="h-[450px]">
                  <div className="absolute inset-0">
                      <ImagePlaceholder desc="Old Indian Farmer Face" url="https://unsplash.com/s/photos/indian-farmer-portrait" heightClass="h-full" overlay={false} />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-90"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                      <h3 className="text-2xl font-serif font-bold">Raju Pangi</h3>
                      <p className="text-brand-gold text-sm uppercase tracking-wider mb-2">Bonda Tribe • 40 Years Farming</p>
                      <p className="text-stone-300 text-sm italic">"We don't use poison on our mother (earth). She gives us gold (millets) in return."</p>
                  </div>
              </BentoCard>

              {/* Farmer 2 */}
              <BentoCard noPadding className="h-[450px]">
                  <div className="absolute inset-0">
                      <ImagePlaceholder desc="Indian Tribal Women Harvesting" url="https://unsplash.com/s/photos/women-farming-india" heightClass="h-full" overlay={false} />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-90"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                      <h3 className="text-2xl font-serif font-bold">Lakshmi & Sisters</h3>
                      <p className="text-brand-gold text-sm uppercase tracking-wider mb-2">Gadaba Collective</p>
                      <p className="text-stone-300 text-sm italic">"The money from Araku Naturals sends my daughter to college in Vizag."</p>
                  </div>
              </BentoCard>

               {/* Farmer 3 */}
               <BentoCard noPadding className="h-[450px]">
                  <div className="absolute inset-0">
                      <ImagePlaceholder desc="Coffee Berries Hand" url="https://unsplash.com/s/photos/coffee-farming" heightClass="h-full" overlay={false} />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-90"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                      <h3 className="text-2xl font-serif font-bold">The Process</h3>
                      <p className="text-brand-gold text-sm uppercase tracking-wider mb-2">Hand-Picked Purity</p>
                      <p className="text-stone-300 text-sm italic">Every grain is sun-dried and hand-pounded. No machines touch the soul of the grain.</p>
                  </div>
              </BentoCard>
          </div>
      </Section>

      {/* SECTION 4: BENTO VALUES */}
      <Section className="bg-stone-50">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Large Card */}
            <BentoCard className="md:col-span-2 md:row-span-2 group" title="The Connection" dark>
                <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500">
                    <ImagePlaceholder desc="Holding Soil" url="https://unsplash.com/s/photos/soil-hands" heightClass="h-full" overlay={false} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    <h3 className="text-4xl font-serif mb-4 text-white">Rooted in Earth</h3>
                    <p className="text-stone-300 max-w-md">We don't just source; we nurture. Every grain of millet is a testament to the symbiotic relationship between the tribal farmer and the forest.</p>
                </div>
            </BentoCard>

            {/* Small Cards */}
            <BentoCard className="bg-white flex flex-col items-center justify-center text-center p-8 group hover:bg-brand-cream transition-colors">
                <Globe size={32} className="text-brand-green mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-1">{t.values.trust.title}</h4>
                <p className="text-xs uppercase tracking-wider text-stone-500">{t.values.trust.desc}</p>
            </BentoCard>

            <BentoCard className="bg-white flex flex-col items-center justify-center text-center p-8 group hover:bg-brand-cream transition-colors">
                <Droplet size={32} className="text-brand-green mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-1">{t.values.purity.title}</h4>
                <p className="text-xs uppercase tracking-wider text-stone-500">{t.values.purity.desc}</p>
            </BentoCard>
        </div>
      </Section>

      {/* SECTION 5: INTERACTIVE TIMELINE */}
      <Section className="bg-brand-dark text-white relative overflow-hidden">
         {/* Background Ruler Lines */}
         <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #fff 50px)' }}></div>

         <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif mb-12 text-center text-brand-gold">The Journey</h2>
            
            <div className="space-y-12 relative border-l border-brand-gold/30 ml-6 pl-8 md:ml-0 md:pl-0">
                {[
                    { year: '2020', title: 'The Seed', desc: 'Started with 50 farmers in a small village in Araku.' },
                    { year: '2022', title: 'The Growth', desc: 'Expanded to 1000+ acres. Obtained Organic Certification.' },
                    { year: '2024', title: 'The Brand', desc: 'Launched AT Millets to bring tribal produce to urban homes.' }
                ].map((item, idx) => (
                    <Reveal key={idx} delay={idx * 200} className="md:flex items-center group">
                         <div className="hidden md:block w-1/2 text-right pr-12">
                            <h3 className="text-4xl font-bold text-brand-gold opacity-50 group-hover:opacity-100 transition-opacity">{item.year}</h3>
                         </div>
                         <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-brand-gold rounded-full -translate-x-[21px] md:-translate-x-[9px] border-4 border-brand-dark"></div>
                         <div className="md:w-1/2 md:pl-12">
                            <h3 className="md:hidden text-2xl font-bold text-brand-gold mb-1">{item.year}</h3>
                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                         </div>
                    </Reveal>
                ))}
            </div>
         </div>
      </Section>

      {/* SECTION 6: SUSTAINABILITY SPECS */}
      <Section className="bg-stone-100">
         <div className="grid md:grid-cols-4 gap-px bg-stone-300 border border-stone-300">
             {[
                 { icon: Sprout, label: 'Natural Farming', value: '100%' },
                 { icon: Users, label: 'Women Farmers', value: '60%' },
                 { icon: Droplet, label: 'Water Saved', value: '1M+ L' },
                 { icon: Award, label: 'Fair Price', value: '+30%' }
             ].map((stat, i) => (
                 <Reveal key={i} delay={i * 100} className="bg-white p-10 flex flex-col items-center justify-center hover:bg-stone-50 transition-colors cursor-default group">
                     <stat.icon size={32} className="text-stone-400 mb-4 group-hover:text-brand-green transition-colors" />
                     <span className="text-3xl font-bold text-brand-dark mb-1">{stat.value}</span>
                     <span className="text-xs uppercase tracking-widest text-stone-500">{stat.label}</span>
                 </Reveal>
             ))}
         </div>
      </Section>

      {/* SECTION 7: CTA */}
      <div className="bg-white py-24 text-center px-4">
          <Reveal>
            <h2 className="text-4xl font-serif text-brand-dark mb-6">Join the Family</h2>
            <p className="text-stone-600 mb-8 max-w-lg mx-auto">
                Every purchase supports a tribal family and promotes a healthier planet.
            </p>
            <div className="flex justify-center gap-4">
                <NavLink to="/contact">
                    <Button>Contact Us</Button>
                </NavLink>
                <NavLink to="/products">
                    <Button variant="outline">View Products</Button>
                </NavLink>
            </div>
          </Reveal>
      </div>

    </div>
  );
};