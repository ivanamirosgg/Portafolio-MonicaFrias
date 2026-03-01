import type { Metadata } from "next";
import { Inter, Krona_One, Manrope } from "next/font/google"; 
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
// 1. IMPORTAMOS EL COMPONENTE MÁGICO
import ScrollToTop from "../components/ScrollToTop";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const krona = Krona_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-krona',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: "Monica Frias Portfolio",
  description: "Portfolio de diseño de modas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${krona.variable} ${manrope.variable} bg-fashion-black text-fashion-white antialiased`}>
        
        {/* 2. LO PONEMOS AQUÍ PRIMERO QUE NADA */}
        <ScrollToTop />

        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}