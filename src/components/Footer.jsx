import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Footer() {

      let mode=useSelector((state)=>state.theme.mode)
      useEffect(()=>{

     },[mode])
    return (
        <footer className={`bg-${mode?"gray-800":"teal-700"}  mb-0 text-white py-4`}>
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
                <p className="text-sm">
                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | 
                    <a href="/terms-of-service" className="hover:underline"> Terms of Service</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
