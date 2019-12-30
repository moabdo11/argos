import React, { Component } from 'react'



const TransactionDetails = props  =>  {
    const {itemCategory, itemNumber, itemName, itemSubtotal, transactionTax, taxAmount} = props 
    
        return (
            <div>
                <p className="category-title">{itemCategory}</p>
                <div className="item-details">
                    <p className="spacing-transaction">{itemNumber}</p>
                    <p className="spacing-transaction-name">{itemName}</p>
                    <p>{itemSubtotal}</p>
                </div>
                <div className="item-details">
                    <div>----------------</div>
                    <p className="subtotal-text">SUBTOTAL</p>
                    <p className="spacing-transaction-name">{itemSubtotal}</p>
                </div>
                <div className="item-details">
                    <p className="spacing-transaction">{transactionTax}</p>
                    <p className="spacing-transaction-name">{itemSubtotal}</p>
                    <p className="spacing-transaction-name">{taxAmount}</p>
                </div>
                <div className="item-details">
                    <div>----------------------</div>
                    <p className="subtotal-text">TOTAL</p>
                    <p className="spacing-transaction-name">{itemSubtotal}</p>
                </div>
             
            </div>
            
            
        )

}

export default TransactionDetails;
