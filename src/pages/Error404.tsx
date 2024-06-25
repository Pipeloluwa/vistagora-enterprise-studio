import { useEffect } from 'react'
import { motion } from 'framer-motion' 
import { setNavType } from "../state_management/reducers/nav_type_state";
import { useDispatch } from 'react-redux';
import Footer from '../components/footer';


export default function Error404 () {
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(setNavType({action: ''}));
    }, [])


  return (
    <div>
        
        <div className='relative h-screen '>
  
            <div className='fixed h-screen left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-[#0748b1] to-[#7e1f5e] opacity-[85%]'/>

            <div className='h-screen md:pt-[180px] pt-[130px] gap-y-16 flex flex-col justify-between absolute w-full '>
                

                <div className='flex flex-col gap-y-6 items-center justify-center'>
                  <h1 className='text-7xl text-white'>
                    Ooppppps
                  </h1>

                  <p className='text-white'>
                    This page url path is not available
                  </p>

                  <a href="." className='z-10 text-white text-sm underline font-bold'>
                    Click here to go back to homepage
                  </a>
                </div>
              

           
                <Footer />

            </div>




            <motion.div 
                initial= {{opacity:1}}
                animate={{opacity:0}}
                transition={{duration:3}}

                className='bg-black fixed left-0 right-0 top-0 bottom-0'/>
            
        </div>


        
    </div>
  )
}

