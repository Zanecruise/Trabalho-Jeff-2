// usuarioRoutes.ts
import { Router } from 'express';
import {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
} from './usuarioController';
import dbPromise from './db'; // ajuste o caminho conforme necessário


const router = Router();

// Criar usuário
router.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body;
    console.log('Recebendo dados:', req.body);

    try {
        const db = await dbPromise;
        const result = await db.run('INSERT INTO USUARIO (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha]);
        console.log('Usuário inserido com ID:', result.lastID); // Log do ID do novo usuário
        res.status(201).json({ id: result.lastID }); // Resposta com o ID do novo usuário
    } catch (err: any) {
        console.error('Erro ao inserir usuário:', err);
        res.status(400).json({ error: (err as Error).message }); // Use a afirmação de tipo
    }
    
});


// Ler usuários
router.get('/usuarios', async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

// Atualizar usuário
router.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    try {
        const user = await updateUser(Number(id), nome, email, senha);
        res.status(200).json(user);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

// Deletar usuário
router.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await deleteUser(Number(id));
        res.status(200).json(result);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

export default router;
