import {create} from 'zustand';
import {devtools,persist} from 'zustand/middleware';

const loginstore=(set)=>({
    logindetails:[],
    addlogin:(login)=>{
         set((state)=>({
                logindetails:[login,...state.logindetails],
         }))
    },
    toggleloginstatus:(loginId)=>{
        set((state)=>({
            logindetails:state.logindetails.map((login)=>login.id===loginId?{
                ...login,completed:!login.completed}:login)
            
        }))
    }
})

const uselogintore=create(
    devtools(
        persist(loginstore,{
            name:"logindetails",
        })
    )
)
export default uselogintore;