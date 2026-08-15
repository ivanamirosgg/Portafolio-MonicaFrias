// lib/data.ts

export const projects = [
  { 
    id: 1, 
    title: "Oubaitori", 
    category: "colección AW/26", 
    src: "/oubatori2.png",
    description: "Oubaitori (escrito en japonés como 桜梅桃李) es un concepto filosófico tradicional que significa que cada persona tiene su propio ritmo de crecimiento y valor único, por lo que no debemos compararnos con los demás.\n\nEste significado se traduce en el diseño de dos atuendos que fusionan la sastrería con el tejido de punto en crochet, enfocando la diversidad, el equilibrio y el proceso humano de florecimiento.",
    year: "2025",
   gallery: [
      // --- BLOQUE INICIAL: 3 Imágenes Grandes (Estructura Bold Excess ampliada) ---
      { src: "/oubatoris.jpeg", text: "Detalle de materiales.", size: "large" }, 
      { src: "/layout azul.png", text: "Interacción 1.", size: "large" },
      { src: "/LAYOUT PORTAFOLIO.png", text: "Interacción 2.", size: "large" },
      
      // --- PARES INFINITOS (A partir de aquí, todo de 2 en 2) ---
      // Fila 2
      { src: "/3.jpeg", text: "Peso de la introspección.", size: "pair" },
      { src: "/4.jpeg", text: "Percepción alterada.", size: "pair" },
      // Fila 3
      { src: "/14.jpeg", text: "Introspección física.", size: "pair" },
      { src: "/6.jpeg", text: "Densidad de la psique.", size: "pair" },
      { src: "/7.jpeg", text: "Introspección física.", size: "pair" },
      { src: "/8.jpeg", text: "Densidad de la psique.", size: "pair" },

      { src: "/9.jpeg", text: "Conexión natural.", size: "triptych" }, // Index 5
      { src: "/10.jpeg", text: "Elevación espiritual.", size: "triptych" }, // Index 6
      { src: "/11.jpeg", text: "Caminos divergentes.", size: "triptych" }, // Index 7
      { 
        src: "/12.jpeg", 
        text: "Cierre conceptual de la colección.", 
        size: "full-horizontal" 
      },
      { 
        src: "/13.jpeg", 
        text: "Detalle final de texturas.", 
        size: "full-horizontal" 
      }
    ]
  },
  { 
    id: 2, 
    title: "México en la piel", 
    category: "colaboración con Asociación", 
    src: "/mexicoBueno.jpeg", 
    description: "Esta colección nace de una colaboración con “Corazón Down Centro Psicoeducativo A.C.”, con el objetivo de diseñar indumentaria que celebre la identidad mexicana y responda a las necesidades específicas de jóvenes hombres con síndrome de down. El proyecto es un ejercicio de inclusión donde la moda se convierte en un puente entre el respeto por la ergonomía del usuario y el orgullo cultural.",
    year: "2024",
    gallery: [
      // 1. Moodboards Iniciales (Indices 0, 1, 2)
      { src: "/mexico-moodboard.png", text: "Moodboard: Fusión de texturas naturales.", size: "small" },
      { src: "/MEXICOOO.png", text: "Inspirada en el azul maya.", size: "small" },
      { src: "/MoodBoardMP.png", text: "Proceso de diseño colaborativo.", size: "small" },

      // --- SECCIÓN COLLAGE ASIMÉTRICO (BENTO GRID) ---
      // 2. Imagen Vertical Izquierda (Indice 3)
      { 
        src: "/azul1.jpeg", 
        text: "Retrato principal: Orgullo y cultura.", 
        size: "special-vertical" 
      },
      // 3. Dos Pequeñas Superiores Derecha (Indices 4 y 5)
      { 
        src: "/azul2.jpeg", 
        text: "Detalle de confección artesanal.", 
        size: "special-small" 
      },
      { 
        src: "/azul3.jpeg", 
        text: "Exploración de texturas.", 
        size: "special-small" 
      },
      // 4. Horizontal Inferior Derecha (Indice 6)
      { 
        src: "/azul4.jpeg", 
        text: "Visión panorámica de la colección.", 
        size: "special-horizontal",
      },
      { src: "/azul5.jpeg", text: "Detalle de par 1", size: "pair" },
      { src: "/azul8.jpeg", text: "Detalle de par 2", size: "pair" }
    ]
  },
  { 
    id: 3, 
    title: "Graceful Bloom", 
    category: "bata de maternidad", 
    src: "/graceful-img.jpeg",
    description: "Graceful Bloom celebra la maternidad como el florecimiento supremo al convertirse en madre. A través de una narrativa visual basada en la fragilidad y la transformación, esta historia traduce el proceso del embarazo en capas y transparencias. Representa el acto de soltar la identidad individual para abrazar la plenitud de dar vida; un ciclo de cambios profundos donde, al igual que una flor, la mujer renace con una fuerza nueva y una delicadeza infinita.",
    year: "2023",
    gallery: [
      // --- BLOQUE INICIAL: 2 Imágenes Grandes ---
      { src: "/MOODBOARD GRACEFUL BLOOM.png", text: "Moodboard.", size: "large" },
      { src: "/layout rosita.png", text: "Boceto y concepto.", size: "large" },
      
      // --- BLOQUE MEDIO: Pares ---
      { src: "/gb1.PNG", text: "Detalle 1.", size: "pair" },
      { src: "/gb2.PNG", text: "Detalle 2.", size: "pair" },
      { src: "/gb3.PNG", text: "Detalle 3.", size: "triptych" },
      { src: "/gb4.PNG", text: "Detalle 4.", size: "triptych" },
      { src: "/gb5.PNG", text: "Detalle 5.", size: "triptych" },
    ]
  },
  { 
    id: 4, 
    title: "Bold Excess", 
    category: "CAMPAIGN", 
    src: "/BoldExcessCanva.png", 
    aspect: "portrait", 
    description: "Diseño que explora la cruda realidad del autoconocimiento. A lo largo del crecimiento intelectual, uno se encuentra con obstáculos personales los cuales no queremos descubrir o explorar por miedo a la verdad. Las curvas y proporciones abstractas, representan la oscura realidad que no nos atrevemos a afrontar de la psique. Inspirada en las fases de percepción alterada, la pieza utiliza el maximalismo no como adorno, sino como una representación física de la introspección e incertidumbre.",
    year: "2024",
    gallery: [
      { src: "/MOODBOARD BOLD EXCESS.png", text: "Moodboard.", size: "large" },
      { src: "/boldexcess1.PNG", text: "Boceto y concepto.", size: "large" },
      { src: "/IMG_0250.JPG.jpeg", text: "Estética maximalista.", size: "pair" },
      { src: "/IMG_0252.JPG.jpeg", text: "Sombras del subconsciente.", size: "pair" },
      { src: "/IMG_0255.JPG.jpeg", text: "Peso de la introspección.", size: "pair" },
      { src: "/IMG_0254.JPG.jpeg", text: "Percepción alterada.", size: "pair" },
      { src: "/IMG_0251.JPG.jpeg", text: "Introspección física.", size: "pair" },
      { src: "/IMG_0253.JPG.jpeg", text: "Densidad de la psique.", size: "pair" },
      // Horizontales finales
      { src: "/IMG_0256.JPG (1).jpeg", text: "Perspectiva panorámica.", size: "full-horizontal" },
      { src: "/IMG_0257.JPG.jpeg", text: "Detalle cinemático.", size: "full-horizontal" }
    ]
  },
  { 
    id: 5, 
    title: "New Romantics", 
    category: "producción fashion film", 
    src: "/newromantics.jpg",
    description: "El movimiento New Romantics surgió en el Reino Unido a finales de los años 70 como una rebelión a la austeridad. Abraza el glamour, la androginia que rescataba elementos del  barroco, el estilo pirata y el romanticismo del siglo XIX. Esta corriente no solo redefinió la moda masculina al introducir el uso de maquillaje, sino que también estuvo ligada al genero musical “pop“. En resumen, fue un movimiento que transformó con mucho impacto creativo y  cambió el rumbo sobre las normas sociales establecidas en ese entonces.",
    year: "2022",
    gallery: [
      // Tu primera imagen original
      { src: "/nr1.png", text: "Diseño de interfaz.", size: "large" },

      {
  type: "text-image",
  imagePosition: "left",
  src: "/nr4.jpeg", // Pon aquí el nombre de tu foto de los 3 modelos
        text: "Este proyecto se articula a través de un fashion film fundamentado en una investigación del movimiento New Romantic en la época de los 80´s, seleccionando a tres de los íconos más influyentes de la época: Boy George, Adam Ant y Cyndi Lauper. Esta elección fue un ejercicio de dirección de arte con el objetivo de encarnar las facetas de este movimiento.<br><br>A partir de esta base, se asignaron tres estilismos que capturaran el rigor histórico de la época mediante el “upcycle”. La finalidad de este proyecto permite una inmersión total que traslada al espectador a través del tiempo con ayuda de elementos visuales y música de la época, donde el diseño de indumentaria actúa como el impacto de una experiencia cinematográfica de nostalgia y autenticidad.",
        aspect: "square"
      },
      {
  type: "video-vimeo",
  src: "1169338537",
  text: ""
},
     
    ]
  },
];