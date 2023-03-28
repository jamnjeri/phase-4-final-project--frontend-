import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Nav from "./components/Navbar";
import "./App.css";
import "semantic-ui-css/semantic.min.css";


import About from "./components/About.js";
import Skills from "./components/Skills";

import { useEffect, useState } from "react";

function App() {
   
    const [currentUserEmail, setCurrentUser] = useState('');


  useEffect(() => {
    const storedEmail = localStorage.getItem("currentUserEmail");
    if (storedEmail) {
      setCurrentUser(storedEmail);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentUserEmail", currentUserEmail);
  }, [currentUserEmail]);


  function storeEmail(value) {
    console.log(value)
    setCurrentUser(value);
  }

  console.log(currentUserEmail);
    
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/about"><Skills/></Route>
          <Route path="/signUp"><SignUp/></Route>
          <Route path="/projects"><ProjectList currentUserEmail={currentUserEmail}/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;