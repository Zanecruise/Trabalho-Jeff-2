import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

// Usar process.cwd() para obter o diretório de trabalho atual
const DB_PATH = path.resolve(process.cwd(), 'bancoJeffe.sqlite');

const dbPromise = open({
    filename: DB_PATH,
    driver: sqlite3.Database,
});

console.log(`Conectando ao banco de dados em: ${DB_PATH}`);

export default dbPromise;
