// import React, { useState } from "react"
// import Webcam from "react-webcam";
import Hero from "./components/Hero"
import {  Routes, Route } from 'react-router-dom';
function App() {
//  const [isCamera , setCamera] = useState(false)

  return (
    <>
    <Routes>
        <Route path="/" exact element={<Hero/>} />
    </Routes>
    {/* {isCamera?<Webcam />:""}
    <button onClick={()=>setCamera(!isCamera)}>Camera</button> */}
    </>
  )
}

export default App
