import React from 'react';
import {Form,Button,Col} from 'react-bootstrap';

function Contact(){
    return(
        <div id='contact'>
         <span className="title">
        Contact
        </span>

        <Form className='ml-5 mr-5'>

            <Form.Row className="align-items-center mt-4 ml-5">
    <Col xs="6">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="NAME"
      />
    </Col>
    </Form.Row>

    <Form.Row className="align-items-center mt-4 ml-5">
    <Col xs="6">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="EMAIL ADDRESS"
      />
    </Col>
    </Form.Row>

    <Form.Row className="align-items-center ml-5">
    <Col xs="6">
<Form.Group controlId="exampleForm.ControlTextarea1">
    {/* <Form.Label>Example textarea</Form.Label> */}
    <Form.Control as="textarea" rows={6} placeholder="GO AHEAD, WE ARE LISTENING..."/>
  </Form.Group>
      </Col>
    </Form.Row>

  
  <Button className='ml-5 mt-3' variant="outline-info" type="submit">
    Submit
  </Button>
  <div style={{paddingBottom:'10vh'}}></div>
</Form>
       
        </div>
    )
}

export default Contact;