import React, { useState } from 'react';
import useSubstore from '../Store/Substore';
import { Container, Table ,Button,Form} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


const Sublist = () => {
  const [template,settemplate]=useState([]);

  const form=useRef();
    const{Subscription,removeSub,toggleSubStatus}=useSubstore(
        (state)=>({
            Subscription:state.Subcription,
            removeSub:state.removeSub,
            toggleSubStatus:state.toggleSubStatus
        })
    )
    // console.log("subscrib", Subscription[0].title)
    

const Resend=()=>{
  emailjs.sendForm('service_li9oart', 'template_mr1ohul',form.current, 'WhZkXqeOh4zRZVMc-')
  .then((result)=>{
      alert('resend successfully')
  },
  (error)=>{
      alert("error")
  })
}
 
function handleChange(event) {
  var status = event.target.attributes.value != undefined ? true : false;
  if(status) {
    // console.log(event.target.attributes.value.value);
    settemplate(event.target.attributes.id.value);
    console.log(event.target.attributes.id.value)
    localStorage.setItem('dropdown',JSON.stringify(template));
  }

}

  return (
    <div>
      
      <Container>
            <div className='containerform'>
            <h1 className='ps-5 mb-4'>Subscription List</h1>
          <Form ref={form}>
               <Dropdown className='dd' onClick={handleChange}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Choose Template
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"   id='1' value="template1" >  Template 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" id='2'  value="template2">Template 2</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
              <Table>
                <thead>
                <tr>
                <th>#</th>
                <th>Email</th>
              </tr>
              </thead>
                <tbody>
                  {
                    Subscription.map((Sub,i)=>{
                      return(
                        <>
                        <tr>    
                        <td key={i}>{i+1}</td>
                        <td onChange={(e)=>{toggleSubStatus(Sub.id)}}>{Sub.title}</td>
                        <td onChange={(e)=>{toggleSubStatus(Sub.id)}}>{Sub.course}</td>
                        <td onChange={(e)=>{toggleSubStatus(Sub.id)}}>{Sub.number}</td>
                        <td><Button variant='primary' onClick={()=>removeSub(Sub.id)}>delete</Button></td>   
                        <td><Button variant='danger' onClick={Resend}>Resend</Button></td>
                                             
                        </tr>  
                     </>
                          )
                       })
                       
                 }     
              </tbody>
             </Table>
             </Form>
     
        
                  {/* <button onClick={addSub}>Add more data</button> */}
            </div>
          </Container>
    </div>
  )
}

export default Sublist