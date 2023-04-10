import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="\image\logo.png" alt="" />
      </div>
      <div className="footer-lower">
        <div>
          <div>Our Address</div>
          <p>
            <strong>Tibet Village Resort & Spa</strong>
            <br />
            Near Golden Temple
            <br />
            Bylakuppe – India
          </p>
        </div>
        <div>
          <div>Reservation</div>
          <p>
            Tel.: +91 (0)9945 746348
            <br />
            Fax: +91 (0)9945 746348
            <br />
            book@tibetvillageresort.com
          </p>
        </div>
        <div>
          <div>Newsletter</div>
          <p>
            Discount 20%
            <br />
            --------------------------------
            <br />
            --------------------------------
          </p>
        </div>
      </div>
      <div className="footer-bar">
        <div className="footer-bar-left" id="copyright">
          © Copyright Tibet Village Resort & Spa. Powered by
          <a href=""> Monlam Designs</a>
        </div>
        <div className="footer-bar-right">
          <ul>
            <li>Home</li>
            <li>Dining</li>
            <li>Our Rooms</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
