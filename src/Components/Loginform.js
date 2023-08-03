import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container  from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import useloginstore from '../Store/Login'
import useregistrationstore from '../Store/Registrationstore';
import Registrationform from './Registrationform';

const Loginform = () => {
    const navigate=useNavigate();
    const [validated, setValidated] = useState(false);
    const[username,setusername]=useState();
    const[password,setpassword]=useState();
    const addlogin=useloginstore((state)=>state.addlogin)
    const addregistration=useregistrationstore((state)=>state.addregistration)

    const{registrationdata,toggleregistrationstatus}=useregistrationstore(
      (state)=>({
          registrationdata:state.registrationdata,
          toggleregistrationstatus:state.toggleregistrationstatus
      })
  )

  
  const handleSubmit = (event) => {
        event.preventDefault();
        
    console.log("data",registrationdata)
    var dataform=registrationdata.filter((res)=>(
      res.username==username
    )) 
    console.log("dataform1",dataform)

      
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
        if(!password && !username) return alert("plz enter the value");
        // addlogin({
        //     loginusername:username,
        //     loginpassword:password
        // }) 
           
        if(dataform[0]!=undefined && dataform[0].username==username && dataform[0].password==password){
          addlogin({
            loginusername:username,
            loginpassword:password
        }) 
          navigate('/Studentform');
        }else{
          // navigate('/')
          alert('first you have to registered')
        }

       
     }
   
    
  return (
    <div>
        <Container>
      <div className='loginform'>
  
                <h1>Login form</h1>
             <Form noValidate validated={validated} onSubmit={handleSubmit} className='mt-3'>
                <Row className="mb-3">
                  
                   
                    <Form.Group as={Col} md="10">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        value={username}
                        onChange={(e)=>setusername(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                        Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="10" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setpassword(e.target.value)}
                    />
                    </Form.Group>
                </Row>
              
                <Form.Group className="mb-3">
                    <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit" > Submit form</Button>
                </Form>  
                </div>       
    </Container>
    </div>
  )
}

export default Loginform