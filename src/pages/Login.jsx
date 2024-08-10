import React, { useState } from 'react';
import boat from "../assets/boat.jpeg"
import { useNavigate } from 'react-router';
const Login = () => {
   const navigate=useNavigate();
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement your login logic here
        if (!username || !password) {
            alert("Please fill out both fields.");
            return;
        }
        navigate("/")
        localStorage.setItem("userName",username);
        console.log(localStorage.getItem("userName"));
       
    };

    return (
        <section className="min-h-screen  flex items-center justify-center bg-slate-700 dark:bg-neutral-700 p-4 sm:p-10">
            <div className="max-w-[34rem] w-full bg-white dark:bg-neutral-800 shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Left column container */}
                    <div className="w-full lg:w-6/12 p-6 lg:p-12">
                        <h2 className="text-2xl font-semibold mb-6 text-center text-neutral-800 dark:text-neutral-200">Dummy Login</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Username input */}
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mb-4 p-2 w-full border border-gray-300 dark:border-gray-600 rounded bg-black text-white"
                                placeholder="Enter Your Username"
                            />
                            {/* Password input */}
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mb-4 p-2 w-full border border-gray-300 dark:border-gray-600 rounded bg-black text-white"
                                placeholder="Enter Your Password"
                            />
                            {/* Submit button */}
                            <div className="mb-6 text-center">
                                <button
                                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-2 rounded shadow hover:from-orange-600 hover:to-pink-600 transition ease-in-out duration-150"
                                    type="submit"
                                >
                                    Log in
                                </button>
                            </div>
                           
                            <div className="flex items-center justify-between">
                                <p className="text-sm">Don't have an account?</p>
                                <button
                                    type="button"
                                    className="text-teal-500 hover:text-teal-700 transition ease-in-out duration-150"
                                >
                                    Contact admin
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Right column container with background */}
                    <div
                        className="hidden lg:flex items-center justify-center w-6/12 bg-cover bg-center rounded-r-lg"
                        style={{
                          
                            backgroundImage:`url(${boat})` ,
                        }}
                    >
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;

