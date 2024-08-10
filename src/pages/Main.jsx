import React, { useState,useId, useEffect } from 'react'
import { useSelector } from 'react-redux';


const Main = () => {
   
const [savedTasks,setSavedTasks]=useState([]);
const [filteredTasks, setFilteredTasks] = useState([]);
const [statusFilter, setStatusFilter] = useState("All");
const [priorityFilter, setPriorityFilter] = useState("All");
 let mode=useSelector((state)=>state.theme.mode)


   useEffect(()=>{
     setSavedTasks(JSON.parse(localStorage.getItem('tasks')));
     setFilteredTasks(JSON.parse(localStorage.getItem('tasks')));

     
   },[])
   useEffect(()=>{

   },[mode])

useEffect(() => {
  filterTasks();
}, [statusFilter, priorityFilter,savedTasks]);

   
     const handleOnclick = (e) => {
  const taskId = e.target.value;
  console.log(taskId);

  let index = savedTasks.findIndex(task => task.id == taskId);

  if (index !== -1) {
   
    const updatedTasks = [...savedTasks];
    updatedTasks.splice(index, 1);

  
    setSavedTasks(updatedTasks);

    
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }
};




const filterTasks = () => {
  let tasks = savedTasks;
 console.log(tasks);
  if (statusFilter !== "All") {
    tasks = tasks.filter(task => task.status === statusFilter);
  }

  if (priorityFilter !== "All") {
    tasks = tasks.filter(task => task.priority === priorityFilter);
  }
 console.log(tasks);
  setFilteredTasks(tasks)
};

      
  return (
   <div className={`flex items-center justify-center min-h-screen  bg-${mode?"slate-600":"zinc-500"} p-4`}>
  <section className="w-full max-w-3xl bg-neutral-200 p-8 rounded-lg shadow-lg dark:bg-slate-700">
    <div className="flex flex-col justify-center items-center">   <h2 className='text-3xl text-white font-semibold'>Here Your All Tasks</h2>
      <div className="align-middle inline-block mt-8 text-white w-full overflow-auto shadow-md rounded-lg border border-gray-300">
        
            <div className="flex justify-between mb-4">
  <div>
    <label className="text-white mr-2">Filter by Status: </label>
    <select 
      value={statusFilter} 
      onChange={(e) => setStatusFilter(e.target.value)}
      className="p-2 rounded-md bg-gray-600 text-white"
    >
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Pending">Pending</option>
      <option value="Progress">In Progress</option>
    </select>
  </div>
  <div>
    <label className="text-white mr-2">Filter by Priority: </label>
    <select 
      value={priorityFilter} 
      onChange={(e) => setPriorityFilter(e.target.value)}
      className="p-2 rounded-md bg-gray-600 text-white"
    >
      <option value="All">All</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>
  </div>
</div>

        
        <table className="min-w-full table-auto">
           
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2 text-left">Task_id</th>
              <th className="px-4 py-2 text-left">Task</th>
              <th className="px-4 py-2 text-left">Priority</th>
              <th className="px-4 py-2 text-left">Deadline</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.length ? (
              filteredTasks.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}
                >
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">{item.task}</td>
                  <td className="border px-4 py-2">{item.priority}</td>
                  <td className="border px-4 py-2">{item.deadline}</td>
                  <td className="border px-4 py-2">{item.status}</td>
                  <td className="border px-4 py-2">
                    <button
                      type="button"
                      value={item.id}
                      onClick={handleOnclick}
                      className="flex items-center justify-center w-full p-1 font-semibold tracking-wide rounded-md dark:bg-red-400 hover:bg-red-600 dark:text-gray-900"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No Task Yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </section>
</div>

  )
}

export default Main
