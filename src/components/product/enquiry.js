import React, { Component} from "react";
import "../../assests/styles/product/enquiry.css";
import email from "../../assests/images/product_images/email_1.png";

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>;

const EnquiryPage = () => {
    return (
      <div>
          <div className="main-container">
              <div className="top-container">
                  <br></br>
                <h1>
                    <h2 className="know-more">Need to know more</h2>
                    <h6 className="h6">Drop us an enquiry on any of the products you would like to try</h6>
                </h1>
                <br></br>
              </div>
              <div className="bottom-container">
                <div className="row">
                    <div className="section1">
                        {/* <h1>Email Section</h1> */}
                        <div>
                            <img className="email" src={email} alt="email" />
                        </div>
                    </div>
                    <div className="section2">
                    <form method="POST" id="contactForm" name="contactForm">
										<div class="row">
											<div class="col-md-5">
												<div>
                                                <label>Name <span class="required"></span></label></div>
													<input className="labels" type="text" name="name" placeholder="John"></input>
											</div>
											<div class="col-md-7"> 
												<div>
                                                <label>Email <span class="required"></span></label></div>
													<input className="labels" type="email" name="email" placeholder="john@workemail.com"></input>
											</div>

											<div class="col-md-12"><br></br>
												<div class="form-group">
                                                <label>Products interested in</label></div>
                                                <select id="input" className="labels select" name="field4">
                                                <option value="Advertise">Advertise</option>
                                                <option value="Partnership">Partnership</option>
                                                <option value="General Question">General</option>
                                                </select>
                                                
											</div>

											<div class="col-md-12"><br></br>
												<div class="form-group">
                                                <label>Comment<span class="required"></span></label></div>
                                            <textarea className="labels comment" name="field5" id="field5" placeholder="Type here" ></textarea>
											</div>

											<div class="col-md-12">
												<div class="form-group">
                                                <input id="submit-button" type="submit" value="Send Enquiry" />
                                                <span className="right-arrow">&#8594;</span>
												</div>
											</div>
										</div>
									</form>
                                    <br></br>
                    </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default EnquiryPage;