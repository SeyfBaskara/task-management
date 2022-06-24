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
exports.deleteSubTask = exports.updateSubTask = exports.getSubTasks = exports.createSubTask = void 0;
const SubTask_1 = __importDefault(require("../models/SubTask"));
const Task_1 = __importDefault(require("../models/Task"));
const createSubTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { description, completed, price } = req.body;
    const newSubTask = new SubTask_1.default({ description, completed, price, taskID: req.params.id });
    try {
        yield Task_1.default.findByIdAndUpdate(req.params.id, { $push: { subTask: newSubTask } }, { new: true, runValidators: true });
        yield newSubTask.save();
        res.status(201).json(newSubTask);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
});
exports.createSubTask = createSubTask;
const getSubTasks = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subtasks = yield SubTask_1.default.find();
        res.status(200).json(subtasks);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getSubTasks = getSubTasks;
const updateSubTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updates = Object.keys(req.body);
    const allowUpdates = ['description', 'completed', 'price'];
    const isValidoperation = updates.every((update) => allowUpdates.includes(update));
    if (!isValidoperation) {
        res.status(400).json({ error: 'Invalid updates!' });
    }
    else {
        try {
            const subtask = yield SubTask_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!subtask) {
                res.status(404).json();
            }
            else {
                res.status(201).json(subtask);
            }
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
});
exports.updateSubTask = updateSubTask;
const deleteSubTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subtask = yield SubTask_1.default.findByIdAndDelete(req.params.id);
        if (!subtask) {
            res.status(404).json();
        }
        else {
            res.json(subtask);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteSubTask = deleteSubTask;
//# sourceMappingURL=subtask.js.map