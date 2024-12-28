"use client";
import React from "react";


const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-3/5 bg-white shadow-lg rounded-lg overflow-hidden">
        <section className="p-8 border-b border-gray-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Historia</h2>
          <p className="text-gray-600 leading-relaxed">
            La idea nace en el año 2020 a raíz de la pandemia del COVID-19, con la finalidad de compartir felicidad y hermandad entre los niños y la familia. Es por ello que la Sra. Consuelo Soria tiene la iniciativa de emprender una dulcería llamada NUNCA JAMÁS, donde además de degustar diferentes golosinas de la mejor calidad, se podrá obtener la experiencia de vivir en un mundo mágico donde el único fin es la felicidad de los niños.
            En NUNCA JAMÁS se podrá encontrar diferentes áreas basadas en la película de PETER PAN, un mundo mágico que existe dentro de una estrella donde los niños no alcanzan la edad adulta, no tienen ninguna responsabilidad y son felices.
          </p>
        </section>
        <section className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre Nosotros</h2>
          <p className="text-gray-600 leading-relaxed">
            En NUNCA JAMÁS, creemos que la felicidad de los niños y la unión familiar son los pilares fundamentales de la vida. Fundada en el año 2020 por la Sra. Consuelo Soria durante la pandemia del COVID-19, nuestra dulcería nació con la misión de brindar momentos de alegría inolvidables.

            Además de ofrecer golosinas de la más alta calidad, queremos transportar a nuestros visitantes a un mundo mágico inspirado en la película de PETER PAN. En este mundo, los niños no crecen, no tienen preocupaciones y solo conocen la felicidad.

            En nuestras instalaciones, encontrarás áreas temáticas únicas que harán que tanto niños como adultos se sumerjan en una experiencia llena de magia y dulzura, donde la imaginación no tiene límites.

            NUNCA JAMÁS no es solo una dulcería; es un espacio donde los sueños se convierten en realidad y los momentos en familia se transforman en recuerdos inolvidables.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
