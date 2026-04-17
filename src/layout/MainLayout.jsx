import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/navbar/footer/Footer';
import { Outlet } from 'react-router';

const Mainlayout = () => {
  return (
   
    <div className="bg-gray-100 min-h-screen">
       <Navbar/>
     
      <Outlet/>
       <Footer/>
      
    </div>
     
    
  );
};

export default Mainlayout;