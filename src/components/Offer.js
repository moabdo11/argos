import React, { Component } from 'react'
import redCardLogo from '../../src/RedCard_PrimaryLogoLockup.png'

class Offer extends Component {
    render() {
        return (
            <div>
                <img src={redCardLogo} className="redcard-logo" alt="red card logo" />
                <div className="offer-tagline">
                    <p className="offer-tagline-top">Everyday Savings.</p>
                    <p className="offer-tagline-bottom">Exclusive Extras.</p>
                </div>
                <div className="offer-text">
                    <p>Elevate your Target run with Target debit or credit REDcard.<br></br> <span className="redcard-apply">Apply now</span> in store or at <a href="https://rcam.target.com/#/" target="_blank">target.com/REDcard.</a> </p>
                </div>
            </div>
            
        )
    }
}

export default Offer;
