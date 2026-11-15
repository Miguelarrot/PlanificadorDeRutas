import { estaciones, rutas } from '../src/data/metroData';

export const calcularDijkstra = (origenId, destinoId) => {
    const distancias = {};
    const previos = {};
    const noVisitados = new Set(estaciones.map(e => e.id));

    estaciones.forEach(e => distancias[e.id] = Infinity);
    distancias[origenId] = 0;

    while (noVisitados.size > 0) {
        let nodoActual = null;
        for (let nodo of noVisitados) {
            if (nodoActual === null || distancias[nodo] < distancias[nodoActual]) {
                nodoActual = nodo;
            }
        }

        if (distancias[nodoActual] === Infinity || nodoActual === destinoId) break;

        noVisitados.delete(nodoActual);

        const rutasVecinas = rutas.filter(r => r.origen === nodoActual || r.destino === nodoActual);
        
        for (let ruta of rutasVecinas) {
            const vecino = ruta.origen === nodoActual ? ruta.destino : ruta.origen;
            if (!noVisitados.has(vecino)) continue;

            const estActual = estaciones.find(e => e.id === nodoActual);
            const estVecina = estaciones.find(e => e.id === vecino);
            const penalizacion = (estActual.linea !== estVecina.linea) ? 3 : 0;

            const nuevaDistancia = distancias[nodoActual] + ruta.peso + penalizacion;
            if (nuevaDistancia < distancias[vecino]) {
                distancias[vecino] = nuevaDistancia;
                previos[vecino] = nodoActual;
            }
        }
    }

    const camino = [];
    let paso = destinoId;
    while (paso) {
        camino.unshift(paso);
        paso = previos[paso];
    }

    return {
        tiempoTotal: distancias[destinoId],
        camino: camino[0] === origenId ? camino : []
    };
};