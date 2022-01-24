import { ActionType } from "./actionType";

interface ADD_TRANSACTION {
    type: typeof ActionType.ADD_TRANSACTION;
    payload: string;
}

interface REMOVE_TRANSACTION {
    type: typeof ActionType.REMOVE_TRANSACTION;
    payload: string;
}

interface GET_TRANSACTIONS {
    type: typeof ActionType.GET_TRANSACTIONS;
    payload: string[];  
}

 interface TRANSACTION_ERROR {
   type: typeof ActionType.TRANSACTION_ERROR;
   payload: string;
 }

export type Action = ADD_TRANSACTION | REMOVE_TRANSACTION | GET_TRANSACTIONS  | TRANSACTION_ERROR;