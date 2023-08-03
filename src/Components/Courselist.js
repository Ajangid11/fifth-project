import React from 'react';
import usecourseStore from '../Store/Coursestore';
import { Container } from 'react-bootstrap';

const Courselist = () => {
    const{courses,removeCourse,toggleCourseStatus}=usecourseStore(
        (state)=>({
            courses:state.courses,
            removeCourse:state.removeCourse,
            toggleCourseStatus:state.toggleCourseStatus
        })
    )
 console.log("course",courses)
  return (
    <div>
    <Container>
    <div className='containerform'>
    <h1 className='ps-5 mb-4'>Course List</h1>
    <>
        <ul>
            {courses.map((course,i)=>{
                return(
                // <React.Fragment key={i}>
                //     <li>
                //         <span > 
                //             <input
                //                 checked={course.completed}
                //                 type='checkbox'
                //                 onChange={(e)=>{
                //                     toggleCourseStatus(course.id)
                //                 }}
                //             ></input>
                //         </span>
                //         <span>{course?.title}</span>
                //         <button onClick=
                //         {()=>removeCourse(course.id)}>
                //             delete</button>
                //     </li>
                // </React.Fragment>
               
          
                     <li key={i}>
                         <input onChange={(e)=>{ toggleCourseStatus(course.id)}}
                             value={course.title}></input>
                         <button onClick={()=>removeCourse(course.id)}>delete</button>
                    </li>
       


                )
            })}
        </ul>
    </>
    </div>
      </Container>
    </div>
  )
}

export default Courselist