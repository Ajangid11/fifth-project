import {create} from 'zustand';
import {devtools,persist} from 'zustand/middleware';



const bookStore=(set)=>({
    books:[],
    addbooks:(book)=>{
        set((state)=>({
            books:[book,...state.books],
        }))
    },
    removebook:(bookid)=>{
        set((state)=>({
            books:state.books.filter((b)=>b.id!==bookid)
        }))
    },
    toggleBookStatus:(bookid)=>{
        set((state)=>({
            books:state.books.map((book)=>book.id===bookid?{
                ...book,completed:!book.completed}:book)
        }))
    },
    update:(updatebook)=>{
        set((state)=>({
            addbooks:updatebook
        }))
    }
    })


const usebooks=create(
    devtools(
        persist(bookStore,
            {
                name:"book",
            })
    )
)

export default usebooks;