import Navbar from "components/Navbar.jsx"
import Navbar2 from "components/Navbar2.jsx"
import Topbanner from "components/Topbanner.jsx"

import { useState, useEffect } from "react";

import Footer from "components/Footer";
import {Box,Typography,useMediaQuery,Divider} from "@mui/material"
import Productimglist from "components/Productimglist";
import Productimgbox from "components/Productimgbox";

import { useSelector,useDispatch } from "react-redux";

import Menubox from "components/Menubox"

import {setUser} from "state"

//const URL = process.env.SERVER_URL;

import { URL } from 'App.js'


const StorePage = () => { 

   const isDesktop = useMediaQuery("(min-width: 1000px)");
   const dispatch = useDispatch();
  
   const [Id, setId] = useState(111111111111111111111111);

   const logged = useSelector((state) => state.userlogged);

   const token = useSelector((state) => state.token);
   const usery = useSelector((state) => state.user);

   
   
   
   
   
  // const userId="6395f5e39ff57d8057c15537"

  if(logged == true && Id == 111111111111111111111111){  
    if(usery !== null) 
    {setId(usery._id)}
    
  }

  useEffect(() => {
    
    getUser()

  }, []);
   
   const getUser = async () => { // get user data from backend and setuser usestate

    
 
    const response = await fetch(`${URL}/user/${Id}/getting`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }, 
    });

    const data = await response.json();
    if(response.status == 200)
    {
      
      dispatch(setUser({user: data}))
     // console.log("updated usery")
  
  
  }

    

  };


 
  const namer=" Guest, please login"
    
    return (
       
<Box >

<Navbar name={logged  ? `${usery.firstName}  ${usery.lastName}` : namer} cartcount={logged ? (usery.cartquantity.reduce((prev, curr, index, array) => prev + curr, 0)) : 0} />
<Navbar2 />
<Menubox />
<Topbanner />

<Productimglist catego="Arduino" categorytitle="Arduino Boards"/>

<Box  display={isDesktop ? "flex" : "'block"} justifyContent="space-between">

<Box flexBasis={isDesktop ? "35%" : undefined} style={{blockSize: "650px"}} height="450px" width="300px">
<Productimgbox marleft={isDesktop ? "7.3rem" : "2.3"} 
pic1="https://res.cloudinary.com/dexpbdlyc/image/upload/v1670930025/picture/ik7lolrzeivptovgujwz.jpg" 
pic2="https://res.cloudinary.com/dexpbdlyc/image/upload/v1670921377/picture/smvrevzeu8i4t5wzcw2q.jpg"
pic3="https://res.cloudinary.com/dexpbdlyc/image/upload/v1671733658/picture/vishnu-mohanan-IAfNjy3fh6g-unsplash_afrvxu.jpg"
pic4="https://res.cloudinary.com/dexpbdlyc/image/upload/v1670918258/picture/qwl0a76wkct6d8hqcwtq.jpg"
pic1title="upto 60% off" pic2title="upto 25% off" pic3title="upto 60% off" pic4title="upto 20% off"/>
</Box>

<Box flexBasis={isDesktop ? "35%" : undefined} style={{blockSize: "650px"}} height="450px" width="300px">
<Productimgbox  marleft={isDesktop ? "-5rem" : "0.1"} 
pic1="https://res.cloudinary.com/dexpbdlyc/image/upload/v1671733657/picture/vishnu-mohanan-U6lF_VGaRg0-unsplash_cyxzfw.jpg" 
pic2="https://res.cloudinary.com/dexpbdlyc/image/upload/v1670920720/picture/qgzqbc9qfzfurpxwuxqt.jpg"
pic3="https://res.cloudinary.com/dexpbdlyc/image/upload/v1670855653/picture/e9odbqkkat2ajda7g6xz.jpg"
pic4="https://res.cloudinary.com/dexpbdlyc/image/upload/v1670921580/picture/riyt4vopyawzz5x7lxru.jpg"
pic1title="upto 40% off" pic2title="upto 20% off" pic3title="upto 30% off" pic4title="upto 50% off" />
</Box>

</Box>

<Divider sx={{backgroundColor:"white", marginBottom: "1px"}}/>

<Productimglist catego="Raspberry" categorytitle="Raspberry pi Boards"/>

<Footer/>



</Box>





)};

export default StorePage;