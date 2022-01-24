import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';
import { addCommas } from '../utils/format';

const IncomeExp: React.FC = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((transaction) => transaction.amount);
    const income = amounts.filter((item: any) => item > 0).reduce((acc: any, item: any) => (acc += item), 0).toFixed(2);

    const expense = amounts.filter((item: any) => item < 0).reduce((acc: any, item: any) => (acc += item), 0).toFixed(2);
    return <div className="inc__exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">
                N {addCommas(income)}
            </p>

            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    N {addCommas(expense)}
                </p>
            </div>
      </div>
  </div>;
};

export default IncomeExp;
