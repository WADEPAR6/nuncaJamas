/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// components/ProductModal.tsx
"use client";
import React, { useState } from 'react';

interface ProductFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (productData: any) => void;
}

const ProductModal: React.FC<ProductFormProps> = ({ isOpen, onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState<number | string>('');
    const [description, setDescription] = useState('');
    const [wholesalePrice, setWholesalePrice] = useState<number | string>('');
    const [image, setImage] = useState<File | null>(null);
    const [imageBase64, setImageBase64] = useState<string | null>(null);

    // Convertir imagen a base64 cuando se seleccione
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageBase64(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const productData = {
            name,
            price: parseFloat(price.toString()),
            description,
            image: imageBase64,
            wholesalePrice: parseFloat(wholesalePrice.toString()),
        };

        onSubmit(productData);
        onClose(); // Cerrar el modal después de enviar
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Agregar Producto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Precio</label>
                        <input
                            type="number"
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Descripción</label>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Precio Al Por Mayor</label>
                        <input
                            type="number"
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                            value={wholesalePrice}
                            onChange={(e) => setWholesalePrice(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Imagen</label>
                        <input
                            type="file"
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-green-500 text-white font-bold py-2 px-4 rounded"
                        >
                            Crear Producto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductModal;
