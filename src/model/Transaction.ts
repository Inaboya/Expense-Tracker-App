import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface TransactionInterface extends mongoose.Document {
  _id: string;
  text: string;
  amount: number;
}
const TransactionSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, "Please fill up this field"],
      trim: true,
    },

    amount: {
      type: Number,
      required: [true, "Add a negative or positive number"],
    },
  },
  { timestamps: true }
);

export const Transaction = mongoose.model<TransactionInterface>(
  "Transaction",
  TransactionSchema
);
