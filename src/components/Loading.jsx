import { COLORS } from "../utils/constants";
import '../styles/Loading.css'


const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <span className="ball" style={{backgroundColor:COLORS.green}}></span>
            <span className="ball" style={{backgroundColor:COLORS.pink}}></span>
            <span className="ball" style={{backgroundColor:COLORS.yellow}}></span>
            <span className="ball" style={{backgroundColor:COLORS.purple}}></span>
            <span className="ball" style={{backgroundColor:COLORS.blue}}></span>
            
        </div>
    )
}


export default Loading;