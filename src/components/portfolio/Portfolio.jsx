import React, { useEffect, useRef } from 'react'
import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion";

const items = [
    {
        id:1,
        title:"E-Commerce Website",
        video:"/shopverse.mp4",
        desc:" Designed and implemented responsive front-end interfaces using Tailwind CSS and Material-U components UserAuthentication: Implemented user authentication and authorization using Firebase Authentication with Admin Dashboard to perform CRUD operations on products Technologies Used: react.js, Firebase ,Redux Tookit, Tailwind CSS, Material-UI, Razorpay",
        link:'https://main--silly-rabanadas-ec2185.netlify.app/'
    },
    {
      id:2,
      title:"Flipkart Clone",
      video:"/flipkartVideoWithSound.mp4",
      desc:" This is Flipkart Clone E-Commerce project developed using the MERN Stack.Features Added like Payment-Integration using Razorpay,Add to Cart Functionality. Designing using MaterialUI and State Handling using Redux-Toolkit following MVC Architecture",
      link:'https://flipkart-frontend-pzoh.onrender.com/'
  },


]

const Single = ({item}) =>{





  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target:ref,
    // offset:["start start","end start"]
  })
  const y = useTransform(scrollYProgress,[0,1],[-200,200]);

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    });

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  
  return (
    <section >
      <motion.div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
          <video   ref={videoRef} width="750" height="581" controls >
    <source src={item.video} type="video/mp4" />
  
</video>
            
      {/* <motion.video src={item.video} alt="no-video"  autoPlay loop /> */}
      </div>
      <motion.div className="textContainer"  style={{y}}>
        <h2 >{item.title}</h2>
        <p>{item.desc}</p>
      <a href={item.link} target='blank'> <button style={{fontSize:18,fontWeight:600 }}>Live Link</button> </a>
      </motion.div>
      </div>
      </motion.div>
    </section>
  )
}

function Portfolio() {

  const ref  = useRef();
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["end start","start start"]
  });

  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  })

  return (
    <div  id='Projects' className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>

  )
}

export default Portfolio