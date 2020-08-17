import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import RestaurantContainer from './RestaurantContainer';
import RestaurantList from './RestaurantList';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      zipcode:'10001',
    }
  };
  render(){
    return (
      <div className="App">
       <Header/>
        <div className="container">
        <RestaurantContainer query={this.state.query}/>
        </div>
      </div>
    );
  }

}
export default App;
