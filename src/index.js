
import React from "react";  
import ReactDOM from "react-dom";
import App from "./App";





   ReactDOM.render(<App/>,document.querySelector("#root"));
const open_menu =document.querySelector('.open-menu');
const menu = document.querySelector('.menu');
const open_icon = document.querySelector('.open-menu .open');
const close_icon = document.querySelector('open-menu .close');
 open_menu.addEventListener('click', () =>{
   menu.classList.toggle('active');
   open_icon.classList.toggle('active');
   close_icon.classList.toggle('active');

 }
 
 
 );
 const links = document.querySelectorAll('.menu ul a');
 links.forEach((link) => {

 
 link.addEventListener('click', () => {

 

   
   clearActives();
   link.classList.add('active');
   setTimeout(()=>{
      menu.classList.remove('active');
      open_icon.classList.remove('active');
      close_icon.classList.remove('active')
   },500)
});
});
function clearActives(){
   
   }

   const section_1 =document.querySelector('.container');
   const windowHeight =window.innerHeight;
   const animationPoint = 500;

   function scrollAnimation() {
      const sect1_top =section_1.getBoundingClientRect().top;
      if (sect1_top < windowHeight - animationPoint){
         section_1.classList.add('active');
         clearActives();
         links[0].classList.add('active');

      }

   }
   scrollAnimation();
   window.addEventListener('scroll',scrollAnimation);