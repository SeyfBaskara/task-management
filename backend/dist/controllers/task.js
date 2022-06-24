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
exports.deleteTask = exports.updateTask = exports.getTasks = exports.createTask = void 0;
const Task_1 = __importDefault(require("../models/Task"));
const SubTask_1 = __importDefault(require("../models/SubTask"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, completed } = req.body;
    const newTask = new Task_1.default({ title, completed });
    try {
        yield newTask.save();
        res.status(201).json(newTask);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
});
exports.createTask = createTask;
const getTasks = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield Task_1.default.find({}).populate({ path: 'subTask' });
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getTasks = getTasks;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updates = Object.keys(req.body);
    const allowUpdates = ['title', 'completed'];
    const isValidoperation = updates.every((update) => allowUpdates.includes(update));
    if (!isValidoperation) {
        res.status(400).json({ error: 'Invalid updates!' });
    }
    else {
        try {
            const task = yield Task_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!task) {
                res.status(404).json();
            }
            else {
                res.status(201).json(task);
            }
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Task_1.default.findByIdAndDelete(req.params.id);
        yield SubTask_1.default.deleteMany({ taskID: req.params.id });
        if (!task) {
            res.status(404).json();
        }
        else {
            res.json(task);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteTask = deleteTask;
//# sourceMappingURL=task.js.map