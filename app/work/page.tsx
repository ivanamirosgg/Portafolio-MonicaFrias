'use client'
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Krona_One, Manrope } from 'next/font/google';
import Footer from '@/components/Footer';
import { projects } from '@/lib/data';

const krona = Krona_One({ subsets: ['latin'], weight: '400' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '700'] });

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#F3F4F4] text-[#57595B] selection:bg-[#57595B] selection:text-white">
      <Navbar />
      
      <div className="pt-40 pb-20 px-4 md:px-12 max-w-[1600px] mx-auto">
        
        <h1 className={`${krona.className} text-6xl md:text-9xl text-center mb-32 uppercase tracking-tighter`}>
          All Projects
        </h1>

        <div className="flex flex-col gap-32 mb-32">
          {projects.map((project: any, index: number) => {
             const isLast = index === projects.length - 1;
             
             return (
               <motion.div 
                 key={project.id} 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-10%" }}
                 transition={{ duration: 0.8, delay: index * 0.1 }}
                 className="group"
               >
                 <Link href={`/work/${project.id}`}>
                   
                   {/* CONTENEDOR DE LA IMAGEN */}
                   <div className="w-full mb-8 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden">
                     <Image
                       src={project.src}
                       alt={project.title}
                       
                       // 1. DIMENSIONES AUTOMÁTICAS (Sin recortes)
                       width={0}
                       height={0}
                       sizes="100vw"
                       style={{ width: '100%', height: 'auto' }} 

                       // 2. SOLUCIÓN DE CALIDAD DEFINITIVA:
                       // 'unoptimized' se salta el sistema de compresión de Next.js
                       // Servirá el archivo JPG/PNG original en su máxima resolución.
                       unoptimized={true}
                       
                       // Forzamos también quality 100 por seguridad
                       quality={100}
                       
                       // Prioridad para que carguen rápido
                       priority={index < 2}

                       className="transition-transform duration-1000 group-hover:scale-105"
                     />
                   </div>
                   
                   {/* TEXTOS */}
                   <div className={`${manrope.className} flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#57595B]/20 pb-8`}>
                     <div>
                       <h2 className={`${isLast ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'} font-bold mb-2 group-hover:text-black transition-colors`}>
                          {project.title}
                       </h2>
                       <p className="text-[#57595B] opacity-60 text-sm tracking-widest uppercase font-bold">
                          {project.category}
                       </p>
                     </div>
                     
                     <div className="mt-4 md:mt-0 flex gap-4">
                        <span className={`text-xs border border-[#57595B]/30 rounded-full px-6 py-3 hover:bg-[#57595B] hover:text-white transition-all duration-300 cursor-pointer uppercase tracking-widest font-bold ${isLast ? 'bg-[#57595B] text-white border-transparent' : ''}`}>
                          {isLast ? 'View Final Project' : 'View Case'}
                        </span>
                     </div>
                   </div>

                 </Link>
               </motion.div>
             );
          })}
        </div>

      </div>

      <div id="contact">
        <Footer />
      </div>
      
    </main>
  );
}