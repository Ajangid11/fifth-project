import { create } from "zustand";
import {devtools,persist} from 'zustand/middleware';


const studentstore=(set)=>({
    students:[],
    addstudents:(student)=>{
        set((state)=>({
            students:[student,...state.students],
        }))
    },
    removestudent:(studentid)=>{
        set((state)=>({
           students:state.students.filter((s)=>s.id!==studentid)
        }))
    },
    togglestudentstatus:(studentid)=>{
        set((state)=>({
            students:state.students.map((student)=>student.id===studentid?{
                ...student,completed:!student.completed}:student)
            })) 
    }
})

const usestudentstore=create(
    devtools(
        persist(studentstore,{
            name:"students"
        })
    )
)

export default usestudentstore;