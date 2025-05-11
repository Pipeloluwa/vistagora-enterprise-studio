import { useSelector } from 'react-redux';
import { RootState } from '../state_management/store';
import useRipple from 'use-ripple-hook';

import { Drawer } from '@material-tailwind/react'
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigateAbout, navigateContact, navigateHome, navigateMedia, navigateMusic, navigateTech } from "../routerNavigators";



export default function Navbar()  {

  const navBgValue= useSelector((state:RootState) => state.nav_bg_state.value);
  const navBgType= useSelector((state:RootState) => state.nav_type_state.value);
  const [navBgTypeLocal, setNavBgTypeLocal]= useState(navBgType)
  
  // +++++++++++++++ I SET IT LIKE THIS BECAUSE THE HOMEPAGE IS HEAVY WHICH IS MAKING SWITCHING THE ACTIVE MENU TAB SLOW AND SHOWING TWO ACTIVE TABS AT A TIME BEFORE ONE SLOWLY FADES AWAY +++++
  useEffect(() => {
    setNavBgTypeLocal(navBgType)
  }, [navBgType])



  const [ripple, rippleEvent] = useRipple();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const openDrawer_= () => {

    setOpenDrawer(true);
    document.body.style.overflow= "hidden";
  }

  const closeDrawer_= () => {
    setOpenDrawer(false);
    document.body.style.overflow= "unset";
  }

  const navigateVar= useNavigate();


  return (
    <div className="relative w-full h-full overflow-hidden">
      {
            openDrawer
            ?
            <Drawer 

                open= {openDrawer} 
                onClose={() => {closeDrawer_()}} 
                placement='right'
                size={400}
                overlay= {false}
                              
                className='lg:hidden visible fixed top-0 bottom-0 flex justify-start flex-col w-[50%] h-screen text-white pink-blue-bg'
                placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}
                >


                <div className='fixed right-0 flex justify-end items-end'>
                    <IoCloseSharp onClick={ () => {closeDrawer_()}} className="h-20 cursor-pointer text-white size-[50px] mr-8"/>
                </div>

                    
                
                <ul className='flex flex-col gap-y-8 w-full h-full items-start px-6'>
                  

                    <div className='mt-16 mb-14 flex flex-col items-start w-full h-full justify-between gap-y-12'>
                        
                        <ul className='flex flex-col gap-y-8 py-4 font-bold'>

                          <li onClick={() => {closeDrawer_(); navigateHome(navigateVar)}} className={`z-40 cursor-pointer ${navBgTypeLocal=== 'home' ? 'bg-white text-blue-500': ''} hover:bg-white ${navBgTypeLocal!== 'home' ? 'hover:text-yellow-800' : ''} p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                            Home
                          </li>

                          <li onClick={() => {closeDrawer_(); navigateAbout(navigateVar)}} className={`z-40 cursor-pointer ${navBgTypeLocal=== 'about' ? 'bg-white text-blue-500': ''} hover:bg-white ${navBgTypeLocal!== 'about' ? 'hover:text-yellow-800' : ''} p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                            About
                          </li>

                          <li onClick={() => {closeDrawer_(); navigateTech(navigateVar)}} className={`z-40 cursor-pointer ${navBgTypeLocal=== 'tech' ? 'bg-white text-blue-500': ''} hover:bg-white ${navBgTypeLocal!== 'tech' ? 'hover:text-yellow-800' : ''} p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                            Tech
                          </li>

                          <li onClick={() => {closeDrawer_(); navigateMusic(navigateVar)}}  className={`z-40 cursor-pointer ${navBgTypeLocal=== 'music' ? 'bg-white text-blue-500': ''} hover:bg-white ${navBgTypeLocal!== 'music' ? 'hover:text-yellow-800' : ''} p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                            Music
                          </li>

                          <li onClick={() => {closeDrawer_(); navigateMedia(navigateVar)}} className={`z-40 cursor-pointer ${navBgTypeLocal=== 'media' ? 'bg-white text-blue-500': ''} hover:bg-white ${navBgTypeLocal!== 'media' ? 'hover:text-yellow-800' : ''} p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                            Media
                          </li>

                          <li onClick={() => {closeDrawer_(); navigateContact(navigateVar);}} className={`z-40 cursor-pointer ${navBgTypeLocal=== 'contact' ? 'bg-white text-blue-500': ''} hover:bg-white ${navBgTypeLocal!== 'contact' ? 'hover:text-yellow-800' : ''} p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                            Contact
                          </li>
                           
                        </ul>

                    </div>
                </ul>
            </Drawer>

            
            : ""
        }
    
      <div className={`${navBgValue ? "shadow-xl shadow-blue-500 bg-gradient-to-r from-[#1352b9]/40 to-[#b834b8]/40 backdrop-blur-md" : "bg-transparent "} z-50 flex fixed md:px-10 px-4 left-0 right-0 py-2 items-center w-full h-20`}>
          <img onClick={() => {navigateHome(navigateVar)}} alt="home logo" src="/images/logo/LOGO.webp" ref={ripple} onPointerDown={rippleEvent} className='cursor-pointer size-[60px]' />

          <ul className='font-semibold lg:flex w-full justify-center hidden text-white gap-x-8'>
              <li onClick={() => {navigateHome(navigateVar)}} className={`z-40 cursor-pointer ${navBgTypeLocal=== 'home' ? 'bg-white text-blue-500': ''} hover:bg-white ${navBgTypeLocal!== 'home' ? 'hover:text-yellow-800' : ''} p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                Home
              </li>

              <li onClick={() => {navigateAbout(navigateVar)}} className={`z-40 cursor-pointer ${navBgTypeLocal=== 'about' ? 'bg-white text-blue-500': ''} hover:bg-white ${navBgTypeLocal!== 'about' ? 'hover:text-yellow-800' : ''} p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                About
              </li>

              <li onClick={() => {navigateTech(navigateVar)}} className={`z-40 cursor-pointer ${navBgTypeLocal=== 'tech' ? 'bg-white text-blue-500': ''} hover:bg-white ${navBgTypeLocal!== 'tech' ? 'hover:text-yellow-800' : ''} p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                Tech
              </li>

              <li onClick={() => {navigateMusic(navigateVar)}}  className={`z-40 cursor-pointer ${navBgTypeLocal=== 'music' ? 'bg-white text-blue-500': ''} hover:bg-white ${navBgTypeLocal!== 'music' ? 'hover:text-yellow-800' : ''} p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                Music
              </li>

              <li onClick={() => {navigateMedia(navigateVar)}} className={`z-40 cursor-pointer ${navBgTypeLocal=== 'media' ? 'bg-white text-blue-500': ''} hover:bg-white ${navBgTypeLocal!== 'media' ? 'hover:text-yellow-800' : ''} p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                Media
              </li>

              <li onClick={() => {navigateContact(navigateVar);}} className={`z-40 cursor-pointer ${navBgTypeLocal=== 'contact' ? 'bg-white text-blue-500': ''} hover:bg-white ${navBgTypeLocal!== 'contact' ? 'hover:text-yellow-800' : ''} p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                Contact
              </li>
          </ul>


          <div className='lg:hidden flex w-full justify-end'>
                  {
                      !openDrawer 
                      ? <TiThMenu onClick={() => {openDrawer_()}} className="cursor-pointer text-white size-[45px]"/>
                      : ""
                  }
          </div>

      </div>

      {
        openDrawer 
        ? <div className="z-50 lg:hidden fixed left-0 right-0 top-0 bottom-0 bg-black/50 backdrop-blur-sm w-screen h-screen" />

        : ""
      }


    </div>

  )
}

