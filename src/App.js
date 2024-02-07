import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    


    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> }/>
        {/* <Route path="Articles" element={ <Articles/> } />
        <Route path="Login" element={ <Login/> } />
        <Route path="Register" element={ <Register/> } /> */}
      </Routes>
    </div>
  )
}

export default App