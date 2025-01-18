import Loading from './components/Loading.jsx'
import { useEffect, useState } from 'react';
import SideNavigation from './components/SideNavigation.jsx';
import Headers from './components/Headers.jsx'
import MainContainer from './components/MainContainer.jsx';



const App = () => {

    const [isLoading, setIsLaoding] = useState(true)
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setIsLaoding(false)
        },4000)

        return (()=>clearTimeout(timer))
    },[])

    if(isLoading){
        return(
            <div className="w-full h-full">
                <Loading/>
            </div>
        )   
    }

    return (
        <div className="w-full h-full">
            <Headers /> 
            <div className='flex w-full h-full'>
                <SideNavigation />
                <MainContainer /> 
            </div>
            
        </div>
    )
}

export default App;