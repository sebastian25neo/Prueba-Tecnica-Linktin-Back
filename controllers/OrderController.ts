import { Request, Response } from 'express';
import { OrderService } from '../services/OrderService';

export const OrderController = {
    getAllOrders: (_req: Request, res: Response) => {
        const pedidos = OrderService.getAllOrders();
        res.json(pedidos);
    },
    getOrderById: (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const pedido = OrderService.getOrderById(id);
        if (pedido) {
            res.json(pedido);
        } else {
            res.status(404).json({ message: 'Pedido no encontrado' });
        }
    },
    createOrder: (req: Request, res: Response) => {
        const { productoId, cantidad } = req.body;
        const nuevoPedido = OrderService.createOrder({ id:0 ,productoId, cantidad });
       // res.status(201).json(nuevoPedido);
        if (nuevoPedido) {
            res.status(201).json({ message: 'Se Compro el producto correctamente' });
        } else {
            res.status(404).json({ message: 'No se pudo compar el producto' });
        }
    }, 
    updateOrder: (req: Request, res: Response) => {
        const { id,productoId ,cantidad } = req.body;
        const UpdateProducto = OrderService.updateOrder({ id,productoId,cantidad});    
        if (UpdateProducto) {
            res.status(201).json(UpdateProducto);
        } else {
            res.status(400).json({ message: 'No se Actualizo la cantidad que productos a comprar' });
        }
    },
    deleteOrder: (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const pedido = OrderService.deleteOrder(id);
        if (pedido) {
            res.status(201).json({ message: 'Se eliminó la comprar correctamente' });
        } else {
            res.status(404).json({ message: 'Pedido no encontrado' });
        }
    }
};
