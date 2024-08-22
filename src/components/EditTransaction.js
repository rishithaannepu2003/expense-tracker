import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const EditTransaction = () => {
  const { currentTransaction, updateTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (currentTransaction) {
      setText(currentTransaction.text);
      setAmount(currentTransaction.amount);
    }
  }, [currentTransaction]);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedTransaction = {
      ...currentTransaction,
      text,
      amount: +amount,
    };

    updateTransaction(updatedTransaction);
  };

  if (!currentTransaction) return null; // Don't render if no transaction is being edited

  return (
    <div>
      <h3>Edit Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Save</button>
      </form>
    </div>
  );
};
