import express from 'express';
import bodyParser from 'body-parser';
import usuarioRoutes from './usuarioRoutes'; // ajuste o caminho conforme necessário

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); // Para entender JSON no corpo da requisição

// Middleware para log de requisições
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Rotas
app.use('/api', usuarioRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
