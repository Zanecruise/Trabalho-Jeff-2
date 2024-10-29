"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const usuarioRoutes_1 = __importDefault(require("./usuarioRoutes")); // ajuste o caminho conforme necessário
const app = (0, express_1.default)();
const PORT = 3000;
app.use(body_parser_1.default.json()); // Para entender JSON no corpo da requisição
// Middleware para log de requisições
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
// Rotas
app.use('/api', usuarioRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
