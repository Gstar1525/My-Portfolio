import React from "react";
import "../styles/home.css"; 
function Home() {
  return (
    <div className="Intro" style={{ marginTop: "25vh" }}>
      <b>
        <p className="intro-p1">Hi, my name is</p>
        <p className="intro-p4">Gourav Kolhatkar.</p>
        <p className="intro-p3">I build softwares.</p>
      </b>
      <p className="intro-p2">
        I'm a Computer Engineering student at DBATU, Lonere.
        <br></br>
        Love to build Apps for Mobiles and Desktops.
      </p>
    </div>
  );
}

export default Home;
