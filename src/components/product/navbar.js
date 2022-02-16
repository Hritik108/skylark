import React from "react";
import {NavLink,Router} from "react-router-dom";
import "../../assests/styles/product/navbar.css";
import Logo from "../../assests/images/Logo.png"

class Navbar extends React.Component{

    constructor(props){
        super(props); 
        this.state = {
            active :"home" ,
            isPositionFixed: false,
            isImage : true,
            color:"",

        }
        this.handleScroll = this.handleScroll.bind(this);
      }

      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }

      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }

      handleScroll(event) {

}

    render(){
        
    return(


        <nav className="navbar navbar-inverse navbar-fixed-top sticky navbar-expand-lg">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbarToggler7"
        aria-controls="myNavbarToggler7" aria-expanded="false" aria-label="Toggle navigation">
        <span style={{"background-color":"#3BB0A0"}} className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="myNavbarToggler7">
        <ul className="navbar-nav left-side" >
            <li className="nav-item" id="nav-items">
                <a className="nav-link text-left" href="/">HOME</a>
            </li>
            <li className="nav-item nav-left" id="nav-items">
                <a className="nav-link" href="/products">PRODUCTS</a>
            </li>

            <li className="nav-item nav-left" id="nav-items">
                <a className="nav-link" href="/gallery">GALLERY</a>
            </li>
        </ul>
        <ul className="navbar-nav right-side" id="nav-items">    
            <li className="nav-item">
                <a id="right" className="nav-link" href="/quality">QUALITY</a>
            </li>
            <li className="nav-item" id="nav-items">
                <a className="nav-link" href="/career">ABOUT US</a>
            </li>

            <li className="nav-item nav-left" id="nav-items">
                <a className="nav-link" href="/contact">CONTACT</a>
            </li>
        </ul>
    </div>
</nav>
        )

}
}
export default Navbar;

