import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { Fragment } from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/hompage/Home";
import Projects from "./components/projects/Projects";
import Experiances from "./components/experiances/Experiances";
import Footer from "./components/footer/Footer";
import ProjectDisplay from "./components/projects/projectDisplay";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />
          <Route path="/experiances" element={<Experiances />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
