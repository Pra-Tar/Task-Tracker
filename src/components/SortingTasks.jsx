import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addSorting } from '../slices/sortSlice';
import { useSelector } from 'react-redux';


const SortingTasks = ()=>{

    const dispatch = useDispatch()

    const handleClick=(event)=>{
        let targetClassName = event.target.className;

        if (targetClassName.includes("date")) {
            dispatch(
                addSorting({
                    field: "date",
                    order: targetClassName.includes("up") ? "asc" : "desc",
                })
            );
        } else if (targetClassName.includes("priority")) {
            dispatch(
                addSorting({
                    field: "priority",
                    order: targetClassName.includes("up") ? "asc" : "desc",
                })
            );
        }
    }

    return(
        <div className="flex items-center gap-4">
            <div className='bg-yellow-100 border items-center border-black p-1 rounded-lg text-s'>SORT</div>
            <span>Date <img src='up.png' className='date inline h-4 w-4 up hover:bold cursor-pointer' onClick={handleClick}></img><img src='down.png' className='date inline h-4 w-4 down hover:bold cursor-pointer' onClick={handleClick}></img></span>
            <span>Priority <img src='up.png' className='priority inline h-4 w-4 up hover:bold cursor-pointer' onClick={handleClick}></img><img src='down.png' className='priority inline h-4 w-4 down hover:bold cursor-pointer' onClick={handleClick}></img></span>
        </div>
    )
}

export default SortingTasks;