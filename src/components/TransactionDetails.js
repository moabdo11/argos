import React, { Component } from 'react'



const TransactionDetails = props  =>  {
    const {itemCategory, itemNumber, itemName, itemSubtotal} = props 
        return (
            <div>
                <p className="item-details">{itemCategory}</p>
                <div className="item-details">
                
                <p className="spacing-transaction">{itemNumber}</p>
                <p className="spacing-transaction-name">{itemName}</p>
                <p>{itemSubtotal}</p>
                </div>
             
            </div>
        )

}

export default TransactionDetails;
