import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
        {/* sidebar */}
        <div className='wrapper'>

<motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>Aniket Dev</motion.span>
<div className='social'>
  <a href="https://www.linkedin.com/in/aniket-chandivkar-7611992b4/" target="blank">
  <a className="cv" target="blank" href="https://drive.google.com/file/d/1o_5So8yB-hF_z9kxGxB3qoEXV-cLsom5/view?usp=sharing" download="Your_Name_CV.pdf">Download CV</a> <img src="/linkedin.png" alt="" /></a>
    <a href="https://www.instagram.com/_aniket10__/" target="blank"> <img src="/instagram.png" alt="" /></a>
    <a href="https://github.com/AniketCode10" target="blank"> <img src="/social.png" alt="" /></a>
   </div>
  </div>
    </div>
  )
}

export default Navbar