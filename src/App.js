import React from "react";
import CustomNavbar from "./components/customnavbar";
import Work from "./routes/work";
import Contact from "./routes/contact";
import Experience from "./routes/experience";
import Home from "./routes/home";
import About from "./routes/about";
import "./styles/app.css";
import { Box } from "@material-ui/core";

function App() {
  return (
    <div className="container">
      <CustomNavbar />
      <section id="intro">
        <Home></Home>
      </section>

      <section id="about">
        <About></About>
      </section>
      <Box id="work">
        <section>
          <Work></Work>
        </section>
      </Box>

      <Box id="experience" style={{ paddingBlock: "20vh" }}>
        <section>
          <Experience></Experience>
        </section>
      </Box>
      <Box id="contact" style={{ paddingBlock: "20vh" }}>
        <section>
          <Contact></Contact>
        </section>
      </Box>
    </div>
  );
}

export default App;
