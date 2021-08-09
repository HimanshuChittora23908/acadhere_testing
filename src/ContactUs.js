import React from 'react'
import "./ContactUs.css"
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import axios from 'axios';

export default function ContactUs() {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [location,setLocation] = useState("");
const [message,setMessage] = useState("");

    function Entry(){
    const contactUsEntry = axios.post('https://backend-clg-app.herokuapp.com/contactUs', {
      "name": name,
      "email": email,
      "phone": phone,
      "location": location,
      "message": message
    })
    .then(function (response) {
      console.log(response);
    })
  }

    return (
        <div>
            <div className="contact2" id="contact">
              <div className="container">
                <div className="row contact-container">
                  <div className="col-lg-12">
                    <div className="card-contact card-shadow border-0 mb-4">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="contact-box p-4">
                            <h4 className="title">Contact Us</h4>
                            <form action="mailto:2020kucp1023@iiitkota.ac.in">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group mt-3">
                                    <input className="form-control" type="text" placeholder="name" onChange={(e) => setName(e.target.value)} required />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group mt-3">
                                    <input className="form-control" type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} required />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group mt-3">
                                    <input className="form-control" type="text" placeholder="phone" onChange={(e) => setPhone(e.target.value)} required />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group mt-3">
                                    <input className="form-control" type="text" placeholder="location" onChange={(e) => setLocation(e.target.value)} />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group mt-3">
                                    <input className="form-control" type="text" placeholder="message" onChange={(e) => setMessage(e.target.value)} required />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <button type="submit" onClick={Entry} className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"><span> SUBMIT NOW <i className="ti-arrow-right"></i></span></button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-lg-4 bg-image">
                          <div className="detail-box p-4">
                            <h5 className="text-white font-weight-light mb-3">ADDRESS</h5>
                            <p className="text-white op-7">Jaipur, Rajasthan, India, 302017</p>
                            <h5 className="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                            <p className="text-white op-7">9549305890<br /> 8999272173<br /> 9315424447<br /> 8279443413<br /> 9699814916</p>
                            <div className="round-social light">
                              <a href="https://www.facebook.com/himanshu.chittora.56/" className="ml-0 text-decoration-none text-white border border-white rounded-circle"><i className="fa fa_contact fa-facebook"></i></a>
                              <a href="https://www.instagram.com/himanshu_23908/" className="text-decoration-none text-white border border-white rounded-circle"><i className="fa fa_contact fa-instagram"></i></a>
                              <a href="https://www.linkedin.com/in/himanshu-chittora-57b695200/" className="text-decoration-none text-white border border-white rounded-circle"><i className="fa fa_contact fa-linkedin"></i></a>
                              <a href="https://github.com/HimanshuChittora23908" className="text-decoration-none text-white border border-white rounded-circle"><i className="fa fa_contact fa-github"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
