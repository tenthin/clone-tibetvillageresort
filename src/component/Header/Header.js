import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Header() {
  return (
    <div className="header">
      <div>
        <MenuIcon style={{ fontSize: "150%" }} />
      </div>
      <div className="header-left">
        <div>
          <div>
            <b>address</b>
          </div>
          <div>45 Golden Temple Road, Bylakuppe</div>
        </div>
        <div>
          <div>
            <b>tel:</b>
          </div>
          <div>+91 994 574 6348</div>
        </div>
        <div className="header-center">
          <img src="/image/logo.png" alt="" />
        </div>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Our Rooms</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">
              Pages
              <KeyboardArrowDownIcon style={{ fontSize: "100%" }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
