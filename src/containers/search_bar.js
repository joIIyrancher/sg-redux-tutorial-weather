// controlled field is a form element where the value of the input is
// set by the state of our component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    // prevent submit event on the form by passing an event handler to onSubmit
    
    // why use a form? we get functionalities like enter to submit and enter button
    // associated with the input field
    return (
      <form onSubmit={ this.onFormSubmit } className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value }) } />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>        
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null for the first argument because we are not passing in mapStateToProps
export default connect(null, mapDispatchToProps)(SearchBar);