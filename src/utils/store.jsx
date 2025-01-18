import {configureStore} from '@reduxjs/toolkit'
import taskReducers from '../slices/taskSlice'
import searchReducer from "../slices/searchSlice"
import searchQueryReducer from "../slices/searchQuerySlice"
import filterReducer from "../slices/filterSlice"
import sortReducer from "../slices/sortSlice"


const store = configureStore({
    reducer:{
        tasks:taskReducers,
        search:searchReducer,
        searchQuery:searchQueryReducer,
        filter:filterReducer,
        sort:sortReducer,
    },
})


export default store;