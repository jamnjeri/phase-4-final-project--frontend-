import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewRecipe from "./pages/NewRecipe";

function App() {

  // Keep track of if user is Logged in or not
  const [loggedIn, setIsLoggedIn] = useState(false); 

  // Keep track of the user
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    console.log(user)
    setUser(user)
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup handleLogin={handleLogin} />} />
        <Route path="/new-recipe" element={<NewRecipe user={user} />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
