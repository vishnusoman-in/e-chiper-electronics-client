import Navbar from "components/Navbar.jsx"
import Navbar2 from "components/Navbar2.jsx"


import Footer from "components/Footer";
import {Box,Typography,useMediaQuery,Divider} from "@mui/material"


import { useSelector,useDispatch } from "react-redux";

import Menubox from "components/Menubox"


const Account = () => { 

   

   const logged = useSelector((state) => state.userlogged);

   const token = useSelector((state) => state.token);
   const usery = useSelector((state) => state.user);



    const namer=" Guest, please login"
    
    return (
<Box >

<Navbar name={logged  ? `${usery.firstName}  ${usery.lastName}` : namer} cartcount={logged ? (usery.cartquantity.reduce((prev, curr, index, array) => prev + curr, 0)) : 0} />
<Navbar2 />
<Menubox />
{logged && (
  <Box backgroundColor="black" alignItems="center" height="500px" sx={{border:1, borderColor:"green", borderRadius:"0.5rem"}}>
    <Typography textAlign="center" variant="h4"  color="green">Account Details</Typography>

    <Box display="flex" m = "2rem">
    <Typography color="green">Name: </Typography>
    <Typography color="white">{usery.firstName}   {usery.lastName}</Typography>
    </Box>  

    <Box display="flex" m = "2rem">
    <Typography color="green">email: </Typography>
    <Typography color="white">{usery.email}</Typography>
    </Box> 

    <Box display="flex" m = "2rem">
    <Typography color="green">address: </Typography>
    <Typography color="white">{usery.address}</Typography>
    </Box> 

    

 </Box>
)}

{!logged && (
<Box height="500px" backgroundColor="black" >
    <Typography sx={{marginTop:"5rem",}} color="green" textAlign="center" varient="h2" >Please login to see account</Typography>
</Box>
    
    )}



<Footer/>
</Box>
)
};

export default Account;