import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions/index";
import { bindActionCreators } from "redux";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      term: ""
    };
    this.onFormSubmit=this.onFormSubmit.bind(this) //bind the context
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    //prevent the default behaviour, which is A POST request is sent when user clicks submit.
    //(we don't want that,
    // we want to make an API request, fetch data from somewhere)
    event.preventDefault();
    this.props.fetchWeather(this.state.term)
    this.setState({term:''}) //clear input
  }
  render(props) {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          className="form-control"
          placeholder="Get a five-day forecast of your fav cities"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatToProps)(SearchBar)
