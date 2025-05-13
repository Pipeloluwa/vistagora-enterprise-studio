import { Glow, GlowCapture } from '@codaworks/react-glow';
import TypeIt from 'typeit-react';
import StaggerText from 'react-stagger-text';
import { LegacyRef, useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../state_management/store';
import { motion, easeInOut, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Wheel1OPTIMIZED from './animations/wheel1OPTIMIZED';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { navigateAbout } from '../../routerNavigators';



export const LandingPage= () => {
    const navigateVar= useNavigate();
    const wheelSwitchActionValue= useSelector((state:RootState) => state.wheel_model.value);
    const modelsLoaded= useSelector((state:RootState) => state.modelsLoaded.value);
    const canvasRef2:LegacyRef<HTMLCanvasElement> | null = useRef(null);



    return (
        <>

        <div className=" overflow-hidden lg:absolute relative lg:left-0 lg:right-0 top-[18%] lg:flex lg:items-start grid grid-rows-2 justify-center w-full min-h-screen"> 

            {
                modelsLoaded 
                ? 
    
                <div className={`${wheelSwitchActionValue ? "animate-pulse" : "animate-none"} sm:gap-y-8 gap-y-4 lg:items-start lg:ml-12 items-center lg:absolute lg:left-0  lg:w-auto static lg:min-h-screen w-full flex z-20 overflow-hidden flex-col lg:mt-8`}>
                    <AnimatePresence key={"landingPageAnimatePresence"}>

                        <div key={"landingPageAnimatePresence1"} className="flex lg:w-auto w-full lg:items-start items-center flex-col gap-y-4">
                            <GlowCapture className='flex'>
                                <Glow color='purple' >
                                    <h1 className='z-10 bg-gradient-to-r from-[#ffffff] to-[#90c9ff] inline-block bg-clip-text text-transparent hover:from-black/0 pb-2 md:text-7xl sm:text-5xl text-4xl font-extrabold  glow:bg-black glow:text-blue-500'>
                                        <StaggerText  staggerType='letter'  staggerDuration={1.4}>
                                            VISTAGORA
                                        </StaggerText>
                                    </h1>
                                </Glow>
                            </GlowCapture>

                            <GlowCapture className='lg:ml-2 '>
                                <Glow color='purple' >
                                    <h1 className='bg-white inline-block bg-clip-text text-transparent hover:bg-black/0 md:text-5xl sm:text-3xl text-2xl font-bold glow:bg-black glow:text-blue-500'>
                                        <StaggerText  staggerType='letter' staggerDuration={1.4} >
                                            Enterprise - Studio
                                        </StaggerText>
                                    </h1>
                                </Glow>
                            </GlowCapture>
                        </div>


                        <motion.div key={"landingPageAnimatePresence2"} initial={{x:"150%"}} animate={{x:0}} transition={{duration:3, delay:3.5, ease:easeInOut, type:"spring", bounce: 0.2}} className='flex md:justify-start justify-center lg:w-auto  px-2 sm:w-[50%] w-[100%] text-white lg:text-3xl sm:text-2xl text-lg'>
                                <TypeIt options={{loop: true, speed:100}}>
                                        If not quality, nothing else
                                </TypeIt>
                        </motion.div>


                        <motion.div key={"landingPageAnimatePresence3"} initial={{opacity:0, y:100}} animate={{opacity:1, y:0,}} transition={{duration:5, delay:3.5, ease:easeInOut, type:"spring", bounce: 0.5}} >
                            <GlowCapture className='flex w-full h-full items-center justify-center '>
                                <Glow color='purple' >
                                    <p className='lg:w-[65%] sm:max-w-[70%] w-[60%] lg:mx-0 mx-auto lg:flex-none flex lg:text-start text-center lg:text-xl md:text-md text-sm italic ease-linear translate-y-0 duration-[1500ms] text-white font-serif glow:bg-black glow:text-blue-500'>
                                        We believe in the transformative power of technology, the magic of music, and the captivating allure of visuals ...
                                    </p>
                                </Glow>
                            </GlowCapture>
                        </motion.div>




                        <motion.div 
                            key={"landingPageAnimatePresence4"}
                            initial={{opacity:0, x:-100}} animate={{opacity:1, x:0,}} transition={{duration:6, delay:3.5, ease:easeInOut, type:"spring", bounce: 0.5}}
                            className='flex lg:w-auto w-full lg:justify-start justify-center'>
                            
                            <Button onClick={() => {navigateAbout(navigateVar)}} className='text-lg big-button blue-pink' placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                                Read More
                            </Button>
                        </motion.div>

                    </AnimatePresence>

                </div>


                : ""
            }

                


            <div className='lg:pl-[50%] lg:absolute lg:left-0 lg:right-0 lg:top-0 lg:bottom-0 flex w-full'>
                <Canvas className='lg:scale-100 lg:-mt-[80px] sm:-mt-12 -mt-20  flex w-full z-0' ref={canvasRef2} camera={{fov:70, position: [0, 0, 8]}}>
                    <Wheel1OPTIMIZED props= {canvasRef2} />
                </Canvas> 
            </div>


        </div>



        </>
    );
}
