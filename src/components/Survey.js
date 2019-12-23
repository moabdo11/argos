import React, { Component } from 'react';

import * as Survey from 'survey-react';
import 'survey-react/survey.css';

// import 'bootstrap/dist/css/bootstrap.css'
// import './style.css';

class SurveyReceipt extends Component {
  componentWillMount() {    
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  }

  render() {    

    Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    "completedHtml": "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great product!</h5>",
    "completedHtmlOnCondition": [
        {
            "expression": "{nps_score} > 8",
            "html": "<h3>Thank you for your feedback.</h3> <h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>"
        }, {
            "expression": "{nps_score} < 7",
            "html": "<h3>Thank you for your feedback.</h3> <h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5>\n"
        }
    ],
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "rating",
                    "name": "nps_score",
                    "title": "Would you recommend Target to a friend or family member?",
                    "isRequired": true,
                    "rateMin": 0,
                    "rateMax": 10,
                    "minRateDescription": "(Most unlikely)",
                    "maxRateDescription": "(Most likely)"
                }, 
            ]
        }
    ],
    "showQuestionNumbers": "off"
};

    var model = new Survey.Model(json);    
    return (
      <Survey.Survey model={model}/>
    );
  }
}

export default SurveyReceipt;