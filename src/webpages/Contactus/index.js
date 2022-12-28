import Navbar from "components/Navbar.jsx"
import Navbar2 from "components/Navbar2.jsx"
import Footer from "components/Footer";
import {Box,Typography,Divider} from "@mui/material"

import { useSelector, } from "react-redux";

import Menubox from "components/Menubox"


const Contactus = () => { 

  
   const logged = useSelector((state) => state.userlogged);

   const usery = useSelector((state) => state.user);



    const namer=" Guest, please login"
    
    return (
<Box  >

<Navbar name={logged  ? `${usery.firstName}  ${usery.lastName}` : namer} cartcount={logged ? (usery.cartquantity.reduce((prev, curr, index, array) => prev + curr, 0)) : 0} />
<Navbar2 />
<Menubox />

<Box m="3rem" height="500px" sx={{backgroundColor:"whitesmoke", border:1, borderColor:"green", borderRadius:"0.5rem"}}>
<Typography textAlign="center" varient="h2" color="green">Contact details</Typography>
<Divider sx={{width:"2px", backgroundColor:"green", marginTop:"3rem"}}></Divider>
<Typography textAlign="center">Phone: +91 9090909090</Typography>
<Typography textAlign="center">Email: customer-support@chiper.com</Typography>
<Typography textAlign="center">Chat support - click here</Typography>
<Typography textAlign="center">FAQ - click here</Typography>

</Box>

<Footer/>
</Box>
)
};

export default Contactus;