import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Nav from "./components/Navbar";
import "./App.css";
import "semantic-ui-css/semantic.min.css";


import About from "./components/About";
import Skills from "./components/Skills";

import { useEffect, useState } from "react";

function App() {
   
    
    
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/about"><About/></Route>
</Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;