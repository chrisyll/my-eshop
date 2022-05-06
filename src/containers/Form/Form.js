import React from 'react';
import classes from './Form.module.css'
import FormContainer from '../FormContainer/FormContainer';

class Form extends React.Component {
    render() { 
        return <div className= {classes.FormWrapper}>
            <p className= {classes.Header}>Form</p>
            <FormContainer 
                data = {this.props.data}
                setWidth = {(width) => this.props.setWidth(width)}
                setFilters = {(option) => this.props.setFilters(option)}
                setExplore = {(option) => this.props.setExplore(option)}
                setCartButton = {(color) => this.props.setCartButton(color)}
                setBuyButton = {(color) => this.props.setBuyButton(color)}
            />
        </div>;
    }
}
 
export default Form;