import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import { Outlet, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
function App() {
  const [count, setCount] = useState(0)
  const navigate=useNavigate();
  if(!localStorage.getItem("userName"))
    navigate("/login")
    

  return (
    <>
   <div className="flex flex-col min-h-screen bg-slate-600">
  <Header />
  <main className="flex-grow mt-20 ">
    <Outlet/>
  </main>
  <Footer />
</div>

 
    </>
  )
}

export default App
