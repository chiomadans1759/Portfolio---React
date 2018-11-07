import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
    render(){
        return(
            <div className = "section">
                <h1>meet our Team</h1>
                <h2>We have a team of Experienced and Passionate developers</h2>
                <a href = "#contact">Contact Us</a>
            </div>
        );
    }
}
 
export default Section;