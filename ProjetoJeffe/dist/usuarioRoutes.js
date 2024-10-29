"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// usuarioRoutes.ts
const express_1 = require("express");
const usuarioController_1 = require("./usuarioController");
const db_1 = __importDefault(require("./db")); // ajuste o caminho conforme necessário
const router = (0, express_1.Router)();
// Criar usuário
router.post('/usuarios', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, senha } = req.body;
    console.log('Recebendo dados:', req.body);
    try {
        const db = yield db_1.default;
        const result = yield db.run('INSERT INTO USUARIO (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha]);
        console.log('Usuário inserido com ID:', result.lastID); // Log do ID do novo usuário
        res.status(201).json({ id: result.lastID }); // Resposta com o ID do novo usuário
    }
    catch (err) {
        console.error('Erro ao inserir usuário:', err);
        res.status(400).json({ error: err.message }); // Use a afirmação de tipo
    }
}));
// Ler usuários
router.get('/usuarios', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, usuarioController_1.getAllUsers)();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}));
// Atualizar usuário
router.put('/usuarios/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    try {
        const user = yield (0, usuarioController_1.updateUser)(Number(id), nome, email, senha);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}));
// Deletar usuário
router.delete('/usuarios/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield (0, usuarioController_1.deleteUser)(Number(id));
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}));
exports.default = router;
