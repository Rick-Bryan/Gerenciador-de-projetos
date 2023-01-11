import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import React from "react";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Container from "./components/layouts/Container";
import Projects from "./components/pages/Projects";
import NewProject from "./components/pages/NewProject";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="minHeight">
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/empresa" element={<Empresa />} />
          <Route exact="true" path="/contato" element={<Contato />} />
          <Route exact="true" path="/projects" element={<Projects />} />
          <Route exact="true" path="/newproject" element={<NewProject />} />+
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
export default App;
