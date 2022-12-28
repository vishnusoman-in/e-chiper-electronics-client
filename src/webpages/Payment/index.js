import Navbar from "components/Navbar.jsx"
import Navbar2 from "components/Navbar2.jsx"

import Footer from "components/Footer";
import {Box,Typography,} from "@mui/material"

import { useSelector, } from "react-redux";

import Menubox from "components/Menubox"


const Payment = () => { 
  

   const logged = useSelector((state) => state.userlogged);

 
   const usery = useSelector((state) => state.user);



    const namer=" Guest, please login"
    
    return (
<Box >

<Navbar name={logged  ? `${usery.firstName}  ${usery.lastName}` : namer} cartcount={logged ? (usery.cartquantity.reduce((prev, curr, index, array) => prev + curr, 0)) : 0} />
<Navbar2 />
<Menubox />
<Box m="3rem" height="500px" backgroundColor="black" sx={{border:1, borderColor:"green", borderRadius:"0.5rem"}}>
<Typography textAlign="center" color="green" variant="h3">Payment options</Typography>

<Typography m="1rem" color="white">1.Card payment (visa, mastercard)</Typography>
<Typography m="1rem"  color="white">2.Gpay or UPI</Typography>
<Typography m="1rem"  color="white">3.Wallets</Typography>
<Typography m="1rem"  color="white">4.Cash on delivery (for some items only)</Typography>
<Typography m="1rem"  color="white">5.Net banking</Typography>

</Box>
<Footer/>
</Box>
)
};

export default Payment;