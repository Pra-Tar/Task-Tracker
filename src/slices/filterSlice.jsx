import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:"filter",
    initialState:{completed:false, pending:false},
    reducers:{
        setFilter:(state, actions)=>{
            return actions.payload;
        }
    }
})


export const {setFilter} = filterSlice.actions
export default filterSlice.reducer;