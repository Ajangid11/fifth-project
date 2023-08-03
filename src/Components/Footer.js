import React from 'react'
import { Col,Row, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
            <Container fluid className='mt-5'>
                <Row className='bg-dark text-white text-center p-5'>
                    <Col lg={12}>
                        Copyright @ 2023
                    </Col>
                </Row>
            </Container>

    </div>
  )
}

export default Footer