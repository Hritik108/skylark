import React from "react";
import {NavLink,Router} from "react-router-dom";
import "../assests/styles/navbar.css"
import Logo from "../assests/images/Logo.png"
import jQuery from "jquery";
import Egg from "../assests/images/egg.png"

class Navbar extends React.Component{

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
    //     let scrollTop = event.srcElement.body.scrollTop,
    //     itemTranslate = Math.min(0, scrollTop/3 - 60);
  
  
    //     if(event.srcElement.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    //         jQuery(".menuA").css({"background-color":"rgba(255,255,255)",position:"fixed"})
    //         this.setState({color:"green"});
    //       }
    //          else{  
    //            jQuery(".menuA").css({"background-color":"transparent",position:"sticky"})
    //            this.setState({color:"#75B8AD"});
    // }
    // window.onscroll = function() {myFunction()};

    //     var navbar = document.getElementById("navbar");
    //     var sticky = navbar.offsetTop;

    //     function myFunction() {
    //     if (window.pageYOffset >= sticky) {
    //         navbar.classList.add("sticky")
    //     } else {
    //         navbar.classList.remove("sticky");
    //     }
    //     }
}

    render(){
        
    return(
        <nav class="navbar navbar-expand-lg navbar-fixed-top">
    <a class="navbar-brand d-lg-none" href="#"><img src="https://codingyaar.com/wp-content/uploads/logo.png"  /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbarToggler7"
        aria-controls="myNavbarToggler7" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="myNavbarToggler7">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link text-left" href="#">Home</a>
            </li>
            <li class="nav-item nav-left">
                <a class="nav-link" href="#">About</a>
            </li>
        </ul>
        <ul class="navbar-nav mx-auto">
            <a class="d-none d-lg-block" href="#"><img src="https://codingyaar.com/wp-content/uploads/logo.png" /></a>
        </ul>
        <ul className="navbar-nav">    
            <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
            </li>
        </ul>
    </div>
</nav>
        )
}
}
export default Navbar;

