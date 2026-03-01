'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Cuando cambia la ruta (pathname), manda la ventana arriba
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}