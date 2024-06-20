import React, { useEffect, useState } from 'react';
import { adobeLogo } from '../imagesss';

const Footer = () => {



    const [isFixedVisible, setIsFooter] =
     useState(true);

    useEffect(() => {


        const handleScroll = () => 
          {


            const footerE = document.getElementById('main');

            if (footerE) 
              { const footer = footerE.getBoundingClientRect();
                                 const isFooter = footer.top<   window.innerHeight &&footer.bottom >=0;
                setIsFooter(!isFooter);
            } };

        window.addEventListener('scroll', handleScroll);
        return () => 
          
          {
            window.removeEventListener('scroll', handleScroll);
        };
    }, 
    []);

    return (
        <>
            <section className={`px-2  py-3 fixed w-full bottom-0 bg-white  duration-500  ${isFixedVisible ? 'opacity-90' : 'opacity-0'}`}>
      <div className="container-fluid">
                                      <div className="grid lg:grid-cols-2 gap-3 items-center"> <ul className="flex items-center flex-wrap text-xs text-gray-500 font-bold">
                            <li className="mx-1 hover:text-blue-500 cursor-pointer"><a>More Behance</a></li> <span className="text-gray-300">|</span>
                            <li className="mx-1 hover:text-blue-500 cursor-pointer"><a>English</a></li> <span className="text-gray-300">|</span>
                            
                            <li className="mx-1 hover:text-blue-500 cursor-pointer"><a>Try Behance Pro</a></li> <span className="text-gray-300">|</span>

                            
               <li className="mx-1 hover:text-blue-500 cursor-pointer"><a>TOU</a></li>
                   
                                                                                    <li className="mx-1 hover:text-blue-500 cursor-pointer"><a>Privacy</a></li>
                  
            <li className="mx-1 hover:text-blue-500 cursor-pointer"><a>Community</a></li>
              
                            <li className="mx-1 hover:text-blue-500 cursor-pointer"><a>Help</a></li>
                          
                            <li className="mx-2 hover:text-blue-500 cursor-pointer"><a href='https://www.adobe.com/privacy/us-rights.html'>Do not sell or share my personal information</a></li>
                        </ul>
                        <div className=" flex lg:justify-end">
                            <div className="adobe-btn mx-4 flex items-center hover:opacity-70">
                                <img src={adobeLogo} className="w-5 h-5" />
                                <a className='pl-1 font-bold text-black text-sm cursor-pointer'>Adobe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <footer id="main" className="bg-black text-white">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
                            <div className="text-5xl font-bold  mr-5">Bēhance</div>  </div>



                        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
                            <h6 className="font-bold mb-4">Built For Creatives</h6>
                            <ul>
                                                             <li className="mb-2"><a className="hover:underline">Try Behance Pro</a></li>
                          <li className="mb-2"><a className="hover:underline">Find Inspiration</a></li>       
                                  <li className="mb-2"><a className="hover:underline">Get Hired</a></li>
                                    <li className="mb-2"><a className="hover:underline">Sell Creative Assets</a></li>
                               <li  className="mb-2"><a className="hover:underline">Sell Freelance Services</a></li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
                            <h6 className="font-bold mb-4">Find Talent</h6>
                            <ul>
                                 <li className="mb-2"><a className="hover:underline">Post a Job</a></li>
              <li className="mb-2"><a className="hover:underline">Freelance Designers</a></li>   <li className="mb-2"><a className="hover:underline">Graphic Designers</a></li>
                        <li className="mb-2"><a className="hover:underline">Photographers</a></li>
                      <li className="mb-2"><a className="hover:underline">Video Editors</a></li>
                                         <li className="mb-2"><a className="hover:underline">Web Designers</a></li>
                                <li className="mb-2"><a className="hover:underline">Illustrators</a></li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
                            <h6 className="font-bold mb-4">Behance</h6>
                            <ul>
                                <li className="mb-2"><a className="hover:underline" >About Behance</a></li> <li className="mb-2"><a className="hover:underline" >Adobe Portfolio</a></li>
                      <li className="mb-2"><a className="hover:underline" >Download the App</a></li>
                                                     <li className="mb-2"><a  className="hover:underline" >Blog</a></li>
                              <li className="mb-2"><a className="hover:underline" >Careers</a></li>
                                 <li className="mb-2"><a className="hover:underline" >Help Center</a></li>
                                    <li className="mb-2"><a  className="hover:underline" >Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
                            <h6 className="font-bold mb-4">Social</h6>
                            <ul>
                                <li className="mb-2"><a className="hover:underline">Instagram</a></li>
                                      <li className="mb-2"><a className="hover:underline">Twitter</a></li>
                              <li className="mb-2"><a className="hover:underline">Pinterest</a></li>
                                <li li className="mb-2"><a className="hover:underline">Facebook</a></li>
                                  <li className="mb-2"><a className="hover:underline">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-6">
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="flex items-center mb-4 lg:mb-0"> <p className='text-s'>&copy; 2024 adobe inc. all rights reserved.</p>

                                
                          
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
