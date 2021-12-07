import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';


function App() {
  return (
    <BrowserRouter>
  
     <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Equipment Rental 
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
          </header>
        <main>
          
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          
        </main>
        <footer className="row center">All right reserved</footer>
           </div>
           
    </BrowserRouter>
  );
}

export default App;