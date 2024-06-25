import { useEffect } from 'react'
import Footer from '../components/footer'
import { motion } from 'framer-motion' 
import { setNavType } from "../state_management/reducers/nav_type_state";
import { useDispatch } from 'react-redux';


export default function About () {
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(setNavType({action: 'about'}));
    }, [])


  return (
    <div>
        
        <div className='relative h-screen '>
            <img src="/images/about.webp" alt=""  className='flex w-full h-full object-cover fixed'/>
            <div className='fixed left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-[#0748b1] to-[#7e1f5e] opacity-[85%]'/>

            <div className=' md:pt-[180px] pt-[130px] gap-y-16 flex flex-col absolute w-full h-full'>
                
                <div className='page-padding gap-y-10 flex flex-col'>
                    <motion.h1 
                        viewport={{once:true}}
                        initial= {{y:300, visibility:'hidden'}}
                        whileInView={{y:0, visibility:'visible'}}
                        transition={{duration:2, delay: 0.5}}

                        className='md:text-5xl text-3xl flex w-full font-extrabold text-white'>
                        About Us
                    </motion.h1>  

                    <motion.p 
                        viewport={{once:true}}
                        initial= {{y:300, visibility:'hidden'}}
                        whileInView={{y:0, visibility:'visible'}}
                        transition={{duration:2, delay:0.5}}

                        className='text-white flex md:max-w-[500px] w-full md:text-[16px] text-sm text-justify'>
                      At Vistagora Enterprise Studio, we believe in the transformative power of technology, the magic of music, and the captivating allure of visuals. We blend technology, music, and visual artistry to create a unique, innovative, and dynamic experience. Whether you're a client seeking the latest digital solutions, an artist looking to record your next hit, or a business in need of cutting-edge media graphics, we have the expertise and passion to bring your vision to life.
                    </motion.p>
                </div>
                

                                      
                <div className='page-padding mb-[140px] flex lg:flex-row flex-col lg:gap-y-0 gap-y-12 text-white w-full  lg:gap-x-24'>

                    <motion.div
                        initial= {{y:300, visibility:'hidden'}}
                        animate={{y:0, visibility:'visible'}}
                        transition={{duration:2, delay:1}}

                        className='flex flex-col gap-y-3'>
                        <h1 className='text-2xl font-semibold '>
                            Story
                        </h1>

                        <p className='flex lg:max-w-[400px] w-full md:text-[16px] text-sm text-justify'>
                            Vistagora Enterprise Studio was born from a shared passion for innovation, creativity, and excellence. With a diverse team of experts in technology, music production, and graphic design, we have established ourselves as a leading force in the industry.
                        </p> 
                    </motion.div>

                    <motion.div 
                        initial= {{y:300, visibility:'hidden'}}
                        animate={{y:0, visibility:'visible'}}
                        transition={{duration:2, delay:1.5}}

                        className='flex flex-col gap-y-3'>
                        <h1 className='text-2xl font-semibold'>
                            Mission
                        </h1>

                        <p className='flex lg:max-w-[400px] w-full md:text-[16px] text-sm text-justify'>
                            Our mission is to empower creativity through technology, music, and media. We strive to provide exceptional services that inspire and elevate our clients' projects to new heights.
                        </p> 
                    </motion.div>

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

