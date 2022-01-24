import { GlobalContext } from "../context/GlobalState";
import { addCommas } from "../utils/format";
import { useContext } from "react";

type TransactionProps = {
  transaction: any;
};

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {" "}
          {sign}N{addCommas(Math.abs(transaction.amount))}
        </span>
        <button
          onClick={() => deleteTransaction && deleteTransaction(transaction._id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
