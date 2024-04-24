import { Order } from '../models/OrderModel';

let pedidos: Order[] = [
    { id: 1, productoId: 1, cantidad: 2 },
    { id: 2, productoId: 2, cantidad: 1 }
];

export const OrderService = {
    getAllOrders: (): Order[] => {
        return pedidos;
    },
    getOrderById: (id: number): Order | undefined => {
        return pedidos.find((p) => p.id === id);
    },
    createOrder: (pedido: Order): Order => {
        const id = pedidos.length + 1;
        const nuevoPedido = {  ...pedido,id };
        pedidos.push(nuevoPedido);
        return nuevoPedido;
    }
};
