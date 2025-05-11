import { LegacyRef, useRef } from "react";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaYoutubeSquare
} from 'react-icons/fa';

import { motion, useInView } from 'framer-motion';
import {cardVariantsUp3, cardVariantsUp4} from "./homeComponents/animations/framerAnimation/variants";
import Credits from "./credits";

const Footer= () =>{
    const divRef:LegacyRef<HTMLDivElement>= useRef(null);
    const divView= useInView(divRef);

    return (
        <motion.div 
        ref={divRef}
        className="w-full mx-auto py-16 flex flex-col items-center justify-center text-gray-300 blue-pink-bg shadow-inner shadow-white/20">
            
            <motion.div 
                viewport={{once: true}}
                initial={"offscreen"}
                animate={divView ? "onscreen" : ""} 
                variants={cardVariantsUp4} 
                className=" flex flex-col w-full mx-4">
                
                <h1 className="z-40 w-full text-center text-md font-bold text-white">VISTAGORA ENTERPRISE STUDIO</h1>

                <motion.div 
                    viewport={{ once: true}}
                    initial={"offscreen"}
                    animate={divView ? "onscreen" : ""} 
                    variants={cardVariantsUp3} 
                    className="flex justify-between my-6 w-[70%] mx-auto">
                    
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/vistagorastudios/">
                        <FaFacebookSquare size={30} />
                    </a>


                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vistagoraenterprise/" className="cursor-pointer z-10">
                        <FaInstagramSquare size={30}/>
                    </a>                   
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://x.com/vistagoraent" className="cursor-pointer z-10">
                        <FaTwitterSquare size={30}/>
                    </a>


                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCCztsBSzNKg9qVEUFWxXL5w" className="cursor-pointer z-10">
                        <FaYoutubeSquare size={30}/>
                    </a>
                </motion.div>

            </motion.div>

            <Credits />


        </motion.div>
    );
}

export default Footer;