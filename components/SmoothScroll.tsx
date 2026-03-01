'use client'
import { ReactLenis } from '@studio-freight/react-lenis'

// Al poner 'any', le decimos a TypeScript que acepte cualquier contenido sin quejarse
function SmoothScroll({ children }: { children: any }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll