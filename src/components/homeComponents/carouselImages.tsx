
import  { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import { cardVariantsRight } from './animations/framerAnimation/variants';

const CarouselImages = () => {
    const [autoPlay]= useState<boolean>(true);
  return (
    <>

        {/* ++++++++++++++++ BIGGER SCREEN +++++++++++++++++++++ */}
        <motion.div 
        viewport={{once: true}}
        initial={"offscreen"}
        whileInView={"onscreen"} 
        variants={cardVariantsRight} 
         className=" my-8 lg:flex hidden overflow-hidden rounded-2xl h-full items-center justify-center">
        
        
            <Carousel 
                autoPlay={autoPlay}
                infiniteLoop
                
                centerMode 
                centerSlidePercentage={33} 
                swipeable
                emulateTouch
                showStatus= {false}
                showThumbs={false}
                showIndicators={false}
                interval={4200}
                transitionTime={600}
                useKeyboardArrows
                className='flex w-full rounded-2xl'
                >

                <div className='shadow-xl shadow-blue-500 h-[300px] overflow-hidden flex justify-around w-full rounded-2xl'>
             
                    <div className='relative flex w-full mx-4 shadow-2xl shadow-blue-500 rounded-2xl'> 
                        <img src="/images/tech/2.webp" alt="tech 1" className='rounded-2xl absolute flex w-full h-full object-cover' />
                    
                        <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/60 to-blue-500/70'>
                            <h1 className='text-xl font-bold'>
                                Embrace Innovation
                            </h1>

                            <p className='text-sm italic flex justify-start text-start'>
                                "Innovation distinguishes between a leader and a follower."
                            </p>

                            <p className='text-gray-300 text-xs font-extralight'>— Steve Jobs</p>
                        </div>            
                    </div>
 
                </div>


                <div className='shadow-xl shadow-blue-500 h-[300px]  overflow-hidden flex justify-around w-full rounded-2xl'>
                    <div className='relative flex w-full mx-4'>
                        <img src="/images/music/1.webp" alt="tech 1" className='rounded-2xl absolute flex w-full h-full object-cover' />
                    
                        <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/60 to-blue-500/70'>
                            <h1 className='text-xl font-bold'>
                                Create Your Symphony
                            </h1>

                            <p className='text-sm italic flex justify-start text-start'>
                                "Music can change the world because it can change people."
                            </p>

                            <p className='text-gray-300 text-xs font-extralight'>— Bono</p>
                        </div>            
                    </div>
 
                </div>


                <div className='shadow-xl shadow-blue-500 h-[300px]  overflow-hidden flex justify-around w-full rounded-2xl'>
                    <div className='relative flex w-full mx-4'>
                        <img src="/images/media/4.webp" alt="tech 1" className='rounded-2xl absolute flex w-full h-full object-cover' />
                    
                        <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/60 to-blue-500/70'>
                            <h1 className='text-xl font-bold'>
                                Design Your Vision
                            </h1>

                            <p className='text-sm italic flex justify-start text-start'>
                            "Design is not just what it looks like and feels like. Design is how it works."
                            </p>

                            <p className='text-gray-300 text-xs font-extralight'>— Steve Jobs</p>
                        </div>            
                    </div>
 
                </div>








                <div className='shadow-xl shadow-blue-500 h-[300px]  overflow-hidden flex justify-around w-full rounded-2xl'>
                    <div className='relative flex w-full mx-4'>
                        <img src="/images/tech/5.webp" alt="tech 1" className='rounded-2xl absolute flex w-full h-full object-cover' />
                    
                        <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/60 to-blue-500/70'>
                            <h1 className='text-xl font-bold'>
                            Push Boundaries
                            </h1>

                            <p className='text-sm italic flex justify-start text-start'>
                            "The only way to discover the limits of the possible is to go beyond them into the impossible."
                            </p>

                            <p className='text-gray-300 text-xs font-extralight'>— Arthur C. Clarke</p>
                        </div>            
                    </div>
 
                </div>

               

                <div className='shadow-xl shadow-blue-500 h-[300px]  overflow-hidden flex justify-around w-full rounded-2xl'>
                    <div className='relative flex w-full mx-4'>
                        <img src="/images/music/11.webp" alt="tech 1" className='rounded-2xl absolute flex w-full h-full object-cover' />
                    
                        <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/60 to-blue-500/70'>
                            <h1 className='text-xl font-bold'>
                            Harmonize Your Efforts
                            </h1>

                            <p className='text-sm italic flex justify-start text-start'>
                            "Where words fail, music speaks."
                            </p>

                            <p className='text-gray-300 text-xs font-extralight'>— AHans Christian Andersen</p>
                        </div>            
                    </div>
 
                </div>

                
                <div className='shadow-xl shadow-blue-500 h-[300px]  overflow-hidden flex justify-around w-full rounded-2xl'>
                    <div className='relative flex w-full mx-4'>
                        <img src="/images/media/7.webp" alt="tech 1" className='rounded-2xl absolute flex w-full h-full object-cover' />
                    
                        <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/60 to-blue-500/70'>
                            <h1 className='text-xl font-bold'>
                            Craft with Creativity
                            </h1>

                            <p className='text-sm italic flex justify-start text-start'>
                            Creativity is intelligence having fun."
                            </p>

                            <p className='text-gray-300 text-xs font-extralight'>— Albert Einstein</p>
                        </div>            
                    </div>
 
                </div>
               







                <div className='shadow-xl shadow-blue-500 h-[300px]  overflow-hidden flex justify-around w-full rounded-2xl'>
                    <div className='relative flex w-full mx-4'>
                        <img src="/images/tech/13.webp" alt="tech 1" className='rounded-2xl absolute flex w-full h-full object-cover' />
                    
                        <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/60 to-blue-500/70'>
                            <h1 className='text-xl font-bold'>
                            Collaborate and Elevate
                            </h1>

                            <p className='text-sm italic flex justify-start text-start'>
                            "Alone we can do so little; together we can do so much."
                            </p>

                            <p className='text-gray-300 text-xs font-extralight'>— Helen Keller</p>
                        </div>            
                    </div>
 
                </div>
                

                <div className='shadow-xl shadow-blue-500 h-[300px]  overflow-hidden flex justify-around w-full rounded-2xl'>
                    <div className='relative flex w-full mx-4'>
                        <img src="/images/music/16.webp" alt="tech 1" className='rounded-2xl absolute flex w-full h-full object-cover' />
                    
                        <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/60 to-blue-500/70'>
                            <h1 className='text-xl font-bold'>
                            Compose Your Future
                            </h1>

                            <p className='text-sm italic flex justify-start text-start'>
                            "The best way to predict the future is to create it."
                            </p>

                            <p className='text-gray-300 text-xs font-extralight'>— Peter Drucker</p>
                        </div>            
                    </div>
 
                </div>
                

                <div className='shadow-xl shadow-blue-500 h-[300px]  overflow-hidden flex justify-around w-full rounded-2xl'>
                    <div className='relative flex w-full mx-4'>
                        <img src="/images/media/8.webp" alt="tech 1" className='rounded-2xl absolute flex w-full h-full object-cover' />
                    
                        <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/60 to-blue-500/70'>
                            <h1 className='text-xl font-bold'>
                            Visualize Your Dreams
                            </h1>

                            <p className='text-sm italic flex justify-start text-start'>
                            "Imagination is everything. It is the preview of life's coming attractions."
                            </p>

                            <p className='text-gray-300 text-xs font-extralight'>— Albert Einstein</p>
                        </div>            
                    </div>
 
                </div>
                

            </Carousel>
        </motion.div>















        {/* ++++++++++++++++++ SMALLER SCREEN VIEW ++++++++++++++++++++ */}
        <motion.div className="lg:hidden md:px-8 flex overflow-hidden rounded-2xl h-full w-full items-center justify-center  my-12">
            <Carousel 
                autoPlay
                infiniteLoop
                emulateTouch
                showStatus= {false}
                showThumbs={false}
                interval={4200}
                transitionTime={600}
                useKeyboardArrows

                >

                    
                <div className='h-[300px] mx-4 relative overflow-hidden flex rounded-2xl'>
                    <img src="/images/tech/2.webp" alt="tech 1" className='rounded-2xl flex w-full h-full object-cover' />
                
                    <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/70 to-blue-500/70'>
                        <h1 className='text-xl font-bold'>
                            Embrace Innovation
                        </h1>

                        <p className='text-sm italic flex justify-start text-start'>
                            "Innovation distinguishes between a leader and a follower."
                        </p>

                        <p className='text-gray-300 text-xs font-extralight'>— Steve Jobs</p>
                    </div>    
                    
                </div>

                <div className='h-[300px] mx-4 relative overflow-hidden flex rounded-2xl'>
                    <img src="/images/music/1.webp" alt="tech 1" className='rounded-2xl flex w-full h-full object-cover' />
                
                    <div className='rounded-2xl text-white absolute mr-4 flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/70 to-blue-500/70'>
                        <h1 className='text-xl font-bold'>
                            Create Your Symphony
                        </h1>

                        <p className='text-sm italic flex justify-start text-start'>
                            "Music can change the world because it can change people."
                        </p>

                        <p className='text-gray-300 text-xs font-extralight'>— Bono</p>
                    </div>    
                    
                </div>

                <div className='h-[300px] mx-4 relative overflow-hidden flex rounded-2xl'>
                    <img src="/images/media/4.webp" alt="tech 1" className='rounded-2xl flex w-full h-full object-cover' />
                
                    <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/70 to-blue-500/70'>
                        <h1 className='text-xl font-bold'>
                            Design Your Vision
                        </h1>

                        <p className='text-sm italic flex justify-start text-start'>
                            "Design is not just what it looks like and feels like. Design is how it works."
                        </p>

                        <p className='text-gray-300 text-xs font-extralight'>— Steve Jobs</p>
                    </div>    
                    
                </div>







                <div className='h-[300px] mx-4 relative overflow-hidden flex rounded-2xl'>
                    <img src="/images/tech/5.webp" alt="tech 1" className='rounded-2xl flex w-full h-full object-cover' />
                    <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/70 to-blue-500/70'>
                        <h1 className='text-xl font-bold'>
                            Push Boundaries
                        </h1>

                        <p className='text-sm italic flex justify-start text-start'>
                            "The only way to discover the limits of the possible is to go beyond them into the impossible."
                        </p>

                        <p className='text-gray-300 text-xs font-extralight'>— Arthur C. Clarke</p>
                    </div>    
                    
                </div>

                <div className='h-[300px] mx-4 relative overflow-hidden flex rounded-2xl'>
                    <img src="/images/music/11.webp" alt="tech 1" className='rounded-2xl flex w-full h-full object-cover' />
                
                    <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/70 to-blue-500/70'>
                        <h1 className='text-xl font-bold'>
                            Harmonize Your Efforts
                        </h1>

                        <p className='text-sm italic flex justify-start text-start'>
                            "Where words fail, music speaks."
                        </p>

                        <p className='text-gray-300 text-xs font-extralight'>— Hans Christian Andersen</p>
                    </div>    
                    
                </div>

                                <div className='h-[300px] mx-4 relative overflow-hidden flex rounded-2xl'>
                    <img src="/images/media/7.webp" alt="tech 1" className='rounded-2xl flex w-full h-full object-cover' />
                
                    <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/70 to-blue-500/70'>
                        <h1 className='text-xl font-bold'>
                            Craft with Creativity
                        </h1>

                        <p className='text-sm italic flex justify-start text-start'>
                            "Creativity is intelligence having fun."
                        </p>

                        <p className='text-gray-300 text-xs font-extralight'>— Albert Einstein</p>
                    </div>    
                    
                </div>







                <div className='h-[300px] mx-4 relative overflow-hidden flex rounded-2xl'>
                    <img src="/images/tech/13.webp" alt="tech 1" className='rounded-2xl flex w-full h-full object-cover' />
                
                    <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/70 to-blue-500/70'>
                        <h1 className='text-xl font-bold'>
                            Collaborate and Elevate
                        </h1>

                        <p className='text-sm italic flex justify-start text-start'>
                            "Alone we can do so little; together we can do so much."
                        </p>

                        <p className='text-gray-300 text-xs font-extralight'>— Helen Keller</p>
                    </div>    
                    
                </div>

                <div className='h-[300px] mx-4 relative overflow-hidden flex rounded-2xl'>
                    <img src="/images/music/16.webp" alt="tech 1" className='rounded-2xl flex w-full h-full object-cover' />
                    <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/70 to-blue-500/70'>
                        <h1 className='text-xl font-bold'>
                            Compose Your Future
                        </h1>

                        <p className='text-sm italic flex justify-start text-start'>
                            "The best way to predict the future is to create it."
                        </p>

                        <p className='text-gray-300 text-xs font-extralight'>— Peter Drucker</p>
                    </div>    
                    
                </div>

                <div className='h-[300px] mx-4 relative overflow-hidden flex rounded-2xl'>
                    <img src="/images/media/8.webp" alt="tech 1" className='rounded-2xl flex w-full h-full object-cover' />
                
                    <div className='rounded-2xl text-white absolute flex flex-col w-full h-full items-start gap-y-2 px-8 pt-[120px] bg-gradient-to-br from-pink-500/70 to-blue-500/70'>
                        <h1 className='text-xl font-bold'>
                            Visualize Your Dreams
                        </h1>

                        <p className='text-sm italic flex justify-start text-start'>
                            "Imagination is everything. It is the preview of life's coming attractions."
                        </p>

                        <p className='text-gray-300 text-xs font-extralight'>— Albert Einstein</p>
                    </div>    
                    
                </div>



            </Carousel>
        </motion.div>
    </>
  )
}


export default CarouselImages