import React, {useRef, useEffect} from 'react';
import classes from './Layout.module.css'
import paint1 from '../../assets/Icons/self-portrait.jpg'
import paint2 from '../../assets/Icons/alpine_mastiffs_reanimating_a_distressed_traveler.jpg'
import paint3 from '../../assets/Icons/still_life__fruit,_bird,_and_dwarf_pear_tree.jpg'
import paint4 from '../../assets/Icons/the_battle_of_love.jpg'
import paint5 from '../../assets/Icons/the_departure.jpg'
import paint6 from '../../assets/Icons/the_junction_of_the_thames_and_the_medway.jpg'
import { gsap } from "gsap";
import {Draggable} from "gsap/Draggable"
gsap.registerPlugin(Draggable);


const Layout = (props) => {

    let ref = useRef();
    
    useEffect(() => {
        const element = ref.current;
        let x = 0;
        if(element.offsetWidth !== element.scrollWidth){
            x = 16;
        }
        Draggable.zIndex = 0;
        Draggable.create(element,{
            type: "x",
            zIndexBoost: false,
            bounds: {
                minX: element.offsetWidth - element.scrollWidth - x,
                maxX: 0
            }
        });
        
    }, []);

    let filters = 'visible';

    if (props.data.filters === 'off'){
        filters = 'hidden';
    }

    let explore = null;

    if(props.data.explore === 'on'){
        explore = (
            <div className = {classes.Explore}>
                <p className= {classes.Text}>Explore<br/> <span>new ways to express</span> <br/> yourself</p>
                <div className= {classes.ExploreContainer}>
                    <div className = {classes.ExploreItem}>
                        <p>Renaissance</p>
                        <div style = {{backgroundColor: '#053872'}} className= {classes.ExploreImage}></div>
                    </div>
                    <div className = {classes.ExploreItem}>
                        <p>Romanticism</p>
                        <div style = {{backgroundColor: '#FFE373'}} className= {classes.ExploreImage}></div>
                    </div>
                    <div className = {classes.ExploreItem}>
                        <p>Impressionism</p>
                        <div style = {{backgroundColor: '#c07ac8'}} className= {classes.ExploreImage}></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className = {classes.Layout}>
            <div
                ref = {ref} 
                style = {
                    {display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    width: '100%',
                    height: '1%',
                    zIndex: 0,
                    visibility: filters
                    }
                }>
                <div className = {classes.Filters}>Latest</div>
                <div className = {classes.Filters}>Most Popular</div>
                <div className = {classes.Filters}>Sales</div>
                <div className = {classes.Filters}>Highest Rated</div>
                <div className = {classes.Filters}>Lowest Price</div>
                <div className = {classes.Filters}>Highest Price</div>
            </div>
            {explore}
            <div className = {classes.ItemContainer}>
                    <div style={{ backgroundImage: `url(${paint1})` }} className = {classes.LayoutItem}></div>
                    <div className = {classes.DescriptionContainer}>
                        <div className = {classes.Description}>This self-portrait is a particularly bold painting, apparently executed in a single sitting without later retouching. </div>
                        <div style = {{marginBottom: '16px'}}>Price:<br/> 1.80 million</div>
                        <button style = {props.data.cartButtonColor === 'green' ? {backgroundColor: 'rgb(89, 228, 55)'} : {backgroundColor: '#ffd814'}}>Add to cart</button>
                        <button style = {props.data.buyButtonColor === 'red' ? {backgroundColor: 'rgb(252, 54, 54)'} : {backgroundColor: '#ffa41c'}}>Buy</button>
                    </div>
            </div>
            <div className = {classes.ItemContainer}>
                    <div style={{ backgroundImage: `url(${paint2})` }} className = {classes.LayoutItem}></div>
                    <div className = {classes.DescriptionContainer}>
                        <div className = {classes.Description}>Two large dogs discover a man lying in the snow. One licks the unconscious traveller's hand to revive him while the other barks to summon monks who approach at right, their monastery seen in the distance. </div>
                        <div style = {{marginBottom: '16px'}}>Price:<br/> 1.20 million</div>
                        <button style = {props.data.cartButtonColor === 'green' ? {backgroundColor: 'rgb(89, 228, 55)'} : {backgroundColor: '#ffd814'}}>Add to cart</button>
                        <button style = {props.data.buyButtonColor === 'red' ? {backgroundColor: 'rgb(252, 54, 54)'} : {backgroundColor: '#ffa41c'}}>Buy</button>
                    </div>
            </div>
            <div className = {classes.ItemContainer}>
                    <div style={{ backgroundImage: `url(${paint3})` }} className = {classes.LayoutItem}></div>
                    <div className = {classes.DescriptionContainer}>
                        <div className = {classes.Description}>This colorful image of abundance and variety reflects the general fascination in mid-nineteenth-centtury America with still life painting, both academic and naive. Increased prosperity enabled more families to buy still lifes for their dining-room walls, and the constinuing American interest in science resulted in a wave of new botanical magazines and books at mid-century</div>
                        <div style = {{marginBottom: '16px'}}>Price:<br/> 1.45 million</div>
                        <button style = {props.data.cartButtonColor === 'green' ? {backgroundColor: 'rgb(89, 228, 55)'} : {backgroundColor: '#ffd814'}}>Add to cart</button>
                        <button style = {props.data.buyButtonColor === 'red' ? {backgroundColor: 'rgb(252, 54, 54)'} : {backgroundColor: '#ffa41c'}}>Buy</button>
                    </div>
            </div>
            <div className = {classes.ItemContainer}>
                    <div style={{ backgroundImage: `url(${paint4})` }} className = {classes.LayoutItem}></div>
                    <div className = {classes.DescriptionContainer}>
                        <div className = {classes.Description}>This little painting, which once belonged to Pierre-Auguste Renoir, is a theme out of Venetian art, perhaps by way of a Poussinist artist, but is conceived in another mood.</div>
                        <div style = {{marginBottom: '16px'}}>Price:<br/> 1.77 million</div>
                        <button style = {props.data.cartButtonColor === 'green' ? {backgroundColor: 'rgb(89, 228, 55)'} : {backgroundColor: '#ffd814'}}>Add to cart</button>
                        <button style = {props.data.buyButtonColor === 'red' ? {backgroundColor: 'rgb(252, 54, 54)'} : {backgroundColor: '#ffa41c'}}>Buy</button>
                    </div>
            </div>
            <div className = {classes.ItemContainer}>
                    <div style={{ backgroundImage: `url(${paint5})` }} className = {classes.LayoutItem}></div>
                    <div className = {classes.DescriptionContainer}>
                        <div className = {classes.Description}>Thomas Cole sought to create what he called a “higher style of landscape” that blended narrative elements into carefully executed scenes from nature.</div>
                        <div style = {{marginBottom: '16px'}}>Price:<br/> 1.10 million</div>
                        <button style = {props.data.cartButtonColor === 'green' ? {backgroundColor: 'rgb(89, 228, 55)'} : {backgroundColor: '#ffd814'}}>Add to cart</button>
                        <button style = {props.data.buyButtonColor === 'red' ? {backgroundColor: 'rgb(252, 54, 54)'} : {backgroundColor: '#ffa41c'}}>Buy</button>
                    </div>
            </div>
            <div className = {classes.ItemContainer}>
                    <div style={{ backgroundImage: `url(${paint6})` }} className = {classes.LayoutItem}></div>
                    <div className = {classes.DescriptionContainer}>
                        <div className = {classes.Description}>The exact date of the painting is unknown but records show that the Earl of Egremont bought the painting in 1808, most likely direct from Turner’s studio.</div>
                        <div style = {{marginBottom: '16px'}}>Price:<br/> 1.15 million</div>
                        <button style = {props.data.cartButtonColor === 'green' ? {backgroundColor: 'rgb(89, 228, 55)'} : {backgroundColor: '#ffd814'}}>Add to cart</button>
                        <button style = {props.data.buyButtonColor === 'red' ? {backgroundColor: 'rgb(252, 54, 54)'} : {backgroundColor: '#ffa41c'}}>Buy</button>
                    </div>
            </div>            
        </div>
    );
}

export default Layout;