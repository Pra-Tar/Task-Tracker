import { createSlice } from "@reduxjs/toolkit"

const initialState=[
    {
        id:1,
        title:"study",
        description:"Practice more by developing projects women.",
        bgColor:"#884ea0",
        date:"2024-12-11",
        priority:"high",
        status:"completed"
    },
    {
        id:2,
        title:"market",
        description:"Buy a cropped zipper black for women.",
        bgColor:"#45b39d",
        date:"2025-05-21",
        priority:"low",
        status:"pending"
    }
]

const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask:(state, action)=>{
            const newTask={
                id:state.length+1,
                ...action.payload,
            }
            state.push(newTask);
        },

        editTask:(state, action)=>{
            const {id, updates} = action.payload
            const task = state.find((task) => task.id===id)
            if(task){
                Object.assign(task, updates)
            }
        },

        removeTask:(state, action)=>{
            const taskId=action.payload
            return(state.filter((task) => task.id !== taskId))
        },
    }
})


export const {addTask, editTask, removeTask} = taskSlice.actions;
export default taskSlice.reducer;