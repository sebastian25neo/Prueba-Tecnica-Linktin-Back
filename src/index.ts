import express from 'express';
import { ProductController } from '../controllers/ProductController';
import { OrderController } from '../controllers/OrderController';

const app = express();
const PORT = 3000;

app.use(express.json());

// Rutas para el servicio de Catálogo de Productos
app.get('/productos', ProductController.getAllProducts);
app.get('/productos/:id', ProductController.getProductById);
app.post('/productos', ProductController.createProduct);
app.put('/productosUpdate', ProductController.updateProduct);
app.delete('/productosDelete/:id', ProductController.deleteProduct);

// Rutas para el servicio de Gestión de Pedidos
app.get('/pedidos', OrderController.getAllOrders);
app.get('/pedidos/:id', OrderController.getOrderById);
app.post('/pedidos', OrderController.createOrder);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
