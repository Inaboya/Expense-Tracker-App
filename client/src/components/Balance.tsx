import { addCommas } from "../utils/format";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const Balance: React.FC = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);
    return <div>
        <h4>
            Your Balance
        </h4>
        
        <h1>N{ addCommas(total)}</h1>
  </div>;
};

export default Balance;


