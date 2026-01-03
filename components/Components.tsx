import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

// Animation Hook
export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { elementRef, isVisible };
};

export const Reveal: React.FC<{ children: React.ReactNode; className?: string, delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const BentoCard: React.FC<{ 
    children: React.ReactNode; 
    className?: string; 
    title?: string;
    dark?: boolean;
    noPadding?: boolean;
    onClick?: () => void;
}> = ({ children, className = '', title, dark = false, noPadding = false, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className={`
                relative group overflow-hidden border border-stone-200 
                ${dark ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark'}
                ${onClick ? 'cursor-pointer hover:border-brand-gold/50 transition-colors' : ''}
                ${className}
            `}
        >
            {title && (
                <div className={`absolute top-0 left-0 px-4 py-2 text-[10px] uppercase tracking-widest font-bold z-10 
                    ${dark ? 'bg-white/10 text-white/80' : 'bg-stone-100 text-stone-500'}
                `}>
                    {title}
                </div>
            )}
            <div className={`h-full w-full ${noPadding ? '' : 'p-6 md:p-8'}`}>
                {children}
            </div>
        </div>
    );
};

export const BarGraph: React.FC<{
    data: { label: string; value: number; color: string }[];
    title: string;
}> = ({ data, title }) => {
    const { elementRef, isVisible } = useIntersectionObserver();
    
    return (
        <div className="w-full h-full flex flex-col justify-end" ref={elementRef}>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-6 text-stone-500">{title}</h4>
            <div className="flex items-end justify-between gap-4 h-48">
                {data.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 flex-1 group">
                         <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">{item.value}%</span>
                        <div 
                            className="w-full rounded-t-sm transition-all duration-1000 ease-out"
                            style={{ 
                                height: isVisible ? `${item.value}%` : '0%', 
                                backgroundColor: item.color 
                            }}
                        />
                        <span className="text-[10px] uppercase font-bold tracking-wider text-stone-600 text-center">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ImagePlaceholder: React.FC<{ desc: string; url: string; heightClass?: string; overlay?: boolean }> = ({ desc, url, heightClass = 'h-64', overlay = true }) => {
  return (
    <div className={`relative w-full ${heightClass} bg-stone-200 overflow-hidden group`}>
      <img 
        src={`https://picsum.photos/seed/${desc.replace(/\s/g,'')}/800/600`} 
        alt={desc} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {overlay && (
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex flex-col items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-md px-4 py-2 rounded border border-white/20">
                <a 
                href={url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-white text-xs flex items-center gap-1 hover:text-brand-gold"
                >
                Unsplash Source <ExternalLink size={10} />
                </a>
            </div>
        </div>
      )}
    </div>
  );
};

export const Button: React.FC<{ children: React.ReactNode; variant?: 'primary' | 'outline' | 'text'; onClick?: () => void; className?: string }> = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseClass = "px-8 py-3 font-medium transition-all duration-300 flex items-center gap-2 text-sm tracking-wide uppercase";
  const variants = {
    primary: "bg-brand-gold hover:bg-brand-dark text-white rounded-sm",
    outline: "border border-brand-green text-brand-green hover:bg-brand-green hover:text-white rounded-sm",
    text: "text-brand-gold hover:text-brand-dark underline-offset-4 hover:underline p-0"
  };

  return (
    <button onClick={onClick} className={`${baseClass} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (
  <section id={id} className={`py-20 md:py-28 px-4 md:px-8 ${className}`}>
    <div className="max-w-[1400px] mx-auto">
      {children}
    </div>
  </section>
);