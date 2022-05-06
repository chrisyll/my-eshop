import React from 'react';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    let myWidth = props.width;

    if (props.data.width === "75%"){
        myWidth = props.width * 75 /100;
        attachedClasses.push(classes.sWidth)
    }

    return (
            <div className = {attachedClasses.join(' ')} style = {{width:myWidth, height:props.height}}>
                <div>
                    <div>HOME</div>
                    <div>SIGN IN</div>
                    <div>SIGN UP</div>
                    <div>FAQs</div>
                    <div>CONTACT US</div>
                </div>
            </div>
    );
}

export default sideDrawer;