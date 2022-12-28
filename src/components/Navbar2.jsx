import {useState} from 'react'

import {Menu,ArrowDropDownCircleTwoTone} from "@mui/icons-material";
import {Box,IconButton,Typography,InputBase,useMediaQuery} from "@mui/material"

import { useDispatch } from "react-redux";
import { setMenuon,setuserloggedout, setLogout } from "state";

import { useNavigate } from "react-router-dom";



const Navbar2 = ({ size = "30px" }) => {

  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const[Menuselect,setMenuselect] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  return (
    <Box>
 
{isDesktop && (
    <Box backgroundColor="rgb(25,26,27)"  color="whitesmoke" display="flex" justifyContent="space-between" width="auto" height={size} alignItems="center" marginBottom=".5rem" >
           
           
         
        <Box display="flex" justifyContent="flex-start">

        <Box  sx={{display: 'flex', alignContent: 'center', borderRadius: "10px", height: "20px"}} onClick={() => {dispatch( setMenuon()) }}>
        <Menu  className="bask" style={{color:'rgb(25,150,100,0.8)'}} />
        </Box >

          
            <Box onClick={() => {dispatch( setMenuon()) }} style={{cursor:"pointer"}} display="flex" textAlign='center' alignItems='center'>
            <Typography fontSize="15px" color="rgb(25,150,100,0.8)" paddingLeft="2rem">
                 Menu

            </Typography>
            </Box>


            
            <Box onClick={() => {navigate("/orders");}} style={{cursor:"pointer"}} display="flex" textAlign='center' alignItems='center'>
            <Typography fontSize="15px" color="rgb(25,150,100,0.8)" paddingLeft="2rem">
             Your orders

            </Typography>
            </Box>

        </Box>

        <Box display="flex" justifyContent="center" paddingLeft="2.5rem">
        <Box  sx={{display: 'flex', alignItems: 'center', borderRadius: "10px", height: "25px", paddingRight: "5rem"}}>
         
        <Typography fontSize="15px" color="rgb(25,150,100,0.8)">
                 click
          </Typography>
        
        <IconButton >
        <ArrowDropDownCircleTwoTone  style={{color:'rgb(25,155,25)', fontSize:"20px"}} />
        </IconButton>

        <Typography fontSize="15px" color="rgb(25,150,100,0.8)">
                 menu

            </Typography>

        </Box>
        </Box>
        

        <Box display="flex" justifyContent="flex-end">

        

          <Box  onClick={() => {navigate("/contactus");}} style={{cursor:"pointer"}} display="flex" textAlign='center' alignItems='center'>
            <Typography fontSize="15px" color="rgb(25,150,100,0.8)" paddingRight="2rem">
                 Contact us

            </Typography>
          </Box>

          <Box onClick={ () => {dispatch(setLogout()); dispatch(setuserloggedout());} } display="flex" textAlign='center' alignItems='center' style={{cursor:"pointer"}}>
            <Typography fontSize="15px" color="rgb(25,150,100,0.8)"  paddingRight="2rem">
                 Logout

            </Typography>
          </Box>

          

        </Box>


        
      

    </Box>



)}

{/* for mobile view below */}

     {!isDesktop && (
         
         <Box backgroundColor="rgb(25,26,27)" color="whitesmoke" display="flex" justifyContent="space-between" width="auto" height="auto" alignItems="center" marginBottom=".5rem" paddingTop=".25rem">
           
           
           
         
         <Box display="flex" justifyContent="flex-start">
 
           <Box  style={{cursor:"pointer"}}  sx={{display: 'flex', alignContent: 'center', borderRadius: "10px", height: "20px"}} onClick={() => {dispatch( setMenuon()) }}>
           <Menu  className="bask" style={{color:'rgb(25,150,100,0.8)'}} />
           </Box >
 
           <Box  style={{cursor:"pointer"}} onClick={() => {dispatch( setMenuon()) }} display="flex" textAlign='center' alignItems='center'>
            <Typography fontSize="10px" color="rgb(25,150,100,0.8)" paddingRight="2rem">
                 Menu

            </Typography>
          </Box>

          <Box style={{cursor:"pointer"}} onClick={() => {navigate("/orders");}} display="flex" textAlign='center' alignItems='center'>
            <Typography fontSize="10px" color="rgb(25,150,100,0.8)" paddingRight="2rem">
            Orders

            </Typography>
          </Box>

         </Box>


         <Box display="flex" justifyContent="flex-end">

         <Box onClick={() => {navigate("/login");}} display="flex" textAlign='center' alignItems='center' style={{cursor:"pointer",}}>
            <Typography fontSize="10px" color="rgb(25,150,100,0.8)" paddingRight="2rem">
                 Login/Signup

            </Typography>
          </Box>

            <Box  onClick={() => {navigate("/contactus");}} style={{cursor:"pointer"}} display="flex" textAlign='center' alignItems='center'>
            <Typography fontSize="10px" color="rgb(25,150,100,0.8)" paddingRight="2rem">
                  Contact

            </Typography>
            </Box>

            <Box style={{cursor:"pointer"}} onClick={ () => {dispatch(setLogout()); dispatch(setuserloggedout());} } display="flex" textAlign='center' alignItems='center'>
            <Typography fontSize="10px" color="rgb(25,150,100,0.8)" paddingRight="2rem">
            Logout

            </Typography>
            </Box>



         </Box>

         </Box>

     )}

    </Box>
  );
  
};

export default Navbar2;