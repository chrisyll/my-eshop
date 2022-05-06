import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Layout from '../Layout/Layout';
import classes from './ShopContainer.module.css'
import SideDrawer from '../../components/SideDrawer/SideDrawer';

const ShopContainer = (props) => {

    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    const ref = useRef(null);

    const getSize = () => {
        const newWidth = ref.current.clientWidth;
        setWidth(newWidth);

        const newHeight = ref.current.clientHeight;
        setHeight(newHeight);
    }

    useEffect(() => {
        getSize();
    }, []);

    useEffect(() => {
        window.addEventListener("resize", getSize);
    }, []);

    let drawer = <SideDrawer 
                    open = {props.isOpen} 
                    width = {width} 
                    height = {height}
                    data = {props.data}
                    />;
    let attachedClasses = [classes.Shop];
    if(props.isOpen){
        attachedClasses = [classes.Shop, classes.noScroll];
    }
    return (
        <div className = {attachedClasses.join(' ')} ref = {ref}>
                    <Navigation 
                        toggled = {props.toggleDrawer} 
                        width = {width} />
                    {drawer}
                    <Layout
                        data = {props.data} />
                    <Footer />
                </div>
    );
}

export default ShopContainer;