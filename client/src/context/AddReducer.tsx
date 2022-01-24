import { Action } from "./index";
import { ActionType } from "./actionType"

interface reducerState {
    loading: boolean,
    transactions: string[],
    error: string | null
}


const AddReducer = (state: reducerState, action: Action): reducerState => {
    switch (action.type) {
        case ActionType.ADD_TRANSACTION:
            return {
                ...state,
                loading: false,
                transactions: [action.payload, ...state.transactions]
            }
        
        case ActionType.REMOVE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter((transaction: any) => transaction._id !== action.payload)
            }
        
        case ActionType.GET_TRANSACTIONS:
            return {
                ...state,
                transactions: [...state.transactions, ...action.payload],
            }
        
        default:
            return state;
    }
}


export default AddReducer;