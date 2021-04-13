import React from 'react';
import Navbar from './components/navbar';
import Work from './routes/work';
import Contact from './routes/contact';
import Experience from './routes/experience';
import Home from './routes/home';
import About from './routes/about';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <section  id="about-me" style={{ height: "100vh", color:"white" }}>
        <Home></Home>
      </section>
      <section id="about" style={{ color:"white" }}>
        <About ></About>
      </section>
      <section id="work" style={{ color:"white"}}>
        <Work></Work>
      </section>
      <section id="experience" style={{ color:"white" }}>
        <Experience></Experience>
      </section>
      <section id="contact" style={{ height: "30vh", color:"white" }}>
        <Contact></Contact>
      </section>
    </React.Fragment>
  );
}

export default App;