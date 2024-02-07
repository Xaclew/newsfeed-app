import React from "react";
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import Home from "./pages/Home";

function App() {

  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d633a2084ead4345854a2a7b4fa58458`
      )
  
      let fetchedData = response.json();
      setNewsData(fetchedData);
    }
    getData()
  }, []);

  return (
    


    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        {/* <Route path="Articles" element={ <Articles/> } />
        <Route path="Login" element={ <Login/> } />
        <Route path="Register" element={ <Register/> } /> */}
      </Routes>
    </div>
  )
}

export default App