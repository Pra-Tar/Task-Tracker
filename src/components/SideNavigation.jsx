import AddTask from './AddTask.jsx'
import { useState } from 'react'

const SideNavigation=()=>{

    const [isOpen, setIsOpen] = useState(false);
    const addTask = ()=>{setIsOpen(true)}

    return(
        <>
        <div className="w-1/5 bg-slate-100 h-full p-2">
            <div className="bg-slate-300 rounded-xl w-15 mt-24 text-xs p-2 hover:bg-gray-400 
            hover:shadow-lg cursor-pointer text-center transition duration-300" onClick={addTask}>
                ADD TASK
            </div>
        </div>
        
        {isOpen && <AddTask setIsOpen={setIsOpen}/>}

        </>
    )
}

export default SideNavigation;