import { useState, useEffect } from "react";

import {Box,IconButton,Typography,InputBase,useMediaQuery,} from "@mui/material"
import {KeyboardDoubleArrowLeft,KeyboardDoubleArrowRight} from '@mui/icons-material';

import {motion} from "framer-motion"

import { useNavigate } from "react-router-dom";


const Topbanner = ({ size = "50px" }) => {

  const navigate = useNavigate();

    const isDesktop = useMediaQuery("(min-width: 1400px)");
    const [Bannerselect, setBannerselect] = useState(false);
    const [Rotate, setRotate] = useState(false)
    const [X1, setX1] = useState(Math.random() * 0)
    const [Y1, setY1] = useState(Math.random() * 0)
    const [X2, setX2] = useState(Math.random() * 0)
    const [Y2, setY2] = useState(Math.random() * 0)
    const [X3, setX3] = useState(Math.random() * 0)
    const [Y3, setY3] = useState(Math.random() * 0)
    console.log(Rotate)

const check = () =>
{
  const interval = setInterval(() => {
    setX1(Math.floor(Math.random() *  400)); 
    setY1(Math.floor(Math.random() * 400)) ;
    setX2(Math.floor(Math.random() *  1000)); 
    setY2(Math.floor(Math.random() * 1000)) ;
    setX3(Math.floor(Math.random() *  800)); 
    setY3(Math.floor(Math.random() * 800)) ;
  }, 2000)

  return() => {
    clearInterval(interval)
  }

}

    
    return (

      <Box>

          
           {isDesktop && (   
         

           <Box className="topban-head" style={{display: 'flex', justifyContent: 'center',}} marginBottom="2rem">
          
            <Box width="1500px" height="300px">
            

             <Box className="topban-head-la" >
             
             <KeyboardDoubleArrowLeft className='bask' onClick={()=> {setBannerselect(!Bannerselect)}} style={{color:'rgb(25,255,255'}} />
             
             </Box>

             <Box  className="topban-head-ra" >
             
             <KeyboardDoubleArrowRight onClick={()=> {setBannerselect(!Bannerselect)}} style={{color:'rgb(25,255,255'}} />
             
             </Box>
             
             <Box  className="basketdrop" onClick={()=> {
              setRotate(!Rotate);
              check();
              setX1(Math.floor(Math.random() *  500));
              setY1(Math.floor(Math.random() * 500)) ;
              setX2(Math.floor(Math.random() *  -800));
              setY2(Math.floor(Math.random() * 800)) ;
              setX3(Math.floor(Math.random() *  -600));
              setY3(Math.floor(Math.random() * 600)) ;
             }}
               >
             <motion.img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1671728087/picture/baskg_wmpis4.png" animate={{rotate: Rotate ? [0,180,0] : 0}}  transition={{duration: 1}} ></motion.img>
             </Box>

             
          

             <Box  className="floatimg-res"  >
             <motion.img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1671728104/picture/resistor_mlyizl.png" animate={{x: X1 ,y: Y1, rotate: Rotate ? 360 : 0}} transition={{ease:"linear", duration: 6, repeat: Infinity}}
                style={{ objectFit: "cover", borderRadius: "50%" }}
                width="30px"
                height="30px"
                alt="items"
              ></motion.img>
             </Box>

             <Box className="floatimg-cap" onClick={()=> {}}   >
             <motion.img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1671728100/picture/capacitor_mb8i7f.png" animate={{x: X2 ,y: Y2,rotate: Rotate ? 360 : 0}} transition={{ease:"linear", duration: 6, repeat: Infinity}}
                style={{ objectFit: "cover", borderRadius: "50%" }}
                width="30px"
                height="30px"
                alt="items"
              ></motion.img>
             </Box>

             <Box  className="floatimg-tra" onClick={()=> {}} >
             <motion.img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1671728110/picture/transistor_lkaozp.png" animate={{x: X3 ,y: Y3,rotate: Rotate ? 360 : 0}} transition={{ease:"linear", duration: 6, repeat: Infinity}} 
                style={{ objectFit: "cover", borderRadius: "50%" }}
                width="30px"
                height="30px"
                alt="items"
              ></motion.img>
             </Box>




             
             <motion.img className="dropimg-rom" src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1671728092/picture/rom_bzh19j.png"  animate={{x: 28 ,y: 665,rotate: 360}} transition={{ease:"linear", duration: 6,}}
                
                width="30px"
                height="30px"
                alt="items"
              ></motion.img>

             <motion.img className="dropimg-res" src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1671728104/picture/resistor_mlyizl.png"  animate={{x: 13 ,y: 865,rotate: 360}} transition={{ease:"linear", duration: 6,}}
                
                width="30px"
                height="30px"
                alt="items"
              ></motion.img>

             <motion.img className="dropimg-cap" src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1671728100/picture/capacitor_mb8i7f.png"  animate={{x: 43 ,y: 865,rotate: 360}} transition={{ease:"linear", duration: 6,}}
                
                width="30px"
                height="30px"
                alt="items"
              ></motion.img>

             <motion.img className="dropimg-tra" src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1671728110/picture/transistor_lkaozp.png"  animate={{x: 28 ,y: 1065,rotate: 360}} transition={{ease:"linear", duration: 6,}}
                
                width="30px"
                height="30px"
                alt="items"
              ></motion.img>



             


             <Box className="dropbase-rom"  onClick={()=> {navigate("/outofstock")}}  >
             <Typography  className="dropbase-rom-text"
                
                width="30px"
                height="30px"
                
              >Microcontrollers</Typography>
             </Box>

             <Box className="dropbase-res"  onClick={()=> {navigate("/outofstock")}}   >
             <Typography  className="dropbase-res-text"
                
                width="30px"
                height="30px"
                
              >Passives</Typography>
             </Box>

             <Box className="dropbase-tra"  onClick={()=> {navigate("/outofstock")}}   >
             <Typography  className="dropbase-tra-text"
                
                width="30px"
                height="30px"
                
              >Transistors</Typography>
             </Box>





          {Bannerselect && (
             <img
                 style={{ objectFit: "cover", borderRadius: "0%" }}
                 width="1500px"
                 height="300px"
                 alt="banner"
                 src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1671728150/picture/rasp1_xq6gef.jpg"
                 />
          )}
          {!Bannerselect && (      
             <img
                 style={{ objectFit: "cover", borderRadius: "0%" }}
                 width="1500px"
                 height="300px"
                 alt="banner"
                 src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1671728231/picture/ardu1_w4wkfm.jpg"
                 />
          )}    
            
            </Box>

            

          

           </Box>
          
          )}
          

      </Box>
  );
  
};

export default Topbanner;