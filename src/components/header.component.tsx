"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LoginModal from './LoginModal';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-3/4 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"} p-4`}>
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">NUNCA JAMAS</h1>
                <Image src={isScrolled ? "/imgs/Solo-peterPan-Azul.png" : "/imgs/Solo-peterPan-Verde.png"} alt="Logo" width={50} height={50} />
                <nav className="flex-1 text-center">
                    <ul className="flex justify-center space-x-8">
                        <li><a href="/" className="hover:underline">INICIO</a></li>
                        <li>
                            <div className="relative group">
                                <button className="hover:underline">
                                    <p>
                                        SOBRE NOSOTROS
                                    </p>
                                </button>
                                <div className="absolute hidden group-hover:block bg-white text-black p-2 rounded shadow-lg">
                                    <ul>
                                        <li><a href="/about/misionvision" className="block hover:underline">Misión-Visión</a></li>
                                        <li><a href="/about" className="block hover:underline">Sobre Nosotros</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button 
                            // onClick={() => setIsModalOpen(true)} 
                            className="hover:underline">
                                <p>
                                    Iniciar Sesión
                                </p>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="ml-4">
                    <FaSearch className="text-black text-xl cursor-pointer" />
                </div>
            </div>
            <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </header >
    );
};

export default Header;