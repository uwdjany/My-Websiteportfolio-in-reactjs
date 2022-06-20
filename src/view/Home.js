import React from "react";
 import Nav from "../component/navbar";
import './home.css';
import ground from '../assets/image/uwase-background.jpg'
import {Card,Text,Typography} from 'antd'



const Home =()=> {
return(
    <>

<Nav/>
 
     <div className="container" id="home">
   
      <div className="container-image">
         <img src={ground} className='image'/>
      </div> 
     < Card className="card">
            <Card.Grid>
<h4 className="heading-four">
Traduit de l'anglais<br />
Un CV, parfois orthographié, <br />
appelé CV en anglais hors de l<br />
'Amérique du Nord, est<br />
 un document créé et utilisé par une <br />
personne pour présenter ses antécédents<br />
, ses compétences 
et ses réalisations. </h4>  
 </Card.Grid></Card>

      </div>
   


   
   </> 

   
);
}

export default Home;