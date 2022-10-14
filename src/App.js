import React from 'react'
import Header from './components/header/Header';
import StackOverflow from "./components/StackOverflow";
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<StackOverflow/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
