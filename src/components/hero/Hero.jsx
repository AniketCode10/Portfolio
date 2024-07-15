import React, { useRef } from "react";
import "./hero.scss";
import { motion } from "framer-motion";


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
};
const sliderVariants = {
  initial: {
    x:0,
    
  },
  animate: {
    x: "-220%",
    transition: {
      repeat:Infinity,
      repeatType:"mirror",
      duration:20,
    },
  },

};



const Hero = () => {


  const projectSection = useRef('portfolio');
  const contactSecion = useRef("#Contact");
  


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth',block: 'start'  });
  };
  // const projectfunc = ()=>{
  //  navigate("#Portfolio")
  // }
  return (
    <motion.div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>ANIKET CHANDIVKAR</motion.h2>
          <motion.h1 variants={textVariants}>Mern Developer</motion.h1>
          <motion.div className="buttons">
        
        
        <motion.button variants={textVariants} className="contactbtn" 
          whileHover={{ scale: 1.1 }}
          // onClick={() => scrollToSection(projectSection)}
        >
          Welcome to my PortFolio 
            </motion.button>

       
         {/* <motion.button  className="contactbtn" variants={textVariants}  whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection(contactSecion)}>Contact Me</motion.button>  */}
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Creating Fully Functional Websites
      </motion.div>
      <motion.div className="imageContainer">
        <img src="/profile.jpg" alt="" width={600} />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
