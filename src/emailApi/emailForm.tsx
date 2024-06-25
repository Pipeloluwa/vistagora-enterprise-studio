
import React, { LegacyRef, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Dialog, DialogBody, Spinner } from '@material-tailwind/react';
import { MdCancel, MdOutlineDone } from 'react-icons/md';

export const EmailFormApi = () => {
    const EMAIL_SERVICE_ID:string= import.meta.env.VITE_EMAIL_SERVICE_ID;
    const EMAIL_TEMPLATE_ID:string= import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const EMAIL_PUBLIC_KEY:string= import.meta.env.VITE_EMAIL_PUBLIC_KEY;


  const form:LegacyRef<HTMLFormElement> = useRef(null);
  const messageRef:LegacyRef<HTMLTextAreaElement> = useRef(null);
  const nameRef:LegacyRef<HTMLInputElement>= useRef(null);
  const emailRef:LegacyRef<HTMLInputElement>= useRef(null);
  const [feedBack, setFeedBack]= useState<string>("");

  const [process1, setProcess1]= useState(false);
  const [dialog1, setDialog1]= useState("");





  const sendEmail:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (nameRef.current){
    
        if (nameRef.current.value.trim() !== "") {
            setFeedBack("");
        } else {
        return setFeedBack("Please enter a name");
        }
    }

    if (emailRef.current){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (emailRegex.test(emailRef.current.value)) {
        setFeedBack(""); // Email is valid
        } else {
        return setFeedBack("Please enter a valid email address.");
        }
    }

    if (messageRef.current){
    
        if (messageRef.current.value.trim() !== "") {
            setFeedBack(""); 
        } else {
        return setFeedBack("Please enter a message");
        }
    }





    if (form.current && messageRef.current && nameRef.current && emailRef.current){
        setProcess1(true);
        setFeedBack("");

        const keepMessage= messageRef.current.value;
        messageRef.current.value= `NAME: ${nameRef.current.value} \n EMAIL: ${emailRef.current.value} \n \n MESSAGE: ${messageRef.current.value}`;
                

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


        <div className='flex flex-col justify-between h-full py-6 gap-y-2 text-black font-medium'>
            <div className= "flex w-full h-[1px]"/>


            <form ref={form} onSubmit={sendEmail} className="flex flex-col h-full justify-between pt-4 gap-y-3">

                <input name='subject' value={"CONTACT US"} className='hidden'/>
    
                <input ref= {nameRef} type="text" name="from_name" placeholder='Name' className='p-4 h-[60px] outline-none focus:ring-2 focus:ring-inset focus:ring-pink-400  rounded-xl placeholder:text-black shadow-sm shadow-gray-500'/>

                <input ref={emailRef} type="email" name="from_email" placeholder='Email' className='p-4 h-[60px] outline-none focus:ring-2 focus:ring-inset focus:ring-pink-400 rounded-xl placeholder:text-black shadow-sm shadow-gray-500' />
                
                <textarea ref={messageRef} name="message" placeholder='Message' className='p-4 h-[200px] outline-none focus:ring-2 focus:ring-inset focus:ring-pink-400 rounded-xl placeholder:text-black shadow-sm shadow-gray-500' />


                <div className='h-5 flex items-center justify-center font-semibold text-red-500'>
                    {feedBack}
                </div>

                <Button type='submit' className='flex items-center justify-center text-lg blue-pink h-[60px] mb-4' placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                    {
                        process1 
                        
                        ? 
                        <div className='flex w-full items-center justify-center'>
                            <Spinner color='blue' className='size-[45px]' onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}/>     
                        </div>


                        : "Send"
                    }
                    
                </Button>
            </form>

            <div className= "flex w-full h-[1px] bg-blue-500/40"/>
            

            <Dialog
                open= {dialog1 !== ""}
                handler={() => {setDialog1("")}} 
                className='bg-white/70'
                placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}
            >

                <DialogBody className='flex items-center justify-center  text-2xl py-[130px]' placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
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

    </div>
    
    
    
    
  );
};