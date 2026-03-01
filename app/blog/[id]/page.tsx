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
      "Mi trayectoria en la carrera de diseño culminó con un hito que representa mis habilidades y amor por la moda: la pasarela <a href='https://www.instagram.com/fasse_20/?hl=en' target='_blank' rel='noopener noreferrer' class='underline underline-offset-4 font-bold hover:opacity-50 transition-opacity'>FASSE 20</a>. Fue mucho más que un cierre académico; fue un ejercicio integral de gestión y diseño que marcó mi evolución profesional. Como parte del colectivo número XX de la Universidad La Salle Bajío, nos atrevimos a explorar nuevas áreas de trabajo y rebasar nuestros límites creativos. Todo comenzó con la definición de nuestra tendencia clave: \"Fantasía Nocturna Sartorial\". Bajo este concepto, desarrollé mi diseño titulado Oubaitori, una pieza donde la sastrería clásica se fusiona con acabados innovadores."
    ],
    contentAfter: [
      {
        type: 'text',
        value: "Sin embargo, nos enfrentamos al reto logístico de financiar un evento de esta magnitud. La pasarela no habría sido posible sin una labor de gestión de patrocinios, empresas relacionadas con el sector en diseño de modas y calzado, para cubrir los costos de producción y solicitar su respaldo económico. En este proceso, logré concretar un total de 9 patrocinios, aportando un capital de $89,000 MXN que fue fundamental para la viabilidad del evento. Fue un ejercicio de relaciones públicas donde aprendí a presentarme profesionalmente, entablar vínculos con tomadores de decisiones y darme a conocer en el sector empresarial, entendiendo que la moda también se construye con alianzas estratégicas y seguridad al comunicar una visión."
      },
      {
        type: 'video',
        src: "/fasse20video.mp4" 
      },
      {
        type: 'text',
        value: "Durante la rueda de prensa, tuve el honor de formar parte de la mesa directiva, representando al colectivo y respondiendo las inquietudes de los medios sobre nuestra visión creativa. Complementando esta labor de coordinación, me encargué del styling de los modelos para el video de apertura que se proyectó el día del evento, asegurando que la narrativa visual fuera coherente desde el primer segundo. Finalmente, tras meses de planeación y una labor social junto a APEA, el 17 de junio en el Parque Innovación vimos materializado el esfuerzo. FASSE 20 no solo celebró mi diseño, sino mi capacidad para liderar y articular la estructura que sostiene a la moda contemporánea."
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
      "Participar en la edición número 64 de ANPIC fue una de las experiencias más enriquecedoras de mi carrera, al permitirme conectar directamente con el corazón de la proveeduría en México. Mi rol principal consistió en la materialización de prototipos de tendencia para la temporada Otoño-Invierno 2025, los cuales fueron exhibidos en la Isla de Tendencias dentro del Poliforum León. Este ejercicio no fue solo creativo, sino técnico: trabajé mano a mano con proveeduría de empresas asociadas a APIMEX, seleccionando pieles y materiales sintéticos de última generación para dar vida a conceptos que el sector industrial busca implementar en el futuro cercano. Más allá del desarrollo de producto, tuve el honor de presentarme en el podio de conferencias frente a los asistentes y expertos de la feria. Durante esta intervención, compartí a detalle la labor técnica que realizamos dentro del Laboratorio de Moda de APIMEX, explicando cómo transformamos la investigación de tendencias en materiales tangibles y prototipos funcionales para la industria cuero-calzado.",
      "ANPIC se caracteriza por sus relaciones con empresas nacionales e internacionales, el networking se vive intensamente en 4 días, donde recibimos a personas influyentes relacionadas en el sector de piel y calzado. Tuve la oportunidad de acercarme con <a href='https://www.instagram.com/p/DBhsF4XOYbQ/?hl=en&img_index=1' target='_blank' rel='noopener noreferrer' class='underline underline-offset-4 font-bold hover:opacity-50 transition-opacity'>Ryoji Shoda</a>, presidente ejecutivo de Onitsuka Tiger & Asics, obteniendo una perspectiva privilegiada sobre la visión de una marca líder global. Asimismo, mi participación fue clave en el soporte de backstage a diseñadores mexicanos como Montserrat Messeguer, Atenógenes y Jeanette Toscano."
    ],
    contentAfter: [
      {
        type: 'image',
        src: "/musa1.jpg" 
      },
      {
        type: 'text-image-row', 
        imagePosition: 'right', 
        text: "Posterior a ANPIC 64, se dio inicio al <a href='https://www.instagram.com/p/DExmSa6SvIS/?hl=en' target='_blank' rel='noopener noreferrer' class='underline underline-offset-4 font-bold hover:opacity-50 transition-opacity'>MUSA ANPIC Design Fest</a> en marzo de 2025. Como diseñadores, la investigación constante en ferias internacionales es vital, y en este marco tuve la oportunidad de trabajar como asistente personal y traductora de <a href='https://www.instagram.com/p/DHuUg_ggUVk/?hl=en&img_index=1' target='_blank' rel='noopener noreferrer' class='underline underline-offset-4 font-bold hover:opacity-50 transition-opacity'>Leatrice Eiseman, directora ejecutiva del Pantone Color Institute</a>.<br><br>Mi labor consistió en gestionar sus necesidades logísticas y profesionales durante toda la jornada para asegurar el éxito de su conferencia \"Crossover Colors\" el 27 de marzo. Además de facilitar la comunicación para la directora de Pantone, durante la feria brindé apoyo directo a los diseñadores Angel Grave, Ricardo Camacho y Guillermo Jester, asistiendo en la ejecución de sus propuestas dentro del evento. Esta experiencia consolidó mi capacidad para colaborar estrechamente con figuras clave y creativos que definen el rumbo de la industria global.",
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
      "La Semana de la Moda es el epicentro estratégico de la industria global en la moda, es la plataforma donde se dictan las tendencias, los códigos estéticos y los movimientos comerciales que regirán las próximas temporadas de marcas de lujo, ya sean colecciones cápsula, pret-a-porter o de alta costura. Es un espacio de validación técnica y creativa donde convergen los diseñadores más influyentes y los estándares de calidad más exigentes del mundo. Formar parte de este ecosistema requiere una disciplina absoluta, ya que cada desfile es el resultado de meses de trabajo que se materializan en apenas unos minutos de pasarela. El \"mes de la moda\" sigue un orden cronológico estricto para las cuatro capitales principales, celebrándose dos veces al año (febrero y septiembre): primero Nueva York, seguido por Londres, luego Milán y finalizando en París."
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
  
  // 4. MELBOURNE
  { 
    id: "melbourne", 
    title: "Más allá del diseño: Mi paso por los grandes eventos de Melbourne", 
    date: "sept 2018 - abr 2019",
    link: "",
    image: "/cancha.jpeg", 
    content: [
      "Mi trayectoria internacional comienza en Melbourne, Australia. Durante mi tiempo allá, busqué sumergirme en el entorno profesional local y entender cómo funcionan las organizaciones desde adentro, llevando la teoría a la práctica al trabajar en Hotelstaff, una de las agencias de reclutamiento y servicios más importantes de Australia. Su labor principal es la vinculación de talento especializado con los eventos y complejos de hospitalidad más prestigiosos del país, con el objetivo de garantizar una operatividad impecable en escenarios de alta exigencia.",
      "Melbourne es reconocida como la capital deportiva y cultural de Australia, sede de eventos mundiales. Gracias a esto, tuve la oportunidad de integrarme en la logística del Australian Open 2019, donde me desempeñé como mesera de banquetes privados para figuras influyentes del tenis como Rafael Nadal, así como para directivos del deporte. Complementé esta labor apoyando la logística y servicios en los comedores de staff, asegurando el flujo de hospitalidad interna del torneo."
    ],
    contentAfter: [
      {
        type: 'text',
        value: "Asimismo, en el F1 Grand Prix, trabajé como camarera en las exclusivas terrazas y comedores VIP de los Pits, un entorno donde la precisión y el servicio deben ser perfectos. Trabajar bajo estos estándares de calidad me enseñó lo que realmente significa la eficiencia y la atención al detalle. Esta vivencia expandió mi visión y me dio herramientas de gestión que hoy aplico en cada proyecto de moda que emprendo."
      }
    ],
    gallery: [
      { type: 'image', src: '/m1.jpeg' },
      { type: 'image', src: '/m2.jpeg' },
      { type: 'image', src: '/m3.jpeg' },
      { type: 'image', src: '/m4.jpeg' },
      { type: 'image', src: '/m5.jpeg' },
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
      { type: 'image', src: '/bs1.png' },
      { type: 'image', src: '/bs2.png' },
      { type: 'image', src: '/bs3.png' },
      { type: 'image', src: '/bs4.png' },   
      { type: 'image', src: '/bs5.png' },   
      { type: 'image', src: '/bs6.jpeg' },   
      { type: 'image', src: '/bs7.png' },   
      { type: 'image', src: '/bs8.png' },   
      { type: 'image', src: '/bs9.png' },   
      { type: 'image', src: '/bs10.jpeg' },     
      { type: 'image', src: '/bs11.jpeg' },     
      { type: 'image', src: '/bs12.jpeg' },      
    ]
  }
];

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  useEffect(() => {
    window.scrollTo(0, 0);
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