import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../slices/filterSlice";

const FilteringTasks = ()=>{

    const filterData = useSelector((state)=>state.filter)
    const dispatch = useDispatch()
    const [checkBox, setcheckBox] = useState(filterData)

    const handleCheckBoxChange = (event)=>{
        const {name, checked} = event.target

        setcheckBox((prevState)=>{
            const updatedValue = {...prevState,
            [name]: checked,
            }
            dispatch(setFilter(updatedValue));
            return updatedValue;
        })
        
    }

    return(
        <div className="flex gap-8">
            <span className="bg-yellow-100 border border-black p-1 rounded-lg text-s">FILTER</span>

            <form className="flex items-center">
                <label className="ml-4">
                    <input className="h-4 w-4 mt-1" type="checkbox" name="completed" checked={checkBox.completed} onChange={handleCheckBoxChange}/> COMPLETED
                </label>
                <label className="ml-4">
                    <input className="h-4 w-4 mt-1" type="checkbox" name="pending" checked={checkBox.pending} onChange={handleCheckBoxChange}/> PENDING
                </label>
            </form>

            
        </div>
    )
}

export default FilteringTasks;