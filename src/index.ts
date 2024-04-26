import express from 'express';
import { ProductController } from '../controllers/ProductController';
import { OrderController } from '../controllers/OrderController';
import { AuthService } from '../services/AuthService';
import { authenticateToken } from '../middleware/AuthMiddleware';
import cors from 'cors';



const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const token = AuthService.login(username, password);
    if (token) {
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
});

app.use(authenticateToken);

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
app.put('/pedidosUpdate', OrderController.updateOrder);
app.delete('/pedidosDelete/:id', OrderController.deleteOrder);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
