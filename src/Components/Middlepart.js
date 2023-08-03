import React from 'react';
import { Row,Col,Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Middlepart = () => {
  return (
    <div>
          <Container fluid className='bg-color'>
        <Row className='text-center'>
        <Col xs={12} md={12} lg={12} className="text-center" >
          <Image fluid className='imageheight mt-5'  src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/fa63a4f0aa635be18df37ed4/pexels-photo-6306981.jpeg"  width={406}   roundedCircle   />
        </Col>
        </Row>
        <Row className='text-center mt-5 pb-5'>
          <Col lg={6} md={6} xs={12} className='ps-3'>  
          <div className='text-start ps-5'>
             <h1>About harness</h1>
             <h1>multimedia based</h1>
             <h1>collaboration</h1>
              <p className='fs-5 mt-4'>ORGANICALLY GROW THE HOLISTIC WORLD VIEW</p>
          </div>
          </Col>
          <Col lg={6} md={6} xs={12}>
            <p className='fs-4 text-start ps-5 pb-5'>Podcasting operational change management<br/> 
            inside of workflows to establish a framework.<br/>
             Taking seamless key performance indicators<br/>
              offline to maximise the long tail. Keeping your<br/>
               eye on the ball while performing a deep dive on<br/>
                the start-up mentality to derive convergence on<br/>
                 cross-platform integration. Objectively innovate<br/>
                  empowered manufactured products whereas<br/>
                   parallel platforms. Holisticly predominate<br/>
                    extensible testing procedures for reliable supply<br/>
                     chains. Dramatically engage top-line web <br/>
                      services vis-a-vis cutting-edge deliverables.</p>
          </Col>
        </Row>
       
      </Container>

    </div>
  )
}

export default Middlepart