import React from "react";
import {NavLink,Router} from "react-router-dom";
import "../../assests/styles/product/carousel.css";

class ProductNavbar extends React.Component{

    constructor(props){
        super(props); 
        this.state = {
            active :"home" ,
            isPositionFixed: false,
            isImage : true,
            color:props.color,

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
    <a className="navbar-brand d-lg-none" href="#"></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbarToggler7"
        aria-controls="myNavbarToggler7" aria-expanded="false" aria-label="Toggle navigation">
        <span style={{"color":"black"}} className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="myNavbarToggler7">
        <ul className="navbar-nav left-side" >
            <li className="nav-item">
                <a id="home" style={{"color":"black"}} className="nav-link text-left" href="/">HOME</a>
            </li>
            <li className="nav-item nav-left">
                <a id="products" style={{"color":"black"}} className="nav-link" href="/products">PRODUCTS</a>
            </li>

            <li className="nav-item nav-left">
                <a id="gallery" style={{"color":"black"}} className="nav-link" href="/gallery">GALLERY</a>
            </li>
        </ul>

        <ul className="navbar-nav right-side">    
            <li className="nav-item">
                <a id="quality" style={{"color":"black"}} className="nav-link" href="/quality">QUALITY</a>
            </li>
            <li className="nav-item">
                <a id="about" style={{"color":"black"}} className="nav-link" href="/career">ABOUT US</a>
            </li>

            <li className="nav-item nav-left">
                <a id="contact" style={{"color":"black"}} className="nav-link" href="/contact">CONTACT</a>
            </li>
        </ul>
    </div>
</nav>
        )

}
}
export default ProductNavbar;

