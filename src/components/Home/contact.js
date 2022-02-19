import phone from './../../assests/images/PhoneNew.png';
import map from './../../assests/images/Maps.png';
import mail from './../../assests/images/Mail.png';
import "../../assests/styles/Home/contact.css"
import React, { Component } from 'react';
import { MapContainer } from './../About/Googlemap';
import GoogleMapReact from 'google-map-react';

const styles =[
  {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
          {
              color: "#eeeeee",
          },
      ],
  },
  {
      featureType: "poi",
      elementType: "labels.text",
      stylers: [
          {
              visibility: "off",
          },
      ],
  },
  {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
          {
              color: "#9e9e9e",
          },
      ],
  },
];

class contact extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  render() {
    return (
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
        </div>
        <div>
        <div className='contact-maps' style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ""}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{ styles }}
        >
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
        </div>
        <div><h3 className="contact-title3">OUR HEAD OFFICE</h3></div>

        <div className="contact-row">
          <div className="contact-column">
            <div className="contact-card">
              <div><img src={phone} alt="phone" /></div>
              <p className="contact-desc">+91 1686 264880</p>
            </div>
          </div>

          <div className="contact-column">
            <div className="contact-card">
              <div><img src={map} alt="map" /></div>
              <p className="contact-desc">Dharamgarh Bohli Road
                Safidon, Dist. Jind
                Haryana - 126112
                India</p>
            </div>
          </div>

          <div className="contact-column">
            <div className="contact-card">
              <div><img src={mail} alt="mail" /></div>
              <p className="contact-desc">info@skylarkhatcheries.com</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default contact;