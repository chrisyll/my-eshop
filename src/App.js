import classes from './App.module.css';
import React from 'react';

import Shop from './containers/Shop/Shop';
import Form from './containers/Form/Form';

class App extends React.Component {
  state = {
    width: '75%',
    filters: 'on',
    explore: 'on',
    cartButtonColor: 'green',
    buyButtonColor: 'red'
  }

  setWidth = (width) => {
    const current = {...this.state};
    current.width = width;
    this.setState({...current});
  }

  setFilters = (option) => {
    const current = {...this.state};
    current.filters = option;
    this.setState({...current});
  }

  setExplore = (option) => {
    const current = {...this.state};
    current.explore = option;
    this.setState({...current});
  }

  setCartButton = (color) => {
    const current = {...this.state};
    current.cartButtonColor = color;
    this.setState({...current});
  }

  setBuyButton = (color) => {
    const current = {...this.state};
    current.buyButtonColor = color;
    this.setState({...current});
  }

  render() { 
    return (
      <div className = {classes.App}>
        <h1 className = {classes.Header}>Title</h1>
        <Shop 
          data = {this.state}/>
        <Form 
          data = {this.state}
          setWidth = {(width) => this.setWidth(width)}
          setFilters = {(option) => this.setFilters(option)}
          setExplore = {(option) => this.setExplore(option)}
          setCartButton = {(color) => this.setCartButton(color)}
          setBuyButton = {(color) => this.setBuyButton(color)}
          />
      </div>
    );
  }
}
 
export default App;