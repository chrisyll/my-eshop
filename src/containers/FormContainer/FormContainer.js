import React from 'react';

import classes from './FormContainer.module.css'

class FormContainer extends React.Component {

    render() { 
        let properties = {...this.props.data};
        
        return (<div className= {classes.Container}>
                    <div>
                        <p>Navigation drawer width: </p>
                        <label className= {classes.Label} >
                            <input type = "radio" id = "75%" name = "width" 
                                defaultChecked = {properties.width === '75%'}
                                onClick={() => this.props.setWidth('75%')} />
                            <span>75%</span>
                        </label>
                        <label className= {classes.Label} >
                            <input type = "radio" id = "100%" name = "width" 
                                defaultChecked = {properties.width === '100%'}
                                onClick={() => this.props.setWidth('100%')}
                                />
                            <span>100%</span>
                        </label>
                    </div>
                    <div>
                        <p>Quick filters: </p>
                        <label className= {classes.Label}>
                            <input 
                                type = "radio" 
                                id = "on" 
                                name = "filters" 
                                defaultChecked = {properties.filters === 'on'}
                                onClick={() => this.props.setFilters('on')}
                                />
                            <span>On</span>
                        </label>
                        <label className= {classes.Label}>
                            <input 
                                type = "radio" 
                                id = "off" 
                                name = "filters" 
                                defaultChecked = {properties.filters === 'off'}
                                onClick={() => this.props.setFilters('off')}
                                />
                            <span>Off</span>
                        </label>
                    </div>
                    <div>
                        <p>Explore: </p>
                        <label className= {classes.Label}>
                            <input 
                                type = "radio" 
                                id = "on" 
                                name = "explore" 
                                defaultChecked = {properties.explore === 'on'}
                                onClick={() => this.props.setExplore('on')}
                                />
                            <span>On</span>
                        </label>
                        <label className= {classes.Label}>
                            <input 
                                type = "radio" 
                                id = "off" 
                                name = "explore" 
                                defaultChecked = {properties.explore === 'off'}
                                onClick={() => this.props.setExplore('off')}
                                />
                            <span>Off</span>
                        </label>
                    </div>
                    <div>
                        <p>Add to cart button color: </p>
                        <label className= {classes.Label}>
                            <input 
                                type = "radio" 
                                id = "green" 
                                name = "addToCart" 
                                defaultChecked = {properties.cartButtonColor === 'green'}
                                onClick={() => this.props.setCartButton('green')}
                                />
                            <span>Green</span>
                        </label>
                        <label className= {classes.Label}>
                            <input 
                                type = "radio" 
                                id = "yellow" 
                                name = "addToCart" 
                                defaultChecked = {properties.cartButtonColor === 'yellow'}
                                onClick={() => this.props.setCartButton('yellow')}
                                />
                            <span>Yellow</span>
                        </label>
                    </div>
                    <div>
                        <p>Buy button color: </p>
                        <label className= {classes.Label}>
                            <input 
                                type = "radio" 
                                id = "red" name = "buy" 
                                defaultChecked = {properties.buyButtonColor === 'red'}
                                onClick={() => this.props.setBuyButton('red')}
                                />
                            <span>Red</span>
                        </label>
                        <label className= {classes.Label}>
                            <input 
                                type = "radio" 
                                id = "orange" 
                                name = "buy" 
                                defaultChecked = {properties.buyButtonColor === 'orange'}
                                onClick={() => this.props.setBuyButton('orange')}
                                />
                            <span>Orange</span>
                        </label>
                    </div>
                </div>);
    }
}
 
export default FormContainer;