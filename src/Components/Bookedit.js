import React from 'react';
import usebooks from '../Store/Book';
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router-dom';
import { useState } from 'react';
// import usebooks from '../Store/Book';



const Bookedit = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const book=location.state.book;
  const [booktitle,setbooktitle]=useState();
  console.log("loc",location.state.book)
  const{books,removebook,toggleBookStatus,update}=usebooks(
    (state)=>({ 
      books:state.books,
      removebook:state.removebook,
      toggleBookStatus:state.toggleBookStatus,
      update:state.update
    })
    
    )
    const addbooks=books((state)=>state.addbooks)
    const handlesubmit=()=>{
      addbooks({
        id:Math.ceil(Math.random()*50),
        title:booktitle
    })
    }

    
  return (
    <div>
       <Container>
        <div className='containerform'>
          <h1 className='ps-2 mb-4'>Update the data</h1>
      <ul>
              <li >
                <input value={book.booktitle} onChange={(e)=>setbooktitle(e.target.value)}></input>
           
                <button onClick={handlesubmit} >Submit</button>
              </li>
            
        
      </ul>
      </div>
      </Container>
    </div>
  )
}

export default Bookedit