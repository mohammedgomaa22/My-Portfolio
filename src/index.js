import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Background from "./Components/Background";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import "./index.css";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Links from "./Components/Links";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Background />
        <Links />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </StrictMode>
);