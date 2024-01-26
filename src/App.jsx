import { useState } from "react";
import { Button } from 'react-bootstrap';
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/aboutus/AboutUs";

import Timeline from "./components/timeline/TimeLine";
import Criterias from "./components/criterias/Criterias";
import WhyResgister from "./components/why-register/WhyResgister";
import JuryMembers from "./components/jurymember/JuryMembers";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Timeline/>
      <Criterias/>
      <WhyResgister/>
      <JuryMembers/>
      <Footer/>
    </>
  );
}

export default App;
