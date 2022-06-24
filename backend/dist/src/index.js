"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../database/db"));
const taskRouter_1 = __importDefault(require("../routers/taskRouter"));
const subtaskRouter_1 = __importDefault(require("../routers/subtaskRouter"));
const cors_1 = __importDefault(require("cors"));
(0, db_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/tasks', taskRouter_1.default);
app.use('/api/subtask', subtaskRouter_1.default);
exports.default = app;
//# sourceMappingURL=index.js.map