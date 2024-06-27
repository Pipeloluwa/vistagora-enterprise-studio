import { useEffect } from 'react';
import Footer from '../components/footer';
import { motion } from 'framer-motion';
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { EmailFormApi } from '../emailApi/emailForm';
import { setNavType } from "../state_management/reducers/nav_type_state";
import { useDispatch } from 'react-redux';
import { IoLocationSharp } from 'react-icons/io5';

export default function Contact () {
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(setNavType({action: 'contact'}));
    }, [])
    
   


  return (
    <div>
        
        <div className='relative h-screen '>
            <img src="/images/contact.webp" alt=""  className='flex w-full h-full object-cover fixed'/>
            <div className='fixed left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-[#0748b1] to-[#7e1f5e] opacity-[85%]'/>

            <div className='md:pt-[180px] pt-[130px] gap-y-8 flex flex-col absolute left-0 right-0 top-0 bottom-0 w-full h-full'>
                
                <div className='gap-y-10 page-padding flex flex-col w-full'>
                    <motion.h1 
                        viewport={{once:true}}
                        initial= {{y:300, visibility:'hidden'}}
                        whileInView={{y:0, visibility:'visible'}}
                        transition={{duration:1.5, delay: 0.5}}

                        className='text-center justify-center md:text-5xl text-3xl flex w-full font-extrabold text-white'>
                        Contact Us
                    </motion.h1>  

                    <motion.p 
                        viewport={{once:true}}
                        initial= {{y:300, visibility:'hidden'}}
                        whileInView={{y:0, visibility:'visible'}}
                        transition={{duration:1.5, delay:0.5}}

                        className='mx-auto text-center text-white flex ext-[16px] '>
                        Have a question or want to reach us? We are here for you !
                    </motion.p>
                </div>



                <motion.div 
                    viewport={{once:true}}
                    initial= {{y:300, visibility:'hidden'}}
                    whileInView={{y:0, visibility:'visible'}}
                    transition={{duration:1.5, delay:0.5}}
                    className= "page-padding mx-auto text-sm flex flex-col md:items-center gap-y-4">

                    <div className='flex gap-x-12 gap-y-4 md:flex-row flex-col-reverse md:items-center'>
                        <a href='mailto:vistagoraenterprise@gmail.com' className= "z-10 flex items-center gap-x-2 text-white cursor-pointer" >
                            <IoIosMail className='md:size-[50px] size-[30px]'/>
                            <h1 className='underline'>
                                vistagoraenterprise@gmail.com
                            </h1>
                        </a>


                        <div className= "flex items-center gap-x-2 text-white">
                            <FaWhatsapp className='md:size-[38px] size-[30px]'/>
                            <h1>
                                +234 9027931880
                            </h1>
                        </div>
                    </div>



                    <div className= "flex sm:items-center justify-center sm:gap-x-2 text-white">
                        <IoLocationSharp className='md:size-[38px] size-[30px]'/>
                        
                        <h1 className=' flex sm:max-w-full max-w-[300px] w-full'>
                            KBK Plaza, Tunji TOpe Hill Morgan Estate Phase 2, Grammar School Lagos, Lagos, Nigeria
                        </h1>
                    </div>

                </motion.div>
                


             
                <div className='z-20 mb-[30px] page-padding mx-auto lg:max-w-[1100px] flex flex-col text-white w-full justify-between gap-x-4'>

                    <motion.div
                        viewport={{once:true}}
                        initial= {{y:300, visibility:'hidden'}}
                        animate={{y:0, visibility:'visible'}}
                        transition={{duration:1.5, delay:1}}

                        className='flex flex-col w-full gap-y-3 md:p-8 p-3 h-full bg-white/90 backdrop-blur text-black rounded-xl drop-shadow-xl shadow-black/20'>
                    
                        <EmailFormApi />
                        
                    </motion.div>

                </div>
                 
              
         
                <Footer />
                
                

            </div>




            <motion.div 
                initial= {{opacity:1, visibility:'hidden'}}
                animate={{opacity:0, visibility:'visible'}}
                transition={{duration:3}}

                className='bg-black fixed left-0 right-0 top-0 bottom-0'/>
            
        </div>
    </div>
  )
}

