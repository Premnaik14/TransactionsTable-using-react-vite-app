import React from 'react'
import "./TransactionTable.css";
const transactions=[
    {card:" *4920", type: "Credit", date: "Jun 24, 2023", time: "10:00 am",status:"Verified",amount:2890.00},
    {card:" *4230", type: "Debit", date: "Jun 20, 2023", time: "11:00 am",status:"Rejected",amount:-49.00},
    {card:" *5510", type: "Credit", date: "Jun 19, 2023", time: "2:00 pm",status:"Pending",amount:-80.00},
    {card:" *0983", type: "Debit", date: "Jun 18, 2023", time: "11:00 am",status:"Verified",amount:-30.00},
    {card:" *4443", type: "Credit", date: "Jun 17, 2023", time: "10:00 am",status:"Verified",amount:1500.00},
    {card:" *7635", type: "Debit", date: "Jun 14, 2023", time: "9:00 am",status:"Rejected",amount:-200.00},

];

const TransactionsTable= () => {
    return(
   <div className="table-container">
   <h2>Recent Transactions</h2>
   <button className="more-btn">•••</button>
   
   <h3>Transactions Overview</h3>
   <table>
    <thead>
        <tr>
            <th>Card</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount ($)</th>
        </tr>
        </thead>
        <tbody>
            {transactions.map((txn, index) =>(
                <tr key={index}>
                 <td>{txn.card}<br /><span className ="type">{txn.type}</span></td>
                  <td>{txn.date}<br /><span className="time">{txn.time}</span></td>
                  <td className ={`status ${txn.status.toLowerCase()}`}>{txn.status}</td>
                  <td className={`amount ${txn.amount > 0 ? "positive" : "negative"}`}>
                  {txn.amount.toFixed(2)}
                  </td>
                </tr>
            ))}
        </tbody>
    
   </table>
   </div>
    );
};

export default TransactionsTable