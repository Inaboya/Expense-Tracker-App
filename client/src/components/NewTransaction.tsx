import { GlobalContext } from '../context/GlobalState';
import { useState, useContext } from 'react';

const NewTransaction: React.FC = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState("");


    const { addTransaction } = useContext(GlobalContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTrans = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

       addTransaction && addTransaction(newTrans);
     }

   
    return <div>
        <h3> Add New Transaction </h3>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange= { (e) => setText(e.target.value)} placeholder="Enter text" />
            </div>

            <div className="form-control">
                <label htmlFor="amount"><br />(negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={ (e) => setAmount(e.target.value) } placeholder="Enter amount"/>
            </div>

            <button className="btn">Add Transaction</button>
        </form>
  </div>;
};

export default NewTransaction;
