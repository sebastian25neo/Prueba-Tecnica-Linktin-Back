import { Product } from '../models/ProductModel';

let productos: Product[] = [
    { id: 1, nombre: 'Celulares Iphone', precio: 5000000 ,  description:'Este es una celular' },
    { id: 2, nombre: 'Tablet', precio: 10000000,  description:'Este es una Tablet' }
];

export const ProductService = {
    getAllProducts: (): Product[] => {
        return productos;
    },
    getProductById: (id: number): Product | undefined => {
        return productos.find((p) => p.id === id);
    },
    createProduct: (producto: Product): boolean => {
        const id = productos.length + 1;
        const nuevoProducto = { ...producto, id }; 
        productos.push(nuevoProducto);
        return true;
    },
    updateProduct: (producto: Product): Product | undefined => {
        const indiceProducto =  productos.findIndex((p) => p.id === producto.id);

        if (indiceProducto === -1) {
            return undefined; // Producto no encontrado
        }
        productos[indiceProducto] = {
            ...productos[indiceProducto],
            nombre: producto.nombre,
            precio: producto.precio,
            description:producto.description
        };

        return productos[indiceProducto];
    },
    deleteProduct: (id: number): boolean => {
        const indiceProducto = productos.findIndex((p) => p.id === id);

        if (indiceProducto === -1) {
            return false; // Producto no encontrado
        }
        productos.splice(indiceProducto, 1);

        return true; // Producto eliminado correctamente
    },
};
