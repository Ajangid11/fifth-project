import {create} from 'zustand';
import {devtools,persist} from 'zustand/middleware';

const registrationstore=(set)=>({
    registrationdata:[],
    addregistration:(registration)=>{
        set((state)=>({
            registrationdata:[registration,...state.registrationdata]
        }))
    },
    toggleregistrationstatus:(registrationId)=>{
        set((state)=>({
            registrationdata:state.registrationdata.map((registration)=>registration.id===registrationId?{
                ...registration,completed:!registration.completed}:registration)
        }))
    }
})


const useregistrationstore=create(
    devtools(
        persist(registrationstore,{
            name:'registrationdata'
        })
    )
)

export default useregistrationstore;