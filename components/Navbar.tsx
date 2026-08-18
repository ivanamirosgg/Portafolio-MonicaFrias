'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Krona_One, Manrope } from 'next/font/google';
import { usePathname } from 'next/navigation';

const krona = Krona_One({ subsets: ['latin'], weight: '400' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '700'] });

const links = [
  { name: 'ABOUT', href: '/#about', id: 'about' },
  { name: 'WORK', href: '/#work', id: 'work' },
  { name: 'BLOG', href: '/#blog', id: 'blog' },
  { name: 'CONTACT', href: '/#contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'instant' });
      }
      setIsOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-white">
        
        {/* LOGO */}
        <Link
            href="/"
            onClick={handleLogoClick}
            className="z-50 leading-none cursor-pointer"
        >
            <Image
                src="/LOGO NUEVO.png"
                alt="Mónica Frías"
                width={1683}
                height={218}
                priority
                className="h-4 md:h-6 w-auto invert"
            />
        </Link>

        {/* MENÚ DESKTOP */}
        <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 gap-12 ${manrope.className} text-xs uppercase tracking-[0.2em] font-bold`}>
          {links.map((link) => (
            <Link 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.id)} 
                className="hover:opacity-50 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div className={`hidden md:block ${manrope.className} text-xs uppercase tracking-[0.2em] font-bold`}>
          ©2026
        </div>

        {/* BOTÓN MÓVIL */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden z-50 ${manrope.className} text-xs uppercase tracking-[0.2em] font-bold`}
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>

      </nav>

      {/* --- MENÚ MÓVIL ACTUALIZADO --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            // CAMBIO 1: Fondo #F3F4F4
            className="fixed inset-0 bg-[#F3F4F4] z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-10 text-center">
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.id)}
                  // CAMBIO 2: Texto #262626 y hover opacity
                  className={`${krona.className} text-3xl text-[#262626] uppercase tracking-widest hover:opacity-50 transition-opacity`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* CAMBIO 3: Copyright ajustado al color oscuro */}
            <div className={`absolute bottom-12 ${manrope.className} text-[#262626] opacity-50 text-[10px] uppercase tracking-widest`}>
              ©2026 Mónica Frias
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}