import React from 'react';
import Navbar from './components/navbar';
import AboutMe from './routes/aboutme';
import Work from './routes/work';
import Contact from './routes/contact';
import Experience from './routes/experience';
import Education from './routes/education';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <section  id="about-me" style={{ height: "100vh", color:"white" }}>
        <AboutMe></AboutMe>
      </section>
      <section id="work" style={{ color:"white", backgroundColor:"greenyellow"}}>
        <Work></Work>
      </section>
      <section id="experience" style={{ height: "100vh", backgroundColor: "black", color:"white" }}>
        <Experience></Experience>
      </section>
      <section id="education" style={{ height: "100vh", color:"white" }}>
        <Education></Education>
      </section>
      <section id="contact" style={{ height: "30vh", backgroundColor: "black", color:"white" }}>
        <Contact></Contact>
      </section>
    </React.Fragment>
  );
}

export default App;