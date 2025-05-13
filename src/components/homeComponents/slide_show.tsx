import { AnimatePresence, motion } from 'framer-motion';



const SlideShow = () => {
  return (
    <>
      
        <AnimatePresence>
            <div key={0} className='pt-[50px] relative w-full min-w-[1600px] flex justify-between items-center md:text-xl italic text-white '>
                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:54, delay:-48, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[50px] flex justify-center'>
                        WEBSITE
                    </h1>
                </motion.div>

                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:54, delay:-42, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[50px] flex justify-center'>
                        MOBILE
                    </h1>
                </motion.div>

                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:54, delay:-36, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[50px] flex justify-center'>
                        DATA
                    </h1>
                </motion.div>

                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:54, delay:-30, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[50px] flex justify-center'>
                        RECORDING
                    </h1>
                </motion.div>

                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:54, delay:-24, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[50px] flex justify-center'>
                        REHEARSAL
                    </h1>
                </motion.div>

                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:54, delay:-12, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[230px] flex justify-center'>
                        MUSICAL INSTRUMENT
                    </h1>
                </motion.div>

                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:54, delay:-6, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[50px] flex justify-center'>
                        GRAPHICS
                    </h1>
                </motion.div>

                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:54, delay:0, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[50px] flex justify-center'>
                        VIDEO
                    </h1>
                </motion.div>

            </div>




            <div key={1} className='py-[50px]  w-full min-w-[1600px] opacity-10 relative flex items-center text-xl italic text-white font-bold'>
                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:54, delay:-48, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[50px] flex justify-center'>
                        VIDEO
                    </h1>
                </motion.div>

                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:54, delay:-42, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[50px] flex justify-center'>
                        GRAPHICS
                    </h1>
                </motion.div>

                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:54, delay:-36, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[230px] flex justify-center'>
                        MUSICAL INSTRUMENT
                    </h1>
                </motion.div>

                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:54, delay:-24, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[50px] flex justify-center'>
                        REHEARSAL
                    </h1>
                </motion.div>

                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:54, delay:-18, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[50px] flex justify-center'>
                        RECORDING
                    </h1>
                </motion.div>

                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:54, delay:-12, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[50px] flex justify-center'>
                        DATA
                    </h1>
                </motion.div>

                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:54, delay:-6, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[50px] flex justify-center'>
                        MOBILE
                    </h1>
                </motion.div>

                <motion.div className='animate-pulse flex items-center w-full absolute left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:54, delay:0, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                    <h1 className='w-[50px] flex justify-center'>
                        WEBSITE
                    </h1>
                </motion.div>
            </div>
        </AnimatePresence>

        
    </>
  )
}

export default SlideShow