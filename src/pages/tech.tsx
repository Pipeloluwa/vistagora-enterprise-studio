import { LegacyRef, useEffect, useRef } from 'react'
import Footer from '../components/footer'
import { motion, useInView } from 'framer-motion' 
import { setNavType } from "../state_management/reducers/nav_type_state";
import { useDispatch } from 'react-redux';

export default function Tech () {
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(setNavType({action: 'tech'}));
    }, [])

    const trainingRef:LegacyRef<HTMLDivElement>= useRef(null)
    const trainingView= useInView(trainingRef);


    let tracker:number=1;
    let bgColor= "bg-purple-500";

    const serviceProduct= [
        {imageUrl: "/images/services/tech-folder/1/website/internet.webp", title: "Web Development", description: "Custom websites and web applications tailored to your needs."},
        {imageUrl: "/images/services/tech-folder/1/mobile/smartphone.webp", title: "Mobile App Development", description: "Innovative mobile applications for iOS and Android platforms."},
        {imageUrl: "/images/services/tech-folder/1/ecommerce/shopping.webp", title: "E-commerce Solutions", description: "Complete e-commerce platforms to boost your online business."},
        {imageUrl: "/images/services/tech-folder/1/software/software.webp", title: "Software Development", description: "Bespoke software solutions designed to meet your unique business requirements."}
    ]

    const trainingProduct= [
        {imageUrl: "/images/services/tech-folder/2/backend-icon/backend.webp", title: "Front End Development"},
        {imageUrl: "/images/services/tech-folder/2/full-stack-icon/thorough.webp", title: "Back End Development"},
        {imageUrl: "/images/services/tech-folder/2/mobile-dev-icon/mobile-app.webp", title: "Full Stack Development"},
        {imageUrl: "/images/services/tech-folder/2/mobile-dev-icon/mobile-app.webp", title: "Mobile App Development"},
        {imageUrl: "/images/services/tech-folder/2/desktop-dev-icon/software-application.webp", title: "Desktop App Development"},
        {imageUrl: "/images/services/tech-folder/2/data-analysis-icon/analysis.webp", title: "Data Analysis"}
        
    ]



  return (
    <div>
        
        <div className='relative h-screen'>
            <img src="/images/tech/5.webp" alt=""  className='flex w-full h-full object-cover fixed'/>
            <div className='fixed left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-[#0748b1] to-[#7e1f5e] opacity-[85%]'/>

            <div className='md:pt-[180px] pt-[130px] md:gap-y-16 flex flex-col absolute left-0 right-0 top-0 bottom-0 w-full h-full'>
                <div className='gap-y-10 page-padding flex flex-col w-full'>
                    <motion.h1 
                        viewport={{once:true}}
                        initial= {{y:300, visibility:'hidden'}}
                        whileInView={{y:0, visibility:'visible'}}
                        transition={{duration:1.5, delay: 0.5}}

                        className='text-center justify-center md:text-5xl text-3xl flex w-full font-extrabold text-white'>
                        Tech Services & Training
                    </motion.h1>  

                    <motion.p 
                        viewport={{once:true}}
                        initial= {{y:300, visibility:'hidden'}}
                        whileInView={{y:0, visibility:'visible'}}
                        transition={{duration:1.5, delay:0.5}}

                        className='mx-auto text-center text-white flex md:w-[500px] md:text-[16px] text-sm '>
                        From software development to IT consultancy, we harness the latest technologies to propel your business forward.
                    </motion.p>
                </div>
                

                                      
                <div className='mt-[30px] page-padding mx-auto lg:max-w-[1100px] flex flex-col text-white w-full justify-between gap-x-4'>

                    <motion.div
                        viewport={{once:true}}
                        initial= {{y:300, visibility:'hidden'}}
                        animate={{y:0, visibility:'visible'}}
                        transition={{duration:1.5, delay:1}}

                        className='flex flex-col w-full gap-y-3 p-8  bg-white/90 backdrop-blur text-black rounded-xl'>
                        
                        <h1 className='pb-6 text-center text-2xl font-semibold text-gray-700'>
                            Services
                        </h1>


                        <div className='overflow-hidden grid md:grid-cols-2 items-center justify-center gap-x-4 gap-y-8 w-full h-full'>
                            {
                                serviceProduct.map((items, index) => { 
                                        if (tracker === 3){
                                            bgColor= bgColor === "bg-blue-500" ? bgColor= "bg-blue-500" : "bg-purple-500";                                 
                                            tracker= 1;
                                        }
                                        else{
                                            bgColor= bgColor === "bg-blue-500" ? bgColor= "bg-purple-500" : "bg-blue-500";
                                        }
                                        tracker+= 1;
                                
                                        return(
                                                <motion.div 
                                                key={`techServiceProductMotionKey${index}`}
                                                viewport={{once: true}}
                                                initial= {{x:index % 2 ? 300 : -300, rotate:index % 2 ? 50 : -50, visibility:"hidden"}}
                                                whileInView={{x:0, rotate:0, visibility:"visible"}}
                                                transition={{duration:1.5, delay:1}}
                                                className={` h-[250px]  p-2 flex flex-col items-center justify-center gap-y-3 text-white ${ bgColor } ${index === serviceProduct.length-1 && (index + 1) % 2 !== 0 ? "md:col-span-2": ""} rounded-xl shadow-md shadow-black/20`}>
                                                <div className='overflow-hidden flex items-center justify-center size-28 bg-white p-4 rounded-full shadow-sm shadow-black'>
                                                    <img src={items.imageUrl} alt="" className='w-[65px]'/>
                                                </div>

                                                <h1 className='text-center font-semibold'>
                                                    {serviceProduct[index].title}
                                                </h1>

                                                <p className='flex text-center text-sm '>
                                                    {serviceProduct[index].description}
                                                </p>
                                            </motion.div>  
                                        )
                                    }                          
                                )
                            }
                        </div>

                        
                         
                    </motion.div>






                    <motion.div
                        viewport={{once:true}}
                        initial= {{y:100, visibility:'hidden'}}
                        whileInView={{y:0, visibility:'visible'}}
                        transition={{duration:2}}

                        className='flex flex-col w-full gap-y-3 backdrop-blur text-black rounded-xl'>
                        
                        <div ref={trainingRef} className='mt-[96px] flex flex-col w-full gap-y-3 p-8  bg-white/90 backdrop-blur text-black rounded-xl'>

                            <div className='pb-6 gap-y-2 flex flex-col w-full items-center justify-center'>
                                <h1 className=' text-center text-2xl font-semibold text-gray-700'>
                                    Training
                                </h1> 

                                <p className='mx-4 justify-center text-center '>
                                    Learn or upscale your skill in our quality training in any of the tech fields
                                </p>
                            </div>
                            


                            <div className='grid md:grid-cols-3 items-center justify-center gap-x-4 gap-y-8 w-full h-full'>
                                
                                {trainingProduct.map((item, index) => 
                                
                                
                                    <motion.div 
                                        key={`techTrainingProduct${index}`}
                                        // viewport={{once: true}}
                                        initial= {{x:-300, rotate:-50, visibility:"hidden"}}
                                        animate={{x:trainingView ? 0 : -300, rotate: trainingView ? 0 : -50, visibility: trainingView ? "visible" : "hidden"}}
                                        transition={{duration:1.5, delay:1}}
                                        className='flex flex-col items-center justify-center gap-y-2'>
                                        <div className='overflow-hidden flex items-center justify-center size-28 bg-white p-4 rounded-full shadow-sm shadow-black'>
                                            <img src={item.imageUrl} alt="" className='w-[65px]'/>
                                        </div>

                                        <h1 className='text-center font-medium'>
                                            {item.title}
                                        </h1>

                                    </motion.div>
                                )}

                                


                            </div>

                        </div>
                        
                         
                    </motion.div>

                    <p className='text-2xl text-center my-[50px]'>
                        For pricing, contact us !
                    </p>

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

