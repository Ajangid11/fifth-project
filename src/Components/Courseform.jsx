import React,{useState} from 'react';
import usecourseStore from '../Store/Coursestore';

import { useNavigate } from "react-router-dom";
// import Courselist from './Courselist';
import { Container } from 'react-bootstrap';



const Courseform=()=> {
    const navigate=useNavigate();
    const addCourse=usecourseStore((state)=>state.addCourse);

    const [courseTitle,setCourseTitle]=useState("");

    const handleSubmit=()=>{
        if(!courseTitle) return alert("plz add a course");
        addCourse({
            id:Math.ceil(Math.random() * 1000),
            title:courseTitle
        })
        setCourseTitle("")
        navigate('/Courselist')

    }



    
  return (
    <div>
       <Container>
         <div className='containerform'>    
        <form>
            <input 
            value={courseTitle}
            onChange={(e)=>setCourseTitle(e.target.value)}>
            </input>
            <button 
            onClick={()=>handleSubmit()}>Add course</button>
        </form>
        </div>
        </Container>


    </div>
  )
}

export default Courseform;