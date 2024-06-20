import React, { useState } from 'react';
import { IoSearchSharp, IoClose } from 'react-icons/io5';
import { MdArrowDropDown, MdImageSearch } from 'react-icons/md';
import { CgMenuLeft } from 'react-icons/cg';
import { IoIosMenu, IoIosArrowDown } from 'react-icons/io';
import Banner from './Banner'


import { FaBell } from 'react-icons/fa';
import { behance_logo, adobeLogo } from '../imagesss';


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Recommended');
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions , setSuggestions] = useState([]);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isAdobeDropdownOpen, setIsAdobeDropdownOpen] = useState(false);

  const toggle = () => 
    {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClick = (option) => 
    
    {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };



  const Menu = () => 
    {
    const mainHeader = document.getElementById('header');
    mainHeader.classList.toggle('menuopen');
  };

  const closeMenu = () => 
    {
       Menu();
  };

  const handleChange = (e) => 
    {
    const value = e.target.value;
    setQuery(value);
    if (value) 
      
      
      {
      const mockSuggestions = getMockSuggestions(value);

      setSuggestions(mockSuggestions);
    } 
    else 
    
    
    {

      setSuggestions([]);
    }
  };

  const getMockSuggestions = (query) => {
    const suggestions = [
      `${query} Design`,
      `${query} Art`,
      `${query} Photography`,
      `Creative ${query}`,
      `Digital ${query}`,
      `${query} Motive`,
      `${query} Design`,
    ];
    return suggestions;
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <header className="header" id="header">
      <div id="menu" className="menu duration-300 bg-white lg:hidden shadow-lg w-[70%] h-[100%] fixed left-0 top-0 z-20 p-5">
    <div className="text-3xl absolute right-3 cursor-pointer text-[#333]" onClick={closeMenu}><IoClose />  </div>
      </div>

      <div className="border-b fixed w-full top-0 bg-white z-10">
      <div className="container-fluid">
    <div className="top-header py-4 lg:py-3 px-5 border-b">
        <div className="navbar flex items-center justify-between">
                                    <div className="brand-logo flex items-center">
<div className="phone-menu pr-3 text-2xl cursor-pointer block lg:hidden" onClick={Menu}>


                  <CgMenuLeft />


                </div>
                <img src={behance_logo}  className="w-auto h-4" />
                <div className="page-links lg:ml-3 relative">
            <ul className="flex items-center">
            <li className="mx-3 font-bold text-md flex items-center cursor-pointer" onMouseEnter={() => setIsExploreDropdownOpen(true)} onMouseLeave={() => setIsExploreDropdownOpen(false)}>Explore



                      <IoIosArrowDown className="ml-1" />



                    </li>


                    <li className="mx-3 font-bold text-md cursor-pointer hover:underline "> <a>Assets</a> </li>
                    <li className="mx-3 font-bold text-md cursor-pointer hover:underline">
                      <a >Jobs</a>
                    </li>
                    <li className="mx-3 font-bold text-md flex items-center cursor-pointer hover:underline "><a>Behance</a>  


                      <span className="ml-1 bg-blue-600 text-white px-1 py-0.5 rounded-full text-xs font-bold">Pro</span>
                    </li>
                    <span className="text-gray-300">|</span>
                    <li className="mx-5 font-bold text-md flex items-center">Hire Freelancers<IoIosArrowDown className="ml-1" />
                    </li>
                  </ul>


                  {isExploreDropdownOpen && 
                  
                  (
                    <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md py-2 w-52 dropdown-menu ">
                     
                      <ul>
                        <li className="px-4 py-2 text-blue-600 font-bold ">
                          <a >Search & Explore</a>
                        </li>
                        <li className="px-4 py-2 hover:text-blue-600 font-bold">
                          <a>Curated Galleries</a>
                        </li>
                        <hr />
                        <li className="px-4 py-2 hover:text-blue-600 text-sm text-gray-600">
                          <a>Best of Behance</a>
                        </li>
                        <li className="px-4 py-2 hover:text-blue-600 text-sm text-gray-600">
                          <a >Graphic Design</a>
                        </li>
                        <li className="px-4 py-2 hover:text-blue-600 text-sm text-gray-600">   <a >Illustration</a>
                        </li>
                        <li className="px-4 py-2 hover:text-blue-600 text-sm text-gray-600">
                          <a >Photography</a>   </li>
                        <li className="px-4 py-2 hover:text-blue-600 text-sm text-gray-600">
                          <a >UI/UX</a>
                        </li>
                        <li className="px-4 py-2 hover:text-blue-600 text-sm text-gray-600">
                          <a >3D Art</a>  </li>
                      </ul>

                    </div>


                  )}


                </div>
              </div>
              <div className="hidden lg:block">
          <div className=" flex items-center">
  <div className="relative" onMouseEnter={() => setIsNotificationOpen(true)} onMouseLeave={() => setIsNotificationOpen(false)}>
    <FaBell className="mr-2 cursor-pointer" />


                    {isNotificationOpen && 
                    
                    (
                      <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-4 w-72 z-20">  <h1 className="font-bold">Your Notifications</h1>
                        <hr className="w-full mt-4" />
                      </div>
                    )}
                  </div>
                  <div className="login-btn rounded-full border px-4 py-1 border-[#dee8ff]">
                    <a className="text-[#0057ff] font-medium text-md">Log In</a>
                  </div>
                  <div className="login-btn mx-4 rounded-full border px-4 py-1 border-[#dee8ff] bg-[#0057ff]">
                    <a className="text-white font-medium text-md">Sign Up</a>
                  </div>
                  <div
                    className="relative"  onMouseEnter={() => setIsAdobeDropdownOpen(true)}    onMouseLeave={() => setIsAdobeDropdownOpen(false)} >


                    <div className="adobe-btn mx-4 flex items-center hover:opacity-70 cursor-pointer">


              <img src={adobeLogo} className="w-5 h-5" />   <a  className="pl-1 font-bold text-black text-sm">Adobe</a>   </div>



                    {isAdobeDropdownOpen && 
                    (

                      <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-4 w-72 z-20 flex flex-col">
                        <div className="dropdown-item py-2">
                          <a  className="block font-bold text-black">Go to adobe.com</a>
                          <p className="text-sm text-gray-500">Access your apps, services, files, and more</p>
                        </div>



                        <div className="dropdown-item py-2">
                          <a  className="block font-bold text-black">Get Adobe Express free</a>
                          <p className="text-sm text-gray-500">Quickly make content from thousands of free templates</p>
                        </div>



                        <div className="dropdown-item py-2">   <a className="block font-bold text-black">7 day free trial of Behance Pro</a>   <p className="text-sm text-gray-500">Supercharge your creative career with Behance Pro</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="phone-search block lg:hidden cursor-pointer pr-3 text-2xl">
                <IoSearchSharp />
              </div>
            </div>
          </div>
          <div className="search-area p-5 flex items-center justify-between">
            <div className="filter-button border rounded-full p-3 flex items-center cursor-pointer mr-4 w-40 h-10 justify-center">
              <IoIosMenu className="text-2xl mr-1" />          <span className="text-lg font-bold text-[#000000]">Filter</span>
            </div>





            <div className="search-box w-full border-2 rounded-full bg-[#f9f9f9] overflow-hidden flex items-center justify-between">
              <div className="input-box relative lg:w-full">
                <input type="text"
                  placeholder="Search the creative world at work."
                  className="bg-transparent outline-none w-[90%] lg:w-full pl-16  lg:text-xl font-bold text-[#000000]"
                  value={query}
                  onChange={handleChange}
                />
                <div className="search-icon text-2xl text-[#000000] absolute top-[2px] left-4">
                  <IoSearchSharp />
                </div>


                {suggestions.length > 0 && (


                  <ul className="absolute left-0 right-0 top-full bg-white border mt-1 shadow-lg z-10 rounded-lg overflow-hidden">


 {suggestions.map((suggestion, index) => (
                      <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200" onClick={() => handleSuggestionClick(suggestion)} >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="tags-search bg-white px-4 py-3 border-l-2 flex items-center">
                <ul className="flex items-center">
                  <li className="bg-white mx-1 py-1 text-black px-3  text-m flex items-center whitespace-nowrap cursor-pointer font-bold">
                    <MdImageSearch className="mr-2" />
                    <a
                      href="https://auth.services.adobe.com/en_US/deeplink.html?deeplink=signup&callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2FBehanceWebSusi1%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fwww.behance.net%252Fauth%252Flogin%253Fdestination%253D%252Fsearch%252Fimages%2523old_hash%253D%2526from_ims%253Dtrue%2526client_id%253DBehanceWebSusi1%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Cgnav%252Csao.cce_private%252Ccreative_cloud%252Ccreative_sdk%252Cbe.pro2.external_client%252Cadditional_info.roles%26state%3D%257B%2522ac%2522%253A%2522behance.net%2522%252C%2522csrf%2522%253A%25228efcb87f-5f69-4dc2-824d-2dbc7fbd6231%2522%252C%2522timestamp%2522%253A%25221718708176426%2522%252C%2522context%2522%253A%257B%2522intent%2522%253A%2522signUp%2522%257D%252C%2522jslibver%2522%253A%2522v2-v0.41.0-12-g3caf235%2522%252C%2522nonce%2522%253A%25221256081304573354%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=BehanceWebSusi1&scope=AdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&state=%7B%22ac%22%3A%22behance.net%22%2C%22csrf%22%3A%228efcb87f-5f69-4dc2-824d-2dbc7fbd6231%22%2C%22timestamp%22%3A%221718708176426%22%2C%22context%22%3A%7B%22intent%22%3A%22signUp%22%7D%2C%22jslibver%22%3A%22v2-v0.41.0-12-g3caf235%22%2C%22nonce%22%3A%221256081304573354%22%7D&relay=d7302bb7-01eb-4d76-8cdd-66e0951b8014&locale=en_US&flow_type=token&dctx_id=bhnc_22989526-955d-49e3-9a7d-f093e8f3dbf5&idp_flow_type=create_account&el=true&s_p=google%2Cfacebook%2Capple%2Cmicrosoft&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fwww.behance.net%2Fauth%2Flogin%3Fdestination%3D%2Fsearch%2Fimages%23old_hash%3D%26from_ims%3Dtrue%26client_id%3DBehanceWebSusi1%26api%3Dauthorize%26scope%3DAdobeID%2Copenid%2Cgnav%2Csao.cce_private%2Ccreative_cloud%2Ccreative_sdk%2Cbe.pro2.external_client%2Cadditional_info.roles&use_ms_for_expiry=true#/signup"
                    >
                      Search by Image
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom-header py-3 px-5">
            <div className="flex items-center justify-between">
              <div className="search-options flex items-center h-full">
                <div className="dropdown relative h-full">
                  <button
                    className="dropdown-toggle px-4 py-2 h-full text-gray-700 font-semibold flex items-center justify-center"
                    onClick={toggle}
                  >
                    {selectedOption}
                    <MdArrowDropDown className="ml-2" />
                  </button>
                  {isDropdownOpen && 
                  
                  
                  (
                    <ul className="dropdown-menu absolute bg-white text-black py-2 shadow-lg rounded-lg w-48 font-bold">
                      <li   className="dropdown-item px-4 py-2 cursor-pointer text-blue-600"
                        onClick={() => handleClick('Recommended')}
                      >
                        Recommended
                      </li>
        <li className="dropdown-item px-4 py-2 cursor-pointer hover:text-blue-600" onClick={() => handleClick ('Curated')}>
                       Curated </li>





                      <li className="dropdown-item px-4 py-2 cursor-pointer  hover:text-blue-600"
                        onClick={() => handleClick('Most Appreciated')}
                        
                      >Most Appreciated
                       
                      </li>
                      <li className="dropdown-item px-4 py-2 cursor-pointer  hover:text-blue-600" onClick={() => handleClick(' Most Viewed')}  >
                        
                        
                     
                        Most Viewed
                      </li>


                      <li
                        className="dropdown-item px-4 py-2 cursor-pointer  hover:text-blue-600"
                        onClick={() => handleClick(' Most Discussed')}>
                                                                         Most Discussed
                      </li>
                      <li
                        className="dropdown-item px-4 py-2 cursor-pointer  hover:text-blue-600"  onClick={() => handleClick('Most Recent')}
                      >
                        Most Recent
                      </li>


                    </ul>

                  )}




                </div>
              </div>
              <div className="flex-grow flex items-center h-full relative">
                <input type="text"    className="h-full w-full px-4 py-2 bg-transparent outline-none"    value={query}  onChange={handleChange}
                />
               
                {suggestions.length > 0 && (
                  <ul className="absolute left-0 right-0 top-full bg-white border mt-1 shadow-lg z-10 rounded-lg overflow-hidden">
                    {suggestions.map((suggestion, index) => (
                      <li key={index}  className="px-4 py-2 cursor-pointer hover:bg-gray-200"      onClick={() => handleSuggestionClick(suggestion)}  >    {suggestion}   </li>
                    ))}



                  </ul>
                )}


              </div>
             
            </div>
          </div>
        </div>
      </div>
      <Banner/>
    </header>
  );
};

export default Header;
