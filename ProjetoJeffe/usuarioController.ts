// usuarioController.ts
import dbPromise from './db';

interface Usuario {
    id?: number;
    nome: string;
    email: string;
    senha: string;
}

const createUser = async (nome: string, email: string, senha: string): Promise<Usuario> => {
    const db = await dbPromise;
    const sql = 'INSERT INTO USUARIO (nome, email, senha) VALUES (?, ?, ?)';
    const result = await db.run(sql, [nome, email, senha]);
    return { id: result.lastID, nome, email, senha };
};

const getAllUsers = async (): Promise<Usuario[]> => {
    const db = await dbPromise;
    const sql = 'SELECT * FROM USUARIO';
    return db.all(sql);
};

const updateUser = async (id: number, nome: string, email: string, senha: string): Promise<Usuario> => {
    const db = await dbPromise;
    const sql = 'UPDATE USUARIO SET nome = ?, email = ?, senha = ? WHERE id = ?';
    await db.run(sql, [nome, email, senha, id]);
    return { id, nome, email, senha };
};

const deleteUser = async (id: number): Promise<{ message: string }> => {
    const db = await dbPromise;
    const sql = 'DELETE FROM USUARIO WHERE id = ?';
    await db.run(sql, id);
    return { message: 'Usuário deletado com sucesso!' };
};

export {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
};
