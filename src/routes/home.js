import React from "react";

function Home() {
  return (
    <div className="Intro" style={{ marginInline: "10vw", marginTop: "25vh" }}>
      <b>
        <p style={{ fontSize: "2.2vh", marginBlock:"0"}}>Hi, my name is</p>
        <p style={{ fontSize: "8vw", marginBlock: "0", lineHeight:"130%"}}>Gourav Kolhatkar.</p>
        <p style={{ fontSize: "5.5vw", color: "#0062cc", marginBlock: "0" , lineHeight:"130%"}}>
          I build softwares.
        </p>
      </b>
      <p style={{ fontSize: "2.3vh", color: "#000000" }}>
        I'm a Computer Engineering student at DBATU, Lonere.
        <br></br>
        Love to build Apps for Mobiles and Desktops.
      </p>
    </div>
  );
}

export default Home;
