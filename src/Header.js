import React, { Component } from 'react';
import Background from './img/hero.jpg'; 
import './Header.css';


const myStyles = {
    backgroundImage: ` url(${Background})`,
    height: '40vh',
    backgroundSize: 'cover'
}
class Header extends Component {
    render() {
        return( 
        <header style ={ myStyles}> 
            <h1>{this.props.title}</h1>
            <p>Navigate and Know more about me</p>
            <a href = "button">{this.props.button}</a>
        </header>
        );


    }
};

export default Header;