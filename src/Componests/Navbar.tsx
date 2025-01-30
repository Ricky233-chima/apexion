import React from 'react';  
import earthImage from '../assets/Vector (2).png';  
import menuIcon from '../assets/Icon.png';  
import logInIcon from '../assets/Vector.png';  
import searchIcon from '../assets/Search.png';  
import airbnbLogo from '../assets/Vector-removebg-preview.png';  
import SecondNavBar from './SecondNavBar';  

function Navbar() {  
  return (  
    <section className="bg-white shadow">  
      <div className="container mx-auto flex items-center justify-between p-4">  
         
        <div>  
          <img src={airbnbLogo} alt="Airbnb Logo" className="h-8" />  
        </div>  

        
        <div className="hidden md:flex gap-4 border border-gray-300 p-2 rounded-full">   
          <h1>Anywhere</h1>  
          <h1>Any week</h1>  
          <h1>Add guests</h1>  
          <div className='bg-red-600 w-8 h-8 flex items-center justify-center rounded-full'>   
            <img src={searchIcon} alt="Search Icon" className='w-4 h-4'/>  
          </div>  
        </div>  

        <div className="flex gap-5 items-center">  
          <div className="hidden md:flex gap-4">   
            <h3 className='font-bold'>Airbnb your home</h3>  
            <img src={earthImage} alt="Earth Icon" className='w-5 h-5' />  
          </div>   
         
          <div className='flex gap-3 rounded-full border border-gray-300 p-2'>   
            <img src={menuIcon} alt="Menu Icon" className='w-4 h-4'/>  
            <img src={logInIcon} alt="Login Icon" className='w-6 h-5' />  
          </div>  
        </div>  

         
        <div className="md:hidden flex gap-4 items-center">  
          <div className='bg-red-600 w-8 h-8 flex items-center justify-center rounded-full'>   
            <img src={searchIcon} alt="Search" className='w-4 h-4' />  
          </div>  
            
          <div className="flex flex-col">  
            <h1>Anywhere</h1>  
            <h1>Any week </h1>   
            <h1>Add guests</h1>  
          </div>  
        </div>  
      </div>  

       
      <div>  
        <SecondNavBar />  
      </div>  
    </section>  
  );  
}  

export default Navbar;