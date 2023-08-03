import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import  { useRef } from 'react';
import emailjs, { sendForm } from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import useSubstore from '../Store/Substore';
import { useState } from 'react';




const Subscribe = () => {
    const form = useRef();
    const navigate=useNavigate();
    const addSub=useSubstore((state)=>state.addSub);
    const [SubTitle,setSubTitle]=useState("");


    var dropdown=localStorage.getItem('dropdown')
    // console.log("d   ropdown",dropdown)


    const sendEmail=(e)=>{
        console.log('event = ',SubTitle)
        e.preventDefault();
        // if(!SubTitle) return alert("plz add a email");
        //     addSub({
        //         id:Math.ceil(Math.random() * 1000),
        //         title:SubTitle
        //     })

    
        //     var temp_id=dropdown=="1"?'template_82l4009':'template_11i837k';
        //     emailjs.sendForm('service_li9oart', temp_id , form.current, 'WhZkXqeOh4zRZVMc-')
        //     .then((result)=>{
        //         navigate('/Sublist')
        //     },
        //     (error)=>{
        //         alert("error")
        //     })
        //     setSubTitle("")
         
        
          

                
    
    }

  return (
    <div>
        <Container className='mt-5 mb-5'>
               <Form ref={form} onSubmit={sendEmail} >
            <Row className='justify-content-center'> 
             <Col lg={5} md={5} sm={10}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email  </Form.Label>
                <Form.Control type="email" placeholder="name@example.com"
                value={SubTitle}
                onChange={(e)=>setSubTitle(e.target.value)}/>
                </Form.Group>
             
                
             </Col>
             <Col lg={5} md={5} sm={10} >
            
             <Button type='submit'   className=' rounded-pill fs-4 mt-3 fw-bold sub' variant="secondary">
                <a className='text-white' >Subscribe</a>
                </Button>{' '}
                {/* <Button><a href="mailto:jangidanjali9999@.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">Click to Send an Email</a></Button> */}
               
             </Col>
            </Row>
               </Form>
        </Container>
    </div>
  )
}

export default Subscribe