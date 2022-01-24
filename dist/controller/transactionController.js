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
Object.defineProperty(exports, "__esModule", { value: true });
exports.delTransaction = exports.addTransaction = exports.getTransactions = void 0;
//Input Transaction model
const Transaction_1 = require("../model/Transaction");
//@route GET api/v1/transaction
//@desc Get all transactions
//@access Public
const getTransactions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transactions = yield Transaction_1.Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: "Internal Server Error",
        });
    }
});
exports.getTransactions = getTransactions;
//@route POST api/v1/transaction
//@desc Create a transaction
//@access Public
const addTransaction = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { text, amount } = req.body;
        const transaction = yield Transaction_1.Transaction.create(req.body);
        return res.status(201).json({
            success: true,
            data: transaction,
        });
    }
    catch (error) {
        console.log(error);
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map((val) => val.message);
        }
        res.status(500).json({
            success: false,
            error: "Internal Server Error",
        });
    }
});
exports.addTransaction = addTransaction;
//@route Delete api/v1/transaction/:id
//@desc Delete a transaction
//@access Public
const delTransaction = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = yield Transaction_1.Transaction.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: "No transaction found",
            });
        }
        yield transaction.remove();
        return res.status(200).json({
            success: true,
            data: {},
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: "Internal Server Error",
        });
    }
});
exports.delTransaction = delTransaction;
//# sourceMappingURL=transactionController.js.map