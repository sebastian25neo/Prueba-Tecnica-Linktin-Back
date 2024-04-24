import { Product } from '../models/ProductModel';

let productos: Product[] = [
    { id: 1, nombre: 'Producto 1', precio: 10.99 },
    { id: 2, nombre: 'Producto 2', precio: 20.49 }
];

export const ProductService = {
    getAllProducts: (): Product[] => {
        return productos;
    },
    getProductById: (id: number): Product | undefined => {
        return productos.find((p) => p.id === id);
    },
    createProduct: (producto: Product): Product => {
        const id = productos.length + 1;
        const nuevoProducto = { ...producto, id }; 
        productos.push(nuevoProducto);
        return nuevoProducto;
    },
    updateProduct: (producto: Product): Product | undefined => {
        const indiceProducto =  productos.findIndex((p) => p.id === producto.id);

        if (indiceProducto === -1) {
            return undefined; // Producto no encontrado
        }
        productos[indiceProducto] = {
            ...productos[indiceProducto],
            nombre: producto.nombre,
            precio: producto.precio
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
