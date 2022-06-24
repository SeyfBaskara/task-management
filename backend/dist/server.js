"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const index_1 = __importDefault(require("./src/index"));
const port = process.env.PORT;
index_1.default.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
//# sourceMappingURL=server.js.map