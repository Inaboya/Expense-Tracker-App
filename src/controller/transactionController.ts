import express, { Request, Response, NextFunction } from "express";

//Input Transaction model

import { Transaction } from "../model/Transaction";

//@route GET api/v1/transaction
//@desc Get all transactions
//@access Public

export const getTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

//@route POST api/v1/transaction
//@desc Create a transaction
//@access Public

export const addTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error: any) {
    console.log(error);
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(
        (val: any) => val.message
      );
    }
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

//@route Delete api/v1/transaction/:id
//@desc Delete a transaction
//@access Public

export const delTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
