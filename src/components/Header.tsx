import React from 'react'
import { IoMdContact } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import Link from 'next/link';




const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto h-100px w-1440 bg-white flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
     <img src="Meubel House_Logos-05@2x.png" width={50} height={50}     />
      <span className="ml-3 text-2xl font-bold">Furniro</span>
       </a>
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center h-[41px] w-1286 text-black gap-10">
      <a className="mr-5 hover:text-gray-900" >Home</a>
      <a className="mr-5 hover:text-gray-900">Shop</a>
      <a className="mr-5 hover:text-gray-900">Blog</a>
      <a className="mr-5 hover:text-gray-900">Contact</a>
     </nav>  
      
      <IoMdContact className='size-6 mx-6' />
      <IoSearch className='size-6 mx-6'/>
      <IoHeartOutline className='size-6 mx-6' text-color="black" />
      <IoCartOutline className='size-6 mx-6'/>

     <img src="home.png" w-full />                                            

 </div>
</header>
</div>
  
  );
}

export default Header
