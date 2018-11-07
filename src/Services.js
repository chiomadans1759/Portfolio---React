import React, { Component } from 'react';
import './Services.css';

class Services extends Component {
    render(){
        return(
            <div className = "services">
                <h3>services</h3>
                <h2>What We Offer</h2>
                <div className = "row">
                     <Icons myIcon={iconObj[0].icon} myTitle ={iconObj[0].title} myDescription = {iconObj[0].description}/>
                     <Icons myIcon={iconObj[1].icon} myTitle ={iconObj[1].title} myDescription = {iconObj[1].description}/>
                     <Icons myIcon={iconObj[2].icon} myTitle ={iconObj[2].title} myDescription = {iconObj[2].description}/>
                     <Icons myIcon={iconObj[3].icon} myTitle ={iconObj[3].title} myDescription = {iconObj[3].description}/>
                </div>
            </div>
        );
    }
}

const iconObj = [
        {
            icon:<ion-icon name="phone-portrait"></ion-icon>,
            title:'Responsive',
            description:'Looks Great on any screen size!'
        },
        {
            icon:<ion-icon name="create"></ion-icon>,
            title:'re-designed',
            description:'Freshly re-designed for Boothstrap 4'
        },
        {
            icon:<ion-icon name="thumbs-up"></ion-icon>,
            title:'favourited',
            description:'Millions of users love Start Boothstrap'
        },
        {
            icon:<ion-icon name="help-circle"></ion-icon>,
            title:'questions',
            description:'We can answer any of your questions...'
        }
];
class Icons extends Component {
    render(){
        return(
                <div className = "row">
                    <div>
                        <span>{this.props.myIcon}</span>
                        <h4>{this.props.myTitle}</h4>
                        <p>{this.props.myDescription}</p>
                    </div> 
                </div>            
            );
        }
    }
export default Services;