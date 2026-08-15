'use client'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Krona_One, Manrope } from 'next/font/google';
import { notFound } from 'next/navigation';
import { use, useEffect } from 'react';

const krona = Krona_One({ subsets: ['latin'], weight: '400' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '700'] });

// --- ESTILOS CSS PARA EL CARRUSEL INFINITO SUAVE ---
const carouselStyles = `
  @keyframes scrollCarousel {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  .animate-carousel-smooth {
    display: flex;
    width: max-content;
    animation: scrollCarousel 40s linear infinite;
  }
`;

type BlogPost = {
  id: string;
  title: string;
  date: string;
  link?: string; 
  links?: { label: string; url: string }[]; 
  image?: string; 
  content: string[];
  contentAfter?: any[]; 
  gallery?: { type: string; src: string }[]; 
};

const blogData: BlogPost[] = [
  // 1. FASSE 20
  { 
    id: "fasse-20", 
    title: "FASSE 20: El Clímax de Cuatro Años de Evolución", 
    date: "jun, 2025",
    image: "/fasse1.PNG", 
    content: [
      "Mi trayectoria en la carrera de diseño culminó con un proyecto que representa mis habilidades y pasión por la moda: la pasarela <a href='https://www.instagram.com/fasse_20/?hl=en' target='_blank' rel='noopener noreferrer' class='underline underline-offset-4 font-bold hover:opacity-50 transition-opacity'>FASSE 20</a>. Como parte del colectivo número XX de la Universidad La Salle Bajío, nos atrevimos a explorar nuevas áreas de trabajo y rebasar nuestros límites creativos. Todo comenzó con la definición de nuestra tendencia clave: \"Fantasía Nocturna Sartorial\". Bajo este concepto, desarrollé mi diseño Oubaitori, una pieza donde la sastrería clásica se fusiona con acabados innovadores."
    ],
    contentAfter: [
      {
        type: 'video',
        src: "/fasse20video.mp4"
      }
    ],
    gallery: [
      { type: 'image', src: '/FS1.jpg' },
      { type: 'image', src: '/FS2.jpeg' },
      { type: 'image', src: '/FS3.png' },
      { type: 'image', src: '/FS4.jpeg' },
      { type: 'image', src: '/FS5.jpeg' },
      { type: 'image', src: '/FS6.png' },
      { type: 'image', src: '/FS7.png' },
      { type: 'image', src: '/FS8.png' }
    ]
  },
  
  // 2. ANPIC Y MUSA
  { 
    id: "anpic-musa", 
    title: "El pulso de la industria en León: Perspectivas de diseño desde la feria ANPIC y MUSA", 
    date: "sept, 24 - mar, 25",
    image: "", 
    content: [
      "Participar en la edición número 64 de ANPIC fue una de las experiencias más enriquecedoras de mi carrera, al permitirme conectar directamente con el corazón de la proveeduría en México. Mi rol principal consistió en la materialización de prototipos de tendencia para la temporada Otoño-Invierno 2025, los cuales fueron exhibidos en la Isla de Tendencias dentro del Poliforum León. Durante esta intervención, compartí a detalle la labor técnica que realizamos dentro del Laboratorio de Moda de APIMEX, explicando cómo transformamos la investigación de tendencias en materiales tangibles y prototipos funcionales para la industria cuero-calzado.",
      "ANPIC se caracteriza por sus relaciones con empresas nacionales e internacionales, el networking se vive intensamente en 4 días, donde recibimos a personas influyentes relacionadas en el sector de piel y calzado. Tuve la oportunidad de acercarme con <a href='https://www.instagram.com/p/DBhsF4XOYbQ/?hl=en&img_index=1' target='_blank' rel='noopener noreferrer' class='underline underline-offset-4 font-bold hover:opacity-50 transition-opacity'>Ryoji Shoda</a>, presidente ejecutivo de Onitsuka Tiger & Asics como también en esa edición estuve en backstage de las pasarelas de diseñadores mexicanos: Montserrat Messeguer, Atenógenes y Jeanette Toscano."
    ],
    contentAfter: [
      {
        type: 'image',
        src: "/musa1.jpg" 
      },
      {
        type: 'text-image-row', 
        imagePosition: 'right', 
        text: "Posterior a ANPIC 64, se dio inicio al <a href='https://www.instagram.com/p/DExmSa6SvIS/?hl=en' target='_blank' rel='noopener noreferrer' class='underline underline-offset-4 font-bold hover:opacity-50 transition-opacity'>MUSA ANPIC Design Fest</a> en marzo de 2025, mi posición laboral fue de asistente personal y traductora de <a href='https://www.instagram.com/p/DHuUg_ggUVk/?hl=en&img_index=1' target='_blank' rel='noopener noreferrer' class='underline underline-offset-4 font-bold hover:opacity-50 transition-opacity'>Leatrice Eiseman, directora ejecutiva del Pantone Color Institute</a>.<br><br>Mi labor consistió en gestionar sus necesidades logísticas y profesionales durante toda la jornada para asegurar el éxito de su conferencia \"Crossover Colors\" el 27 de marzo. Además de facilitar la comunicación para la directora de Pantone, durante la feria brindé apoyo directo a los diseñadores Angel Grave, Ricardo Camacho y Guillermo Jester, asistiendo en la ejecución de sus propuestas dentro del evento.",
        image: "/b1.jpg" 
      }
    ],
    gallery: [
      { type: 'image', src: '/a1.jpg' },
      { type: 'image', src: '/a2.jpg' },
      { type: 'image', src: '/a3.jpg' },
      { type: 'image', src: '/a5.jpg' },
      { type: 'image', src: '/a6.jpg' },
      { type: 'image', src: '/a7.jpg' },
      { type: 'image', src: '/a8.jpg' },
      { type: 'image', src: '/a9.jpg' },
    ] 
  },
  
  // 3. CAPITALES DE LA MODA
  { 
    id: "capitales-moda", 
    title: "Desde las capitales de la moda: Fashion Week Milán y París", 
    date: "Feb, 2024",
    link: "",
    image: "", 
    content: [
      "La Semana de la Moda es el epicentro de la industria global en la moda,  se dictan las tendencias, los códigos estéticos y movimientos comerciales que regirán las próximas temporadas de marcas de lujo, ya sean colecciones cápsula, pret-a-porter o de alta costura. El \"mes de la moda\" sigue un orden cronológico estricto para las cuatro capitales principales, celebrándose dos veces al año (febrero y septiembre): primero Nueva York, seguido por Londres, luego Milán y finalizando en París."
    ],
    contentAfter: [
      {
        type: 'text',
        // 👇 AQUÍ ESTÁ EL ENLACE DE NARCITA SEVERA 👇
        value: "Mi proyección internacional se consolidó al formar parte de los equipos de producción en Milán y París 2024. En Italia, colaboré en el backstage de <a href='https://www.instagram.com/p/C31DSY5KXnq/?hl=en' target='_blank' rel='noopener noreferrer' class='underline underline-offset-4 font-bold hover:opacity-50 transition-opacity'>Narciza Severa by Saúl Tello para la presentación de su colección \"Faerie Soirée 24/25\"</a>. Mi labor se concentró en el área de vestuario, asistiendo a las modelos para asegurar que cada prenda luciera impecable y respetara el estilismo diseñado."
      },
      {
        type: 'image',
        src: "/p1.png" 
      },
      {
        type: 'text-image-row',
        imagePosition: 'left', 
        // 👇 AQUÍ ESTÁ EL ENLACE DE BENYAMIN BENMOYAL 👇
        text: "Posteriormente, en Francia, apoyé a la firma <a href='https://www.instagram.com/p/C4DywuCtDud/?hl=en' target='_blank' rel='noopener noreferrer' class='underline underline-offset-4 font-bold hover:opacity-50 transition-opacity'>Benyamin Benmoyal para su colección \"YARNS\" 24/25</a>. Esta inmersión comenzó desde el atelier, donde apoyé en el afinado de acabados de las piezas, asegurando la calidad técnica de las prendas. Durante el evento, asumí responsabilidades de logística en backstage, gestionando el control de las modelos y la asignación precisa de los looks correspondientes para mantener el orden de la narrativa visual. Estas participaciones reforzaron mi visión global del sector, lo que me permitió vivir el detrás de escenas desde la ejecución detallada en el taller como la disciplina operativa detrás de una pasarela internacional.",
        image: "/p2.png" 
      }
    ],
    gallery: [
      { type: 'image', src: '/f1.jpg' },
      { type: 'image', src: '/f2.jpg' },
      { type: 'image', src: '/f3.png' },
      { type: 'image', src: '/f4.png' },
      { type: 'image', src: '/f5.png' },
      { type: 'image', src: '/f6.png' },
      { type: 'image', src: '/f7.jpeg' },
      { type: 'image', src: '/f8.png' },
    ]
  },
  // 5. EL ARTE DEL BESPOKE
  { 
    id: "bespoke", 
    title: "El arte del Bespoke: Creando piezas a medida para el día a día y eventos sociales", 
    date: "feb, 2026",
    link: "",
    image: "", 
    content: [
      "Mi camino en la moda no fue lineal, sino el resultado de una decisión que transformó mi vida. Mientras estudiaba Arquitectura, comencé a tomar cursos de costura como una forma de explorar mi parte manual y creativa. A mitad de la carrera, me di cuenta de que mi verdadera pasión no estaba en maquetas o estructuras a gran escala, sino en la estructura de las prendas y la identidad que proyectamos a través de ellas. Poner mi vocación en primer lugar ha sido el motor de mi mayor crecimiento personal.",
      "Lo que comenzó como un hobby se ha convertido en una disciplina que disfruto, permitiéndome materializar ideas con mis propias manos. Aunque he desarrollado proyectos conceptuales de gran complejidad también lo he desviado hacia lo urbano y social. Creo firmemente que el diseño de autor no debe reservarse solo para ocasiones especiales; mi objetivo es crear piezas exclusivas que se integren al uso diario y al entorno cotidiano.",
      "Cada proyecto, ya sea para mí misma o para clientes externos, es una extensión de esa historia de crecimiento: un equilibrio entre la técnica aprendida y la libertad creativa de diseñar para personas reales en contextos reales."
    ],
    contentAfter: [],
    gallery: [
      { type: 'image', src: '/BSP1.jpeg' },
      { type: 'image', src: '/BSP2.jpeg' },
      { type: 'image', src: '/BSP3.jpeg' },
      { type: 'image', src: '/BSP4.jpeg' },   
      { type: 'image', src: '/BSP5.jpeg' },   
      { type: 'image', src: '/BSP6.jpeg' },   
      { type: 'image', src: '/bs6.jpeg' },   
      { type: 'image', src: '/bs10.png' },     
      { type: 'image', src: '/bs11.jpeg' },     
      { type: 'image', src: '/bs12.jpeg' },      
    ]
  }
];

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // =========================================================
  // SOLUCIÓN DEFINITIVA AL SCROLL (Vence a Lenis y al Autoplay)
  // =========================================================
  useEffect(() => {
    window.scrollTo(0, 0);
    const forceScroll = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 150);

    return () => clearTimeout(forceScroll);
  }, [id]);

  const post = blogData.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <main style={manrope.style} className="min-h-screen bg-white text-[#262626] selection:bg-[#262626] selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: carouselStyles }} />
      
      <Navbar />

      <article className="pt-32 md:pt-48 pb-32">
        
        <div className="px-6 md:px-16 max-w-[1000px] mx-auto">
          {/* TÍTULO */}
          <h1 style={krona.style} className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-8">
            {post.title}
          </h1>

          {/* METADATA */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm md:text-base font-bold mb-12 border-b border-[#262626]/20 pb-6 gap-4">
            <p className="uppercase tracking-[0.2em] opacity-60">{post.date}</p>
            {(post.link || (post.links && post.links.length > 0)) && (
              <div className="flex flex-col gap-2 md:items-end">
                {post.links && post.links.map((linkItem, idx) => (
                  <a 
                    key={idx}
                    href={linkItem.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity duration-300 underline underline-offset-4"
                  >
                    {linkItem.label}
                  </a>
                ))}
                {post.link && !post.links && (
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity duration-300 underline underline-offset-4"
                  >
                    {post.link}
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6 text-base md:text-lg leading-relaxed mb-16 text-justify">
            {post.content.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>

          {post.image && (
            <div className="flex justify-center w-full mb-16">
              <div className="relative w-full overflow-hidden bg-[#F3F4F4]">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="block"
                  unoptimized={true}
                />
              </div>
            </div>
          )}

          {post.contentAfter && post.contentAfter.length > 0 && (
            <div className="flex flex-col gap-6 text-base md:text-lg leading-relaxed text-justify mb-24">
              {post.contentAfter.map((item: any, index) => {
                if (typeof item === 'string') {
                  return <p key={index} dangerouslySetInnerHTML={{ __html: item }} />;
                } 
                else if (item.type === 'text') {
                  return <div key={index} dangerouslySetInnerHTML={{ __html: item.value }} />;
                } 
                else if (item.type === 'image') {
                  return (
                    <div key={index} className="flex justify-center w-full my-8">
                      <div className="relative w-full overflow-hidden bg-[#F3F4F4]">
                        <Image 
                          src={item.src} 
                          alt="Imagen complementaria" 
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '100%', height: 'auto' }}
                          className="block"
                          unoptimized={true}
                        />
                      </div>
                    </div>
                  );
                }
                else if (item.type === 'video') {
                  return (
                    <div key={index} className="flex justify-center w-full my-8">
                      <div className="relative w-full overflow-hidden bg-[#F3F4F4]">
                        <video 
                          src={item.src} 
                          autoPlay 
                          muted 
                          loop 
                          playsInline 
                          controls
                          className="w-full h-auto block"
                        />
                      </div>
                    </div>
                  );
                }
                else if (item.type === 'text-image-row') {
                  const isLeft = item.imagePosition === 'left';
                  return (
                    <div key={index} className="flex flex-col md:flex-row gap-8 items-center md:items-start my-8">
                      {isLeft ? (
                        <>
                          <div className="w-full md:w-[35%] relative aspect-[3/4] overflow-hidden bg-[#F3F4F4] shrink-0 shadow-sm">
                            <Image src={item.image} alt="Foto complementaria" fill className="object-cover" unoptimized={true} />
                          </div>
                          <div className="w-full md:w-[65%]">
                            <p dangerouslySetInnerHTML={{ __html: item.text }} />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-full md:w-[65%]">
                            <p dangerouslySetInnerHTML={{ __html: item.text }} />
                          </div>
                          <div className="w-full md:w-[35%] relative aspect-[3/4] overflow-hidden bg-[#F3F4F4] shrink-0 shadow-sm">
                            <Image src={item.image} alt="Foto complementaria" fill className="object-cover" unoptimized={true} />
                          </div>
                        </>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>

        {/* =========================================================
            CARRUSEL (Animación constante + Zoom directo en la imagen)
            ========================================================= */}
        {post.gallery && post.gallery.length > 0 && (
          <div className="w-full overflow-hidden pb-12">
            <div className="px-6 md:px-16 max-w-[1000px] mx-auto mb-10">
              <h3 style={krona.style} className="text-xl md:text-2xl uppercase tracking-tighter">
                Galería
              </h3>
            </div>
            
            <div className="relative w-full overflow-hidden">
              <div className="flex animate-carousel-smooth w-max py-4 gap-6 px-6">
                {[...post.gallery, ...post.gallery].map((media: any, index: number) => {
                  const isString = typeof media === 'string';
                  const mediaType = isString ? 'image' : media.type;
                  const mediaSrc = isString ? media : media.src;

                  return (
                    <div 
                      key={index} 
                      className="shrink-0 relative w-[200px] h-[260px] md:w-[220px] md:h-[280px] bg-[#F3F4F4] overflow-hidden shadow-sm cursor-pointer border border-[#E5E5E5] group"
                    >
                      {mediaType === 'image' ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img 
                          src={mediaSrc} 
                          alt={`Galería ${index}`} 
                          className="block w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-125" 
                        />
                      ) : (
                        <video 
                          src={mediaSrc} 
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                          className="block w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-125 bg-[#262626]" 
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

      </article>

      <Footer />
    </main>
  );
}