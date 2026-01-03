import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Heart, TrendingUp, Droplets, Users, Store, Award, CheckCircle } from 'lucide-react';
import { Section, Reveal, Button, ImagePlaceholder, BentoCard, BarGraph } from '../components/Components';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface HomeProps {
  lang: Language;
}

export const Home: React.FC<HomeProps> = ({ lang }) => {
  // Content based on new Client Inputs
  const heroContent = {
    title: { 
      te: 'అరకు నేచురల్స్ – సహజ ఆహారం, స్వాభావిక ఆరోగ్యం!', 
      en: 'Araku Naturals – Natural Millets, Innate Health!', 
      hi: 'अరకు नेचुरल्स - प्राकृतिक बाजरा, सहज स्वास्थ्य!' 
    },
    sub: { 
      te: 'అరకు లోయ నుంచి 100% ఆర్గానిక్ మిల్లెట్స్.', 
      en: '100% Organic Millets from Araku Valley Tribals.', 
      hi: 'अరకు घाटी से 100% जैविक बाजरा।' 
    },
    cta: { te: 'ఉత్పత్తులు చూడండి', en: 'Explore Collection', hi: 'संग्रह देखें' }
  };

  return (
    <div className="w-full bg-stone-50">
      
      {/* SECTION 1: HERO - Minimalist & Cinematic */}
      <div className="relative h-screen w-full overflow-hidden bg-brand-dark">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-50">
           <ImagePlaceholder desc="Araku Valley Mist" url="https://unsplash.com/s/photos/araku-valley" heightClass="h-full" overlay={false} />
        </div>
        
        {/* Grid Overlay for "Ruler" effect */}
        <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
            <Reveal>
                <div className="border border-white/20 bg-brand-dark/30 backdrop-blur-md p-8 md:p-16 max-w-5xl mx-auto shadow-2xl">
                    <span className="text-brand-gold uppercase tracking-[0.4em] text-xs md:text-sm block mb-6 font-bold">
                        {lang === 'te' ? 'సస్టైనబుల్ అరకు - మీ ప్లేట్‌లో ప్రకృతి ప్రేమ!' : 'Sustainable Araku - Nature\'s Love on Your Plate!'}
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        {heroContent.title[lang]}
                    </h1>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
                    <p className="text-xl md:text-3xl text-stone-200 font-light tracking-wide mb-10">
                        {heroContent.sub[lang]}
                    </p>
                    <div className="flex justify-center gap-4">
                        <NavLink to="/products">
                            <Button className="border-white/30 hover:border-brand-gold">
                                {heroContent.cta[lang]} <ArrowRight size={16} />
                            </Button>
                        </NavLink>
                        <NavLink to="/health">
                            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-dark">
                                {lang === 'te' ? 'ఆరోగ్య ప్రయోజనాలు' : 'Scientific Proof'}
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </Reveal>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
            <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>

      {/* SECTION 2: BENTO GRID INTRO - "The Foundation" */}
      <Section className="bg-stone-50">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Main Brand Story */}
            <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between group" title="Our Philosophy">
                <div className="absolute inset-0 z-0">
                    <ImagePlaceholder desc="Tribal Farmer Hands" url="https://unsplash.com/s/photos/indian-farmer" heightClass="h-full" overlay={true} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end text-white">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4">Empowering <br/><span className="text-brand-gold">5000+ Tribal Families</span></h2>
                    <p className="text-sm md:text-base opacity-90 max-w-md border-l-2 border-brand-gold pl-4">
                        {lang === 'te' ? 'గిరిజనాల నుంచి అరకు - 100% ప్యూర్ & ఆర్గానిక్!' : 'Direct sourcing from Araku Valley ensures fair trade and preserves ancient farming wisdom.'}
                    </p>
                </div>
            </BentoCard>

            {/* Stat Box 1 */}
            <BentoCard className="md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center bg-white" title="Reach">
                <TrendingUp size={40} className="text-brand-green mb-4" />
                <span className="text-4xl font-serif font-bold text-brand-dark">150+</span>
                <span className="text-xs uppercase tracking-widest text-stone-500 mt-2">Villages Connected</span>
            </BentoCard>

             {/* Highlight Box */}
             <BentoCard className="md:col-span-1 md:row-span-1 bg-brand-green text-white flex flex-col justify-center p-8" dark>
                <Leaf size={32} className="text-brand-gold mb-4" />
                <h3 className="text-2xl font-serif mb-2">100% Organic</h3>
                <p className="text-xs opacity-70 leading-relaxed">No pesticides. No chemicals. Just pure nature as intended.</p>
            </BentoCard>

            {/* List Box */}
            <BentoCard className="md:col-span-2 md:row-span-1 bg-brand-cream" title="Key Pillars">
                <div className="flex h-full items-center justify-around">
                    <div className="flex flex-col items-center gap-2">
                        <Droplets className="text-brand-dark" size={24} />
                        <span className="text-xs font-bold uppercase">Rain-fed</span>
                    </div>
                    <div className="w-[1px] h-12 bg-brand-dark/10"></div>
                    <div className="flex flex-col items-center gap-2">
                        <Users className="text-brand-dark" size={24} />
                        <span className="text-xs font-bold uppercase">Fair Trade</span>
                    </div>
                    <div className="w-[1px] h-12 bg-brand-dark/10"></div>
                    <div className="flex flex-col items-center gap-2">
                        <Award className="text-brand-dark" size={24} />
                        <span className="text-xs font-bold uppercase">Premium</span>
                    </div>
                </div>
            </BentoCard>
        </div>
      </Section>

      {/* SECTION 3: SCIENTIFIC PROOF & DIABETES FOCUS */}
      <Section className="py-0 md:py-0">
        <div className="border-t border-b border-stone-200 bg-white">
            <div className="grid md:grid-cols-2">
                <div className="p-12 md:p-20 border-b md:border-b-0 md:border-r border-stone-200 flex flex-col justify-center bg-brand-dark text-white">
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4">Scientific Proof</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                        {lang === 'te' ? 'రాగి రాజ్యం: డైబటిస్‌కు వీరులు' : 'Araku Millets for Diabetes & Weight Loss'}
                    </h2>
                    <p className="text-stone-300 mb-8 leading-relaxed">
                        {lang === 'te' ? 'చిరుధాన్యాలు చిరస్థాయినీ ఇస్తాయి రోగనిరోధక శక్తి పెంచుతాయి. తద్వారా సంపూర్ణ ఆరోగ్యాన్ని పొందటం కోసం AT Millets ఉత్పత్తులు వాడండి.' : 'Millets give longevity and boost immunity. To achieve complete health, use AT Millets Araku Naturals products.'}
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-lg font-medium text-white">
                            <CheckCircle size={20} className="text-brand-gold" /> 
                            {lang === 'te' ? 'డైబటిస్ నియంత్రణ' : 'Diabetes Control'}
                        </li>
                        <li className="flex items-center gap-3 text-lg font-medium text-white">
                            <CheckCircle size={20} className="text-brand-gold" /> 
                            {lang === 'te' ? 'బరువు తగ్గడానికి సహాయపడుతుంది' : 'Aids in Weight Loss'}
                        </li>
                        <li className="flex items-center gap-3 text-lg font-medium text-white">
                            <CheckCircle size={20} className="text-brand-gold" /> 
                            {lang === 'te' ? 'రక్త శుద్ధి' : 'Blood Purification'}
                        </li>
                    </ul>
                    <div className="mt-8">
                         <NavLink to="/health">
                             <Button className="bg-brand-gold hover:bg-white hover:text-brand-dark">
                                 {lang === 'te' ? 'మరింత తెలుసుకోండి' : 'Read Scientific Facts'}
                             </Button>
                         </NavLink>
                    </div>
                </div>
                <div className="p-12 md:p-20 bg-stone-50 flex flex-col justify-center">
                    <h3 className="text-2xl font-serif text-brand-dark mb-4">The Sugar Trap</h3>
                    <div className="h-64 w-full">
                         <BarGraph 
                            title="Glycemic Index (Lower is Better for Diabetes)"
                            data={[
                                { label: 'White Rice', value: 75, color: '#ef4444' }, // Red
                                { label: 'Wheat', value: 65, color: '#f59e0b' }, // Orange
                                { label: 'Araku Millet', value: 41, color: '#059669' } // Dark Green (Hero)
                            ]}
                         />
                    </div>
                    <p className="mt-8 text-xs text-stone-500 text-center italic border-t border-stone-200 pt-4">
                        *Low GI foods release glucose slowly, preventing blood sugar spikes.
                    </p>
                </div>
            </div>
        </div>
      </Section>

      {/* SECTION 4: SLIDESHOW PREVIEW - "The Collection" */}
      <Section className="bg-white overflow-hidden border-b border-stone-200">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-4">
            <div>
                <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Our Catalog</span>
                <h2 className="text-4xl font-serif mt-2 text-brand-dark">
                    {lang === 'te' ? 'మా ఉత్పత్తులు' : 'Curated from Nature'}
                </h2>
                <p className="text-stone-500 mt-2">
                    {lang === 'te' ? 'రాగి, జొన్న, కాఫీ, నేచురల్ ఆయిల్స్' : 'Ragi, Jowar, Coffee, Natural Oils'}
                </p>
            </div>
            <NavLink to="/products" className="hidden md:block">
                <Button variant="outline">View All</Button>
            </NavLink>
        </div>
        
        {/* Horizontal Scroll Snap */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4 -mx-4 md:mx-0">
             {[
                { title: 'Millets', img: 'https://unsplash.com/s/photos/millet-grain', sub: 'Korra, Ragi, Jowar' },
                { title: 'Araku Coffee', img: 'https://unsplash.com/s/photos/coffee-beans', sub: '100% Arabica' },
                { title: 'Forest Honey', img: 'https://unsplash.com/s/photos/honey', sub: 'Wild Collected' },
                { title: 'Spices', img: 'https://unsplash.com/s/photos/indian-spices', sub: 'Turmeric, Pepper' },
                { title: 'Ready Mixes', img: 'https://unsplash.com/s/photos/dosa', sub: 'Dosa, Idli' },
             ].map((item, i) => (
                <div key={i} className="min-w-[280px] md:min-w-[350px] snap-center">
                    <BentoCard noPadding className="h-[400px] border-stone-200 group" onClick={() => {}}>
                        <div className="absolute inset-0">
                             <ImagePlaceholder desc={item.title} url={item.img} heightClass="h-full" overlay={false} />
                             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-serif mb-1 text-white group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
                            <p className="text-brand-gold text-sm uppercase tracking-wider">{item.sub}</p>
                        </div>
                    </BentoCard>
                </div>
             ))}
        </div>
      </Section>

      {/* SECTION 5: PROCESS TIMELINE - "The Journey" */}
      <Section className="bg-stone-50">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-brand-dark">Farm to Fork</h2>
         </div>
         <div className="relative">
            {/* Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-stone-300 -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[
                    { step: '01', title: 'Sourcing', desc: 'Direct from Tribes' },
                    { step: '02', title: 'Quality', desc: 'Lab Tested' },
                    { step: '03', title: 'Processing', desc: 'Hygienic & Clean' },
                    { step: '04', title: 'Packing', desc: 'Eco-friendly' },
                    { step: '05', title: 'Delivery', desc: 'To Your Doorstep' }
                ].map((item, i) => (
                    <Reveal key={i} delay={i*150} className="relative z-10 bg-white p-6 border border-stone-200 text-center group hover:border-brand-gold transition-colors duration-300 shadow-sm rounded-lg">
                        <div className="w-10 h-10 mx-auto bg-brand-dark text-brand-gold flex items-center justify-center font-bold rounded-full mb-4 group-hover:scale-110 transition-transform">
                            {item.step}
                        </div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-xs text-stone-500 uppercase tracking-wide">{item.desc}</p>
                    </Reveal>
                ))}
            </div>
         </div>
      </Section>

      {/* SECTION 6: QUOTE - "The Voice" */}
      <div className="bg-brand-cream py-32 border-y border-brand-dark/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
                <div className="mb-8 text-brand-gold opacity-50">
                    <Heart size={48} className="mx-auto" fill="currentColor" />
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-brand-dark leading-tight italic">
                    "{lang === 'te' ? 'మధుమేహం నిన్ను నియంత్రించే ముందు, నీవే దానిని నియంత్రించు!' : 'Control diabetes before it controls you. Choose nature, choose life.'}"
                </h2>
                <div className="mt-12 w-24 h-[2px] bg-brand-dark mx-auto"></div>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-stone-500">Araku Naturals Wellness</p>
            </Reveal>
        </div>
      </div>

      {/* SECTION 7: FRANCHISE & MAP - "The Growth" */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8 h-auto md:h-[500px]">
             <BentoCard className="bg-stone-900 text-white flex flex-col justify-center items-start p-12" title="Expansion">
                 <Store size={48} className="text-brand-gold mb-6" />
                 <h2 className="text-4xl font-serif mb-6">Start Your Franchise</h2>
                 <p className="text-stone-400 mb-8 max-w-md leading-relaxed">
                     Join the millet revolution. Low investment models available for retail stores across Andhra Pradesh and Telangana.
                 </p>
                 <NavLink to="/franchise">
                    <Button>Apply Now</Button>
                 </NavLink>
             </BentoCard>
             <BentoCard noPadding className="relative" title="Footprint">
                 <ImagePlaceholder desc="Map of South India with pins" url="https://unsplash.com/s/photos/map" heightClass="h-full" overlay={false} />
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="bg-white/90 backdrop-blur px-6 py-4 border border-stone-200 shadow-xl text-center">
                         <span className="block text-3xl font-bold text-brand-dark">50+</span>
                         <span className="text-xs uppercase tracking-wide">Active Locations</span>
                     </div>
                 </div>
             </BentoCard>
        </div>
      </Section>

      {/* SECTION 8: TRUST MARQUEE - "The Validation" */}
      <div className="bg-white border-t border-stone-200 py-12 overflow-hidden">
         <div className="flex justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simulating Logos with Text for now */}
             {['FSSAI Certified', 'India Organic', 'Jaivik Bharat', 'Made in Andhra', 'GMP Certified'].map((text, i) => (
                 <div key={i} className="flex items-center gap-2">
                    <ShieldCheck size={24} className="text-brand-gold" />
                    <span className="text-xl md:text-2xl font-serif font-bold whitespace-nowrap text-brand-dark">{text}</span>
                 </div>
             ))}
         </div>
      </div>

    </div>
  );
};