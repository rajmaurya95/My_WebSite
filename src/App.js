import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Preloader from "./components/Pre";
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll" }>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
