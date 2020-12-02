import React from 'react';
import { Container } from 'react-bootstrap';
// import {Container,Card,CardColumns,Button,Image} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ieeeLogo from '../images/ieeelogo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faGithubSquare,faInstagramSquare,faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
// import {faEnvelope} from "@fortawesome/free-regular-svg-icons";


function Footer(){
    return(
        
         <footer id="footer" style={{backgroundColor:'#5f85db',paddingTop:'5vh',paddingBottom:'5vh'}}>
             <Container>
                 <Row>
                     <Col sm>
                         <h4 style={{color:'white'}}>Organizers</h4>
                         {/* <h1>IEEE</h1>
                         <h2>NTU Student Branch</h2> */}
                         <img src={ieeeLogo} style={{maxWidth:'30%',height:'auto'}}></img>


                     </Col>
                     <Col sm>
                     <h4 style={{color:'white'}}>Connect With Us</h4>
                        <Row>
                        <a href="https://www.linkedin.com/company/ieee-ntu-student-branch" className="social"><FontAwesomeIcon  icon={faLinkedin} size="3x"/></a>
                        <a href="https://github.com/IEEENTU" className="social"><FontAwesomeIcon  icon={faGithubSquare} size="3x"/></a>
                        <a href="https://m.facebook.com/IEEENTU/" className="social"><FontAwesomeIcon  icon={faFacebookSquare} size="3x"/></a>
                        <a href="https://instagram.com/ieee_ntu?igshid=d6bh97cj9opv " className="social"><FontAwesomeIcon  icon={faInstagramSquare} size="3x"/></a>
                        </Row>
                     </Col>
                 </Row>
             </Container>
         </footer>
        
    )
}

export default Footer;