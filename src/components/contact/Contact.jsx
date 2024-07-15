import  { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import "./contact.scss"
import { motion ,useInView} from 'framer-motion'

const variants={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1
        }
    }
}

const Contact = () => {

    const ref = useRef();
    const formRef = useRef();
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false)
    const isInView = useInView(ref,{margin:"-100px"});

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_m0xf54q', 'template_p0292bf', formRef.current, {
            publicKey: '6QvtToVvN3RD4WHQS',
          })
          .then(
            () => {
             setSuccess(true);
            },
            (error) => {
              setError(true,error);
            },
          );
      };


  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView={"animate"}> 
<motion.div className="textContainer" variants={variants}>
    <motion.h1 variants={variants}>Let's work together</motion.h1>

    <motion.div className="item" variants={variants}>
        <h2>Mail</h2>
        <span>aniketchandivkar11@gmail.com</span>
    </motion.div>

    <motion.div className="item" variants={variants}>
        <h2>Address</h2>
        <span>Nadiad,Gujarat</span>
    </motion.div>

    <motion.div className="item" variants={variants}>
        <h2>Phone</h2>
        <span>+91 7016618382</span>
    </motion.div>
</motion.div>
<motion.div className="formContainer" variants={variants}>
    <motion.div className="phoneSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3,duration:1}} >
    
    <svg width="450px" height="450px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48">
    <motion.path strokeWidth={0.2} fill="none"  initial={{pathLength:0}} animate={isInView && {pathLength:1}} transition={{duration:3}}  d="M12,40V10h20c2.2,0,4,1.8,4,4v26c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"/>
    <path fill="#4FC3F7" d="M32,13H16c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v-8C33,13.4,32.6,13,32,13z"/>
    <path fill="#B3E5FC" d="M19,30h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C20,29.6,19.6,30,19,30z"/>
    <path fill="#B3E5FC" d="M25,30h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C26,29.6,25.6,30,25,30z"/>
    <path fill="#B3E5FC" d="M31,30h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C32,29.6,31.6,30,31,30z"/>
    <path fill="#B3E5FC" d="M19,35h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C20,34.6,19.6,35,19,35z"/>
    <path fill="#B3E5FC" d="M25,35h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C26,34.6,25.6,35,25,35z"/>
    <path fill="#B3E5FC" d="M31,35h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C32,34.6,31.6,35,31,35z"/>
    <path fill="#B3E5FC" d="M19,40h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C20,39.6,19.6,40,19,40z"/>
    <path fill="#B3E5FC" d="M25,40h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C26,39.6,25.6,40,25,40z"/>
    <path fill="#B3E5FC" d="M31,40h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C32,39.6,31.6,40,31,40z"/>
    <path fill="#37474F" d="M16,10h-4V4c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2V10z"/>
</svg>

    </motion.div>
    <motion.form  ref={formRef} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:4,duration:1}} onSubmit={sendEmail}>
        <input type="text" placeholder='Name'  name='name'/>
        <input type="email" placeholder='Email' name='email' />
        <textarea rows={8} placeholder='Message' name='message'/>
        <button>Submit</button>
        {error && "Error"}
        {success && "Success"}
    </motion.form>
</motion.div>

    </motion.div>
  )
}

export default Contact