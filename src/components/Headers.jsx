import SearchBar from './SearchBar.jsx'
import FilteringTasks from './FilteringTasks.jsx';
import SortingTasks from './SortingTasks.jsx';

const Headers=()=>{
    return(
        <div className="fixed align-middle top-0 left-0 w-full h-16 bg-slate-100 p-4 shadow-sm z-50 flex flex-row">
            <SearchBar/>
            <div className='flex items-center ml-10 w-full justify-between'>
                <FilteringTasks/>
                <SortingTasks/>
            </div>
        </div>
    )
}

export default Headers;