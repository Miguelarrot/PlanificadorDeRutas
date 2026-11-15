import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MapaInteractivo from './components/MapaInteractivo';
import { calcularDijkstra } from '../utils/Dijkstra';

function App() {
    const [origen, setOrigen] = useState('Niquia');
    const [destino, setDestino] = useState('SanJavier');
    const [resultado, setResultado] = useState({ tiempoTotal: 0, camino: [] });

    const handleCalcular = () => {
        const res = calcularDijkstra(origen, destino);
        setResultado(res);
    };

    return (
        <div className="flex h-screen w-full bg-gray-900 overflow-hidden">
            <Sidebar 
                origen={origen} 
                setOrigen={setOrigen} 
                destino={destino} 
                setDestino={setDestino} 
                onCalcular={handleCalcular} 
                resultado={resultado} 
            />
            <MapaInteractivo resultado={resultado} />
        </div>
    );
}

export default App;