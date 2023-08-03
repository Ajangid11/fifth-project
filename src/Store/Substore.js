import {create} from 'zustand';
import {devtools,persist} from 'zustand/middleware';


const Substore=(set)=>({
    Subcription:[],
    addSub:(sub)=>{
        set((state)=>({
            Subcription:[sub,...state.Subcription],
        }))
    },
    removeSub:(subId)=>{
        set((state)=>({
            Subcription:state.Subcription.filter((s)=>s.id!==subId)
        }))
    },
    toggleSubStatus:(subId)=>{
        set((state)=>({
            Subcription:state.Subcription.map((sub)=>sub.id===subId?{
                ...sub,completed:!sub.completed}:sub)
        }))
    }

})



const useSubstore=create(
    devtools(
        persist(Substore,{
            name:"Subcription",
        })
    )
  )
        



export default useSubstore;
