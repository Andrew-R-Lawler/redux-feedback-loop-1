import React, { Component } from 'react';
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';


class App extends Component {

  componentDidMount() {
    this.getFeedback();
  }

  getFeedback = () => {
    console.log( `in getFeedback...` );
    
    axios({
      method: 'GET',
      url: '/feedback'
    })
    .then( (response) => {
      console.log( `Got feedback data from server!` );
      const action = { type: 'GET_FEEDBACK', payload: response.data };
      this.props.dispatch( action );
    })
    .catch( (error) => {
      console.log( `Error getting feedback.`, error );
      alert( `Sorry, couldn't get feedback data. Try again later.` );
    })
  }

  submitFeedback = (feedback) => {
    console.log( `in submitFeedback...`, feedback );

    axios({
      method: 'POST',
      url: '/feedback',
      data: feedback
    })
    .then( (response) => {
      console.log( `Added feedback.` );
      const action = { type: 'EMPTY' };
      this.props.dispatch( action );

    })
    .catch( (error) => {
      console.log( `Error adding feedback.`, error );
      alert( `Could not submit feedback. Try again later.`);
    })
  } 

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <section>
          
        </section>
      </div>
      </Router>
    );
  }
}

export default connect() (App);
