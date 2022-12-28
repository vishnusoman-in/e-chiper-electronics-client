import {useState} from 'react'
import {Logout,NotificationsNone,Payments,ShoppingBag,Home,AccountCircle,Search,ShoppingCart,Message,DarkMode,LightMode,Notifications,Help,Menu,Close,Paid,ArrowDropDownCircleTwoTone} from "@mui/icons-material";
import {Box,IconButton,Typography,InputBase,useMediaQuery,Divider} from "@mui/material"

import { useSelector, useDispatch } from "react-redux";

import {setLogout, setuserloggedout} from "state";

import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom";

const Menubox = ({ size = "30px" }) => {

  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const menusel = useSelector((state) => state.menuon); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (

   <Box>
    { menusel && (
    
         <motion.Box className="menubar" animate={{x: 0}} initial={{x:-300}} transition={{duration: 0.5}}>
             <Box display="flex"  marginTop="1rem" marginBottom="1rem">
             <Box width="30px" height="30px">
                <img
                style={{ objectFit: "cover", borderRadius: "50%" }}
                width="30px"
                height="30px"
                alt="logo"
                src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672118662/gamerimg/logy_ulyu0t.png"
                />
              </Box>
              <Typography color="white">chiper electronics</Typography>
              </Box>

           <Divider color="rgb(50,50,50,0.8)" marginTop="1rem" />

            <Box onClick={() => { navigate("/account")}} display="flex" width="250px" backgroundColor="rgb(50,50,50,0.5)"  height="40px" marginLeft="1rem" marginTop="3rem" borderRadius="7px">
             <Box paddingTop="10px" paddingLeft="5px" alignContent="center">
            <AccountCircle  />
            </Box>
            <Typography paddingTop="10px" paddingLeft="10px" color="white">Account</Typography>
            </Box>

            <Box onClick={() => { navigate("/")}} display="flex" width="250px" backgroundColor="rgb(50,50,50,0.5)"  height="40px" marginLeft="1rem" marginTop="1rem" borderRadius="7px">
             <Box paddingTop="10px" paddingLeft="5px" alignContent="center">
            <Home  />
            </Box>
            <Typography paddingTop="10px" paddingLeft="10px" color="white">Home</Typography>
            </Box>

            <Box onClick={() => { navigate("/orders")}} display="flex" width="250px" backgroundColor="rgb(50,50,50,0.5)"  height="40px" marginLeft="1rem" marginTop="1rem" borderRadius="7px">
             <Box paddingTop="10px" paddingLeft="5px" alignContent="center">
            <ShoppingBag  />
            </Box>
            <Typography paddingTop="10px" paddingLeft="10px" color="white">Orders</Typography>
            </Box>

            <Box onClick={() => { navigate("/payment")}} display="flex" width="250px" backgroundColor="rgb(50,50,50,0.5)" marginBottom="3rem" height="40px" marginLeft="1rem" marginTop="1rem" borderRadius="7px">
             <Box paddingTop="10px" paddingLeft="5px" alignContent="center">
            <Payments  />
            </Box>
            <Typography paddingTop="10px" paddingLeft="10px" color="white">Payments</Typography>
            </Box>

            

            

            <Divider backgroundColor="white" marginTop="1rem" />


            <Box  onClick={ () => {dispatch(setLogout()); dispatch(setuserloggedout());} } display="flex" width="250px" backgroundColor="rgb(50,50,50,0.5)"  height="40px" marginLeft="1rem" marginTop="3rem" borderRadius="7px">
             <Box   paddingTop="10px" paddingLeft="5px" alignContent="center">
            <Logout  />
            </Box>
            <Typography paddingTop="10px" paddingLeft="10px" color="white">Logout</Typography>
            </Box>

            

            

            


            
          </motion.Box>

          )}
   </Box>

  )

}

export default Menubox; 