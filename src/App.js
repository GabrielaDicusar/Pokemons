import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import PokeDex from './pages/PokeDex';
import About from './pages/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './Components/style.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<PokeDex/>}></Route>
      <Route path="/about" component={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    </>


    // <Router>
    //   <Navbar />
    //   <Switch>
    //     <Route exact path="/" component={PokeDex} />
    //     <Route path="/about" component={About} />
    //     {/* Add more routes as needed */}
    //     {/* <Route component={NotFound} /> */}
    //   </Switch>
    // </Router>
  );
}

export default App;
