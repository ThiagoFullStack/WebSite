import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Services from "./Components/Services";
import Works from "./Components/Works";
import Portfolio from "./Components/Portfolio";

import './App.css';
import Experience from "./Components/Experience";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from './Components/Footer';
import {themeContext} from './Context';
import { useContext } from "react";


export default function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode? '#000' : '',
      color: darkMode? '#FFF' : ''
    }}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}


