import React from "react";
import "./Display.css";

export default function Display() {
  return (
    <div className="display-container">
      <div className="upper">
        <div className="upper-img">
          <img src="\image\stockImages\rooms.jpg" alt="Our Rooms" />
          <div className="overlay">
            <h3>Our Rooms</h3>
            <p>Comfortable Stays for your Wekend Getaways</p>
          </div>
        </div>
        <div className="upper-img">
          <img src="\image\stockImages\pool-tibetvillage500.jpg" alt="Pool" />
          <div className="overlay">
            <h3>Pool</h3>
            <p>Take a dip, Relax & Forget all your worries</p>
          </div>
        </div>
        <div className="upper-img">
          <img src="\image\stockImages\spa-therapy.jpg" alt="Spa Massage" />
          <div className="overlay">
            <h3>Spa & Massage</h3>
            <p>Get Pampered coz you deserve it</p>
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="lower-img">
          <img src="\image\stockImages\things-to-do.jpg" alt="things to do" />
          <div className="overlay">
            <h3>Things to do</h3>
            <p>Let’s go everywhere</p>
          </div>
        </div>
        <div className="lower-img">
          <img src="\image\stockImages\iconic-bath.jpg" alt="Iconic Bath" />
          <div className="overlay">
            <h3>Iconic Bath</h3>
            <p>Extent your Happiness</p>
          </div>
        </div>
        <div className="lower-img">
          <img src="\image\stockImages\dayout.jpg" alt="Spa and Massage" />
          <div className="overlay">
            <h3>Spa & Massage</h3>
            <p>Serenity.. that you deserve</p>
          </div>
        </div>
      </div>
    </div>
  );
}
