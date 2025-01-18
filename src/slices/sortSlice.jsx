import { createSlice } from "@reduxjs/toolkit"


const sortSlice=createSlice({
    name:"sort",
    initialState:{
        date:"asc",
        priority:"asc"
    }, 
    reducers: {
        addSorting: (state, action) => {
            const { field, order } = action.payload;
            state[field] = order; // Update the specific field
        }
    }
})


export const {addSorting} = sortSlice.actions
export default sortSlice.reducer