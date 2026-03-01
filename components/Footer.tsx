'use client'
import Link from 'next/link';
import { Krona_One, Manrope } from 'next/font/google';

const krona = Krona_One({ subsets: ['latin'], weight: '400' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '700'] });

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#F3F4F4] text-[#262626] min-h-screen flex flex-col justify-between px-6 py-12 md:px-16 md:py-24">
      
      {/* 1. TÍTULO GIGANTE */}
      <div className="flex-grow flex items-center justify-center overflow-hidden">
         <a 
           href="mailto:friasmonica22@gmail.com" 
           className="
             block
             hover:opacity-60 
             hover:scale-[1.02] 
             transition-all duration-500 ease-out
           "
         >
           <h2 className={`${krona.className} text-[15vw] md:text-[13vw] leading-none text-center whitespace-nowrap tracking-tighter cursor-pointer`}>
             Let&apos;s talk
           </h2>
         </a>
      </div>

      {/* 2. INFORMACIÓN INFERIOR */}
      <div className={`${manrope.className} flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-12`}>

        {/* LADO IZQUIERDO */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-32 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#57595B]/70">
           
           <div className="flex flex-col gap-2">
             {/* LINKEDIN */}
             <a 
               href="https://www.linkedin.com/in/monica-fr%C3%ADas-0419872aa/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hover:text-[#57595B] transition-colors"
             >
               LinkedIn
             </a>

             {/* AGREGADO: GMAIL */}
             <a 
               href="mailto:friasmonica22@gmail.com" 
               className="hover:text-[#57595B] transition-colors"
             >
               Gmail
             </a>

             <span className="mt-8 md:mt-12 text-[#57595B]/30">
               2026 © Mónica Frias
             </span>
           </div>

           <div className="flex flex-col gap-2">
             <p className="text-[#57595B]">Location</p>
             <p>Leon, Guanajuato</p>
             <p>Mexico</p>
             <a 
               href="mailto:friasmonica22@gmail.com" 
               className="mt-4 hover:text-[#57595B] transition-colors text-[#57595B]"
             >
               friasmonica22@gmail.com
             </a>
           </div>

        </div>

        {/* LADO DERECHO (Botón) */}
        <div className="w-full md:w-auto flex flex-col items-start md:items-end gap-6">
           <p className="text-xl md:text-2xl font-bold leading-tight text-[#57595B] md:text-right">
             Do you like <br />
             What you see?
           </p>
           
           <a 
             href="mailto:friasmonica22@gmail.com"
             className="bg-[#57595B] text-[#F3F4F4] px-8 py-4 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] hover:scale-105 transition-transform duration-300 uppercase inline-block cursor-pointer"
           >
             Let&apos;s Connect
           </a>
        </div>

      </div>
    </footer>
  );
}