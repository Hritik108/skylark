import React from "react";
import { NavLink, Router } from "react-router-dom";
import "../assests/styles/navbar.css"
import Logo from "../assests/images/Logo.png"
import jQuery from "jquery";
import Egg from "../assests/images/egg.png"

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: "home",
            isPositionFixed: false,
            isImage: true,
            color: "",
            height: "",
            width: ""
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({ height: window.innerHeight + 'px' });
        this.setState({ width: window.innerHeight });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop / 3 - 60);
        if (event.srcElement.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            jQuery(".navbar").css({ "background-color": "white", position: "fixed", height: "80px" })
        }
        else {
            jQuery(".navbar").css({ "background-color": "transparent", position: "fixed", trasnsition: "3s", height: "100px" })

        }
    }

    render() {
            return (
                <div>
                <nav className="navbar navbar-inverse navbar-fixed-top sticky navbar-expand-lg">
                    <a className="navbar-brand d-lg-none" href="#"><img className="Nav-logo" src={Logo} /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbarToggler7"
                        aria-controls="myNavbarToggler7" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myNavbarToggler7">
                        <ul className="navbar-nav left-side" >
                            <li className="nav-item">
                                <a className="nav-link text-left" href="/">HOME</a>
                            </li>
                            <li className="nav-item nav-left">
                                <a className="nav-link" href="/products">PRODUCTS</a>
                            </li>

                            <li className="nav-item nav-left">
                                <a className="nav-link" href="/gallery">GALLERY</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav mx-auto">
                            <a className="d-none d-lg-block" href="#"><img className="Nav-logo" src={Logo} /></a>
                        </ul>
                        <ul className="navbar-nav right-side">
                            <li className="nav-item">
                                <a className="nav-link" href="/quality">QUALITY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/career">CAREER</a>
                            </li>

                            <li className="nav-item nav-left">
                                <a className="nav-link" href="/contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="menu-B">
                    <div id="mySidebar" className="sidebar">
                        <a className="closebtn" onClick={() => closeNav()}>×</a>
                        <div className="sidebarcompany">
                            <img className="sidebar-logo" src={Logo} />
                        </div>
                        <div className="sidebarBar">

                        </div>
                        <div>
                            <NavLink className="sidebarText" to="/home" onClick={() => closeNav()} >
                                HOME
                            </NavLink>
                            <NavLink className="sidebarText" to="/products" onClick={() => closeNav()}>
                                PRODUCTS
                            </NavLink>
                            <NavLink className="sidebarText" to="/gallery" onClick={() => closeNav()}>
                                GALLERY
                            </NavLink>
                            <NavLink className="sidebarText" to="/quality" onClick={() => closeNav()}>
                                QUALITY
                            </NavLink>
                            <NavLink className="sidebarText" to="/career" onClick={() => closeNav()}>
                                CAREER
                            </NavLink>
                            <NavLink className="sidebarText" to="/contact" onClick={() => closeNav()} style={{ "paddingBottom": "10%" }}>
                                CONTACT
                            </NavLink>
                        </div>
                        <div className="sidebarBar"></div>
                    </div>
                    <div id="main">
                        <a className="openbtn" onClick={() => openNav()}>☰</a>
                    </div>
                </div>
                </div>
            )

            function openNav() {
                document.getElementById("mySidebar").style.width = "300px";
                document.getElementById("main").style.marginLeft = "300px";
            }

            function closeNav() {
                document.getElementById("mySidebar").style.width = "0";
                document.getElementById("main").style.marginLeft = "0";
            }
            
        }
    }
export default Navbar;

