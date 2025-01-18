import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchResult } from '../slices/searchSlice';
import { setSearchQuery } from '../slices/searchQuerySlice';
import { useState } from 'react';

const SearchBar = () => {

    const [searchQuery, setQuery] = useState("")
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

    const handleSearch = ()=>{
        const filteredTasks = tasks.filter(
            (task) =>
              task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              task.description.toLowerCase().includes(searchQuery.toLowerCase())
          );
        dispatch(setSearchQuery(searchQuery))
        dispatch(setSearchResult(filteredTasks))
    }

    return(
        <div className="w-48 h-8 border-2 flex border-slate-400 bg-white pl-2 pr-2 rounded-lg focus-within:border-black">
                <input
                    type="text"
                    className="w-full h-full left-6 text-gray-600 text-sm bg-transparent outline-none"
                    placeholder="Search..."
                    value={searchQuery}
                    onKeyDown={(e)=>{if(e.key==='Enter') handleSearch()}}
                    onChange={(e)=>{setQuery(e.target.value)}}
                />
                <SearchIcon style={{margin:"4px" ,padding:"2px", cursor:'pointer'}} onClick={handleSearch}  />
        </div>
    )

}

export default SearchBar;

