import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // this.props.dispatch(addRestaurant(this.state))
    this.props.addRestaurant(this.state)
  }

  render() {
    console.log(this.state);
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            name="name"
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            name="location"
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

// export default connect()(RestaurantInput)
export default connect(null, { addRestaurant })(RestaurantInput)
