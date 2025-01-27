import React from "react";
import logo from "../assets/logo.png";
import { RiMenu4Line } from 'react-icons/ri'

const MobileNavbar = ({ isOpen, setIsMenuOpen }) => {

  const handleScroll = (sectionId) => {
    if(isOpen) setIsMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-1/2 h-screen flex flex-col p-8 bg-background">
        <img src={logo} alt="logo" className="w-16 object-contain mb-8" />

        <ul>
           <li className="mb-5"><a className='menu-item' onClick={()=>handleScroll('hero')}>Home</a></li>
           <li className="mb-5"><a className='menu-item' onClick={()=>handleScroll('services')}>Services</a></li>
           <li className="mb-5"><a className='menu-item' onClick={()=>handleScroll('our-work')}>Our Work</a></li>
           <li className="mb-5"><a className='menu-item' onClick={()=>handleScroll('testinomials')}>Testinomials</a></li>
        </ul>

        <button className="h-10 bg-primary text-white text-sm px-6 rounded  hover:bg-blue-200 hover:text-primary md:block">Contact Us</button>

      </div> 

    <div onClick={()=>{
        setIsMenuOpen(false)
    }} 
    className="w-screen h-screen bg-overlayBg fixed top-0 -z-10"></div>
    </div>
  );
};

export default MobileNavbar;
