# Planificador de Rutas - Metro de Medellín (Dijkstra + SVG)

Aplicación web interactiva que modela las líneas del sistema masivo de transporte **Metro de Medellín** como un grafo ponderado para calcular y visualizar en tiempo real la ruta más corta entre dos estaciones utilizando el **Algoritmo de Dijkstra**.

**[Ver Demo en Vivo][(Rutas de metro](https://metro-dijsktra-mjsiirg9z-miguel-04e7.vercel.app/)**
---

## 🎯 Objetivo del Proyecto

Resolver de forma visual e interactiva el cálculo de trayectos óptimos dentro de la red del Metro de Medellín (Líneas A, B, cables y tranvía), aplicando estructuras de datos clásicas de ciencias de la computación en una interfaz web moderna y responsiva.

---

## Características Principales

* **Cálculo de Ruta Óptima:** Implementación pura del algoritmo de Dijkstra en JavaScript para determinar el camino de menor costo/tiempo entre cualquier par de estaciones.
* **Mapa Vectorial Interactivo (SVG):** Renderizado dinámico de nodos (estaciones) y aristas (tramos de vía) mediante SVG controlado por el estado de React, iluminando en tiempo real el recorrido calculado.
* **Detección de Transbordos:** Identificación automática de estaciones de transferencia (ej. *San Antonio*, *Acevedo*, *San Javier*) y cálculo de tiempos estimados de viaje.
* **Interfaz Intuitiva:** Selección directa de origen y destino tanto desde los selectores como haciendo clic sobre las estaciones en el mapa.

---

## 🛠️ Stack Tecnológico

* **Frontend:** React 18+ (Hooks & Functional Components)
* **Lenguaje:** JavaScript (ES6+)
* **Gráficos Vectoriales:** SVG nativo manipulado declarativamente con React
* **Estilos:** Tailwind CSS
* **Bundler:** Vite

---

## Arquitectura y Algoritmo

La red de transporte está modelada mediante una **lista de adyacencia** donde:
* **Nodos ($V$):** Representan cada estación del sistema.
* **Aristas ($E$):** Representan las conexiones directas entre estaciones consecutivas.
* **Pesos ($W$):** Representan el tiempo promedio de desplazamiento entre estaciones y las penalizaciones por transbordo entre líneas.

### Complejidad Computacional
* **Tiempo de ejecución:** $O((V + E) \log V)$ utilizando cola de prioridad, garantizando respuestas instantáneas dado el tamaño de la red urbana.
* **Espacio:** $O(V + E)$ para almacenar el grafo y las tablas de distancias mínimas.

---

## Estructura del Proyecto

```text
src/
├── algorithms/
│   └── dijkstra.js        # Implementación pura del algoritmo de ruta más corta
├── components/
│   ├── MetroMapSVG.jsx    # Renderizado vectorial del mapa y resaltado de rutas
│   └── RouteControls.jsx  # Selectores de estación origen/destino y resumen de viaje
├── data/
│   └── metroGraph.js      # Definición de nodos, coordenadas SVG y lista de adyacencia
└── App.jsx                # Orquestación de estado y layout principal
