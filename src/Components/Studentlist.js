import React from 'react';
import usestudentStore from '../Store/Studentstore';
import { Container, Table } from 'react-bootstrap';
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';

const Studentlist = () => {

  const navigate=useNavigate();
      const {students,removestudent,togglestudentstatus}=usestudentStore(
        (state)=>({
          students:state.students,
          removestudent:state.removestudent,
          togglestudentstatus:state.togglestudentstatus
        })
      )
        console.log("students",students)

    function adddata(){
      navigate('/Studentform')
    }
  return(
    <div>
              
          {/* <ul>
            {
              students.map((student,i)=>{
                return(
    
                  <li key={i}>
                <input onChange={(e)=>{ togglestudentstatus(student.id)}}
                    value={student.title}></input>
                    <input onChange={(e)=>{ togglestudentstatus(student.id)}}
                    value={student.course}></input>
                    <input onChange={(e)=>{ togglestudentstatus(student.id)}}
                    value={student.number}></input>
                <button onClick={()=>removestudent(student.id)}>delete</button>
                </li>
                
                    )

              })
            }
          </ul> */}

           <Container>
            <div className='containerform'>
            <h1 className='ps-5 mb-4'>Student List</h1>
        
              <Table>
                <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Contact Number</th>
              </tr>
              </thead>
                <tbody>
                  {
                    students.map((student,i)=>{
                      return(
                        <>
                        <tr>    
                        <td key={i}>{i+1}</td>
                        <td onChange={(e)=>{togglestudentstatus(student.id)}}>{student.title}</td>
                        <td onChange={(e)=>{togglestudentstatus(student.id)}}>{student.course}</td>
                        <td onChange={(e)=>{togglestudentstatus(student.id)}}>{student.number}</td>
                        <td><button onClick={()=>removestudent(student.id)}>delete</button></td>   
                                             
                        </tr>  
                     </>
                          )
                       })
                       
                 }     
              </tbody>
             </Table>
        
                  <button onClick={adddata}>Add more data</button>
            </div>
          </Container>
       

    </div>
  )
}

export default Studentlist