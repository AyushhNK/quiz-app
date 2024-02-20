import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Body from "./components/body"
import NavBar from "./components/nav"
import Footer from "./components/footer"
import Home from "./components/home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/*" element={<Body />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

