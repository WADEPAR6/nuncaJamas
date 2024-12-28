// services/productService.ts

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description?: string;
    category?: string;
    wholesalePrice?: number;
}

const BASE_URL = 'https://nuncajamas-backend.onrender.com/products';

// Obtener productos desde el backend
export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch(`${BASE_URL}`);
        if (!response.ok) {
            throw new Error('Error al obtener los productos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return [];
    }
};

// Crear un nuevo producto
export const createProduct = async (product: Product): Promise<Product> => {
    try {
        const response = await fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });

        if (!response.ok) {
            throw new Error('Error al crear el producto');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al crear el producto:', error);
        throw error;
    }
};

// Eliminar un producto
export const deleteProduct = async (id: string): Promise<void> => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el producto');
        }
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        throw error;
    }
};