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
exports.deleteUser = exports.updateUser = exports.getAllUsers = exports.createUser = void 0;
// usuarioController.ts
const db_1 = __importDefault(require("./db"));
const createUser = (nome, email, senha) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield db_1.default;
    const sql = 'INSERT INTO USUARIO (nome, email, senha) VALUES (?, ?, ?)';
    const result = yield db.run(sql, [nome, email, senha]);
    return { id: result.lastID, nome, email, senha };
});
exports.createUser = createUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield db_1.default;
    const sql = 'SELECT * FROM USUARIO';
    return db.all(sql);
});
exports.getAllUsers = getAllUsers;
const updateUser = (id, nome, email, senha) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield db_1.default;
    const sql = 'UPDATE USUARIO SET nome = ?, email = ?, senha = ? WHERE id = ?';
    yield db.run(sql, [nome, email, senha, id]);
    return { id, nome, email, senha };
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield db_1.default;
    const sql = 'DELETE FROM USUARIO WHERE id = ?';
    yield db.run(sql, id);
    return { message: 'Usuário deletado com sucesso!' };
});
exports.deleteUser = deleteUser;
