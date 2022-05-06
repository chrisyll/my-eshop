import React from 'react';

import classes from './Navigation.module.css'
import { Squash as Hamburger } from 'hamburger-react'

const navigation = (props) => {

    return (
        <div className = {classes.Navigation} style = {{width: props.width}}>
            <div style = {{width: "fit-content", height: "fit-content", margin: "auto"}}>
                <Hamburger onToggle = {props.toggled} color = 'white'/>
            </div>
            <p className = {classes.Header}>Art</p>
            <input type = 'text' placeholder = 'Search' />
            <div className = {classes.Cart}></div>
        </div>
    );
}

export default navigation;