import React from 'react';
import Navbar from './components/navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <section  id="about-me" style={{ height: "100vh", backgroundColor: "black", color:"white" }}>
        About me
      </section>
      <section id="work" style={{ height: "100vh", color:"white" }}>
        Work
      </section>
      <section id="experience" style={{ height: "100vh", backgroundColor: "black", color:"white" }}>
        Experience
      </section>
      <section id="education" style={{ height: "100vh", color:"white" }}>
        Education
      </section>
      <section id="contact" style={{ height: "30vh", backgroundColor: "black", color:"white" }}>
        Contact
      </section>
    </React.Fragment>
  );
}

export default App;