import { LegacyRef, useEffect, useRef } from 'react'
import Footer from '../components/footer'
import { AnimatePresence, motion, useInView } from 'framer-motion' 
import { useDispatch } from 'react-redux'
import { setNavType } from "../state_management/reducers/nav_type_state";

export default function Media () {
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(setNavType({action: 'media'}));
    }, [])

    const trainingRef:LegacyRef<HTMLDivElement>= useRef(null)
    const trainingView= useInView(trainingRef);


    let tracker:number=1;
    let bgColor= "bg-purple-500";

    const serviceProduct= [
        {imageUrl: "/images/services/media-folder/1/brand-identity/brand.webp", title: "Brand Identity", description: "Establish a memorable brand presence with our branding and logo design."},
        {imageUrl: "/images/services/media-folder/1/editing-production/montage.webp", title: "Video Editing & Production", description: "Bring your vision to life with our cinematic video production services."},
        {imageUrl: "/images/services/media-folder/1/logo-design/logo.webp", title: "Logo Design", description: "Custom logo designs to represent your brand."},
        {imageUrl: "/images/services/media-folder/1/marketing-materials/trifold.webp", title: "Marketing Materials", description: "Design of brochures, flyers, business cards, and more."},
        {imageUrl: "/images/services/media-folder/1/video-shooting/movie.webp", title: "Video Shooting", description: "Professional video shooting with high-definition cameras."},
    ]

    const trainingProduct= [
        {imageUrl: "/images/services/media-folder/2/graphics-design/graphic-designer.webp", title: "Graphics Design"},
        {imageUrl: "/images/services/media-folder/2/video-editing/editing.webp", title: "Video Editing"},
        
    ]


  return (
    <div>
        
        <div className='relative h-screen '>
            <img src="/images/media/4.webp" alt=""  className='flex w-full h-full object-cover fixed'/>
            <div className='fixed left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-[#0748b1] to-[#7e1f5e] opacity-[85%]'/>

            <div className='md:pt-[180px] pt-[130px] md:gap-y-16 flex flex-col absolute left-0 right-0 top-0 bottom-0 w-full h-full'>
                <div className='gap-y-10 page-padding flex flex-col w-full'>
                    <motion.h1 
                        viewport={{once:true}}
                        initial= {{y:300, visibility:'hidden'}}
                        whileInView={{y:0, visibility:'visible'}}
                        transition={{duration:1.5, delay: 0.5}}

                        className='z-40 text-center justify-center md:text-5xl text-3xl flex w-full font-extrabold text-white'>
                        Media Services & Training
                    </motion.h1>  

                    <motion.p 
                        viewport={{once:true}}
                        initial= {{y:300, visibility:'hidden'}}
                        whileInView={{y:0, visibility:'visible'}}
                        transition={{duration:1.5, delay:0.5}}

                        className='z-40 mx-auto text-center text-white flex md:max-w-[500px] md:text-[16px] text-sm '>
                        Prepare for media appearances with confidence.
                    </motion.p>
                </div>
                

                                      
                <div className='z-10 mt-[30px] page-padding mx-auto lg:max-w-[1100px] flex flex-col text-white w-full justify-between gap-x-4'>

                    <motion.div
                        viewport={{once:true}}
                        initial= {{y:300, visibility:'hidden'}}
                        animate={{y:0, visibility:'visible'}}
                        transition={{duration:1.5, delay:1}}

                        className='flex flex-col w-full gap-y-3 p-8  bg-white/90 backdrop-blur text-black rounded-xl'>
                        <h1 className='z-40 pb-6 text-center text-2xl font-semibold text-gray-700'>
                            Services
                        </h1>


                        <div className='overflow-hidden grid md:grid-cols-2 items-center justify-center gap-x-4 gap-y-8 w-full h-full'>
                           
                            <AnimatePresence key={"mediaAnimationPresenceServices"}>
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
                                                key={`mediaServiceProductMotionKey${index}`}
                                                viewport={{once: true}}
                                                initial= {{x:index % 2 ? 300 : -300, rotate:index % 2 ? 50 : -50, visibility:"hidden"}}
                                                whileInView={{x:0, rotate:0, visibility:"visible"}}
                                                transition={{duration:1.5, delay:1}}
                                                className={` h-[250px]  p-2 flex flex-col items-center justify-center gap-y-3 text-white ${ bgColor } ${index === serviceProduct.length-1 && (index + 1) % 2 !== 0 ? "md:col-span-2": ""} rounded-xl shadow-md shadow-black/20`}>
                                                <div className='overflow-hidden flex items-center justify-center size-28 bg-white p-4 rounded-full shadow-sm shadow-black'>
                                                    <img src={items.imageUrl} alt="" className='w-[65px]'/>
                                                </div>

                                                <h1 className='z-40 text-center font-semibold'>
                                                    {serviceProduct[index].title}
                                                </h1>

                                                <p className='z-40 flex text-center text-sm '>
                                                    {serviceProduct[index].description}
                                                </p>
                                            </motion.div>
                                        )
                                    }                        
                                    )
                                }
                            </AnimatePresence>


                        </div>

                        
                         
                    </motion.div>






                    <motion.div
                        viewport={{once:true}}
                        initial= {{y:100, visibility:'hidden'}}
                        whileInView={{y:0, visibility:'visible'}}
                        transition={{duration:2}}

                        className='mt-[96px] flex flex-col w-full gap-y-3 backdrop-blur text-black rounded-xl'>
                        
                        <div ref={trainingRef} className='flex flex-col w-full gap-y-3 p-8  bg-white/90 backdrop-blur text-black rounded-xl'>
                        
                            <div className='pb-6 gap-y-2 flex flex-col w-full items-center justify-center'>
                                <h1 className='z-40  text-center text-2xl font-semibold text-gray-700'>
                                    Training
                                </h1> 

                                <p className='z-40 mx-4 justify-center text-center '>
                                    Learn or upscale your skill in our quality training in any of the tech fields
                                </p>
                            </div>
                            


                            <div className='grid md:grid-cols-3 items-center justify-center gap-x-4 gap-y-8 w-full h-full'>

                                <AnimatePresence key={"mediaAnimationPresenceTraining"}>
                                    {trainingProduct.map((item, index) =>                                     
                                        
                                        <motion.div 
                                            key={`mediaTrainingProduct${index}`}
                                            initial= {{x:-200, rotate:-50, visibility:"hidden"}}
                                            animate={{x:trainingView ? 0 : -200, rotate: trainingView ? 0 : -50, visibility: trainingView ? "visible" : "hidden"}}
                                            transition={{duration:1.5, delay: 0.6}}
                                            className='flex flex-col items-center justify-center gap-y-2'>
                                            <div className='overflow-hidden flex items-center justify-center size-28 bg-white p-4 rounded-full shadow-sm shadow-black'>
                                                <img src={item.imageUrl} alt="" className='w-[65px]'/>
                                            </div>

                                            <h1 className='z-40 text-center font-medium'>
                                                {item.title}
                                            </h1>

                                        </motion.div>
                                    )}
                                
                                </AnimatePresence>

                                


                            </div>

                        </div>

                        
                         
                    </motion.div>

                    <p className='z-40 text-2xl text-center my-[50px]'>
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

