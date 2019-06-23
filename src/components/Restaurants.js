import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRestaurant } from '../actions/restaurants';

class Restaurants extends Component {

  // handleOnClick = event => {
  //   this.props.addRestaurant()
  // }

  render() {

    let restaurants = this.props.restaurants.map((restaurant, index) => <li key={index}>{restaurant.name}</li>);

    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}


export default connect(mapStateToProps)(Restaurants);
