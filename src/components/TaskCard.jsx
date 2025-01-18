const TaskCard = ({task})=>{
    
    return(
        <>
            <div className="h-52 rounded-2xl border-2 p-3 border-black" style={{ backgroundColor: task.bgColor }} >
                <span className="block text-2xl mb-1"> {task.title.charAt(0).toUpperCase() + task.title.slice(1)} </span>
                <div className="h-32 overflow-clip">
                    <span className="block text-lg font-light break-words text-ellipsis">{task.description}</span>                
                </div>
                <span className="font-light text-sm mr-2">{task.priority.toUpperCase()}</span>
                <span className="font-light text-sm">{task.date}</span>
            </div>
        </>
    )
}

export default TaskCard;