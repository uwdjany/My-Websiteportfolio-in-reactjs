import React from "react";
 import Nav from "../component/navbar";
import './home.css';
import ground from '../assets/image/image.jpg'
 
function Home(){
return(
    <>


 
     <div className="container" id="home">
      <h3>Home</h3>
      <div className="bg-wp">
         <img src={ground}/>
      </div> 
      <div className="text-container">
         <h1>Hello</h1 >
         <h2>Am Djanati Uwase</h2>
         <span>I'm UI/UX Designer,FullStack Developer
            loremnxhhhhdbhxeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeewx b
            </span>
            <a href="" className="about-btn">Hire Me</a>
      </div>
      </div>


   
   </> 

   
);
}

export default Home;