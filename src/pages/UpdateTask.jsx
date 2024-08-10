import React, { useEffect, useState } from 'react'
import CreateTask from './CreateTask';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const UpdateTask = () => {
  const navigate=useNavigate();
  if(!localStorage.getItem("userName"))
    navigate("/login")
    const [flag,setFlag]=useState(true);
    const [task,setTask]=useState(null);
    const [id,setId]=useState("");
     let mode=useState(useSelector((state)=>state.theme.mode));
      useEffect(()=>{

   },[mode])
    const handleOnSubmit=()=>{
          let savedTasks=JSON.parse(localStorage.getItem('tasks'));
        let index = savedTasks.findIndex(task => task.id == id);
        
       if(index!=-1)
       {
        setTask(savedTasks[index]);
setFlag(!flag)}

      
        
      else 
      alert("please enter a valid id")

    }

  return (
       <div className={`flex   bg-${mode?"slate-600":"zinc-500"} items-center justify-center min-h-screen `}>
  <section className="w-full max-w-3xl bg-neutral-200 p-8 rounded-lg shadow-lg dark:bg-slate-800">
    <div className='flex justify-center mb-10 text-2xl text-white'><h2>Update Your Task Here</h2></div>
    <div className='flex  justify-center'>
       { flag? <div><input type="text" onChange={(e)=>setId(e.target.value)}  placeholder='Enter Your TaskId'  className="mb-4 p-2 w-full border border-gray-300 dark:border-gray-600 rounded bg-black text-white" />
        <div className="mb-6 text-center">
                                <button
                                    className=" w-11/12 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-2 rounded shadow hover:from-orange-600 hover:to-pink-600 transition ease-in-out duration-150"
                                    type="submit"
                                    onClick={handleOnSubmit}
                                >
                                   submit
                                </button>
                            </div></div>:
         <>
         <CreateTask state={task}/>
         
         </>}
    </div>
  </section>
</div>
  )
}

export default UpdateTask
