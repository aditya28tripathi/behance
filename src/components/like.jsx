import React from 'react';
import { CiHeart } from 'react-icons/ci';

const Modals = 
({ 
  
  isOpen,
   onClose, 
   imageSrc, 
   Like, 
   Likee
  }) => 
    
    {


  if (!isOpen) 
    
    
    return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">


      <div className=" bg-grey rounded-lg p-6 max-w-screen-lg relative w-full max-h-screen overflow-y-auto flex shadow-xl">

        <button className="absolute top-2 right-2 text-gray-600 text-2xl" onClick={onClose}> &times;</button>


        <div className="flex-grow flex flex-col items-center">



          <img className=" max-h-full mb-4  max-w-full" src={imageSrc} />
         
        </div>
        <div className="flex flex-col items-center space-y-4 ml-4 justify-end ">
          <button className="flex items-center text-lg text-white p-2 rounded-full shadow-lg " onClick={Like}>


            <CiHeart className={`text-xl mr-1 ${Likee ? 'text-red-500 ' : 'text-gray-400'}`} />

 <span className="text-sm">{Likee ? 'LIKED' : 'Like'}</span>



          </button>


          <span className="text-gray-500 font-bold">{Likee ? '1 like' : '0 like'}</span>

        </div>
        </div>
       </div>
  );};

export default Modals;






