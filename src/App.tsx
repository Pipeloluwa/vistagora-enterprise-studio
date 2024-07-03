import './index.css'
import ClashDisplay_Regular_Woff2 from './assets/fonts/clash/fonts/ClashDisplay-Regular.woff2';
import ClashDisplay_Regular_Woff from './assets/fonts/clash/fonts/ClashDisplay-Regular.woff';
import ClashDisplay_Regular_TTF from './assets/fonts/clash/fonts/ClashDisplay-Regular.ttf';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Tech from './pages/tech';
import Music from './pages/music';
import Media from './pages/media';


import { LegacyRef, useEffect, useRef } from 'react'
import { setNavBg } from './state_management/reducers/nav_bg_state';
import { motion } from 'framer-motion' 
import { Canvas } from '@react-three/fiber';
import PlaneBackground from './components/homeComponents/animations/plane_background';
import MouseRipple from './components/homeComponents/animations/mouse_ripple';
import ScrollToTop from './scrollToTop';
import Contact from './pages/contact';
import { useDispatch } from 'react-redux';
import Error404 from './pages/Error404';






function App() {

  const dispatch= useDispatch();
  const canvasRef31:LegacyRef<HTMLCanvasElement> | null = useRef(null);
  
  useEffect(() => {

    const handleScroll= () => {
        dispatch(setNavBg());
    }
    


      window.addEventListener('scroll', handleScroll);  
      
  }, []);



  return (
    <div className='relative whole_background '>

      <style>
        {`
          @font-face {
            font-family: 'ClashDisplay-Regular';
            src: url(${ClashDisplay_Regular_Woff2}) format('woff2'),
                url(${ClashDisplay_Regular_Woff}) format('woff2'),
                url(${ClashDisplay_Regular_TTF}) format('woff2');
            font-weight: 400;
            font-display: swap;
            font-style: normal;
          }

          body {
            font-family: 'ClashDisplay-Regular', sans-serif;
          }
      `}
      </style>

      {/* +++++++++++++++ PLANE BACKGROUND ++++++++++++++++++ */}
      <motion.div 
      initial= {{visibility: 'hidden'}}
      whileInView={{visibility: 'visible'}} 
      className='md:flex hidden fixed left-0 right-0 top-0 bottom-0  h-screen'>
      
          <Canvas camera={{fov:5, position:[0, 0, 0]}} ref={canvasRef31} className='fixed h-full w-full'>
              <PlaneBackground props={canvasRef31}/>
          </Canvas>           
      </motion.div>


      <BrowserRouter>
        <Navbar />

        <ScrollToTop />


        <Routes>

          <Route path='*' element= {<Error404 />} />

          <Route index element= {<Home />} />

          <Route path='about' element= {<About />} />

          <Route path='tech' element= {<Tech />} />

          <Route path='music' element= {<Music />} />

          <Route path='media' element= {<Media />} />

          <Route path='contact' element= {<Contact />} />

        </Routes>


      </BrowserRouter> 





      {/* ++++++++++++++++++++ MOUSE RIPPLE +++++++++++++++++++ */}
      <motion.div 
      initial= {{visibility: 'hidden'}}
      whileInView={{visibility: 'visible'}} 
      className='pointer-events-none md:flex hidden fixed left-0 right-0 top-0 bottom-0 h-screen'>
      
          <Canvas camera={{fov:5, position:[0, 0, 0]}}  className='h-full w-full'>
              <MouseRipple />
          </Canvas>           
      </motion.div>

    </div>

  )
}

export default App
