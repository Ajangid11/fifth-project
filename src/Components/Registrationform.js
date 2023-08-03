import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Container  from 'react-bootstrap/Container';
import useregistrationstore from '../Store/Registrationstore';
import { useNavigate } from 'react-router-dom';

const Registrationform = () => {
    const navigate=useNavigate()
    const addregistration=useregistrationstore((state)=>state.addregistration)
    const [validated, setValidated] = useState(false);
    const[firstname,setfirstname]=useState();
    const[lastname,setlastname]=useState();
    const[city,setcity]=useState();
    const[state,setstate]=useState();
    const[username,setusername]=useState();
    const[password,setpassword]=useState();

    const{registrationdata,toggleregistrationstatus}=useregistrationstore(
        (state)=>({
            registrationdata:state.registrationdata,
            toggleregistrationstatus:state.toggleregistrationstatus
        })
    )


    var datareg=registrationdata.filter((res)=>(
        res.username==username
      )) 
      console.log("dataform",datareg)

      

    const handleSubmit = (event) => {
        event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
      if(datareg[0]!=undefined && datareg[0].username==username ){
        return alert("already registered...")
      }else{
        addregistration({
                           firstname:firstname,
                           lastname:lastname,
                           city:city,
                           state:state,
                           username:username,
                           password:password
                        })
                    setfirstname(" ");
                    setlastname(" ");
                    setcity(" ");
                    setstate(" ");
                    setusername(" ");
                    setpassword(" ");

            navigate('/Loginform')
      }
    //   if(!firstname && !lastname && !city && !state && !username && !password) return alert("plz enter the value");
    //         if(datareg[0].username!=username && datareg[0]==undefined){
    //             addregistration({
    //               firstname:firstname,
    //               lastname:lastname,
    //               city:city,
    //               state:state,
    //               username:username,
    //               password:password
    //             })
             
    //         }

                
    
    };

  return (
    <div>
        <Container>
            <div className='registrationform'>
                <h1>Registration form</h1>
                 <Form noValidate validated={validated} onSubmit={handleSubmit} className='p-5 px-5'> 
                <Row className="mb-3">
                    <Form.Group as={Col} md="5">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        value={firstname}
                        onChange={(e)=>setfirstname(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="5">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        value={lastname}
                        onChange={(e)=>setlastname(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>       
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="5">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required         
                        value={city}
                        onChange={(e)=>setcity(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="5">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required
                     value={state}
                     onChange={(e)=>setstate(e.target.value)}/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                    </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                    <Form.Group as={Col} md="5" >
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
                    <Form.Group as={Col} md="5" >
                    <Form.Label>Password</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                        type="password"
                        placeholder="Password"
                        aria-describedby="inputGroupPrepend"
                        required
                        value={password}
                        onChange={(e)=>setpassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                        Please choose a password.
                        </Form.Control.Feedback>
                    </InputGroup>
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
                <Button type="submit">Submit form</Button>
                </Form>
                </div>
        </Container>
    </div>
  )
}

export default Registrationform