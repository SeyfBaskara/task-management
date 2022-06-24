"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const taskSchema = new mongoose_1.Schema({
    _id: { type: String, default: uuid_1.v4 },
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
    },
    subTask: [{ type: String, ref: 'SubTask' }],
});
const Task = (0, mongoose_1.model)('Task', taskSchema);
exports.default = Task;
//# sourceMappingURL=Task.js.map