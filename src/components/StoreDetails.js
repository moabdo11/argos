import React, { Component } from 'react';



const StoreDetails = props    => {
    const {storeLocation, phoneNumber} = props 
    return (
        <div className="store-details">
            <p>{storeLocation} - {phoneNumber}</p>
        </div>
    )
}

export default StoreDetails;