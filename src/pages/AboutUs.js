import React, { Component} from 'react';
import NavBar from "../components/Navbar"
import About from '../components/Home/about';

class AboutUs extends Component{
    render(){
        return (
            <div>
                <NavBar color={"#75B8AD"} isimage={false} />
                <About />
            </div>
        );
    }
}

export default  AboutUs;

