import React from 'react';

import classes from './Footer.module.css'

const footer = () => {
    return (
        <div className = {classes.Footer}>
            <div className = {classes.Text}>Find us</div>
            <div className = {classes.IconContainer}>
                <div className={classes.Facebook}></div>
                <div className={classes.Twitter}></div>
                <div className={classes.Instagram}></div>
            </div>
        </div>
    );
}

export default footer;