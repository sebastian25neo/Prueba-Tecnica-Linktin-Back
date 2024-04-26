import { Order } from '../models/OrderModel';
import { ProductService } from '../services/ProductService';

let pedidos: Order[] = [
    { id: 1, productoId: 1, cantidad: 2 },
    { id: 2, productoId: 2, cantidad: 1 }
];

export const OrderService = {
    getAllOrders: (): Order[] => {
        const ordersWithProductInfo: Order[] = pedidos.map((pedido) => {
            const product = ProductService.getProductById(pedido.productoId);
            if (product) {
                return { ...pedido, nombreProducto: product.nombre, precioProducto: product.precio };
            } else {
                return pedido;
            }
        });
        return ordersWithProductInfo;
    },
    getOrderById: (id: number): Order | undefined => {
        return pedidos.find((p) => p.id === id);
    },
    createOrder: (pedido: Order): boolean => {
        const id = pedidos.length + 1;
        const nuevoPedido = {  ...pedido,id };
        pedidos.push(nuevoPedido);
        return true;
    },
    updateOrder: (pedido: Order): Order | undefined => {
        const indicePedido  =  pedidos.findIndex((p) => p.id === pedido.id);

        if (indicePedido  === -1) {
            return undefined; // Producto no encontrado
        }
        pedidos[indicePedido] = {
            ...pedidos[indicePedido],
            cantidad: pedido.cantidad,
        };

        return pedidos[indicePedido];
    },
    deleteOrder: (id: number): boolean  => {
        const indicePedido  =  pedidos.findIndex((p) => p.id === id);

        if (indicePedido  === -1) {
            return false; // Producto no encontrado
        }

        pedidos.splice(indicePedido, 1);

        return true; // Producto eliminado correctamente
    },

};
