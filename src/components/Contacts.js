import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import contactimg from '../assets/img/contact.png'


export const Contacts = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    from_name: '',
    lastName: '',
    user_email: '',
    phone:'',
    message:'',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };




  

  const handleSubmit = (e) => {
    e.preventDefault();

      emailjs.sendForm('service_z80qddq', 'template_a6yqh5b', form.current, 'z6xWKdikQ3xKP14Id')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
   
    // Form is valid, proceed with submission
    alert('Form submitted successfully!');
    setFormData({
      from_name: '',
      lastName: '',
      user_email: '',
      phone:'',
      message:'',
    });
    
  };

  
  

  return (
    <section className="contact" id="contacts">
      <Container>
        <Row className="align-items-center">

        


            <TrackVisibility>
              {({ isVisible }) =>
                <div className="form">
                  <h2>Get I<span>n Touch</span> </h2>
                  <form ref={form} onSubmit={handleSubmit}>


                  <Row>


                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="First name" name=" from_name" value={formData.from_name} onChange={handleInputChange}  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email address" name="user_email" value={formData.user_email} onChange={handleInputChange} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone number" name="phone" value={formData.phone} onChange={handleInputChange}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea className="px-12" rows="6" name="message" placeholder="Message" value={formData.message} onChange={handleInputChange} ></textarea>

                     
                      <button type="submit" value="Send">Send</button>
                    </Col>
                </Row>

                </form>
                </div>}
            </TrackVisibility>
        </Row>
      </Container>
    </section>
  )
}


