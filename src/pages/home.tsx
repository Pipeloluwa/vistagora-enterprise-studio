import { Canvas } from '@react-three/fiber';
import { lazy, LegacyRef, Suspense, useEffect, useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setNavType } from "../state_management/reducers/nav_type_state";

import ROom1OPTIMIZED from'../components/homeComponents/animations/room1OPTIMIZED';
import { LandingPage } from '../components/homeComponents/landing_page';

const Wind = lazy(() => import('../components/homeComponents/animations/wind'));
const SlideShow = lazy(() => import('../components/homeComponents/slide_show'));
const Services = lazy(() => import('../components/homeComponents/services'));
const NewsLetter = lazy(() => import('../components/news_letter'));
const Footer = lazy(() => import('../components/footer'));

import CarouselImages from '../components/homeComponents/carouselImages';
import { HomeLoading } from '../components/homeLoading';
import { Spinner } from '@material-tailwind/react';
import { RootState } from '../state_management/store';



export default function Home(){
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(setNavType({action: 'home'}));
    }, []);


    const modelsLoaded= useSelector((state:RootState) => state.modelsLoaded.value);

  
 

    const canvasRef1:LegacyRef<HTMLCanvasElement> | null = useRef(null);
    const canvasRef4:LegacyRef<HTMLCanvasElement> | null = useRef(null);



    return (
        <>
        
            {/* ++++++++++++++++++++++++ PAGE CONTENTS ++++++++++++++++++++++++ */}
            <div className='relative scroll-smooth flex flex-col gap-y-[120px] w-full overflow-hidden'>
                
                {/* +++++++++++++++ IMAGE BACKGROUND +++++++++++ */}
                <img src="/images/media/8.webp" alt="" className='opacity-[5%] object-cover absolute left-0 right-0 top-0 bottom-0 flex w-full h-full' />
       

                <div className='overflow-hidden relative flex min-h-screen w-full'>
                    

                    <div className='flex w-full min-h-screen'>

                        <Canvas className='absolute left-0 right-0 top-0 bottom-0 flex h-full w-full overflow-hidden' ref={canvasRef1} camera={{fov:70, position: [0, 2, 30]}}>
                            <Suspense fallback={null}>
                               <ROom1OPTIMIZED /> 
                            </Suspense>
                              
                        </Canvas>
                    </div>


                    <div className=' overflow-hidden subpixel-antialiased dark:bg-gray-900 dark:text-gray-300 bg-black/40 min-h-screen w-full absolute left-0 right-0 top-0 bottom-0 px-10'>

                        {/* TITLES */}
                        
                        <LandingPage />

                    </div>

            

                    <div className='absolute left-0 right-0  top-0 bottom-0 flex min-h-screen'>
                    
                        <Canvas camera={{fov:5, position:[0, 0, 0]}} ref={canvasRef4} className=' w-full'>
                            <Suspense fallback={<HomeLoading />}>
                                <Wind />
                            </Suspense>
                        </Canvas>           
                    </div>


                </div>




                <div className='-my-[100px] flex flex-col justify-center items-center'>
                    <SlideShow />
                </div>


                <Services /> 


                <CarouselImages />


                <NewsLetter /> 


                <Footer />              
            </div>





            
            <div className={`${!modelsLoaded ? "flex": "hidden"} z-50 fixed left-0 right-0 top-0 bottom-0 w-full h-full items-center justify-center text-center bg-black text-4xl text-white font-serif `}>
                    <Spinner color='blue' className='size-[65px]' onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}/>  
            </div> 
            



        </>
    );
}
