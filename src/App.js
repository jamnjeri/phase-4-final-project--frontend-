import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import 'semantic-ui-css/semantic.min.css'
import About from './components/about/About'
import Nav from './components/navbar/Navbar';

function App() {
    return (
        <div>
          
        
            <BrowserRouter>
            <Nav/>
                <Routes>

                    <Route path = '/about' element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;