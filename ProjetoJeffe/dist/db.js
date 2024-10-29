"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// db.ts
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
const path_1 = __importDefault(require("path"));
const DB_PATH = path_1.default.resolve(__dirname, 'bancoJeffe.sqlite'); // Altere 'database.db' para o nome do seu banco de dados
const dbPromise = (0, sqlite_1.open)({
    filename: DB_PATH,
    driver: sqlite3_1.default.Database,
});
console.log(`Conectando ao banco de dados em: ${DB_PATH}`);
exports.default = dbPromise;
