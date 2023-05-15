import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Background from "./Components/Background";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Background />
        <Header />
        <About />
        <Skills />
    </StrictMode>
);