// src/components/footer/footer.component.tsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex justify-around">
                <div>
                    <h3 className="text-lg font-semibold border-b-2 border-blue-400 pb-2">
                        <p>
                            Nunca Jamas
                        </p>
                    </h3>
                    <p>Sra. consuelo Soria</p>
                    <p>Gerente General</p>

                </div>
                <div className="flex-1 px-4">
                    <h3 className="text-lg font-semibold border-b-2 border-blue-400 pb-2">
                        <p>
                            Información de la Empresa
                        </p>
                    </h3>
                    <p>Nombre de la Empresa</p>
                    <p>Dirección: Calle Ejemplo 123</p>
                    <p>Teléfono: (123) 456-7890</p>
                    <p>Email: info@empresa.com</p>
                </div>
                <div className="flex-1 px-4">
                    <h3 className="text-lg font-semibold border-b-2 border-blue-400 pb-2">
                        <p>
                            Historia
                        </p>
                    </h3>
                    <ul className="list-none p-0">
                        <li className="my-1"><a href="/" className="text-blue-400 hover:underline">Inicio</a></li>
                        <li className="my-1"><a href="/about" className="text-blue-400 hover:underline">Sobre Nosotros</a></li>
                        <li className="my-1"><a href="/about/misionvision" className="text-blue-400 hover:underline">Misión y Visión</a></li>
                    </ul>
                </div>
                <div className="flex-1 px-4">
                    <h3 className="text-lg font-semibold border-b-2 border-blue-400 pb-2">
                        <p>
                            Redes Sociales
                        </p>
                    </h3>
                    <ul className="list-none p-0">
                        <li className="my-1"><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Facebook</a></li>
                        <li className="my-1"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Twitter</a></li>
                        <li className="my-1"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Instagram</a></li>
                        <li className="my-1"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</ a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-6">
                <p>© 2024 Nunca Jamas. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;