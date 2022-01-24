import axios from "axios";
import { createContext, useReducer } from "react";
import { ActionType } from "./actionType";
import AddReducer from "./AddReducer";

interface reducerState {
  loading: boolean;
  transactions: any[];
  error: string | null;
  getTransactions?: () => void;
  deleteTransaction?: (id: string) => void;
  addTransaction?: (transaction: any) => void;
}

const initialState: reducerState = {
  transactions: [],
  error: null,
  loading: false,
};

export const GlobalContext = createContext({} as reducerState);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AddReducer, initialState);

  const getTransactions = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/transactions");
      console.log(res.data.data)

      dispatch({
        type: ActionType.GET_TRANSACTIONS,
        payload: res.data.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.TRANSACTION_ERROR,
        payload: error.response.data.error,
      });
    }
  };

  const deleteTransaction = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/transactions/${id}`);

      dispatch({
        type: ActionType.REMOVE_TRANSACTION,
        payload: id,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.TRANSACTION_ERROR,
        payload: error.response.data.error,
      });
    }
  };

  const addTransaction = async (transaction: any) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/transactions",
        transaction,
        config
      );
      console.log(res.data.data);

      dispatch({
        type: ActionType.ADD_TRANSACTION,
        payload: res.data.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.TRANSACTION_ERROR,
        payload: error.response.data.error,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
