import React, { useEffect, useId, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const CreateTask = ({state}) => {
      const navigate=useNavigate();
  if(!localStorage.getItem("userName"))
    navigate("/login")
    const [_task,setTask]=useState(state?state.task:"");
    const [_status, setStatus]=useState(state?state.status:"Completed");

    const [_deadline,setDeadLine]=useState(state?state.deadline:"");

    const [_priority,setPriority]=useState(state?state.priority:"High");
    const [savedTasks,setSavedTasks]=useState(null);
    let mode=useSelector((state)=>state.theme.mode)
     useEffect(()=>{
        setSavedTasks(JSON.parse(localStorage.getItem("tasks")));
     },[])
     useEffect(()=>{

     },[mode])
   

      // on create
       const handleSubmit=(e)=>{
        // e.preventDefault();
        
        
        if(!_task||!_deadline)
        {
          alert("cant create with empty fields");
          return ;
        }
       
        const _id= Math.floor(Math.random() * 100) + 1
    const newTask={id:_id,task:_task,status:_status,deadline:_deadline,priority:_priority};
   console.log(savedTasks);
    setSavedTasks(savedTasks?savedTasks:[]);
    const updatedTasks=[...savedTasks,newTask];
     localStorage.setItem('tasks',JSON.stringify(updatedTasks));
    alert("Created SuccessFully")
       }


   

       //on update
       const handleOnUpdate=()=>{
      
   const newTask={id:state.id,task:_task,status:_status,deadline:_deadline,priority:_priority};
  let index = savedTasks.findIndex(task => task.id == state.id);
let updatedTasks = [...savedTasks];
    updatedTasks.splice(index, 1);
     

    updatedTasks=[...updatedTasks,newTask];

    
  
    setSavedTasks(updatedTasks);

    
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  
       }


  return (
      <div className={`flex  items-center justify-center min-h-screen bg-${mode?"slate-600":"zinc-500"}`}>
  <section className="w-full max-w-3xl bg-neutral-200 p-8 rounded-lg shadow-lg dark:bg-slate-700">
   
    <div className="flex justify-center ">
      <div className="w-full max-w-lg bg-slate-800 p-6 rounded-lg">
        <div className="text-center mb-4">
          <h1 className="text-lg font-semibold text-white">Personal Details</h1>
        </div>
        <form onSubmit={state?handleOnUpdate:handleSubmit}>
          <input
           defaultValue={state?state.task:""}
            type="text"
            onChange={(e) => setTask(e.target.value)}
            className="mb-4 p-2 w-full border border-gray-300 dark:border-gray-600 rounded bg-black text-white"
            placeholder="Enter Your Task"
          />
           <input
            type="date"
            defaultValue={state?state.deadline:""}
            onChange={(e) => setDeadLine(e.target.value)}
            className="mb-4 p-2 w-full border border-gray-300 dark:border-gray-600 rounded bg-black text-white"
            placeholder="Enter Task Deadline"
          />
          
          <span className='flex  justify-between mb-4'> <label className='text-white' >Enter Task Status</label>
          <select defaultValue={state?state.status:""} onChange={(e)=>setStatus(e.target.value)} className='bg-slate-700 text-white' name="" id="">
            
              <option value="Completed">Completed</option>
               <option value="Progress">In_Progress</option>
    <option value="Pending">Pending</option>
            
          </select></span>
         
          <span className='flex  justify-between mb-4'> <label className='text-white' >Enter Task Priority</label>
          <select defaultValue={state?state.priority:""} onChange={(e)=>setPriority(e.target.value)} className='bg-slate-700 text-white' name="" id="">
             <option value="High">High</option>
              <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select></span>
          <div className="text-center">
            <button
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-2 rounded shadow hover:from-orange-600 hover:to-pink-600 transition ease-in-out duration-150"
              type="submit"
            >
           {state?"Update":"Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>
  )
}

export default CreateTask
