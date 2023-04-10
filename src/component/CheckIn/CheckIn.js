import React from "react";
import "./CheckIn.css";

export default function CheckIn() {
  return (
    <div className="check-container">
      <div className="check">
        <div className="check1">
          <div className="check1-title">Check-in date:</div>
          {/* <div> */}
          <input type="date" id="date" name="date" />
          {/* </div> */}
        </div>
        <div className="check2">
          <div className="check2-title">Check-out date:</div>
          {/* <div> */}
          <input type="date" id="date" name="date" />
          {/* </div> */}
        </div>

        <div className="check3">
          <div className="check3-title">Adults:</div>
          <select id="dropdown" name="dropdown">
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
            <option value="option3">4</option>
            <option value="option3">5</option>
            <option value="option3">6</option>
            <option value="option3">7</option>
            <option value="option3">8</option>
            <option value="option3">9</option>
            <option value="option3">10</option>
          </select>
        </div>
        <div className="check4">
          <div className="check4-title">Children:</div>
          <select id="dropdown" name="dropdown">
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
            <option value="option3">4</option>
            <option value="option3">5</option>
            <option value="option3">6</option>
            <option value="option3">7</option>
            <option value="option3">8</option>
            <option value="option3">9</option>
            <option value="option3">10</option>
          </select>
        </div>
        {/* <button>Search</button> */}
        <div className="check-button">
          <input type="submit" value="SEARCH" />
        </div>
      </div>
      <div className="mmt">
        <p>Booking Powered by</p>
        <img src="image/mmt.png" alt="" />
      </div>
    </div>
  );
}
