'use client'
import Image from 'next/image';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '700'] });

interface FlipCardProps {
  src: string;
  text: string;
  isLarge?: boolean;
}

export default function FlipCard({ src, text, isLarge }: FlipCardProps) {
  return (
    <div 
      className={`group perspective-1000 w-full ${isLarge ? 'md:col-span-2 aspect-[16/9]' : 'md:col-span-1 aspect-square'}`}
    >
      
      {/* CAMBIOS PARA ELEGANCIA:
         1. duration-1000: El giro tarda 1 segundo completo (más lento = más elegante).
         2. ease-[cubic-bezier(0.23,1,0.32,1)]: "Quint Out". Empieza con energía y aterriza suavemente como una pluma.
      */}
      <div className="relative w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform-style-3d group-hover:rotate-y-180 cursor-pointer shadow-sm">
        
        {/* --- FRENTE (Imagen) --- */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="relative w-full h-full bg-gray-200 overflow-hidden">
            <Image 
              src={src} 
              alt="Project detail" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Capa sutil negra al hacer hover para que no brille tanto al girar */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-1000" />
          </div>
        </div>

        {/* --- ATRÁS (Texto) --- */}
        <div 
            className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex items-center justify-center p-8 text-center"
            style={{ backgroundColor: '#57595B', color: '#F3F4F4' }}
        >
          <div className="transform translate-z-10"> {/* Pequeño efecto de profundidad en el texto */}
            <p className={`${manrope.className} text-xs md:text-sm uppercase tracking-[0.25em] font-bold leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200`}>
              {text}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}