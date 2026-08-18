'use client'
import Link from 'next/link';
import Image from 'next/image';
import { Krona_One, Manrope } from 'next/font/google';

const krona = Krona_One({ subsets: ['latin'], weight: '400' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '700'] });

const blogPosts = [
  { 
    id: "fasse-20", 
    title: "FASSE 20: El Clímax de Cuatro Años de Evolución", 
    date: "jun, 2025",
    image: "/banner3.PNG" 
  },
  { 
    id: "anpic-musa", 
    title: "El pulso de la industria en León: Perspectivas de diseño desde la feria ANPIC y MUSA", 
    date: "sept, 24 - mar, 25",
    image: "/banner2.PNG" 
  },
  { 
    id: "capitales-moda", 
    title: "Desde las capitales de la moda: Fashion Week Milán y París", 
    date: "Feb, 2024",
    image: "/banner4.jpg" 
  },
  {
    id: "bespoke",
    title: "El arte del Bespoke: Creando piezas a medida para el día a día y eventos sociales", 
    date: "feb, 2026",
    image: "/banner1.jpeg" 
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white text-[#262626] py-24 px-6 md:px-16 min-h-screen">
      <div className="max-w-[1000px] mx-auto">
        
        <div className="mb-10 w-full">
          <h2 className={`${krona.className} text-5xl md:text-7xl tracking-tighter`}>
            Blogs
          </h2>
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group flex flex-col gap-3 cursor-pointer"
            >
              <div className="relative w-full overflow-hidden bg-[#F3F4F4]">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="transition-transform duration-700 group-hover:scale-105 block"
                  unoptimized={true}
                />
              </div>

              <div className={`${manrope.className} flex flex-col gap-1 mt-2`}>
                <p className="text-sm font-normal opacity-80 uppercase tracking-widest">
                  {post.date}
                </p>
                <h3 className="text-lg md:text-xl font-bold transition-opacity duration-300 group-hover:opacity-70">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}