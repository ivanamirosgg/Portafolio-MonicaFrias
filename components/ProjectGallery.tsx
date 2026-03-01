'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Krona_One, Manrope } from 'next/font/google';
import { projects } from '../lib/data';

const krona = Krona_One({ subsets: ['latin'], weight: '400' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '700'] });

export default function ProjectGallery() {
  const displayProjects = projects; 

  return (
    // CAMBIO 1: Fondo #F3F4F4 y Texto #262626
    <section className="bg-[#F3F4F4] text-[#262626] px-4 md:px-12 py-24 min-h-screen">
      
      {/* Título */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`${krona.className} text-5xl md:text-7xl mb-16 tracking-tighter font-bold`}
      >
        Selected work
      </motion.h2>

      {/* Grid (Misma estructura) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 row-gap-16">
        
        {displayProjects.map((project, index) => {
          const isLarge = index % 2 !== 0;
          const colSpan = isLarge ? "md:col-span-2" : "md:col-span-1";
          const aspect = isLarge ? "aspect-[16/9]" : "aspect-square";
          const objectPosition = index === 0 ? "object-top" : "";

          return (
            <div key={project.id} className={`flex flex-col ${colSpan} mb-12`}>
              
              <Link href={`/work/${project.id}`} className="group cursor-pointer">
                
                {/* Imagen (Misma estructura) */}
                <div className={`relative w-full ${aspect} bg-gray-200 overflow-hidden mb-6`}>
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className={`object-cover ${objectPosition} transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100`}
                  />
                </div>

                {/* Texto */}
                <div className={`${manrope.className}`}>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight group-hover:underline decoration-1 underline-offset-4">
                    {project.title}
                  </h3>
                  {/* CAMBIO 2: Color de la categoría ajustado para que se vea bien en fondo claro */}
                  <p className="text-[10px] md:text-xs text-[#262626] opacity-60 uppercase tracking-widest font-bold">
                    {project.category}
                  </p>
                </div>

              </Link>

            </div>
          );
        })}

      </div>

      {/* Botón al final */}
      <div className="flex justify-center mt-20">
        <Link href="/work">
          {/* CAMBIO 3: Botón invertido (Fondo oscuro, texto claro) para que resalte */}
          <button className={`${manrope.className} bg-[#57595B] text-[#F3F4F4] px-12 py-4 rounded-full text-sm font-bold tracking-[0.2em] hover:scale-110 transition-transform duration-300 uppercase`}>
            See them all
          </button>
        </Link>
      </div>

    </section>
  );
}