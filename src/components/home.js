import React from 'react';
import hacker from "../images/hacker.svg";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../images/intuition.svg";

import ScrollAnimation from 'react-animate-on-scroll';


function Home(){
    return(
      <Container>
        <div id="home">
     <Row>
    <Col sm><img src={hacker} style={{width: '100%', height: '100%'}}/></Col>
    <Col sm style={{height:'100%'}}>
      
    
      {/* <ScrollAnimation delay={500}
  animateIn='fadeIn'
  initiallyVisible={false}> */}
    <img   src={logo}
        alt="logo"
      />
      <h1 style={{color:'white'}}>iNTUition <span style={{color:'#5f85db'}}>v7.0</span></h1>
      <h4 style={{color:'white'}}>19-20 March 2021</h4>
      <h4 style={{color:'white'}}>Nanyang Technological University</h4>
      <h4 style={{color:'white'}}>Singapore</h4>
      <Button href="https://intuitionv6.devpost.com/project-gallery" variant="outline-info" size="lg">View past submissions here</Button>{' '}
      {/* </ScrollAnimation> */}
    </Col>
  </Row>
  </div>
    </Container>
    )
}

export default Home;