import { Canvas } from '@react-three/fiber';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import Computer from './animations/computer1';
import { motion } from 'framer-motion';
import Speaker from './animations/speaker1';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import Camera from './animations/camera1';
import { cardVariantsLeft, cardVariantsRight } from './animations/framerAnimation/variants';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { navigateMedia, navigateMusic, navigateTech } from '../../routerNavigators';


const Services = () => {
    const navigateVar= useNavigate();
    const canvasRef5:LegacyRef<HTMLCanvasElement> | null = useRef(null);
    const canvasRef6:LegacyRef<HTMLCanvasElement> | null = useRef(null);
    const canvasRef7:LegacyRef<HTMLCanvasElement> | null = useRef(null);

    const motionRef1:LegacyRef<HTMLDivElement>= useRef(null);
    const motionRef2:LegacyRef<HTMLDivElement>= useRef(null);
    

    const motionRef3:LegacyRef<HTMLDivElement>= useRef(null);




    let initialSize = window.innerWidth; 
    const homeDivRef:LegacyRef<HTMLDivElement>= useRef(null);
    const [isLargeScreen, setLargeScreen] = useState(true); 
    useEffect( () => {

        if (window.innerWidth < 960){
            setLargeScreen(false);
        }


        const refreshComponent = () => {
            const currentWidth= window.innerWidth;

            // ++++++++++ FOR MEDIUM SCREEN DOWNWARD +++++++++++
            if (initialSize >= 960 && currentWidth < 960){
                setLargeScreen(false);
            }

            // ++++++++++ FOR LARGE SCREEN UPWARD +++++++++++
            else if (initialSize < 960 && currentWidth >= 960){
                setLargeScreen(true);
            }
            
            initialSize= currentWidth;

        }


        const resizeObserver= new ResizeObserver(refreshComponent)
        if (homeDivRef.current){
            resizeObserver.observe(homeDivRef.current);
        }



        // +++++++++++++++ AFTER COMPONENT UNMOUNTS ++++++++++++++
        return () => {
            if (homeDivRef.current){
                resizeObserver.unobserve(homeDivRef.current);     
            }
        }
  

    }, [])



  return (
    <div ref={homeDivRef} className='md:px-12 flex flex-col w-full gap-y-24'>

        <div  
            className='relative overflow-hidden flex flex-col mx-4 pink-blue-bg shadow-xl shadow-[#1451b4] lg:shadow-[#1451b4]/0 rounded-lg'> 

            <img src="/images/tech/5.webp" alt="" className='absolute top-0 bottom-0 left-0 right-0 object-cover flex w-full h-full opacity-[15%]'/>
            
            <div ref={motionRef1} className='md:pr-6 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-y-0 gap-y-10 items-center  flex flex-col mx-4 px-4 py-12'>
                


                <motion.div 
                    viewport={{amount: isLargeScreen ? 0.4 : 0, once: true}}
                    initial={"offscreen"}
                    whileInView={"onscreen"} 
                    variants={cardVariantsLeft} 
                    className='drop-shadow-2xl shadow-black items-center justify-center xl:h-full lg:h-[420px] md:h-[400px] h-[300px] w-full'>
                    
                    <Canvas ref={canvasRef5} className='flex w-full items-center justify-center' camera={{fov:70, position: [0, 0, 8]}}>
                        <Computer props={canvasRef5}/>
                    </Canvas>
                </motion.div>



                <motion.div 
                    viewport={{amount: isLargeScreen ? 0.4 : 0, once: true}}
                    initial={"offscreen"}
                    whileInView={ "onscreen"} 
                    variants={cardVariantsRight}  
                    className='lg:mt-0 lg:ml-4 -mt-16 z-20 flex-col text-white space-y-6'>
                    
                    <GlowCapture className='flex flex-col'>
                        <Glow color='purple' className='space-y-4'> 
                            <h1 className='z-40 font-bold sm:text-7xl text-5xl glow:bg-black glow:text-blue-500'>
                                Quality
                            </h1>
                            <h3 className='-mt-2 sm:text-5xl text-4xl glow:bg-black glow:text-blue-500'>Tech Services</h3>     
                        </Glow>
                    </GlowCapture>

                
                    <GlowCapture className='flex'>
                        <Glow color='purple' > 
                            <p className='glow:bg-black glow:text-blue-500 text-sm text-justify'>Unleash your inner developer with Great Tech Services! Not only we train aspiring coders in web & app development, we also build powerful solutions for clients.  Get the skills or the results. Level up your tech game today in:</p>
                        </Glow>
                    </GlowCapture>
                    


                    <GlowCapture className='flex ml-4'>
                        <Glow color='purple' > 
                        <ul className='z-40 glow:bg-black glow:text-blue-500 list-disc  mt-4 flex flex-col gap-y-2'>
                            <li>Data science</li>
                            <li>Data analysis</li>
                            <li>Frontend development</li>
                            <li>Backend development</li>
                            <li>Mobile app development</li>
                            <li>Desktop app development</li>
                        </ul>
                        </Glow>
                    </GlowCapture>
                        

                    
                    <Button onClick={() => {navigateTech(navigateVar)}} className='z-40 text-lg mr-[50px] big-button bg-white text-blue-800' placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                        Explore
                    </Button>
                
                </motion.div>
            </div>
        </div>








        <div 
            className=' w-full flex flex-col'> 
            
            <div ref={motionRef2} className='relative overflow-hidden lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-y-0 gap-y-10 items-center flex flex-col-reverse mx-4 px-4 py-12 blue-pink-bg rounded-lg shadow-xl shadow-[#aa32aa] lg:shadow-[#1451b4]/0'>
                <img src="/images/music/11.webp" alt="" className='absolute top-0 bottom-0 left-0 right-0 object-cover flex w-full h-full opacity-[15%]'/>





                <motion.div 
                    viewport={{amount: isLargeScreen ? 0.4 : 0, once: true}}
                    initial={"offscreen"}
                    whileInView={"onscreen"} 
                    variants={cardVariantsLeft} 
                    className='md:pl-6 lg:mt-0 lg:mr-4 -mt-16 z-20 flex-col text-white space-y-6'>
                    
                    <GlowCapture className='flex flex-col'>
                        <Glow color='purple' className='space-y-4' > 
                            <h1 className='font-bold sm:text-7xl text-5xl glow:bg-black glow:text-blue-500'>
                                Fantastic
                            </h1>
                            <h3 className='-mt-2 sm:text-5xl text-4xl glow:bg-black glow:text-blue-500'>Music Production</h3>     
                        </Glow>
                    </GlowCapture>

                
                    <GlowCapture className='flex'>
                        <Glow color='purple' > 
                            <p className='glow:bg-black glow:text-blue-500 text-sm text-justify'>Our state-of-the-art music studio provides everything you need to create, record, and produce your music. Services include:</p>
                        </Glow>
                    </GlowCapture>
                    

                    <GlowCapture className='flex ml-4'>
                        <Glow color='purple' > 
                        <ul className='glow:bg-black glow:text-blue-500 list-disc mt-4 flex flex-col gap-y-2'>
                            <li>Recording and Mixing</li>
                            <li>Rehearsal</li>
                            <li>Music Production</li>
                            <li>Voiceover and Podcast Recording</li>
                            <li>Music & Instrument Training</li>
                        </ul>
                        </Glow>
                    </GlowCapture>


                    <Button onClick={() => {navigateMusic(navigateVar)}} className='text-lg mr-[50px] big-button bg-white text-blue-800' placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                        Explore
                    </Button>
                
                </motion.div>





                <motion.div 
                    viewport={{amount: isLargeScreen ? 0.4 : 0, once: true}}
                    initial={"offscreen"}
                    whileInView={ "onscreen"} 
                    variants={cardVariantsRight} 
                    className='drop-shadow-2xl shadow-black items-center justify-center lg:h-full md:h-[400px] h-[300px] w-full'>
                    
                    <Canvas ref={canvasRef6} className='flex w-full items-center justify-center' camera={{fov:70, position: [0, 0, 8]}}>
                        <Speaker props={canvasRef6}/>
                    </Canvas>
                </motion.div>
            </div>
        </div>





        
        
        <div
            className='relative overflow-hidden first-letter:flex flex-col pink-blue-bg mx-4 rounded-lg shadow-xl shadow-[#1451b4] lg:shadow-[#1451b4]/0'> 
            <img src="/images/media/4.webp" alt="" className='absolute top-0 bottom-0 left-0 right-0 object-cover flex w-full h-full opacity-[15%]'/>
            
            <div ref={motionRef3} className='lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-y-0 gap-y-10 items-center flex flex-col mx-4 px-4 py-12'>


                <motion.div 
                     viewport={{amount: isLargeScreen ? 0.4 : 0, once: true}}
                     initial={"offscreen"}
                     whileInView={ "onscreen"} 
                    variants={cardVariantsLeft} 
                    className='drop-shadow-2xl lg:pr-[50px] items-center justify-center lg:h-full md:h-[400px] h-[300px] w-full'>
                    
                    <Canvas ref={canvasRef7} className=' flex w-full items-center justify-center' camera={{fov:70, position: [0, 0, 2]}}>
                        <Camera props={canvasRef7}/>
                    </Canvas>
                </motion.div>


                <motion.div 
                    viewport={{amount: isLargeScreen ? 0.4 : 0, once: true}}
                    initial={"offscreen"}
                    whileInView={"onscreen"} 
                    variants={cardVariantsRight} 
                    className='md:pr-6 lg:mt-0 lg:ml-4 -mt-16 z-20 flex-col text-white space-y-6'>
                    
                    <GlowCapture className='flex flex-col'>
                        <Glow color='purple' className='space-y-4' > 
                            <h1 className='font-bold sm:text-7xl text-5xl glow:bg-black glow:text-blue-500'>
                                Great
                            </h1>
                            <h3 className='-mt-2 sm:text-5xl text-4xl glow:bg-black glow:text-blue-500'>Media Production</h3>     
                        </Glow>
                    </GlowCapture>

                
                    <GlowCapture className='flex'>
                        <Glow color='purple' > 
                            <p className='glow:bg-black glow:text-blue-500 text-sm text-justify'>Our talented graphic design team specializes in creating visually stunning media graphics for various platforms. Services include:</p>
                        </Glow>
                    </GlowCapture>
                    

                    <GlowCapture className='flex ml-4'>
                        <Glow color='purple' > 
                        <ul className='glow:bg-black glow:text-blue-500 list-disc mt-4 flex flex-col gap-y-2'>
                            <li>Logo and Brand Identity Design</li>
                            <li>Website and Social Media Graphics</li>
                            <li>Video Production and Animation</li>
                            <li>Marketing Materials</li>
                        </ul>
                        </Glow>
                    </GlowCapture>


                    <Button onClick={() => {navigateMedia(navigateVar)}} className='text-lg mr-[50px] big-button bg-white text-blue-800' placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                        Explore
                    </Button>
                
                </motion.div>
            </div>
        </div>

    </div>
  )
}

export default Services