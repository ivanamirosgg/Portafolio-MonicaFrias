'use client'
import { projects } from '../../../lib/data'; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link'; 
import { Krona_One, Manrope } from 'next/font/google';
import { notFound } from 'next/navigation';
import FlipCard from '@/components/FlipCard';
import { use, useEffect } from 'react';

const krona = Krona_One({ subsets: ['latin'], weight: '400' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '700'] });

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  
  const { id } = use(params);
  const currentId = Number(id);

  // =========================================================
  // SOLUCIÓN DEFINITIVA AL SCROLL (Vence a Lenis y al Autoplay)
  // =========================================================
  useEffect(() => {
    // Intento 1: Inmediato
    window.scrollTo(0, 0);
    
    // Intento 2: Fracción de segundo después (supera el auto-focus del video)
    const forceScroll = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 150);

    return () => clearTimeout(forceScroll);
  }, [id]);
  
  const project = projects.find((p) => p.id === currentId) as typeof projects[0] & { aboutText?: string; aboutImage?: string; aboutImageCaption?: string };

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.id === currentId);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-[#F3F4F4] text-[#262626] selection:bg-[#262626] selection:text-white">
      <Navbar />

      <div className="pt-32 md:pt-48 pb-20 px-6 md:px-16 max-w-[1800px] mx-auto">
        
        {/* TÍTULO */}
        <h1 className={`${krona.className} text-5xl md:text-8xl mb-16 tracking-tighter leading-none uppercase`}>
          {project.title}
        </h1>

        {/* --- SECCIÓN 1: DESCRIPCIÓN --- */}
        <div className={`${manrope.className} flex flex-col lg:flex-row gap-12 lg:gap-32 mb-12 items-start border-t border-[#262626]/20 pt-8`}>
            <div className="w-full lg:w-1/2">
               <p className="text-sm md:text-base leading-relaxed text-[#262626] opacity-80 uppercase tracking-widest max-w-2xl font-bold text-justify">
                 {project.description}
               </p>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
                <div>
                    <h3 className="text-[#262626] opacity-60 font-bold mb-2 text-[10px] md:text-xs uppercase tracking-[0.2em]">
                      Year
                    </h3>
                    <p className={`${krona.className} font-bold text-3xl md:text-5xl`}>
                      {project.year}
                    </p>
                </div>
            </div>
        </div>

        {/* --- SECCIÓN 2: HISTORIA (IMAGEN Y TEXTO ALINEADOS) --- */}
        {project.aboutText && (
          <div className={`${manrope.className} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 mb-20 items-start mt-12`}>
             
             <div className="w-full">
                <p className="text-sm md:text-base leading-relaxed text-[#262626] opacity-80 uppercase tracking-widest max-w-2xl font-bold text-justify">
                  {project.aboutText}
                </p>
             </div>

             {/* SOLO mostramos esta imagen si NO es el proyecto 2 */}
             {(project.aboutImage && currentId !== 2) && (
               <div className="w-full flex flex-col gap-3">
                  <div className="w-full">
                    <Image 
                      src={project.aboutImage} 
                      alt="Contexto del proyecto" 
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      quality={100}
                      unoptimized={true}
                    />
                  </div>
                  {project.aboutImageCaption && (
                    <p className="text-[9px] md:text-[10px] text-[#262626] font-bold text-left leading-tight uppercase tracking-widest opacity-60">
                      {project.aboutImageCaption}
                    </p>
                  )}
               </div>
             )}
          </div>
        )}

        {/* --- SECCIÓN 3: GALERÍA --- */}
        {project.gallery && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-32">
            {project.gallery.map((item: any, index: number) => {

              // =========================================================
              // LÓGICA EXCLUSIVA PARA MÉXICO EN LA PIEL (ID: 2)
              // =========================================================
              if (currentId === 2) {
                if (index === 0) {
                  return (
                    <div key={index} className="md:col-span-2 flex flex-col gap-8 my-12 lg:my-16">
                      <p className={`${manrope.className} text-sm md:text-base leading-relaxed text-[#262626] opacity-80 uppercase tracking-widest font-bold text-justify`}>
                        Inspirada en el azul maya, la colección reinterpreta la cultura mesoamericana fusionado con el estilo “streetwear”. Promover la herencia cultural en la moda es una prioridad creativa: un visual que no solo impulsa la identidad propia, sino que permite que el diseño mexicano dialogue con el mercado global desde una posición de autenticidad, innovación y respeto por la historia.
                      </p>

                      <div className="relative w-full mt-4 rounded-[2rem] overflow-hidden bg-gray-200 shadow-sm">
                        <Image src="/MEXICOOO.png" alt="Moodboard México en la piel" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="block hover:scale-105 transition-transform duration-700" unoptimized={true} />
                      </div>

                      <div className="relative w-full rounded-[2rem] overflow-hidden bg-gray-200 shadow-sm">
                        <Image src="/layout niño azul.png" alt="Proceso de diseño colaborativo" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="block hover:scale-105 transition-transform duration-700" unoptimized={true} />
                      </div>
                    </div>
                  );
                }
                
                if (index === 1 || index === 2) return null;

                if (index === 3 && project.gallery.length >= 7) {
                  return (
                    <div key={index} className="md:col-span-2 flex flex-col gap-4 md:gap-8 mt-12 mb-12">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                        <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-200 shadow-sm">
                          <Image src={project.gallery[4].src} alt={project.gallery[4].text || "Proyecto"} fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized={true} />
                        </div>
                        <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-200 shadow-sm">
                          <Image src={project.gallery[5].src} alt={project.gallery[5].text || "Proyecto"} fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized={true} />
                        </div>
                      </div>
                      <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden bg-gray-200 shadow-sm">
                        <Image src={project.gallery[6].src} alt={project.gallery[6].text || "Proyecto"} fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized={true} />
                      </div>
                    </div>
                  );
                }
                if (index > 3 && index <= 6) return null;
                if (index > 6) {
                  return (
                    <div key={index} className="col-span-1">
                      <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-gray-200 shadow-sm">
                        <Image src={item.src} alt={item.text || "Proyecto"} fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized={true} />
                      </div>
                    </div>
                  );
                }
                return null; 
              }

              // =========================================================
              // LÓGICA PARA BLOQUES DE TEXTO + IMAGEN (New Romantics)
              // =========================================================
              if (item.type === "text-image") {
                const isTargetText = item.text && item.text.includes("El proceso del fashion film");

                if (isTargetText) {
                  return (
                    <div key={index} className="md:col-span-2 flex flex-col md:flex-row gap-12 lg:gap-24 my-16 items-center">
                      <div className="w-full md:w-1/2 order-1 md:order-1">
                        <div className={`relative w-full overflow-hidden bg-gray-200 rounded-[2rem] shadow-sm ${item.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'}`}>
                          <Image src={item.src} alt="Galería" fill className="object-contain hover:scale-105 transition-transform duration-700" unoptimized={true} />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 order-2 md:order-2">
                        <p className={`${manrope.className} text-sm md:text-base leading-relaxed text-[#262626] opacity-80 uppercase tracking-widest font-bold text-justify`} dangerouslySetInnerHTML={{ __html: item.text }} />
                      </div>
                    </div>
                  );
                }

                if (!item.src) {
                  return (
                    <div key={index} className="md:col-span-2 my-16">
                      <p className={`${manrope.className} text-sm md:text-base leading-relaxed text-[#262626] opacity-80 uppercase tracking-widest font-bold text-justify`} dangerouslySetInnerHTML={{ __html: item.text }} />
                    </div>
                  );
                }

                const isImageRight = item.imagePosition === "right";
                return (
                  <div key={index} className="md:col-span-2 flex flex-col md:flex-row gap-12 lg:gap-24 my-16 items-center">
                    <div className={`w-full md:w-1/2 ${isImageRight ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}>
                      <p className={`${manrope.className} text-sm md:text-base leading-relaxed text-[#262626] opacity-80 uppercase tracking-widest font-bold text-justify`} dangerouslySetInnerHTML={{ __html: item.text }} />
                    </div>
                    <div className={`w-full md:w-1/2 ${isImageRight ? 'order-1 md:order-2' : 'order-1 md:order-1'}`}>
                      <div className={`relative w-full overflow-hidden bg-gray-200 rounded-[2rem] shadow-sm ${item.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'}`}>
                        <Image src={item.src} alt="Galería" fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized={true} />
                      </div>
                    </div>
                  </div>
                );
              }

              // =========================================================
              // LÓGICA PARA VIDEOS LOCALES
              // =========================================================
              if (item.type === "video") {
                if (currentId === 5) return null;
                return (
                  <div key={index} className="md:col-span-2 my-12">
                    <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-gray-200 shadow-sm">
                      <video src={item.src} controls playsInline className="w-full h-full object-cover" />
                    </div>
                    {item.text && <p className={`${manrope.className} mt-6 text-xs md:text-sm uppercase tracking-[0.2em] opacity-60 text-center font-bold`}>{item.text}</p>}
                  </div>
                );
              }

              // =========================================================
              // LÓGICA VIMEO PARA NEW ROMANTICS (AUTOPLAY AL LLEGAR)
              // =========================================================
              if (item.type === "video-vimeo") {
                return (
                  <div key={index} className="md:col-span-2 my-12">
                    <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-gray-200 shadow-sm">
                      <iframe
                        src={`https://player.vimeo.com/video/${item.src}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1`}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        loading="lazy" 
                        title={item.text}
                      ></iframe>
                    </div>
                    {item.text && <p className={`${manrope.className} mt-6 text-xs md:text-sm uppercase tracking-[0.2em] opacity-60 text-center font-bold`}>{item.text}</p>}
                  </div>
                );
              }

              // =========================================================
              // LÓGICA GRACEFUL BLOOM Y BOLD EXCESS (ID: 3 Y 4)
              // =========================================================
              if (currentId === 4 || currentId === 3) {
                if (item.size === "triptych") {
                  const isFirstOfTriptych = project.gallery[index-1]?.size !== "triptych";
                  if (isFirstOfTriptych) {
                      return (
                        <div key={index} className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 my-8">
                            <div className="relative w-full overflow-hidden bg-gray-200 rounded-[2rem]">
                                <Image src={item.src} alt={item.text || "Proyecto"} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="hover:scale-105 transition-transform duration-700 block" unoptimized={true} />
                            </div>
                            {project.gallery[index+1] && (
                                <div className="relative w-full overflow-hidden bg-gray-200 rounded-[2rem]">
                                    <Image src={project.gallery[index+1].src} alt={project.gallery[index+1].text || "Proyecto"} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="hover:scale-105 transition-transform duration-700 block" unoptimized={true} />
                                </div>
                            )}
                            {project.gallery[index+2] && (
                                <div className="relative w-full overflow-hidden bg-gray-200 rounded-[2rem]">
                                    <Image src={project.gallery[index+2].src} alt={project.gallery[index+2].text || "Proyecto"} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="hover:scale-105 transition-transform duration-700 block" unoptimized={true} />
                                </div>
                            )}
                        </div>
                      );
                  } else return null;
                }

                const isFullWidth = item.size === "large" || item.size === "full-horizontal";
                return (
                  <div key={index} className={isFullWidth ? "md:col-span-2" : "col-span-1"}>
                    <div className={`relative w-full ${!isFullWidth ? 'aspect-[3/4]' : ''} overflow-hidden bg-gray-200 rounded-[2rem] shadow-sm`}>
                      {isFullWidth ? (
                        <Image src={item.src} alt={item.text || "Proyecto"} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="hover:scale-105 transition-transform duration-700 block" unoptimized={true} />
                      ) : (
                        <Image src={item.src} alt={item.text || "Proyecto"} fill className="object-cover hover:scale-105 transition-transform duration-700 block" unoptimized={true} />
                      )}
                    </div>
                  </div>
                );
              }

              // =========================================================
              // LÓGICA PARA OUBAITORI (ID: 1) - SIN FLIP CARDS
              // =========================================================
              else if (currentId === 1) {
                if (index === 0 || item.size === "large") {
                  return (
                    <div key={index} className="md:col-span-2 mb-8">
                      <div className="relative w-full overflow-hidden bg-gray-200 rounded-[2rem] shadow-sm">
                        <Image src={item.src} alt={item.text || "Proyecto"} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="hover:scale-105 transition-transform duration-700 block" unoptimized={true} />
                      </div>
                    </div>
                  );
                }
                
                if (item.size === "triptych") {
                    const isFirstOfTriptych = project.gallery[index-1]?.size !== "triptych";
                    if (isFirstOfTriptych) {
                        return (
                            <div key={index} className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12 mb-12">
                                <div className="flex flex-col gap-4">
                                    <div className="relative w-full aspect-[9/16] overflow-hidden bg-gray-200 rounded-[2rem] shadow-sm"><Image src={item.src} alt={item.text || "Proyecto"} fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized={true} /></div>
                                </div>
                                {project.gallery[index+1] && (
                                    <div className="flex flex-col gap-4">
                                        <div className="relative w-full aspect-[9/16] overflow-hidden bg-gray-200 rounded-[2rem] shadow-sm"><Image src={project.gallery[index+1].src} alt={project.gallery[index+1].text || "Proyecto"} fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized={true} /></div>
                                    </div>
                                )}
                                {project.gallery[index+2] && (
                                    <div className="flex flex-col gap-4">
                                        <div className="relative w-full aspect-[9/16] overflow-hidden bg-gray-200 rounded-[2rem] shadow-sm"><Image src={project.gallery[index+2].src} alt={project.gallery[index+2].text || "Proyecto"} fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized={true} /></div>
                                    </div>
                                )}
                            </div>
                        );
                    } else return null;
                }
                
                if (item.size === "full-horizontal") {
                  return (
                    <div key={index} className="md:col-span-2 mb-8">
                       <div className="flex flex-col gap-4">
                           <div className="relative w-full aspect-[21/9] overflow-hidden bg-gray-200 rounded-[2rem] shadow-sm"><Image src={item.src} alt={item.text || "Proyecto"} fill className="object-cover object-[center_30%] hover:scale-105 transition-transform duration-700" unoptimized={true} /></div>
                       </div>
                    </div>
                  );
                }
                
                return (
                  <div key={index} className="col-span-1">
                    <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-gray-200 shadow-sm">
                      <Image src={item.src} alt={item.text || "Proyecto"} fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized={true} />
                    </div>
                  </div>
                );
              }

              // =========================================================
              // LÓGICA NEW ROMANTICS (ID: 5)
              // =========================================================
              else if (currentId === 5 && index === 0) {
                return (
                  <div key={index} className="md:col-span-2 mb-8">
                    <div className="relative w-full overflow-hidden bg-gray-200 rounded-[2rem] shadow-sm">
                      <Image src={item.src} alt={item.text || "Proyecto"} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="hover:scale-105 transition-transform duration-700 block" unoptimized={true} />
                    </div>
                  </div>
                );
              }

              const isLargeDefault = index % 3 === 0;
              return <FlipCard key={index} src={item.src} text={item.text} isLarge={isLargeDefault} />;
            })}
          </div>
        )}

        {/* SIGUIENTE PROYECTO */}
        <div className="border-t border-[#262626]/20 pt-12 md:pt-24 flex flex-col items-center">
            <p className={`${manrope.className} text-xs text-[#262626] opacity-60 uppercase tracking-[0.3em] mb-8`}>Next Project</p>
            {/* SEGUNDO SEGURO DE SCROLL: Forzamos el scroll al hacer clic en el Link */}
            <Link 
              href={`/work/${nextProject.id}`} 
              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              className="group flex flex-col items-center text-center gap-6 cursor-pointer"
            >
                <h2 className={`${krona.className} text-4xl md:text-7xl group-hover:opacity-50 transition-opacity duration-500 uppercase`}>{nextProject.title}</h2>
                <div className={`relative w-64 h-40 md:w-96 md:h-56 rounded-[2rem] overflow-hidden shadow-xl transition-all duration-500 ${nextProject.id === 5 ? 'bg-gray-200' : ''}`}>
                    <Image 
                      src={nextProject.src} 
                      alt="Next Project" 
                      fill 
                      className={`transition-transform duration-700 group-hover:scale-110 ${nextProject.id === 5 ? 'object-contain' : 'object-cover'}`} 
                      unoptimized={true}
                    />
                </div>
            </Link>
        </div>
      </div>
      
      <div id="contact"><Footer /></div>
    </main>
  );
}