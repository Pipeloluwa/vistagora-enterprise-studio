import { motion } from 'framer-motion';
import { cardVariantsBottom } from './homeComponents/animations/framerAnimation/variants';
import emailjs from '@emailjs/browser';
import { LegacyRef, useRef, useState } from 'react';
import { Dialog, DialogBody, Spinner } from '@material-tailwind/react';
import { MdCancel, MdOutlineDone } from 'react-icons/md';

const NewsLetter = () => {
    const EMAIL_SERVICE_ID:string= import.meta.env.VITE_EMAIL_SERVICE_ID;
    const EMAIL_TEMPLATE_ID:string= import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const EMAIL_PUBLIC_KEY:string= import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    const form:LegacyRef<HTMLFormElement> = useRef(null);
    const messageRef:LegacyRef<HTMLInputElement>= useRef(null);
    const [feedBack, setFeedBack]= useState<string>("");
    

    const [process1, setProcess1]= useState(false);
    const [dialog1, setDialog1]= useState("");



    const sendEmail:React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    
        if (messageRef.current){
        
            if (messageRef.current.value.trim() !== "") {
                setFeedBack(""); 
            } else {
            return setFeedBack("Please enter an email address");
            }
        }
    
    
    
        if (form.current && messageRef.current){
            setFeedBack("");
            setProcess1(true);
    
            const keepMessage= messageRef.current.value;
            messageRef.current.value= `EMAIL: ${messageRef.current.value}`;
    
            emailjs
            .sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, form.current, {
                publicKey: EMAIL_PUBLIC_KEY,
            })
            .then(
                () => {
                setProcess1(false);
                setDialog1("Message Sent Successfully");
                console.log('SUCCESS!');
                },
                (error) => {
                setProcess1(false);
                setDialog1("Sorry, could not send information, something went wrong");
                console.log('FAILED...', error);
                },
            ).catch((error) => {
                setProcess1(false);
                setDialog1("Sorry, could not send information, something went wrong");
                console.log(error);
            })
    
            messageRef.current.value= keepMessage;
        }
    
      };

    
  return (
    <motion.div
    viewport={{amount:0.2, once: true}}
    initial={"offscreen"}
    whileInView={"onscreen"} 
    variants={cardVariantsBottom}  
    className="md:mx-12 text-white py-16 px-4 bg-gradient-to-tr from-[#7696ca]  to-[#5f1b5f] mx-4 rounded-2xl">
        
        <div className="mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">Don’t Miss Out !</h1>
                <p className="py-4 mb-3">Sign up to our newsletter and stay up to date.</p>
            </div>


            <div className="mt-[-0.9rem] my-4 mr-4 flex flex-col items-center ">
                <form ref={form} onSubmit={sendEmail}className='z-10 flex flex-col sm:flex-row sm:items-start items-center justify-between w-full'>
                        
                    <input name='subject' defaultValue={"WEBSITE NEWSLETTER EMAIL"} className='hidden'/>

                    <input ref={messageRef} type="email" name='message' className="h-[60px] p-3 flex w-full rounded-lg text-black outline-none focus:ring-2 focus:ring-inset focus:ring-pink-400"  placeholder="Your Email Address"/>

                    <div className='lg:hidden py-4 h-5 flex sm:text-start items-center sm:justify-start justify-center font-semibold text-red-100'>
                        {feedBack}
                    </div>
                        
                    

                    <button type='submit' className="big-button blue-pink mt-7 sm:mt-0 sm:ml-4">
                        {
                            process1 
                            
                            ? 
                            <div className='flex w-full items-center justify-center'>
                                <Spinner color='blue' className='size-[45px]' onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}/>     
                            </div>


                            : "Submit"
                        }
                    </button>
                </form>


                <div className='lg:flex hidden py-4 h-5 font-semibold text-red-100'>
                    {feedBack}
                </div>


                
            </div>

            
        </div>
    
    
        <Dialog
            open= {dialog1 !== ""}
            handler={() => {setDialog1("")}} 
            className='bg-white/70'
            placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}
        >

            <DialogBody className='flex items-center justify-center text-blue-800 text-2xl py-[130px]' placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                <div className='flex flex-col items-center justify-center'>
                    {
                        dialog1 === "Sorry, could not send information, something went wrong"
                        ? <MdCancel className='size-[100px] text-red-500'/>

                        : <MdOutlineDone className='size-[100px] text-blue-800'/>
                    }
                    

                    <h1 className={`${dialog1 === "Sorry, could not send information, something went wrong" ? "text-red-500" : "text-blue-800"} text-center`}>
                        {dialog1}
                    </h1>

                </div>
            </DialogBody>

        </Dialog>

    </motion.div>
  )
}

export default NewsLetter