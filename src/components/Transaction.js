import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

export const Transaction = ({ transaction }) => {
    //mengambil deleteTransaction dr GlobalContext
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        // delete amount
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}