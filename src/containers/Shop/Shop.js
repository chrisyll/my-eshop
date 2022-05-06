import React from 'react';
import classes from './Shop.module.css';
import ShopContainer from '../ShopContainer/ShopContainer';

class Shop extends React.Component {
    state = {
        isOpen: false
    }

    toggleHandler = () => {
        let temp = this.state.isOpen;
        this.setState({isOpen: !temp});
    }

    render() { 

        return (
            <div className = {classes.Wrapper}>
                <p className = {classes.Header}>Preview</p>
                <ShopContainer 
                    toggleDrawer = {this.toggleHandler} 
                    isOpen = {this.state.isOpen}
                    data = {this.props.data}
                    />
            </div>);
    }
}
 
export default Shop;