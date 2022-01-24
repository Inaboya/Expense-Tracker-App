import './App.css';
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExp from "./components/IncomeExp";
import TransactionLists from "./components/TransactionLists";
import NewTransaction from "./components/NewTransaction";
// import { GlobalContext } from "./context/GlobalState";
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />

      <div className="container">
        <Balance />
        <IncomeExp />
        <TransactionLists />
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
