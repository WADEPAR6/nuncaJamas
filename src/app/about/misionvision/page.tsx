// src/components/MisionVision.tsx
"use client";
import React from "react";

const MisionVision: React.FC = () => {
    return (
        <section className="bg-gradient-to-b from-[#24768e] to-white text-[#4a4a4a] py-28 min-h-screen">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-4xl font-extrabold text-center text-[#155427] mb-12 tracking-wide">
                    Nuestra Misión y Visión
                </h2>
                <div className="flex lg:flex-row gap-12 justify-center items-center flex-row">
                    <div className="bg-white shadow-xl rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-3xl font-semibold text-[#24768e] mb-4 border-b-4 border-[#65b449] pb-2 tracking-wide">
                            Misión
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Nunca jamás tiene la misión de llegar al consumidor con lo mejor en dulces, todo de la mejor calidad, para crear experiencias memorables que deleiten los sentidos al cliente.
                        </p>
                    </div>
                    {/* Visión */}
                    <div className="bg-white shadow-xl rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-3xl font-semibold text-[#24768e] mb-4 border-b-4 border-[#65b449] pb-2 tracking-wide">
                            Visión
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Nunca jamás tiene la visión de posicionarse en el mercado, comercializando dulces de calidad, innovadores, satisfaciendo las necesidades de nuestros consumidores.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MisionVision;
