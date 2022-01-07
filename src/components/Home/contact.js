// import React , {Component} from "react";
// import "../../assests/styles/Home/contact.css"
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import { InputGroup , FormControl,Button } from "react-bootstrap";
// import call from "../../assests/images/PhoneNew.png"
// import Location from "../../assests/images/Maps.png"
// import Email from "../../assests/images/Mail.png"
// import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
// import Maps from "./maps.js";
// import Footer from "../Footer"

// newcode
import phone from './../../assests/images/phone.png';
import map from './../../assests/images/Maps.png';
import mail from './../../assests/images/Mail.png';
import "../../assests/styles/Home/contact.css"
import React, { Component } from 'react';
import { MapContainer } from './../About/Googlemap';


class contact extends Component{
    render(){
        return(
            // <div className="contact-home">
            //     <div className="contact-heading">
            //         <div>
            //             <h1 id="contact-head">Contact Us</h1>
            //             <h5 id="contact-subhead">We have our offices Everywhere</h5>
            //         </div>
            //     </div>
            //     <div className="search-box">
            //     <InputGroup className="mb-3">
            //     <FormControl
            //     placeholder="Enter your location"
            //     aria-label="Enter your location"
            //     aria-describedby="basic-addon2"
            //     />
            //     <Button variant="outline-secondary" id="button-addon2">
            //     Search
            //     </Button>
            // </InputGroup>
            // </div>
            // <div className="maps">
            //     <Maps />
            // </div>
            // <div className="our-offices">
            //     <h1 style={{textAlign:"center"}}>
            //         OUR HEAD OFFICES
            //     </h1>
            //     <div className="details">
            //         <div id="call-log">
            //             <img src={call} />
            //             <div>
            //                 +91 1686 264880
            //             </div>
            //         </div>
            //         <div id="location">
            //             <img src={Location} />
            //             <div>
            //                 Dharamgarh Bohil Road<br/>
            //                 Safidon, Dist. JInd <br/>
            //                 Haryana - 126112<br/>
            //                 India

            //             </div>
            //         </div>
            //         <div id="email">
            //             <img src={Email} />
            //             <div>
            //                 info@skylarkhatcheries.com
            //             </div>
            //         </div>
            //     </div>
            // </div>
            // <div>
            //     <Footer color={"#EFF9F8"} />
            // </div>
            // </div>


<div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="contact-header"><h1>Contact Us</h1></div>
      <div><p className="contact-head-desc">We have offices everywhere</p></div>
      <div><div className="contact-input-group">
      <button type="submit" className="contact-searchicon"><i class="fa fa-search"></i></button>
  <input type="search" className="contact-form-control contact-rounded" placeholder="Enter your location" aria-label="Search"
  aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary contact-search">search</button>
</div>
{/* <div style="width: 500px"><iframe width="500px" height="600px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">gps watches</a></iframe></div> */}

</div>
<div><h3 className="contact-title3">OUR HEAD OFFICE</h3></div>

  <div className="contact-row">
  <div className="contact-column">
    <div className="contact-card">
      <div><img src={phone} alt="phone"/></div>
      <p className="contact-desc">+91 1686 264880</p>
    </div>
  </div>

  <div className="contact-column">
    <div className="contact-card">
    <div><img src={map} alt="map"/></div>
      <p className="contact-desc">Dharamgarh Bohli Road 
                              Safidon, Dist. Jind
                              Haryana - 126112
                              India</p>
    </div>
  </div>
  
  <div className="contact-column">
    <div className="contact-card">
    <div><img src={mail} alt="mail"/></div>
      <p className="contact-desc">info@skylarkhatcheries.com</p>
    </div>
  </div>
  </div>



  <hello/>
      
      <div>

      { <MapContainer/>}


      
      </div>
    </div>



            )
    }
}

export default contact;