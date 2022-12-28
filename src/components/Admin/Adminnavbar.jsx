

import {Box,IconButton,Typography,InputBase,useMediaQuery,useTheme} from "@mui/material"
import { useNavigate } from "react-router-dom";

const Adminnavbar = () => { 

    const isDesktop = useMediaQuery("(min-width: 1200px)");

  
  const navigate = useNavigate();
    
    return (
        <Box>
        {/* customised navbar for admin */}
         {isDesktop && (
         <Box borderBottomLeftRadius="1rem" borderBottomRightRadius= "1rem"  display="flex" justifyContent="space-between" width="auto" height="45px" alignItems="center" paddingTop=".25rem" backgroundColor="rgb(25,150,100,0.8)" borderBottom="1px" borderColor="white">
           
           
           
         
        <Box display="flex" justifyContent="flex-start">


          <Box  sx={{display: 'flex', alignContent: 'center'}}>
           <Box width="30px" height="30px">
                <img
                style={{ objectFit: "cover", borderRadius: "50%" }}
                width="30px"
                height="30px"
                alt="logo"
                src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672118662/gamerimg/logy_ulyu0t.png"
                />
           </Box>
          </Box>

            <Box  onClick={() => {navigate("/");}} sx={{display: 'flex', textAlign: 'center'}}>
            <Typography  fontWeight="bold" fontSize="15px" color="whitesmoke" paddingRight="2rem" paddingLeft=".25rem" sx={{"&:hover": {color: "white", cursor: "pointer",},}}>
                chiper electronics

            </Typography>
            </Box>


          
        </Box>
        

        

          <Box display="flex" textAlign='center' alignItems='center'>
            <Typography fontSize="15px" color="white" paddingRight="2rem">
                 Hi Admin

            </Typography>
          </Box>

    </Box>

)}

{/* for mobile view below */}

     {!isDesktop && (
         
         <Box borderBottomLeftRadius="1rem" borderBottomRightRadius= "1rem" display="flex" justifyContent="space-between" width="auto" height="auto" alignItems="center" paddingTop=".25rem" backgroundColor="rgb(25,150,100,0.8)">
           
           
           
         
         <Box display="flex" justifyContent="flex-start">
 
 
           <Box  sx={{display: 'flex', alignContent: 'center'}}>
            <Box width="30px" height="30px">
                 <img
                 style={{ objectFit: "cover", borderRadius: "50%" }}
                 width="30px"
                 height="30px"
                 alt="logo"
                 src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672118662/gamerimg/logy_ulyu0t.png"
                 />
            </Box>
           </Box>
 
             <Box  onClick={() => {navigate("/");}} sx={{display: 'flex', textAlign: 'center'}}>
             <Typography  display="inline" fontSize="15px" color="white" paddingRight="2rem" paddingLeft=".25rem" sx={{"&:hover": {color: "red",cursor: "pointer",},}}>
                 chiper electronics
 
             </Typography>
             </Box>
 
 
             <Box display="flex" textAlign='center' alignItems='center'>
            <Typography fontSize="15px" color="white" paddingRight="2rem">
                 Hi Admin

            </Typography>
          </Box>

         </Box>

        

         </Box>

     )}

     


            


       

        </Box>

    );

};

export default Adminnavbar;