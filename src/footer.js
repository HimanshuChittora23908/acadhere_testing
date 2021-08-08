import React from 'react';
import './footer.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Footer() {
    return (
        <div>
<footer className="text-center text-lg-start text-light bg_footer">
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-facebook"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-github"></i>
      </a>
    </div>
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fa fa-hashtag me-3"></i>Team AZTECS
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="./notes" className="text-reset">Notes</a>
          </p>
          <p>
            <a href="./hackathon" className="text-reset">Hackathon</a>
          </p>
          <p>
            <a href="./contest" className="text-reset">Contests</a>
          </p>
          <p>
            <a href="./noticeboard" className="text-reset">Notice Board</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="./about" className="text-reset">About Us</a>
          </p>
          <p>
            <a href="./team" className="text-reset">Team</a>
          </p>
          <p>
            <a href="./contactUs" className="text-reset">Contact Us</a>
          </p>
          <p>
            <a href="./faq" className="text-reset">FAQ</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fa fa-home me-3"></i> Jaipur, Pin: 302017, Rajasthan, India</p>
          <p>
            <i className="fa fa-envelope me-3"></i>
            himanshuhome908@gmail.com
          </p>
          <p><i className="fa fa-phone me-3"></i> XXXXXXXXXX</p>
          <p><i className="fa fa-print me-3"></i> XXXXXXXXXX</p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4">
    <p>© 2021 Copyright : Team Aztecs</p>
    <p>Maintainer - Himanshu Chittora</p>
    <p className="maintainer"> Email @ <a href="mailto:2020kucp1023@iiitkota.ac.in" className="mail_maintainer">2020kucp1023@iiitkota.ac.in</a></p>
  </div>
</footer>
        </div>
    )
}
