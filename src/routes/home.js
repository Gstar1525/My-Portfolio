import React from 'react';

function Home() {
    return (
        <div className="Intro" style={{ marginInline: "10vw", marginTop: "20vh" }} >
            <p style={{fontSize: "130%", color: "#64ffda" }}>
                Hi, my name is
            </p>
            <b>
                <p style={{ fontSize: "7vw" }}>
                    Gourav Kolhatkar.
                </p>
            
            <p style={{ fontSize: "5vw", color: "#8892b0" }}>
                I build softwares.
            </p>
            </b>
            <p style={{fontSize:"150%", color: "#8892b0" }}>
                I'm a Computer Engineering student at DBATU, Lonere.
                <br></br>
                Love to build Apps for Mobiles and Desktops and AI Enthusiastic.
            </p>
        </div>
    );
}

export default Home;