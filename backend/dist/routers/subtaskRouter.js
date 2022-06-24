"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const subtask_1 = require("../controllers/subtask");
const router = express_1.default.Router();
router.post('/:id/create', subtask_1.createSubTask);
router.get('/', subtask_1.getSubTasks);
router.patch('/:id', subtask_1.updateSubTask);
router.delete('/:id', subtask_1.deleteSubTask);
exports.default = router;
//# sourceMappingURL=subtaskRouter.js.map