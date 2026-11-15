import React from 'react';
import { estaciones, rutas } from '../data/metroData';

const MapaInteractivo = ({ resultado }) => {
    return (
        <div className="w-2/3 p-4 bg-gray-800 flex items-center justify-center h-full">
            <svg style={{width: '100%', height: '100%', backgroundColor: '#1f2937', borderRadius: '12px'}} viewBox="100 50 850 900">
                {rutas.map((ruta, i) => {
                    const e1 = estaciones.find(e => e.id === ruta.origen);
                    const e2 = estaciones.find(e => e.id === ruta.destino);
                    const enRuta = resultado.camino.includes(ruta.origen) && resultado.camino.includes(ruta.destino);
                    const opacidad = resultado.camino.length > 0 && !enRuta ? 0.2 : 1;
                    const colorLinea = enRuta ? '#10b981' : '#4b5563';

                    return (
                        <line 
                            key={`linea-${i}`}
                            x1={e1.x} y1={e1.y} x2={e2.x} y2={e2.y} 
                            stroke={colorLinea} 
                            strokeWidth={enRuta ? 6 : 3} 
                            opacity={opacidad}
                            style={{ transition: 'all 0.3s ease' }}
                        />
                    );
                })}

                {estaciones.map(est => {
                    const enRuta = resultado.camino.includes(est.id);
                    const opacidad = resultado.camino.length > 0 && !enRuta ? 0.3 : 1;
                    
                    return (
                        <g key={`est-${est.id}`} opacity={opacidad} style={{ transition: 'all 0.3s ease' }}>
                            <circle 
                                cx={est.x} cy={est.y} r={enRuta ? 8 : 6} 
                                fill={enRuta ? '#10b981' : est.color} 
                                stroke="#fff" strokeWidth="2"
                            />
                            
                            <text 
                                x={est.x + 12} y={est.y + 12} 
                                transform={`rotate(45 ${est.x} ${est.y})`}
                                style={{
                                    fontFamily: 'sans-serif', fontSize: enRuta ? '12px' : '10px', 
                                    fill: enRuta ? '#ffffff' : '#9ca3af', fontWeight: enRuta ? 'bold' : 'normal',
                                    pointerEvents: 'none'
                                }}>
                                {est.nombre}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

export default MapaInteractivo;