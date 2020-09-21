import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state => kondisi awal state
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

// Create context => react me-render komponen yang menerima objek 
//Context ini akan membaca nilai context saat ini dari pencocokan terdekat provider di atasnya (parent) dalam diagram.
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    //mengambil state dan dispatch dr app reducer
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions => mengirim action dan state ke app reducer
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        //memungkinkan komponen konsumsi (child) untuk menerima perubahan context
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>);
}