// lib/data.ts

export const projects = [
  { 
    id: 1, 
    title: "Oubaitori", 
    category: "colección AW/26", 
    src: "/oubatori2.png",
    description: "Oubaitori (桜梅桃李) es un idioma japonés que se refiere a las cuatro flores de primavera: cerezo, ciruelo, melocotón y albaricoque. Cada flor florece a su debido tiempo y a su manera única. El significado de Oubaitori es que todos crecemos y florecemos a nuestro propio ritmo, y debemos enfocarnos en nuestro propio crecimiento sin compararnos con los demás. Este significado se traduce en el diseño de dos atuendos que fusionan la sastrería con el tejido de punto en crochet, exaltando la diversidad, el equilibrio entre razón y emoción, y la unicidad del proceso humano de florecimiento.",
    year: "2025",
   gallery: [
      // --- BLOQUE INICIAL: 3 Imágenes Grandes (Estructura Bold Excess ampliada) ---
      { src: "/oubatoris.jpeg", text: "Detalle de materiales.", size: "large" }, 
      { src: "/o1.PNG", text: "Interacción 1.", size: "large" },
      { src: "/02.PNG", text: "Interacción 2.", size: "large" },
      
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
    description: "Esta colección nace de una colaboración con “Corazón Down Centro Psicoeducativo A.C.”, con el objetivo de diseñar indumentaria que celebre la identidad mexicana y responda a las necesidades específicas de jóvenes hombres con síndrome de down. El proyecto es un ejercicio de inclusión donde la moda se convierte en un puente entre el respeto por la ergonomía del usuario y la expresión de un orgullo cultural profundo.",
    year: "2024",
    aboutText: "El Centro Corazón Down de León, Guanajuato, es una asociación civil dedicada a brindar apoyo integral a personas con síndrome de Down y a sus familias. Su misión es mejorar la calidad de vida de estos individuos mediante la promoción de su inclusión social, educativa y laboral. Su labor abarca desde la formación educativa y profesional hasta el acompañamiento terapéutico y psicológico; creando espacios de inclusión a través de la cultura y el deporte para potenciar la independencia funcional de sus integrantes.",
    aboutImage: "/down1.PNG",
    // Esta es la nueva variable con la bibliografía de la imagen
    aboutImageCaption: "Corazon Down. (s/f). Corazon Down. Recuperado el 9 de febrero de 2026, de https://corazon-down.webnode.mx/",
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
      { src: "/azul6.jpeg", text: "Detalle de par 1", size: "pair" },
      { src: "/azul7.jpeg", text: "Detalle de par 2", size: "pair" },
      { src: "/azul8.jpeg", text: "Detalle de par 2", size: "pair" }
    ]
  },
  { 
    id: 3, 
    title: "Graceful Bloom", 
    category: "bata de maternidad", 
    src: "/graceful-img.jpeg",
    description: "Graceful Bloom celebra la maternidad como el florecimiento supremo del ser. A través de una narrativa visual basada en la fragilidad y la transformación, esta historia traduce el proceso del embarazo en una arquitectura textil de capas y transparencias. Representa el acto de soltar la identidad individual para abrazar la plenitud de dar vida; un ciclo de cambios profundos donde, al igual que una flor, la mujer renace con una fuerza nueva y una delicadeza infinita",
    year: "2023",
    gallery: [
      // --- BLOQUE INICIAL: 2 Imágenes Grandes ---
      { src: "/MOODBOARD GRACEFUL BLOOM.png", text: "Moodboard.", size: "large" },
      { src: "/boldexcess2.png", text: "Boceto y concepto.", size: "large" },
      
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
    description: "Diseño que explora la cruda realidad del autoconocimiento. A través de una estética maximalista y proporciones desafiantes, alejándose de la visión romántica para confrontar las sombras del subconsciente y la densidad de la psique. Inspirada en las fases de percepción alterada, la pieza utiliza el maximalismo no como adorno, sino como una representación física del peso de la introspección.",
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
    description: "El movimiento New Romantics surgió en el Reino Unido a finales de los años 70 como una reacción drástica a la austeridad y anarquía del punk. Se caracterizó por ser una subcultura visual y teatral que encontró su epicentro en clubes nocturnos de Londres, donde la vestimenta funcionaba como una forma de escapismo ante la realidad económica de la época. Se abraza el glamour, la androginia y un historicismo ecléctico que rescataba elementos del periodo del barroco, el estilo pirata y el romanticismo del siglo XIX. Esta corriente no solo redefinió la moda masculina al introducir el uso de maquillaje y textiles diferentes, sino que también estuvo intrínsecamente ligada al auge del pop sintetizado. En esencia, fue un movimiento que transformó la identidad personal en una obra de arte pública, priorizando la creatividad individual y la fantasía sobre las normas sociales establecidas. ",
    year: "2022",
    gallery: [
      // Tu primera imagen original
      { src: "/nr1.png", text: "Diseño de interfaz.", size: "large" }, 
      
      // --- NUEVA ESTRUCTURA 1: TEXTO IZQ / IMAGEN (COLLAGE) DER ---
      {
  type: "text-image",
  imagePosition: "right", // 👈 ESTE ES EL CAMBIO
  src: "/2pics.png", 
        text: "Este proyecto se articula a través de un fashion film fundamentado en una investigación del movimiento New Romantic en la época de los 80's. Primeramente se elaboró análisis profundo del entorno sociocultural de la época, como tendencias de esa época, corrientes artísticas, maquillaje, vestimenta e inspiración en el que este movimiento se desarrolló. La finalidad de este proyecto permite una inmersión total que traslada al espectador a través del tiempo. Cada elemento visual y narrativo responde a una comprensión técnica del pasado, donde el diseño de indumentaria actúa como el impacto de una experiencia cinematográfica nostálgica y auténtica.",
        aspect: "portrait"
      },

      {
  type: "text-image",
  imagePosition: "left",
  src: "/nr4.jpeg", // Pon aquí el nombre de tu foto de los 3 modelos
        text: "El proceso del fashion film comenzó con una curaduría visual, seleccionando a tres modelos cuyo perfil representara la esencia de los íconos más influyentes de la época: Boy George, Adam Ant y Cyndi Lauper. Esta elección fue un ejercicio de dirección de arte con el objetivo de encarnar las facetas de este movimiento, desde la androginia, el uso teatral del maquillaje, hasta el historicismo guerrero y el espíritu ecléctico de estos referentes culturales.<br><br>A partir de esta base, se asignaron tres estilismos diferenciados que capturaran el rigor histórico de la época mediante una metodología de upcycling y curaduría ética. La construcción de los atuendos se llevó a cabo utilizando piezas de segunda mano y prendas preexistentes, las cuales fueron intervenidas para resignificar su uso original y adaptarlas a los años 80. Este enfoque no solo garantizó la fidelidad estética necesaria para la inmersión en el pasado, sino que también reafirmó el compromiso del proyecto con la moda circular, demostrando que la teatralidad del movimiento New Romantic puede reinterpretarse bajo una visión contemporánea y responsable.",
        aspect: "square"
      },
     
    ]
  },
];