import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log("Submit props",this.props)
    console.log("Submit state", this.state)
    this.props.dispatch(this.props.addRestaurant(this.state))
  }

  render() {
    // console.log(this.props)
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

function mapStateToProps(state,props){
  // console.log(state)
  // console.log(props)
  return {restaurants: [...state.restaurants]}
}

function mapDispatchToProps(dispatch) {
  
  return {addRestaurant: addRestaurant, dispatch: dispatch}
}

//connect this component by wrapping RestaurantInput below
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInput)
