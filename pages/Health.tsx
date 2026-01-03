import React, { useState } from 'react';
import { Heart, Activity, Brain, Battery, Shield, RefreshCw, Eye, AlertTriangle } from 'lucide-react';
import { Section, Reveal, BentoCard, BarGraph, Button } from '../components/Components';
import { Language } from '../types';

interface HealthProps {
  lang: Language;
}

export const Health: React.FC<HealthProps> = ({ lang }) => {
  const [healthScore, setHealthScore] = useState(20);
  const [swappedItems, setSwappedItems] = useState<number[]>([]);

  // Mini Game Data
  const junkItems = [
    { id: 1, name: 'White Rice', swap: 'Foxtail Millet', cal: 'High GI (70+)', goodCal: 'Low GI (50)', icon: '🍚' },
    { id: 2, name: 'Soda', swap: 'Ragi Malt', cal: 'Sugar Spike', goodCal: 'Calcium Rich', icon: '🥤' },
    { id: 3, name: 'Burger', swap: 'Millet Roti', cal: 'Empty Cals', goodCal: 'High Fibre', icon: '🍔' },
    { id: 4, name: 'Chips', swap: 'Ragi Murukku', cal: 'Bad Fat', goodCal: 'Protein', icon: '🍟' },
  ];

  const handleSwap = (id: number) => {
    if (!swappedItems.includes(id)) {
      setSwappedItems([...swappedItems, id]);
      setHealthScore(prev => Math.min(prev + 20, 100));
    }
  };

  const resetGame = () => {
    setSwappedItems([]);
    setHealthScore(20);
  };

  const benefits = [
    { 
      icon: Heart, 
      color: 'text-red-500', 
      bg: 'bg-red-50', 
      title: { te: 'గుండె ఆరోగ్యం', en: 'Heart Health' }, 
      desc: { te: 'గుండె సంబంధిత వ్యాధులు తగ్గుతాయి.', en: 'Reduces heart related diseases.' } 
    },
    { 
      icon: Activity, 
      color: 'text-orange-500', 
      bg: 'bg-orange-50', 
      title: { te: 'కిడ్నీ రక్షణ', en: 'Kidney Protection' }, 
      desc: { te: 'కిడ్నీ సమస్యలు (నెఫ్రోపతి) నివారించవచ్చు.', en: 'Prevents Kidney problems (Nephropathy).' } 
    },
    { 
      icon: Eye, 
      color: 'text-blue-500', 
      bg: 'bg-blue-50', 
      title: { te: 'కంటి చూపు', en: 'Vision Care' }, 
      desc: { te: 'దృష్టి సమస్యలు (రెటీనోపతి) నుంచి రక్షణ.', en: 'Protects against Retinopathy.' } 
    },
    { 
      icon: Brain, 
      color: 'text-purple-500', 
      bg: 'bg-purple-50', 
      title: { te: 'నరాల బలం', en: 'Nervous System' }, 
      desc: { te: 'నరాల సమస్యలు (న్యూరోపతి) నియంత్రణ.', en: 'Controls nerve issues (Neuropathy).' } 
    },
    { 
      icon: Shield, 
      color: 'text-green-500', 
      bg: 'bg-green-50', 
      title: { te: 'గాయాలు మానడం', en: 'Wound Healing' }, 
      desc: { te: 'గాయాలు త్వరగా మానిపోవడంలో సహాయం.', en: 'Helps wounds heal faster.' } 
    },
    { 
      icon: Battery, 
      color: 'text-yellow-500', 
      bg: 'bg-yellow-50', 
      title: { te: 'జీవిత నాణ్యత', en: 'Quality of Life' }, 
      desc: { te: 'శక్తి మరియు ఉత్సాహం పెరుగుతుంది.', en: 'Improves overall energy and life quality.' } 
    }
  ];

  return (
    <div className="w-full bg-stone-50 pt-24">
      
      {/* SECTION 1: DIABETES DEFENSE HERO */}
      <div className="bg-brand-dark text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-green/20 to-transparent"></div>
        <Reveal>
            <div className="inline-block border border-brand-gold px-4 py-1 rounded-full mb-6">
                <span className="text-brand-gold text-sm font-bold uppercase tracking-widest">Diabetes Management Center</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
               {lang === 'te' ? 'మధుమేహం నిన్ను నియంత్రించే ముందు, నీవే దానిని నియంత్రించు!' : 'Control Diabetes Before It Controls You!'}
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto italic font-light">
               "{lang === 'te' ? 'ఆహారాన్ని మారుస్తేనే ఆరోగ్యం మారుతుంది – మధుమేహానికి మంచి మందు శ్రద్ధతో తీసుకున్న ఆహారమే.' : 'Changing your food changes your health – The best medicine for diabetes is mindful eating.'}"
            </p>
        </Reveal>
      </div>

      {/* SECTION 2: COMPLICATIONS & BENEFITS GRID */}
      <Section className="bg-white">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-brand-dark mb-4">Benefits of Mellitus Control</h2>
              <p className="text-stone-600 max-w-2xl mx-auto">
                 Using AT Millets products helps regulate blood sugar (Mellitus), protecting your body from long-term damage.
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((item, idx) => (
                  <Reveal key={idx} delay={idx * 100}>
                      <div className={`p-8 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 ${item.bg} group h-full flex flex-col items-center text-center`}>
                          <item.icon size={40} className={`${item.color} mb-6 group-hover:scale-110 transition-transform`} />
                          <h3 className="text-xl font-serif font-bold text-brand-dark mb-3">{item.title[lang]}</h3>
                          <p className="text-stone-600 text-sm leading-relaxed">{item.desc[lang]}</p>
                      </div>
                  </Reveal>
              ))}
          </div>
      </Section>

      {/* SECTION 3: THE HEALTHY SWITCH GAME */}
      <Section className="bg-stone-100">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-2 text-red-500 font-bold uppercase tracking-widest text-xs">
                    <AlertTriangle size={14} /> Lifestyle Challenge
                </div>
                <h2 className="text-3xl font-serif text-brand-dark mb-4">Defeat the Sugar Spike</h2>
                <p className="text-stone-600 mb-8">Tap the high-sugar foods to replace them with diabetic-friendly millet alternatives.</p>
                
                {/* Health Bar */}
                <div className="w-full bg-stone-300 h-6 rounded-full overflow-hidden relative mb-2">
                    <div 
                        className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-1000 ease-out"
                        style={{ width: `${healthScore}%` }}
                    ></div>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-stone-500">
                    <span>Diabetic Risk</span>
                    <span>Health Score: {healthScore}%</span>
                    <span>Safe Zone</span>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {junkItems.map((item) => {
                    const isSwapped = swappedItems.includes(item.id);
                    return (
                        <div 
                            key={item.id}
                            onClick={() => handleSwap(item.id)}
                            className={`
                                relative aspect-square rounded-xl cursor-pointer transition-all duration-500 transform hover:scale-105
                                ${isSwapped ? 'bg-brand-green text-white shadow-lg rotate-y-180' : 'bg-white text-stone-800 border-2 border-dashed border-stone-300'}
                                flex flex-col items-center justify-center p-4 text-center select-none
                            `}
                        >
                            <div className="text-5xl mb-4 transition-transform duration-500">
                                {isSwapped ? '🌾' : item.icon}
                            </div>
                            <h3 className="font-bold text-lg mb-1">
                                {isSwapped ? item.swap : item.name}
                            </h3>
                            <span className={`text-xs uppercase font-bold px-2 py-1 rounded ${isSwapped ? 'bg-white/20' : 'bg-red-100 text-red-600'}`}>
                                {isSwapped ? item.goodCal : item.cal}
                            </span>
                            
                            {!isSwapped && (
                                <div className="absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                                    <span className="bg-brand-dark text-white text-xs px-3 py-1 rounded-full">Tap to Swap</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            
            {healthScore === 100 && (
                <div className="mt-8 text-center animate-bounce">
                    <p className="text-brand-gold font-bold text-xl mb-4">
                        {lang === 'te' ? 'అద్భుతం! మీరు ఆరోగ్యకరమైన జీవితానికి సిద్ధంగా ఉన్నారు.' : 'Excellent Choice! You are ready for a healthy life.'}
                    </p>
                    <Button onClick={resetGame} variant="outline" className="mx-auto">Reset Challenge <RefreshCw size={14}/></Button>
                </div>
            )}
        </div>
      </Section>
    </div>
  );
};