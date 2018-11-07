import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Services from './Services';
import Section from './Section';
import Header from './Header';
import * as serviceWorker from './serviceWorker';

class App extends Component{
    render(){
        return(
            <div>
                <Navigation logoTitle = "First React Project"/>
                <Header title = "Welcome to my Portfolio" button="Find out More"/>
                <Section/>  
                <Services/> 
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
