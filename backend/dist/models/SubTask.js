"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const subTaskSchema = new mongoose_1.Schema({
    _id: { type: String, default: uuid_1.v4 },
    taskID: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
    completed: {
        type: Boolean,
    },
});
const SubTask = (0, mongoose_1.model)('SubTask', subTaskSchema);
exports.default = SubTask;
//# sourceMappingURL=SubTask.js.map