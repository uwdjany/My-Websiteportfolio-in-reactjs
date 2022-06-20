import React  from "react";
import {Card,Text,Typography} from 'antd'
import './index.css';

import photo from '../assets/image/image.jpg'


// const{Text,Title}=Typography
 const About =()=>{
    return(
        <>
         <h1 className="heading">About me </h1>
        <div className="container">
           
            <div>
            <img src={photo} className='image'/>
            </div>
          <Card className="card-one">
            <Card.Grid>
<h4 className="heading-four">
Traduit de l'anglais<br />
Un CV, parfois orthographié, <br />
appelé CV en anglais hors de l<br />
'Amérique du Nord, est<br />
 un document créé et utilisé par une <br />
personne pour présenter ses antécédents<br />
, ses compétences 
et ses réalisations.

Traduit de l'anglais<br />
Un CV, parfois orthographié, <br />
appelé CV en anglais hors de l<br />
'Amérique du Nord, est<br />
 un document créé et utilisé par une <br />
personne pour présenter ses antécédents<br />
, ses compétences 
et ses réalisations.


</h4>

< br />
<div className="button-container">
<a href="" className="btn">Download My Cv</a>
<a href="" className="btn" id="contact">Contact Me</a>
</div>

            </Card.Grid>

          </Card>
        </div>
        
        </>
        
    )
 }
 export default About