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
    <React.Fragment>
      <CustomNavbar />

      <section id="intro" style={{ height: "100vh", color: "white" }}>
        <Home></Home>
      </section>

      <Box id="about" style={{ paddingBlock: "20vh" }}>
        <section style={{ color: "white" }}>
          <About></About>
        </section>
      </Box>

      <Box id="work" style={{ paddingBlock: "10vh" }}>
        <section style={{ color: "white" }}>
          <Work></Work>
        </section>
      </Box>

      <Box id="experience" style={{ paddingBlock: "20vh" }}>
        <section style={{ color: "white" }}>
          <Experience></Experience>
        </section>
      </Box>

      <section id="contact" style={{ color: "white" }}>
        <Contact></Contact>
      </section>
    </React.Fragment>
  );
}

export default App;
