// Transaction.js
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return '$ ' + p[0].split('').reverse().reduce((acc, num, i) => num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc, '') + '.' + p[1];
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction, startEditTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
      <button onClick={() => startEditTransaction(transaction)} className="edit-btn">Edit</button>
    </li>
  );
};
