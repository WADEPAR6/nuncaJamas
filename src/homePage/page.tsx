"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaCandyCane, FaCookie, FaIceCream, FaMugHot } from 'react-icons/fa';
import { fetchProducts, createProduct } from '@/services/productService';
import ProductModal from '@/components/ProductModal';
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  wholesalePrice?: number
}

const CandyMenu: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  const handleCreateProduct = async (productData: any) => {
    try {
      const createdProduct = await createProduct(productData);
      setProducts((prevProducts) => [...prevProducts, createdProduct]);
    } catch (error) {
      console.error('Error al crear el producto:', error);
    }
  };

  // const handleDeleteProduct = async (id: string) => {
  //   try {
  //     await deleteProduct(id);
  //     setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  //   } catch (error) {
  //     console.error('Error al eliminar el producto:', error);
  //   }
  // };

  return (
    <div className="container mx-auto">
      <div className="relative h-96 flex justify-center items-center w-full overflow-hidden">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6yIjEpfGRDu5O86u4_cPxP6Yga5wFAqExqENkhhRNT1g4z5_k9zRXVGWQ_ceFOs1FIk&usqp=CAU"
          alt="Fondo Dulce"
          width={1500}
          height={1500}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      <main className="py-16 mt-12 flex flex-col items-center">
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Bienvenido!
          </h2>
          <p className="text-lg">
            Un mundo magico que existe dentro de una estrella donde los niños son felices!
          </p>
        </section>

        <section className="categories flex justify-between items-center p-8 mb-16 w-5/6">
          <div className="category-container flex w-full justify-around items-center  ">
            <button className="category p-8 text-center bg-[#24768e] rounded-lg flex flex-col items-center">
              <FaCandyCane className="w-20 h-16 mb-4 text-[#65b449]" />
              <h3 className="font-bold text-2xl text-white">
                <p>Caramelos</p>
              </h3>
            </button>

            <button className="category items-center p-8 text-center bg-[#24768e] rounded-lg">
              <FaMugHot className="w-20 h-16 mb-4 text-[#65b449]" />
              <h3 className="font-bold text-2xl text-white">
                <p>Chocolates</p>
              </h3>
            </button>

            <button className="category items-center p-8 text-center bg-[#24768e] rounded-lg">
              <FaCookie className="w-20 h-16 mb-4 text-[#65b449]" />
              <h3 className="font-bold text-2xl text-white">
                <p>Galletas</p>
              </h3>
            </button>

            <button className="category items-center p-8 text-center bg-[#24768e] rounded-lg">
              <FaIceCream className="w-20 h-16 mb-4 text-[#65b449]" />
              <h3 className="font-bold text-2xl text-white">
                <p>Postres</p>
              </h3>
            </button>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-wrap justify-center gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="w-full md:w-1/2 lg:w-1/4 rounded shadow-md p-4 flex flex-col items-center">
                  <Image
                    src={product.image || '/default-image.jpg'}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-5/6 rounded"
                  />
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-lg">${product.price}</p>
                  {/* <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                  >
                    Eliminar
                  </button> */}
                </div>
              ))
            ) : (
              <p>Cargando productos...</p> // Mensaje mientras se cargan los productos
            )}
          </div>
        </section>
        {/* <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded"
        >
          Añadir Producto
        </button> */}
      </main >

      {/* Modal de Producto */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Cerrar modal
        onSubmit={handleCreateProduct} // Manejar envío de formulario
      />
    </div >
  );
};

export default CandyMenu;