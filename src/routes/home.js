import React from 'react';

function Home() {
    return (
        <div className="Intro" style={{ marginInline: "25vh", marginTop: "10vh" }} >
            <h5 style={{ color: "#64ffda" }}>
                Hi, my name is
            </h5>
            <b>
                <h1 style={{ fontSize: "13vh" }}>
                    Gourav Kolhatkar.
                </h1>
            </b>
            <h3 style={{ fontSize: "10vh", color: "#8892b0" }}>
                I build softwares.
            </h3>
            <p style={{ color: "#8892b0" }}>
                I'm a Computer Engineering student at DBATU, Lonere.
                <br></br>
                Love to build Apps for Mobiles and Desktops and AI Enthusiastic.
            </p>
        </div>
    );
}

export default Home;