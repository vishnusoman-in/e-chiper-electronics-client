import Navbar from "components/Navbar.jsx"
import Navbar2 from "components/Navbar2.jsx"
import { useState, useEffect } from "react";

import Footer from "components/Footer";
import {Box,Button,Typography,useMediaQuery,Divider} from "@mui/material"
import { useSelector, } from "react-redux";

import Menubox from "components/Menubox"

//const URL = process.env.SERVER_URL;

import { URL } from 'App.js'

const Orderpage = () => { 

   const isDesktop = useMediaQuery("(min-width: 600px)");
   const is500up = useMediaQuery("(min-width: 460px)");
   const [cartarray, setcartarray] = useState([]);
   const[cartQlen,setcartQlen] = useState(0)

   const[cartprice,setcartprice] = useState(0)
   const[orderarray,setorderarray] = useState([])

   const logged = useSelector((state) => state.userlogged);

   const token = useSelector((state) => state.token);
   const usery = useSelector((state) => state.user);

   useEffect(() =>{

    if(logged == true ){
    setcartprice(cartarray.reduce((prev, curr, index, array) => prev + (curr.price * usery.cartquantity[index]), 0))
    setcartQlen(usery.cartquantity.reduce((prev, curr, index, array) => prev + curr, 0))
    setorderarray(usery.orders)
    getorder()
    }
    }, [])

    const getorder = async () => { // get user data from backend and setuser usestate

        if(logged == true ){
        const response = await fetch(`${URL}/orders/${usery.orders}/orderids`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` }, // token from backend contain jwt, we give the token for getting details in format (Authorization: `Bearer ${token}`)
        });
    
        const cartproduct = await response.json();
    
        
         
        if (response.status == 200) {
                setcartarray(cartproduct)
                console.log(cartarray)
                
         }
       if (response.status == 404) {
          
        }
    
      }
    };


   const namer=" Guest, please login"

    
    return (

<Box >

<Navbar name={logged ? usery.firstName : namer}  cartcount={logged ? cartQlen : 0} />
<Navbar2 />
<Menubox />

<Typography textAlign="center" variant="h4" sx={{color:"green", marginBottom:"2rem"}}> Order Page </Typography>

{!logged && <Box backgroundColor="black" alignItems="center" m="2rem" width="auto" height="500px" sx={{border:1, borderColor:"green", borderRadius:"0.5rem"}}>
    
    <Typography textAlign="center" variant="h5" sx={{color:"green"}}> Please login to Account to access Orders </Typography>
    
</Box>}



{ logged && cartarray && cartarray.map(({_id,orderaddress,orderprice,orderstatus,productlist,quantitylist,orderdate,orderextras,}, index) => (
    
<Box key={index}>
   
  
   

   {

        <Box  display="flex" justifyContent="flex-start" width={is500up ? "450px" : "350px"} height="300px" sx={{borderColor: "black", borderRadius:"0.75rem"}}  borderTop={4} borderBottom={4} borderRight={4} marginLeft={isDesktop ? 4: 2} backgroundColor="white" >

        <Box m="0.5rem">
            <img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1671728093/picture/order_es8uea.png" 
                 width={is500up ? "90px" : "40px"}
                 height={is500up ? "90px" : "40px"}
          alt="product"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }} />
         <Typography m="0.5rem" color="green"> Order :#{index+1}</Typography>
         <Typography m="0.5rem" color="black"> Placed on:</Typography>
        <Typography m="0.5rem" color="green"> {String(orderdate).slice(0, 10)}</Typography>
          
        </Box>

        <Box display="Grid" >
        <Box display="flex">
        <Typography m="0.5rem" color="black"> Order Quantity:</Typography>
        <Typography m="0.5rem" color="green"> {quantitylist.length}</Typography>
        </Box>
        <Box display="flex">
        <Typography m="0.5rem" color="black"> Order Total:</Typography>
        <Typography m="0.5rem" color="green"> Rs: {(orderprice/100).toLocaleString()}</Typography>
        </Box>
        <Box display="flex">
        <Typography m="0.5rem" color="black"> Order Address:</Typography>
        <Typography m="0.5rem" color="green"> {orderaddress}</Typography>
        </Box>
        <Box display="flex">
        <Typography m="0.5rem" color="black"> Order Status:</Typography>
        <Typography m="0.5rem" color="green"> {orderstatus ? "Delivered" : "On the way"}</Typography>
        </Box>
        <Box display="flex">
        <Typography m="0.5rem" color="black"> Estimated delivery date:</Typography>
        <Typography m="0.5rem" color="green"> Tomorrow</Typography>
        </Box>
        
        </Box>
    

    </Box>
  
  

   }
   
 
  </Box>
      ))
    
    
}

<Footer/>

</Box>

)
};

export default Orderpage;