import React from 'react';
  import './navbar.css';
import { MenuFoldOutlined } from "@ant-design/icons";
import {CloseOutlined } from "@ant-design/icons";
import Home from '../view/Home';

const Nav = () => {
    return (
        <>
        
        <div className='open-menu'>
        <MenuFoldOutlined  id='m'className='open'/>
        <CloseOutlined id='m' className='close'/>
        
        </div> 
        <div className='menu'>
<ul>
    <a href='' className='active'>Home</a>
    <a href='about' >About Me</a>
    <a href='' >Contact Me</a>
    <a href='' >My Skills</a>
</ul>

        </div>
        
        
        
        
//         </>
//         <div className='nav'>
//             <div className='nav-container'>

//             <ul className='nav-links'>

// <a href='' className='nav-link'>
//    <li>Home</li> 
//     </a>
    
//     <a href='' className='nav-link'>
//    <li>About Me</li> 
//     </a>
    
//     <a href='' className='nav-link'>
//    <li>Contact Me</li> 
//     </a>
    
//     <a href='' className='nav-link'>
//    <li>Skills</li> 
//     </a>
    
    
    
// </ul>


//             </div>

            
//         </div>






    )
}

export default Nav