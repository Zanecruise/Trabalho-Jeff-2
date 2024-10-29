"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
const path_1 = __importDefault(require("path"));
// Usar process.cwd() para obter o diretório de trabalho atual
const DB_PATH = path_1.default.resolve(process.cwd(), 'bancoJeffe.sqlite');
const dbPromise = (0, sqlite_1.open)({
    filename: DB_PATH,
    driver: sqlite3_1.default.Database,
});
console.log(`Conectando ao banco de dados em: ${DB_PATH}`);
exports.default = dbPromise;
