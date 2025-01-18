import DisplayTask from "./DisplayTask"

const MainContainer = ()=>{
    return(
        <div className="overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-transparent scrollbar-track-white w-4/5 mt-20 ml-8 mr-8 mb-4 grid grid-cols-1 gap-1 sm:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 grid-flow-row">
            <DisplayTask/>
        </div>  
    )
}

export default MainContainer; 