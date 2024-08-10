import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MoonIcon,SunIcon } from '@heroicons/react/24/outline'
import { toggle } from '../store/themeReducer';
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [value ,setValue] =useState("slate-900")
   const user =localStorage.getItem("userName");
   const [mode,setMode]=useState(useSelector((state)=>state.theme.mode));

       const dispatch =useDispatch();
   useEffect(()=>{

   },[value])
   const handleSubmit=()=>{
   dispatch(toggle());

  if(!mode)
  {
    setValue("slate-900");
    
  }
  else{
    setValue("teal-700");
  }
  setMode(!mode);
}
    return (
        <nav className={`bg-${value} fixed w-full top-0 left-0 border-b  border-gray-200 dark:border-gray-700`}>
            <div className="flex flex-wrap items-center justify-between p-4 mx-auto max-w-7xl">
                <div to="/" className="flex items-center space-x-3">
                    <p className='text-white'>Welcome {user}</p>
                </div>
                <div className="flex md:order-2">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
                
                <div
                    className={`${
                        isOpen ? 'block' : 'hidden'
                    } w-full md:flex md:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/create"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Create 
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/update"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                               Update
                            </Link>
                        </li>
                        <li>
                            <button
                                 onClick={()=>{localStorage.removeItem("userName")}}
                                 
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                               <Link to="/login">Logout</Link>
                            </button>
                        </li>
                        
                    </ul>
                </div>
               


                <div>
                    <button onClick={handleSubmit} className={`${
                        isOpen ? 'block' : 'hidden'
                    }relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}>
                         {mode?<SunIcon className="block h-6 w-6" color='white'/>: <MoonIcon className="block h-6 w-6" color='white' />}</button>
                </div>
            </div>
            
        </nav>
    );
}

export default Header;
