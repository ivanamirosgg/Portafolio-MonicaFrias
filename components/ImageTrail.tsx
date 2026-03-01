'use client';
import { useRef, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const trailImages = [
  "/c1.jpg",
  "/c2.jpeg", // Nota: Corregí "/c2.jpeg" que le faltaba la diagonal inicial en tu código original
  "/c3.jpeg",
  "/c4.jpeg", // También les faltaba diagonal a las demás
  "/c5.jpeg",
  "/c6.jpeg",
  "/c7.jpeg",
];

interface ImageTrailProps {
  children: ReactNode;
}

interface TrailImageState {
  id: number;
  x: number;
  y: number;
  imgSrc: string;
  rotation: number;
}

export default function ImageTrail({ children }: ImageTrailProps) {
  const [images, setImages] = useState<TrailImageState[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 👇 AQUÍ ESTÁ EL CAMBIO PRINCIPAL 👇
  // Aumenta este número para separar más las imágenes (ej. 150, 200, 250)
  const distanceThreshold = 200; 

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const distance = Math.hypot(
      x - lastPos.current.x,
      y - lastPos.current.y
    );

    if (distance > distanceThreshold) {
      const imageId = Date.now(); 
      
      const newImage: TrailImageState = {
        id: imageId,
        x: x,
        y: y,
        imgSrc: trailImages[imageIndex.current % trailImages.length],
        rotation: Math.random() * 20 - 10,
      };

      setImages((prev) => [...prev, newImage].slice(-15));

      setTimeout(() => {
        setImages((prev) => prev.filter((img) => img.id !== imageId));
      }, 500); 

      lastPos.current = { x, y };
      imageIndex.current += 1;
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove} 
      className="relative overflow-hidden h-full w-full"
    >
      <div className="relative z-20 pointer-events-none">
         {children}
      </div>

      <AnimatePresence mode="popLayout">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 0.5, 
              transition: { duration: 0.5, ease: "backIn" } 
            }}
            transition={{ duration: 0.1 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              x: img.x - 100,
              y: img.y - 125,
              rotate: img.rotation,
              pointerEvents: 'none',
              zIndex: 10 + index, 
            }}
            className="w-[200px] h-[250px] pointer-events-none block"
          >
            <div className="relative w-full h-full shadow-2xl overflow-hidden rounded-sm">
                 <Image
                 src={img.imgSrc}
                 alt="project preview"
                 fill
                 className="object-cover"
                 unoptimized
                 />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}