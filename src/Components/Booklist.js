import React from 'react'
import usebooks from '../Store/Book';
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Booklist = () => {
  const navigate=useNavigate();
  const{books,removebook,toggleBookStatus}=usebooks(
    (state)=>({ 
         books:state.books,
         removebook:state.removebook,
         toggleBookStatus:state.toggleBookStatus,
         update:state.update
    })
  
    )



  return (
    <div>
      <Container>
        <div className='containerform'>
          <h1 className='ps-5 mb-4'>Book List</h1>
      <ul>
        {
          books.map((book,i)=>{
            return(
              <li key={i}>
                <input onChange={(e)=>{toggleBookStatus(book.id)}} value={book.title}></input>
                <button onClick={()=>removebook(book.id)}>delete</button>
                <button><Link  to="/Bookedit" state={{book:book,i}}>Update</Link></button>
              </li>
            )
          })
        }
      </ul>
      </div>
      </Container>
    </div>
  )
}

export default Booklist