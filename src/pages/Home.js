import React, { Component} from "react";
import NavBar from "../components/Navbar"
import Home from "../components/Home/Home"
import Business from "../components/Home/Business";
import Parivar from "../components/Home/parivar";
import Sustainable from "../components/Home/sustainable";
import Footer from "../components/Footer";
import Director from "../components/Home/director";
import Global from "../components/Home/global";
import Timeline from "../components/About/timeline"

class HomePage extends Component {
    render(){
        return(

        <div>
            <div className="home">
            <NavBar />
            <Home />
            </div>
            <NavBar />
            <Business />
            <Parivar />
            <Sustainable />
            <Global />
            <Director />
            <Timeline />
            <Footer />
        </div>
        );
    }
}

export default HomePage;