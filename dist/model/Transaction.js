"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const TransactionSchema = new Schema({
    text: {
        type: String,
        required: [true, "Please fill up this field"],
        trim: true,
    },
    amount: {
        type: Number,
        required: [true, "Add a negative or positive number"],
    },
}, { timestamps: true });
exports.Transaction = mongoose_1.default.model("Transaction", TransactionSchema);
//# sourceMappingURL=Transaction.js.map