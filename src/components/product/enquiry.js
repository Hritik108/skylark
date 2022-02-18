import React, { Component } from "react";
import "../../assests/styles/product/enquiry.css";
import email from "../../assests/images/product_images/email_1.png";

const EnquiryPage = () => {
  return (
    <div>
      <div className="enquiry">
        <div className="enquiry-heading">
          <h2>Need to know more</h2>
        </div>
        <div>
          <p className="enquiry-text">
            Drops us an enquiry on any of the products you would like to try
          </p>
        </div>

        <div className="enquiry-body">
          <div className="enquiry-half1">
            <img src={email} alt="email" />
          </div>

          <div className="enquiry-half2">
            <form>
              <div className="enquiry-namingtext">
                <label for="fname">First name:</label>
                <br />

                <label for="lname" className="enquiry-label-lname">Last name:</label>
                <br />
              </div>

              <div className="enquiry-naming">
                <input type="text" id="fname" name="fname" value="John" />
                <br />
                <input type="text" id="lname" name="lname" value="Doe" />
                <br />
              </div>

              <label for="fname">Products interested in:</label>
              <br />
              <input type="text" id="products" name="fname" value="John" />
              <br />
              <label for="lname">comment:</label>
              <br />
              <textarea
                rows="4"
                id="comment"
                cols="50"
                name="comment"
                form="usrform"
              >
                Enter text here...
              </textarea>
              <br />
              <input type="submit" id="button" value="Send Enquiry" />
              <span>&#8594;</span>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPage;
