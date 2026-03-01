'use client'
import Image from 'next/image';
import { Krona_One, Manrope } from 'next/font/google';

const krona = Krona_One({
  subsets: ['latin'],
  weight: '400',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

export default function AboutSection() {
  return (
    // CAMBIO AQUÍ: Fondo #F3F4F4 y Texto #262626
    <section id="about" className="min-h-screen flex flex-col md:flex-row bg-[#F3F4F4] text-[#262626]">
      
      {/* COLUMNA IZQUIERDA: TEXTO */}
      <div className="w-full md:w-1/2 px-8 pb-12 pt-32 md:p-24 flex flex-col justify-center">
        
        {/* Título */}
        <div className="mb-12">
          <h2 className={`${krona.className} text-4xl md:text-6xl lg:text-7xl leading-tight`}>
            Hola! <br />
            Soy Mónica
          </h2>
        </div>

        {/* Bio */}
        <p className={`${manrope.className} text-xs md:text-sm uppercase tracking-widest leading-relaxed mb-16 max-w-lg`}>
          Creo en el diseño como una respuesta directa a los fenómenos sociales y su impacto en la moda. Para mí, la interpretación de las tendencias es una herramienta creativa esencial; por ello, diseño desde la curiosidad por lo que cambia y la sensibilidad por lo que permanece.
        </p>

        {/* Listas */}
        <div className={`${manrope.className} grid grid-cols-2 gap-8 text-[10px] md:text-xs tracking-widest uppercase`}>
        

    
        </div>
      </div>

      {/* COLUMNA DERECHA: FOTO RETRATO */}
      <div className="w-full md:w-1/2 relative h-[50vh] md:h-screen">
        <Image 
          src="/about-img.jpeg" 
          alt="Monica Frias Portrait"
          fill
          unoptimized
          className="object-cover"
        />
      </div>

    </section>
  );
}