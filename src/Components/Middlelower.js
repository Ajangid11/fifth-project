import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'

const Middlelower = () => {
  return (
    <div>


      <Container fluid className='p-0 '>
        <div className='boximage pb-5'>
          <Row className='justify-content-center pt-5 pb-5'>
            <Col xl={3} lg={3} md={3} sm={5} xs={5} className=' mx-3 mt-5 text-white p-0'>
                <div className='boxcover p-4 '>
                <h3>Web Design</h3>
                      <p>Sample text. Click to select the text box. Click again or 
                         click to start editing the text.
                      </p>
                </div>
            </Col>
            <Col xl={3} lg={3} md={3} sm={5} xs={5} className=' mt-5 mx-3 text-white p-0'>
                <div className='boxcover  p-4'>
                <h3>Branding</h3>
                      <p>Sample text. Click to select the text box. Click again or 
                         click to start editing the text.
                      </p>
                </div>
            </Col>
            <Col xl={3} lg={3} md={3} sm={5} xs={5} className=' mt-5 mx-3 text-white p-0'>
                <div className='boxcover  p-4'>
                <h3>Development</h3>
                      <p>Sample text. Click to select the text box. Click again or 
                         click to start editing the text.
                      </p>
                </div>
            </Col>
            <Col xl={3} lg={3} md={3} sm={5} xs={5} className=' mt-5 mx-3 text-white p-0'>
                <div className='boxcover  p-4'>
                <h3>Strategy</h3>
                      <p>Sample text. Click to select the text box. Click again or 
                         click to start editing the text.
                      </p>
                </div>
            </Col>
            <Col xl={3} lg={3} md={3} sm={5} xs={5} className=' mt-5 mx-3 text-white p-0'>
                <div className='boxcover  p-4'>
                <h3>Social Media</h3>
                      <p>Sample text. Click to select the text box. Click again or 
                         click to start editing the text.
                      </p>
                </div>
            </Col>
            
            <Col xl={3} lg={3} md={3} sm={5} xs={5} className=' mt-5 mx-3 text-white p-0'>
                <div className='boxcover  p-4'>
                <h3>Ecommerce</h3>
                      <p>Sample text. Click to select the text box. Click again or 
                         click to start editing the text.
                      </p>
                </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Middlelower