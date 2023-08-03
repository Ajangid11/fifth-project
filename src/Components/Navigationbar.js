import React, { useEffect } from 'react';
import { Row,Col,Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import uselogintore from '../Store/Login';





const Navigationbar = () => {

    // window.location.reload(true)

    const{logindetails,toggleloginstatus}=uselogintore(
      (state)=>({
      logindetails:state.logindetails,
      toggleloginstatus:state.toggleloginstatus
       }))
   localStorage.removeItem('logindetails')



console.log("login",logindetails.length)
  
  return (
    <div>
    
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src='https://i.pinimg.com/736x/6e/a9/d8/6ea9d8d5ac75d9c5d7a2a567c1e2bbdf.jpg' width={100} height={60}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Link className='link' to='/'>Home</Link>
            </Nav.Link>
            {/* <Nav.Link href="#action1">
              <Link  className='link' to='/Studentform'>Add Student Details</Link>
            </Nav.Link> */}
            <Nav.Link href="#action1">
              <Link className='link' to='/Bookform'>Add Books</Link>
            </Nav.Link>
            <Nav.Link href="#action1">
              <Link className='link' to='/Courseform'>Add Course</Link>
            </Nav.Link>
            
        {
            (!logindetails.length)?
          <Nav.Link href="#action1">
              <Link className='link' to='/Loginform'>Login</Link>
            </Nav.Link>
            :
             <Nav.Link href="#action1">
             <Link className='link' to='/Studentlist'>Studentlist</Link>
           </Nav.Link>
        }
           
            <Nav.Link href="#action1">
              <Link className='link' to='/Registrationform'>Registration</Link>
            </Nav.Link>
            
         
          </Nav>       
        </Navbar.Collapse>
      </Container>
      </Navbar>
      

    

    </div>
  )
}

export default Navigationbar; 