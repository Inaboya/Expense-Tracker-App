import express from "express";

import {
  getTransactions,
  addTransaction,
  delTransaction,
} from "../controller/transactionController";

const router = express.Router();

router.route("/").get(getTransactions).post(addTransaction);

router.route("/:id").delete(delTransaction);

export default router;
