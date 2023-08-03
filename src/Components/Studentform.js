import React, { useState } from 'react';
import { Form,Container,Button } from 'react-bootstrap';
import usestudentstore from '../Store/Studentstore';
import { redirect, useNavigate } from "react-router-dom";
import Studentlist from './Studentlist';
import uselogintore from '../Store/Login';



const Studentform = () => {

    const navigate=useNavigate();  
    const addstudents=usestudentstore((state)=>state.addstudents);
    const [studenttitle,setstudenttitle]=useState("");
    const[studentcourse,setstudentcourse]=useState("");
    const[studentnumber,setstudentnumber]=useState("");

    const{logindetails,toggleloginstatus}=uselogintore(
        (state)=>({
            logindetails:state.logindetails,
            toggleloginstatus:state.toggleloginstatus
        })
    )


    const handlesubmit=(e)=>{
            e.preventDefault();
        if(!studenttitle && !studentnumber && !studentcourse)return alert("plz enter the value")
        addstudents({
            id:Math.ceil(Math.random()*50),
            title:studenttitle,
            course:studentcourse,
            number:studentnumber
        })
        navigate('/Studentlist');
    }
    const handleLogout=()=>{
        // const resetState = uselogintore((state) => state.resetAll);
        // resetState();
        localStorage.removeItem("logindetails");
        navigate('/')
          window.location.reload(true)
           
  
    }



  return (
    <div>
        <Container>
         <div className='containerform'>
         <Form>
            <h1>Student Form</h1>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name"  
                value={studenttitle}
                onChange={(e)=>{setstudenttitle(e.target.value)}}
            />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>subject</Form.Label>
                <Form.Control type="text"   placeholder="Enter subject"
                 value={studentcourse}
                 onChange={(e)=>{setstudentcourse(e.target.value)}} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="number"  placeholder="Enter number"
                 value={studentnumber}
                 onChange={(e)=>{setstudentnumber(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Button variant="primary" type="submit" onClick={handlesubmit} >
                Submit
            </Button>
            <Button className='ms-3' variant="danger" type="button" onClick={handleLogout} >
                Logout
            </Button>
            </Form.Group>
         </Form>


         </div>
        </Container>


    </div>
  )
}

export default Studentform