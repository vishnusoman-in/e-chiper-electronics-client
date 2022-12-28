import Navbar from "components/Navbar.jsx"
import Navbar2 from "components/Navbar2.jsx"

import Footer from "components/Footer";
import {Box,Typography,} from "@mui/material"


import { useSelector, } from "react-redux";

import Menubox from "components/Menubox"


const Outofstock = () => { 

   
 

   const logged = useSelector((state) => state.userlogged);


   const usery = useSelector((state) => state.user);



    const namer=" Guest, please login"
    
    return (
<Box >

<Navbar name={logged  ? `${usery.firstName}  ${usery.lastName}` : namer} cartcount={logged ? (usery.cartquantity.reduce((prev, curr, index, array) => prev + curr, 0)) : 0} />
<Navbar2 />
<Menubox />
<Box m="3rem" width="auto" height="500px" backgroundColor="black" sx={{border:1, borderColor:"green", borderRadius:"0.5rem"}}>
<Typography textAlign="center" color="red" varient="h3">This product or category is out of stocks</Typography>
<Typography textAlign="center" color="green" varient="h3">Arduino and Rasberry pi collection have offers , please check now , Hurry!</Typography>

</Box>
<Footer/>
</Box>
)
};

export default Outofstock;