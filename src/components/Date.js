import React, { Component } from 'react'
import Moment from 'react-moment';
import moment from 'moment';



class Date extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             date: moment()
        }
    }


    render() {
        return (
            <div>
                <Moment format="MM/DD/YYYY HH:mm">
                    {this.state.date}
                </Moment>
            </div>
        )
    }
}

export default Date;

