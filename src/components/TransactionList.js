import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../contexts/GlobalState';

export const TransactionList = () => {
    //mengambil transaction dr GlobalContext
    const { transactions } = useContext(GlobalContext);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {/* mengirim id dan transaction ke component Transaction */}
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    )
}