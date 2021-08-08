import React from 'react'
import "./ContactUs.css"
import 'font-awesome/css/font-awesome.min.css';

export default function ContactUs() {
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
                            <form action="mailto:2020kucp1023@iiitkota.ac.in" method="get" encType="text/plain">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group mt-3">
                                    <input className="form-control" type="text" placeholder="name" required />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group mt-3">
                                    <input className="form-control" type="text" placeholder="email" required />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group mt-3">
                                    <input className="form-control" type="text" placeholder="phone" required />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group mt-3">
                                    <input className="form-control" type="text" placeholder="location" />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group mt-3">
                                    <input className="form-control" type="text" placeholder="message" required />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <button type="submit" className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"><span> SUBMIT NOW <i className="ti-arrow-right"></i></span></button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-lg-4 bg-image">
                          <div className="detail-box p-4">
                            <h5 className="text-white font-weight-light mb-3">ADDRESS</h5>
                            <p className="text-white op-7">601 Sherwood Ave.
                              <br /> San Bernandino</p>
                            <h5 className="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                            <p className="text-white op-7">251 546 9442
                              <br /> 630 446 8851</p>
                            <div className="round-social light">
                              <a href="#" className="ml-0 text-decoration-none text-white border border-white rounded-circle"><i className="fa fa_contact fa-facebook"></i></a>
                              <a href="#" className="text-decoration-none text-white border border-white rounded-circle"><i className="fa fa_contact fa-twitter"></i></a>
                              <a href="#" className="text-decoration-none text-white border border-white rounded-circle"><i className="fa fa_contact fa-youtube"></i></a>
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
