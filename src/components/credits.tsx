import { useState } from 'react';
import { Dialog, DialogBody } from '@material-tailwind/react';

const Credits= () => {
    const [dialog1, setDialog1]= useState(false);
    const [developerDialog, setDeveloperDialog]= useState(false);

  return (
    <div className='pt-10 z-10 flex justify-between w-[70%] mx-auto'>

        <div className='flex w-full'>
            <h1 onClick={() =>setDeveloperDialog(true)} className="z-10 w-full text-start text-sm text-blue-100 underline cursor-pointer">
                DEVELOPER
            </h1>

            <h1 onClick={() =>setDialog1(true)} className="z-10 w-full text-end text-sm text-blue-100 underline cursor-pointer">
                CREDITS
            </h1>
        </div>


                {/* ++++++++++++++ DEVELOPER DIALOG +++++++++++++++++++ */}
        <Dialog
            open= {developerDialog}
            handler={() => {setDeveloperDialog(false)}} 
            className='bg-white/70 h-[600px] overflow-hidden overflow-y-scroll'
            placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}
        >

            <DialogBody className='py-[150px] flex-col w-full items-center justify-center text-blue-800 text-2xl' placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                <h1 className='text-center'>
                    Papic Pipeloluwa
                </h1>

                <div className='flex w-full items-center justify-center pt-2'>
                    <a href='mailto:pipeloluwa14@gmail.com' className='text-sm text-center text-black'>
                        pipeloluwa14@gmail.com
                    </a>
                </div>
               
            </DialogBody>

        </Dialog>





        
        {/* ++++++++++++++ CREDITS DIALOG +++++++++++++++++++ */}
        <Dialog
            open= {dialog1}
            handler={() => {setDialog1(false)}} 
            className='bg-white/70 h-[600px] overflow-hidden overflow-y-scroll'
            placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}
        >

            <DialogBody className=' px-10 flex-col items-center justify-center text-blue-800 text-2xl py-[50px]' placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                <h1 className='text-center'>Model Credits</h1>

                <ul className='pt-4 gap-y-2 flex flex-col items-center justify-center text-black text-sm'>
                    <p>
                        "Canon AT-1 Retro Camera" (https://skfb.ly/6ZwNB) by AleixoAlonso is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                    </p>

                    <p>
                        "Randomness" (https://skfb.ly/TELQ) by 1catalogue is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                    </p>

                    <p>
                        "Studio Monitors" (https://skfb.ly/6S7n9) by Kyler Michaelson is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                    </p>

                    <p>
                        "Scifi Tron Studio | Baked" (https://skfb.ly/oJMSI) by ChristyHsu is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                    </p>

                    <p>
                        "Sharpnels" (https://skfb.ly/oRVBE) by tamminen is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                    </p>

                    <p>
                        "Ferris wheel" (https://skfb.ly/6TuuV) by David Aganov is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                    </p>

                    <p>
                        "Sci - fi computer game ready" (https://skfb.ly/owyGI) by assetfactory is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                    </p>
                   
                </ul>


                <h1 className='pt-20 text-center'>
                    Image Credits
                </h1>

                <div className='pt-4 gap-y-2 flex flex-col items-center justify-center text-black text-sm'>
                    <a href="https://www.flaticon.com/free-icons/branding" title="branding icons" className='underline'>Branding icons created by Flowicon - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/video-editing" title="video editing icons" className='underline'>Video editing icons created by Flat Icons - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/logo-design" title="logo design icons" className='underline'>Logo design icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/promotional-material" title="promotional material icons" className='underline'>Promotional material icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/graphic-design" title="graphic design icons" className='underline'>Graphic design icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/video-editing" title="video editing icons" className='underline'>Video editing icons created by Smashicons - Flaticon</a>

                    <a href="https://www.flaticon.com/free-icons/audio-editing" title="audio editing icons" className='underline'>Audio editing icons created by rukanicon - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/mixing-table" title="mixing table icons" className='underline'>Mixing table icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/megaphone" title="megaphone icons" className='underline'>Megaphone icons created by smashingstocks - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/songwriting" title="songwriting icons" className='underline'>Songwriting icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/rehearse" title="rehearse icons" className='underline'>Rehearse icons created by gravisio - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/microphone" title="microphone icons" className='underline'>Microphone icons created by Dragon Icons - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/piano" title="piano icons" className='underline'>Piano icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/music" title="music icons" className='underline'>Music icons created by Uniconlabs - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/singing" title="singing icons" className='underline'>Singing icons created by muh zakaria - Flaticon</a>

                    <a href="https://www.flaticon.com/free-icons/ui" title="ui icons" className='underline'>Ui icons created by meaicon - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/software-development" title="software development icons" className='underline'>Software development icons created by vectorsmarket15 - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/app" title="app icons" className='underline'>App icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/shop" title="shop icons" className='underline'>Shop icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/development" title="development icons" className='underline'>Development icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/fullstack" title="fullstack icons" className='underline'>Fullstack icons created by Three musketeers - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/ui" title="ui icons" className='underline'>Ui icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/front-end" title="front end icons" className='underline'>Front end icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/software-application" title="software application icons" className='underline'>Software application icons created by Iconjam - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/research" title="research icons" className='underline'>Research icons created by srip - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/backend" title="backend icons" className='underline'>Backend icons created by Flat Icons - Flaticon</a>


                </div>
            </DialogBody>

        </Dialog>

        
    </div>
  )
}

export default Credits;
