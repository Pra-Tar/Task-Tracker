import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTask, removeTask, editTask} from '../slices/taskSlice.jsx'
import '../styles/Ball.css'
import {COLORS} from '../utils/constants.jsx'

const AddTask = ({setIsOpen})=>{
    const [cardBgColor, setCardBgColor] = useState("white")
    const [cardTitle, setCardTitle] = useState("")
    const [cardDescription, setCardDescription] = useState("")
    const [cardPriority, setCardPriority] = useState("low")
    const tasks = useSelector((state)=>state.tasks)
    const dispatch = useDispatch()

    const saveData = () => {
        if(cardDescription && cardTitle){
            const newTask = {
                title:cardTitle,
                description:cardDescription,
                bgColor:cardBgColor,
                date: new Date().toISOString().split('T')[0],
                priority:cardPriority,
                status:"pending"
            }
    
            dispatch(addTask(newTask));
            setIsOpen(false)    
        }
        else{
            console.log("Enter title and desc")
        }
        
    };

    const closeModal = () => {

        setIsOpen(false)
    };

    useEffect(() => {
    }, [tasks]);

    return(
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            ></div>
        
            <div className="fixed inset-0 flex justify-center items-center z-50">
                <div className="relative p-6 rounded-lg shadow-lg w-5/12 h-64 " style={{backgroundColor:cardBgColor}}>
                    <input className="bg-transparent text-xl font-semibold outline-none" placeholder="Title" value={cardTitle} onChange={(e)=>{setCardTitle(e.target.value)}}></input>
                    <textarea className="bg-transparent mt-2 outline-none resize-none w-full h-28  scrollbar scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-gray-300 p-2 rounded-lg" placeholder="Description..." value={cardDescription} onChange={(e)=>{setCardDescription(e.target.value)}}></textarea>

                    <button className='absolute text-xs bottom-11 left-5 px-1 py-1 bg-white border border-slate-900 text-slate-900 hover:bg-slate-900 hover:border-slate-900 hover:text-white rounded-md ' onClick={() => setCardPriority("high")}>HIGH</button>
                    <button className='absolute text-xs bottom-11 left-16 px-1 py-1 bg-white border border-slate-900 text-slate-900 hover:bg-slate-900 hover:border-slate-900 hover:text-white rounded-md ' onClick={() => setCardPriority("medium")}>MEDIUM</button>
                    <button className='absolute text-xs bottom-11 left-32 px-1 py-1 bg-white border border-slate-900 text-slate-900 hover:bg-slate-900 hover:border-slate-900 hover:text-white rounded-md ' onClick={() => setCardPriority("low")}>LOW</button>


                    <div className="absolute left-4 bottom-2 flex flex-row items-center">
                        <span className="balls hover:shadow-lg cursor-pointer border border-black border-10" onClick={() => setCardBgColor(COLORS.green)} style={{ backgroundColor: COLORS.green }}></span>
                        <span className="balls hover:shadow-lg cursor-pointer border border-black border-10" onClick={() => setCardBgColor(COLORS.pink)} style={{ backgroundColor: COLORS.pink }}></span>
                        <span className="balls hover:shadow-lg cursor-pointer border border-black border-10" onClick={() => setCardBgColor(COLORS.yellow)} style={{ backgroundColor: COLORS.yellow }}></span>
                        <span className="balls hover:shadow-lg cursor-pointer border border-black border-10" onClick={() => setCardBgColor(COLORS.purple)} style={{ backgroundColor: COLORS.purple }}></span>
                        <span className="balls hover:shadow-lg cursor-pointer border border-black border-10" onClick={() => setCardBgColor(COLORS.blue)} style={{ backgroundColor: COLORS.blue }}></span>
                        <span className="balls hover:shadow-lg cursor-pointer border border-black border-10" onClick={() => setCardBgColor(COLORS.white)} style={{ backgroundColor: COLORS.white }}></span>
                    </div>

                    <button
                        onClick={closeModal}
                        className=" absolute bottom-2 right-20 mt-4 px-4 py-2 bg-white border border-slate-900 text-slate-900 hover:bg-slate-900 hover:border-slate-900 hover:text-white rounded-md bottom-0"
                    >
                        CLOSE
                    </button>
                
                    <button
                        onClick={saveData}
                        className=" absolute bottom-2 right-2 mt-4 px-4 py-2 bg-slate-900 border border-white text-white hover:bg-white  hover:border-slate-900 hover:text-slate-900 rounded-md bottom-0"
                    >
                        SAVE
                    </button>
                   

                </div>
                
            </div>
        </>
    )}


export default AddTask;

