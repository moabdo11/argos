import React, { Component } from 'react';
import Date from './components/Date';
import brandlogo from '../src/target-logo.svg';
import Barcode from './components/Barcode';
import StoreDetails from './components/StoreDetails';
import TransactionDetails from './components/TransactionDetails';
import Offer from './components/Offer';

import './App.css';
import SurveyReceipt from './components/Survey';



class App extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      value: 'TRANSACTION CODE',
    };
  }

  update(event) {
    this.setState({
      value: event.target.value,
    });
  }


render () {
    return (
      <div className="App container-fluid">
        <header className="App-header">
          <img src={brandlogo} className="App-logo" alt="logo" />

          <StoreDetails storeLocation="EVERETT" phoneNumber="617-420-0000"></StoreDetails>
          <Date />
          <Barcode 
          value={this.state.value}
          width={this.state.width}
          height={this.state.height}
          format={this.state.format}
          displayValue={this.state.displayValue}
          fontOptions={this.state.fontOptions}
          font={this.state.font}
          textAlign={this.state.center}
          textPosition={this.state.textPosition}
          textMargin={this.state.textMargin}
          fontSize={this.state.fontSize}
          background={this.state.background}
          lineColor={this.state.lineColor}
          margin={this.state.margin}
          marginTop={this.state.marginTop}
          marginBottom={this.state.marginBottom}
          marginLeft={this.state.marginLeft}
          marginRight={this.state.marginRight}
        />
        </header>
        <main className="transaction-details" >
          <TransactionDetails 
            itemCategory="HEALTH-BEAUTY-COSMETICS" 
            itemNumber="245070170"
            itemName="UPUP ADHESIV"
            itemSubtotal="$1.89"
            transactionTax="T = MA TAX 6.2500% on"
            item
           
          />
        </main>
        <hr className="divider"></hr>
        <Offer />
        
        <div className="surveyjs">
          <SurveyReceipt />
        </div>
      </div>
    );
  }
}

export default App;
