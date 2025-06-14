import {Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Footer from "./components/Footer";
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/contact" element = {<Contact/>} />
          <Route path = "/courses" element = {<Courses/>} />
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/register" element = {<Register/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
