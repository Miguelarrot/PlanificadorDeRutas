// src/data/metroData.js

export const estaciones = [
    // LÍNEA A (Azul) - Eje Norte/Sur
    { id: 'Niquia', nombre: 'Niquía', x: 500, y: 100, linea: 'A', color: '#0033a0' },
    { id: 'Bello', nombre: 'Bello', x: 500, y: 140, linea: 'A', color: '#0033a0' },
    { id: 'Madera', nombre: 'Madera', x: 500, y: 180, linea: 'A', color: '#0033a0' },
    { id: 'Acevedo', nombre: 'Acevedo', x: 500, y: 220, linea: 'A', color: '#0033a0' },
    { id: 'Tricentenario', nombre: 'Tricentenario', x: 500, y: 260, linea: 'A', color: '#0033a0' },
    { id: 'Caribe', nombre: 'Caribe', x: 500, y: 300, linea: 'A', color: '#0033a0' },
    { id: 'Universidad', nombre: 'Universidad', x: 500, y: 340, linea: 'A', color: '#0033a0' },
    { id: 'Hospital', nombre: 'Hospital', x: 500, y: 380, linea: 'A', color: '#0033a0' },
    { id: 'Prado', nombre: 'Prado', x: 500, y: 420, linea: 'A', color: '#0033a0' },
    { id: 'ParqueBerrio', nombre: 'Parque Berrío', x: 500, y: 460, linea: 'A', color: '#0033a0' },
    { id: 'SanAntonio', nombre: 'San Antonio', x: 500, y: 500, linea: 'A', color: '#0033a0' },
    { id: 'Alpujarra', nombre: 'Alpujarra', x: 500, y: 540, linea: 'A', color: '#0033a0' },
    { id: 'Exposiciones', nombre: 'Exposiciones', x: 500, y: 580, linea: 'A', color: '#0033a0' },
    { id: 'Industriales', nombre: 'Industriales', x: 500, y: 620, linea: 'A', color: '#0033a0' },
    { id: 'Poblado', nombre: 'Poblado', x: 500, y: 660, linea: 'A', color: '#0033a0' },
    { id: 'Aguacatala', nombre: 'Aguacatala', x: 500, y: 700, linea: 'A', color: '#0033a0' },
    { id: 'Ayura', nombre: 'Ayurá', x: 500, y: 740, linea: 'A', color: '#0033a0' },
    { id: 'Envigado', nombre: 'Envigado', x: 500, y: 780, linea: 'A', color: '#0033a0' },
    { id: 'Itagui', nombre: 'Itagüí', x: 500, y: 820, linea: 'A', color: '#0033a0' },
    { id: 'Sabaneta', nombre: 'Sabaneta', x: 500, y: 860, linea: 'A', color: '#0033a0' },
    { id: 'LaEstrella', nombre: 'La Estrella', x: 500, y: 900, linea: 'A', color: '#0033a0' },

    // LÍNEA B (Naranja) - Centro hacia el Occidente
    { id: 'Cisneros', nombre: 'Cisneros', x: 450, y: 500, linea: 'B', color: '#f37021' },
    { id: 'Suramericana', nombre: 'Suramericana', x: 400, y: 500, linea: 'B', color: '#f37021' },
    { id: 'Estadio', nombre: 'Estadio', x: 350, y: 500, linea: 'B', color: '#f37021' },
    { id: 'Floresta', nombre: 'Floresta', x: 300, y: 500, linea: 'B', color: '#f37021' },
    { id: 'SantaLucia', nombre: 'Santa Lucía', x: 250, y: 500, linea: 'B', color: '#f37021' },
    { id: 'SanJavier', nombre: 'San Javier', x: 200, y: 500, linea: 'B', color: '#f37021' },

    // TRANVÍA (Línea T-A Verde) - Centro hacia el Oriente
    { id: 'SanJose', nombre: 'San José', x: 550, y: 500, linea: 'T', color: '#008b43' },
    { id: 'PabellonAgua', nombre: 'Pabellón del Agua EPM', x: 600, y: 500, linea: 'T', color: '#008b43' },
    { id: 'Bicentenario', nombre: 'Bicentenario', x: 650, y: 500, linea: 'T', color: '#008b43' },
    { id: 'BuenosAires', nombre: 'Buenos Aires', x: 680, y: 500, linea: 'T', color: '#008b43' },
    { id: 'Miraflores', nombre: 'Miraflores', x: 710, y: 500, linea: 'T', color: '#008b43' },
    { id: 'Loyola', nombre: 'Loyola', x: 740, y: 500, linea: 'T', color: '#008b43' },
    { id: 'AlejandroEchavarria', nombre: 'Alejandro Echavarría', x: 770, y: 500, linea: 'T', color: '#008b43' },
    { id: 'Oriente', nombre: 'Oriente', x: 800, y: 500, linea: 'T', color: '#008b43' },

    // METROCABLE LÍNEA J (Amarillo) - San Javier a La Aurora
    { id: 'JuanXXIII', nombre: 'Juan XXIII', x: 200, y: 450, linea: 'J', color: '#fcc000' },
    { id: 'Vallejuelos', nombre: 'Vallejuelos', x: 200, y: 400, linea: 'J', color: '#fcc000' },
    { id: 'LaAurora', nombre: 'La Aurora', x: 200, y: 350, linea: 'J', color: '#fcc000' },

    // METROCABLE LÍNEA K (Verde Claro) - Acevedo a Santo Domingo
    { id: 'Andalucia', nombre: 'Andalucía', x: 550, y: 230, linea: 'K', color: '#88c540' },
    { id: 'Popular', nombre: 'Popular', x: 600, y: 240, linea: 'K', color: '#88c540' },
    { id: 'SantoDomingo', nombre: 'Santo Domingo', x: 650, y: 250, linea: 'K', color: '#88c540' },

    // METROCABLE LÍNEA L (Café) - Santo Domingo a Arví
    { id: 'Arvi', nombre: 'Arví', x: 850, y: 230, linea: 'L', color: '#6d4c41' },

    // METROCABLE LÍNEA H (Rosado) - Oriente a Villa Sierra
    { id: 'LasTorres', nombre: 'Las Torres', x: 850, y: 460, linea: 'H', color: '#e91e63' },
    { id: 'VillaSierra', nombre: 'Villa Sierra', x: 860, y: 400, linea: 'H', color: '#e91e63' },

    // METROCABLE LÍNEA M (Morado) - Miraflores a Trece de Noviembre
    { id: 'ElPinal', nombre: 'El Pinal', x: 740, y: 450, linea: 'M', color: '#9c27b0' },
    { id: 'TreceNoviembre', nombre: 'Trece de Noviembre', x: 770, y: 390, linea: 'M', color: '#9c27b0' },

    // METROCABLE LÍNEA P (Rojo) - Acevedo a El Progreso
    { id: 'SENA', nombre: 'SENA', x: 450, y: 220, linea: 'P', color: '#f44336' },
    { id: 'DoceDeOctubre', nombre: 'Doce de Octubre', x: 400, y: 220, linea: 'P', color: '#f44336' },
    { id: 'ElProgreso', nombre: 'El Progreso', x: 350, y: 220, linea: 'P', color: '#f44336' },

    // METROPLÚS (Líneas 1 y 2 comparten occidente)
    { id: 'UdeM', nombre: 'U. de M.', x: 200, y: 620, linea: '1', color: '#00a499' },
    { id: 'LosAlpes', nombre: 'Los Alpes', x: 240, y: 620, linea: '1', color: '#00a499' },
    { id: 'LaPalma', nombre: 'La Palma', x: 280, y: 620, linea: '1', color: '#00a499' },
    { id: 'ParqueBelen', nombre: 'Parque Belén', x: 320, y: 620, linea: '1', color: '#00a499' },
    { id: 'Rosales', nombre: 'Rosales', x: 360, y: 620, linea: '1', color: '#00a499' },
    { id: 'Fatima', nombre: 'Fátima', x: 400, y: 620, linea: '1', color: '#00a499' },
    { id: 'Nutibara', nombre: 'Nutibara', x: 440, y: 620, linea: '1', color: '#00a499' },

    // METROPLÚS LÍNEA 1 (Brazo Norte por Minorista)
    { id: 'PlazaMayor', nombre: 'Plaza Mayor', x: 450, y: 550, linea: '1', color: '#00a499' },
    { id: 'Minorista', nombre: 'Minorista', x: 450, y: 450, linea: '1', color: '#00a499' },
    { id: 'Chagualo', nombre: 'Chagualo', x: 450, y: 400, linea: '1', color: '#00a499' },
    { id: 'RutaN', nombre: 'Ruta N U. de A.', x: 450, y: 350, linea: '1', color: '#00a499' },

    // METROPLÚS LÍNEA 2 (Brazo Centro por Av. Oriental)
    { id: 'BarrioColombia', nombre: 'Barrio Colombia', x: 550, y: 620, linea: '2', color: '#00a499' },
    { id: 'SanDiego', nombre: 'San Diego', x: 550, y: 580, linea: '2', color: '#00a499' },
    { id: 'BarrioColon', nombre: 'Barrio Colón', x: 550, y: 540, linea: '2', color: '#00a499' },
    { id: 'LaPlaya', nombre: 'La Playa', x: 550, y: 460, linea: '2', color: '#00a499' },
    { id: 'Catedral', nombre: 'Catedral Metropolitana', x: 550, y: 420, linea: '2', color: '#00a499' },

    // METROPLÚS (Líneas 1 y 2 comparten nororiente)
    { id: 'PalosVerdes', nombre: 'Palos Verdes', x: 550, y: 340, linea: '1', color: '#00a499' },
    { id: 'Gardel', nombre: 'Gardel', x: 550, y: 300, linea: '1', color: '#00a499' },
    { id: 'Manrique', nombre: 'Manrique', x: 550, y: 260, linea: '1', color: '#00a499' },
    { id: 'LasEsmeraldas', nombre: 'Las Esmeraldas', x: 550, y: 220, linea: '1', color: '#00a499' },
    { id: 'Berlin', nombre: 'Berlín', x: 550, y: 180, linea: '1', color: '#00a499' },
    { id: 'ParqueAranjuez', nombre: 'Parque Aranjuez', x: 550, y: 140, linea: '1', color: '#00a499' }
];

export const rutas = [
    // LÍNEA A
    { origen: 'Niquia', destino: 'Bello', peso: 2 },
    { origen: 'Bello', destino: 'Madera', peso: 2 },
    { origen: 'Madera', destino: 'Acevedo', peso: 2 },
    { origen: 'Acevedo', destino: 'Tricentenario', peso: 3 },
    { origen: 'Tricentenario', destino: 'Caribe', peso: 2 },
    { origen: 'Caribe', destino: 'Universidad', peso: 2 },
    { origen: 'Universidad', destino: 'Hospital', peso: 2 },
    { origen: 'Hospital', destino: 'Prado', peso: 2 },
    { origen: 'Prado', destino: 'ParqueBerrio', peso: 2 },
    { origen: 'ParqueBerrio', destino: 'SanAntonio', peso: 2 },
    { origen: 'SanAntonio', destino: 'Alpujarra', peso: 2 },
    { origen: 'Alpujarra', destino: 'Exposiciones', peso: 2 },
    { origen: 'Exposiciones', destino: 'Industriales', peso: 2 },
    { origen: 'Industriales', destino: 'Poblado', peso: 3 },
    { origen: 'Poblado', destino: 'Aguacatala', peso: 2 },
    { origen: 'Aguacatala', destino: 'Ayura', peso: 2 },
    { origen: 'Ayura', destino: 'Envigado', peso: 2 },
    { origen: 'Envigado', destino: 'Itagui', peso: 3 },
    { origen: 'Itagui', destino: 'Sabaneta', peso: 2 },
    { origen: 'Sabaneta', destino: 'LaEstrella', peso: 3 },

    // LÍNEA B
    { origen: 'SanAntonio', destino: 'Cisneros', peso: 2 },
    { origen: 'Cisneros', destino: 'Suramericana', peso: 2 },
    { origen: 'Suramericana', destino: 'Estadio', peso: 2 },
    { origen: 'Estadio', destino: 'Floresta', peso: 2 },
    { origen: 'Floresta', destino: 'SantaLucia', peso: 2 },
    { origen: 'SantaLucia', destino: 'SanJavier', peso: 3 },

    // TRANVÍA
    { origen: 'SanAntonio', destino: 'SanJose', peso: 3 },
    { origen: 'SanJose', destino: 'PabellonAgua', peso: 2 },
    { origen: 'PabellonAgua', destino: 'Bicentenario', peso: 2 },
    { origen: 'Bicentenario', destino: 'BuenosAires', peso: 2 },
    { origen: 'BuenosAires', destino: 'Miraflores', peso: 2 },
    { origen: 'Miraflores', destino: 'Loyola', peso: 2 },
    { origen: 'Loyola', destino: 'AlejandroEchavarria', peso: 2 },
    { origen: 'AlejandroEchavarria', destino: 'Oriente', peso: 2 },

    // METROCABLES
    { origen: 'SanJavier', destino: 'JuanXXIII', peso: 4 },
    { origen: 'JuanXXIII', destino: 'Vallejuelos', peso: 4 },
    { origen: 'Vallejuelos', destino: 'LaAurora', peso: 5 },
    { origen: 'Acevedo', destino: 'Andalucia', peso: 3 },
    { origen: 'Andalucia', destino: 'Popular', peso: 3 },
    { origen: 'Popular', destino: 'SantoDomingo', peso: 4 },
    { origen: 'SantoDomingo', destino: 'Arvi', peso: 15 },
    { origen: 'Oriente', destino: 'LasTorres', peso: 3 },
    { origen: 'LasTorres', destino: 'VillaSierra', peso: 4 },
    { origen: 'Miraflores', destino: 'ElPinal', peso: 3 },
    { origen: 'ElPinal', destino: 'TreceNoviembre', peso: 3 },
    { origen: 'Acevedo', destino: 'SENA', peso: 3 },
    { origen: 'SENA', destino: 'DoceDeOctubre', peso: 4 },
    { origen: 'DoceDeOctubre', destino: 'ElProgreso', peso: 4 },

    // METROPLÚS (Occidente compartido)
    { origen: 'UdeM', destino: 'LosAlpes', peso: 2 },
    { origen: 'LosAlpes', destino: 'LaPalma', peso: 2 },
    { origen: 'LaPalma', destino: 'ParqueBelen', peso: 2 },
    { origen: 'ParqueBelen', destino: 'Rosales', peso: 2 },
    { origen: 'Rosales', destino: 'Fatima', peso: 2 },
    { origen: 'Fatima', destino: 'Nutibara', peso: 2 },
    { origen: 'Nutibara', destino: 'Industriales', peso: 3 },

    // METROPLÚS L1 (Centro)
    { origen: 'Industriales', destino: 'PlazaMayor', peso: 3 },
    { origen: 'PlazaMayor', destino: 'Cisneros', peso: 2 },
    { origen: 'Cisneros', destino: 'Minorista', peso: 3 },
    { origen: 'Minorista', destino: 'Chagualo', peso: 2 },
    { origen: 'Chagualo', destino: 'RutaN', peso: 2 },
    { origen: 'RutaN', destino: 'Hospital', peso: 3 },

    // METROPLÚS L2 (Centro)
    { origen: 'Industriales', destino: 'BarrioColombia', peso: 2 },
    { origen: 'BarrioColombia', destino: 'SanDiego', peso: 3 },
    { origen: 'SanDiego', destino: 'BarrioColon', peso: 2 },
    { origen: 'BarrioColon', destino: 'SanJose', peso: 3 },
    { origen: 'SanJose', destino: 'LaPlaya', peso: 2 },
    { origen: 'LaPlaya', destino: 'Catedral', peso: 2 },
    { origen: 'Catedral', destino: 'Prado', peso: 3 },

    // METROPLÚS (Nororiente compartido)
    { origen: 'Hospital', destino: 'PalosVerdes', peso: 3 },
    { origen: 'Prado', destino: 'PalosVerdes', peso: 4 },
    { origen: 'PalosVerdes', destino: 'Gardel', peso: 2 },
    { origen: 'Gardel', destino: 'Manrique', peso: 2 },
    { origen: 'Manrique', destino: 'LasEsmeraldas', peso: 2 },
    { origen: 'LasEsmeraldas', destino: 'Berlin', peso: 2 },
    { origen: 'Berlin', destino: 'ParqueAranjuez', peso: 2 }
];