import React from 'react';
import Info from './info.js';
import {Card,CardColumns} from 'react-bootstrap';

import coding from '../images/parallax.svg';

function FAQ(){

    return(
    <div id = "FAQ">
        <span className="title">
        FAQs
        </span>
        

        <CardColumns>
            {Info.map(item => (
         <Card bg = 'dark' text = 'white' className='mt-3 ml-5 mr-5 ' style = {{width:"20rem", height:"22rem"}}>    
            <Card.Body>        
                <Card.Title className = 'text-center'>{item.title}</Card.Title>
                <Card.Text className = 'pt-3'> 
                {item.content.map(text => (
                    <>
                    <span>{text}</span>
                    <br/>
                    <br/>
                    </>
                ))}
</Card.Text>    
    </Card.Body>    
  </Card>
))}

  </CardColumns>
  {/* <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <img src= {coding} />
    </Parallax> */}
    </div>
    )
}

export default FAQ;
