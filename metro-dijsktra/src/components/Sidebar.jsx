import React from 'react';
import { estaciones } from '../data/metroData';

const Sidebar = ({ origen, setOrigen, destino, setDestino, onCalcular, resultado }) => {
    return (
        <div className="w-1/3 bg-gray-900 p-6 shadow-xl flex flex-col gap-6 z-10 border-r border-gray-700 h-full overflow-y-auto">
            <div>
                <h1 className="text-2xl font-bold text-white mb-1">Red Metro Medellín</h1>
                <p className="text-sm text-gray-400">Implementación Dijkstra en React</p>
            </div>
            
            <div className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Estación Origen</label>
                    <select 
                        className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                        value={origen} onChange={e => setOrigen(e.target.value)}>
                        {estaciones.map(e => <option key={`origen-${e.id}`} value={e.id}>{e.nombre} (Línea {e.linea})</option>)}
                    </select>
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Estación Destino</label>
                    <select 
                        className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                        value={destino} onChange={e => setDestino(e.target.value)}>
                        {estaciones.map(e => <option key={`destino-${e.id}`} value={e.id}>{e.nombre} (Línea {e.linea})</option>)}
                    </select>
                </div>

                <button 
                    onClick={onCalcular}
                    className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition">
                    Calcular Ruta Óptima
                </button>
            </div>

            {resultado.camino.length > 0 && (
                <div className="mt-4 p-4 bg-gray-800 border border-green-500 rounded-lg">
                    <h3 className="text-green-400 font-bold mb-2">Viaje Estimado: {resultado.tiempoTotal} min</h3>
                    <div className="text-sm text-gray-300">
                        {resultado.camino.map((id) => {
                            const est = estaciones.find(e => e.id === id);
                            return (
                                <div key={id} className="flex items-center gap-2 mb-2">
                                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: est.color}}></div>
                                    <span>{est.nombre}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;