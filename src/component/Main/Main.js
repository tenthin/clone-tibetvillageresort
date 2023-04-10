import React from "react";
import Header from "../Header/Header";
import Hero from "../HeroPage/Hero";
import CheckIn from "../CheckIn/CheckIn";
import "./Main.css";

export default function Main() {
  return (
    <div className="main-page">
      <div>
        <Header />
        <Hero />
        <CheckIn />
      </div>
    </div>
  );
}
