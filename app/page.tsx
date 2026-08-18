'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Manrope } from 'next/font/google';
import ProjectGallery from '@/components/ProjectGallery';
import ImageTrail from '@/components/ImageTrail';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F4F4] text-[#262626] selection:bg-[#57595B] selection:text-white">
      
      <Navbar />

      {/* 1. PORTADA (HERO) */}
      <ImageTrail>
        <section className="h-screen flex flex-col items-center justify-center relative cursor-default border-b border-[#57595B]/10">
          
          <div className="flex flex-col items-center justify-center z-40 mix-blend-normal">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className="text-center"
            >
              <Image
                src="/LOGO NUEVO.png"
                alt="Mónica Frías"
                width={1683}
                height={218}
                priority
                className="w-[85vw] md:w-[65vw] h-auto"
              />
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-12 text-center px-4"
          >
            {/* CAMBIO AQUÍ: 
                1. text-xs md:text-sm (Más grande) 
                2. text-[#57595B] (Color sólido exacto) 
                3. Quité 'opacity-60' 
            */}
            <p className={`${manrope.className} text-xs md:text-sm uppercase tracking-[0.2em] max-w-xl mx-auto leading-relaxed text-[#262626]`}>
              diseñadora mexicana que interpreta el punto de encuentro entre la cultura contemporánea, historia y la moda
            </p>
          </motion.div>
        </section>
      </ImageTrail>

      {/* 2. SECCIÓN ABOUT */}
      <AboutSection />

      {/* 3. SECCIÓN WORK */}
      <div id="work">
        <ProjectGallery />
      </div>

      {/* 4. SECCIÓN BLOG */}
      <BlogSection />

      {/* 5. FOOTER / CONTACT */}
      <div id="contact">
        <Footer />
      </div>

    </main>
  );
}