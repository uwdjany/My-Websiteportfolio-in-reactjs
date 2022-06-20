import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../view/Home";
import About from '../view/aboutme'
import Contact from '../view/contact'

function Index (){

    return(
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/home" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
    )
}
export default Index;