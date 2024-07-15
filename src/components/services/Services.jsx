import {useRef} from "react";
import "./services.scss";
import { motion,useInView } from "framer-motion";

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },
    
}

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref,{margin:'-100px'})

  return (
   
    <motion.div className="services" variants={variants}  initial="initial" 
    // whileInView="animate"
    ref={ref}
    animate={"animate"}
    // isInView && 
    > 
   
      <motion.div className="textContainer" variants={variants}>
        
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
        
      </motion.div>
    
      <motion.div className="titleContainer" variants={variants} >
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            {" "}
            <motion.b whileHover={{color:"orange"}} >Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
        
          <h1>
            {" "}
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>What I Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box"  whileHover={{ background:"lightgray",color:"black"}}>
          <h2> E-commerce Solutions</h2>
          <p>
          I optimize your e-commerce site for speed, ensuring quick load times to improve user experience and boost search engine rankings. Ensuring that your e-commerce platform looks and works great on all devices, from desktops to smartphones.
         
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div className="box" whileHover={{ background:"lightgray",color:"black"}}>
          <h2>Scalable Web Applications</h2>
          <p>
          Leveraging the full power of the MERN stack, I develop scalable web applications that grow with your business.I ensure your applications can handle increasing traffic and complex functionality without compromising on speed or reliability.
          
         
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div className="box" whileHover={{ background:"lightgray",color:"black"}}>
          <h2>SSR for SEO Optimization</h2>
          <p>
          Improve your website's SEO and performance with Server-Side Rendering. By utilizing SSR with React and Node.js, I can ensure faster initial load times and better search engine visibility.
       
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black" }} >
          <h2>Custom API Development</h2>
          <p>
          Create robust and secure APIs tailored to your business needs. With my expertise in Express and Node.js, I can develop custom APIs that facilitate seamless communication between your web applications and other services.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
      
    </motion.div>
    
  );
};

export default Services;
