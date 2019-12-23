import React, { Component } from 'react';
import Date from './components/Date';
import brandlogo from '../src/target-logo@logotyp.us.svg';
import Barcode from './components/Barcode';

import './App.css';
import SurveyReceipt from './components/Survey';

class App extends Component  {


render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={brandlogo} className="App-logo" alt="logo" />
          <Date />
        </header>
        <Barcode />
        
        <div className="surveyjs">
        <SurveyReceipt />
        </div>
      </div>
    );
  }
}

export default App;
