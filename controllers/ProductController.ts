import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

export const ProductController = {
    getAllProducts: (_req: Request, res: Response) => {
        const productos = ProductService.getAllProducts();
        res.json(productos);
    },
    getProductById: (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const producto = ProductService.getProductById(id);
        if (producto) {
            res.json(producto); 
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    },
    createProduct: (req: Request, res: Response) => {
        const { nombre, precio } = req.body;
        const nuevoProducto = ProductService.createProduct({ id:0, nombre, precio });
        res.status(201).json(nuevoProducto);
    },
    updateProduct: (req: Request, res: Response) => {
        const { id ,nombre, precio } = req.body;
        const UpdateProducto = ProductService.updateProduct({ id, nombre, precio });    
        if (UpdateProducto) {
            res.status(201).json(UpdateProducto);
        } else {
            res.status(400).json({ message: 'No se Actualizo el producto' });
        }
    },
    deleteProduct: (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const productoDelete = ProductService.deleteProduct(id);
        if (productoDelete) {
            res.status(201).json({ message: 'Se eliminó correctamente el producto' });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    },
};
