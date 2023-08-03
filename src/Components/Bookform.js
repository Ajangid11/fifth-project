import React from 'react';
import books from '../Store/Book';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';
const Bookform = () => {
  const navigate=useNavigate();
    const addbooks=books((state)=>state.addbooks)
    const[booktitle,setbooktitle]=useState("")
    const handleSubmitbook=()=>{
        if(!booktitle) return alert("plz add a book");
        addbooks({
            id:Math.ceil(Math.random()*50),
            title:booktitle
        })
    
        navigate('/Booklist')
    }

   


  return (
    <div>
       <Container>
         <div className='containerform'>
        <form>
        <input value={booktitle} onChange={(e)=>setbooktitle(e.target.value)}></input>
        <button onClick={handleSubmitbook}>Add book</button>
     
       </form>
       </div>
        </Container>

    </div>
  )
}

export default Bookform