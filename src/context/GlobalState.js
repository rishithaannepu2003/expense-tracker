import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [],
  currentTransaction: null
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
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

  function startEditTransaction(transaction) {
    dispatch({
      type: 'START_EDIT_TRANSACTION',
      payload: transaction
    });
  }

  function updateTransaction(updatedTransaction) {
    dispatch({
      type: 'UPDATE_TRANSACTION',
      payload: updatedTransaction
    });
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      currentTransaction: state.currentTransaction,
      deleteTransaction,
      addTransaction,
      startEditTransaction, // This must be provided
      updateTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

