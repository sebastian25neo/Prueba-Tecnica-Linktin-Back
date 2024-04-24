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
        res.status(201).json(nuevoPedido);
    }
};
