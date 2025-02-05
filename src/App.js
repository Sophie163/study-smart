import './App.css';
import './custom.scss'
import './css/custom.min.css'

import { Button, Alert } from 'react-bootstrap';

import ReactDOM from "react-dom"; 
import { HashRouter, Routes, Route } from "react-router-dom"; 
import Layout from "./pages/Layout"; 
import Home from "./pages/Home"; 
import Tutors from './pages/Tutors';
import Messages from "./pages/Messages";
import Planner from './pages/Planner';
import SignIn from './pages/SignIn';
import Timer from './pages/Timer';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <Navbar />
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/messages" element={<Messages />} /> 
        <Route path="/planner" element={<Planner />} /> 
        <Route path="/timer" element={<Timer />} /> 
        <Route path="/signin" element={<SignIn />} />        
      </Routes>  
  
      </header>
    </div>
  );
}

export default App;