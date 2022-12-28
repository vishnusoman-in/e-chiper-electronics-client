import Navbar from "components/Navbar.jsx"
import Navbar2 from "components/Navbar2.jsx"


import { useState, useEffect } from "react";

import Footer from "components/Footer";
import {Box,Button,Typography,useMediaQuery,Divider} from "@mui/material"


import {Delete,Person} from '@mui/icons-material';

import { useSelector, useDispatch} from "react-redux";

import { setUser } from "state";

import Menubox from "components/Menubox"

import { useNavigate, useParams } from "react-router-dom";

import {StarRate} from "@mui/icons-material";

//const URL = process.env.SERVER_URL;

import { URL } from 'App.js'

const Productpage = ({ route, navigation }) => { 

    const isDesktop = useMediaQuery("(min-width: 550px)");
    
    const { _id, name, price, rating, } = useParams();
   
   const dispatch = useDispatch();
   

  
   const [Id, setId] = useState(_id); // for pid

   const[count1, setcount1] = useState(0)
   const[count2, setcount2] = useState(0)


   const logged = useSelector((state) => state.userlogged);

   const token = useSelector((state) => state.token);
   const usery = useSelector((state) => state.user);
   const productdetails = useSelector((state) => state.Ppagedetails);
   const[userid, setuserid] = useState(111111111111111111111111)
   
   
   const[preventintirender, setpreventintirender] = useState(false);
   const[preventintirender1, setpreventintirender1] = useState(false);

   

   
   useEffect(() => {

    setId(_id)
    
    console.log(productdetails)
     }, []);


   
   const handleproductid = () => {
    
    setcount1(count1+1) // this are used to control render of onclick call
    
  }

  const handleremoveid = () => {
    
    setcount2(count2+1)
    
  }

  useEffect(() => {

    if(logged == true ){
      if(usery !== null){setuserid(usery._id)} 
    }
    }, [handleremoveid,handleproductid]);
   
   
  // const userId="6395f5e39ff57d8057c15537"

  

 //..........................ADD CART............................

 useEffect(() => {
  if(preventintirender){ additemtocart(); } // prevent intial render
  else {setpreventintirender(true)}
   }, [count1]); 


  const additemtocart = async () => {

    if(Id == 111111111111111111111111)
    {
      //additemtocart()
      
    }

    if(userid == 111111111111111111111111)
    {
        alert("please login to add item to cart")
    }

     if(Id !== 111111111111111111111111){

    const response = await fetch(`${URL}/user/${userid}/${Id}/add`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
      
          const data =await response.json()

          

          if (response.status == 200) {
          
            dispatch(setUser({user: data}))
           
          }
          if (response.status == 404) {
            
          }

  }}

  //.........................REMOVE CART.......................................................

  useEffect(() => {
    if(preventintirender1){ removeitemfromcart(); } // prevent intial render
  else {setpreventintirender1(true)}

   }, [count2]); 


  const removeitemfromcart = async () => {

    if(Id == 111111111111111111111111)
    {
      
      
    }

    if(userid == 111111111111111111111111)
    {
        alert("please login to remove item from cart")
    }

     if(Id !== 111111111111111111111111){

    const response = await fetch(`${URL}/user/${userid}/${Id}/remove`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
      
          const data =await response.json()

          

          if (response.status == 200) {
          
            dispatch(setUser({user: data}))
            
          }
          if (response.status == 404) {
            
          }

  }}

  //.............................................................

  
  
    

  
  


  const namer=" Guest, please login"

    
    return (

<Box >

<Navbar name={logged ? usery.firstName : namer}  cartcount={logged ? (usery.cartquantity.reduce((prev, curr, index, array) => prev + curr, 0)) : 0} />
<Navbar2 />
<Menubox />


{isDesktop && ( <Box>
    <Box  display="flex" justifyContent="flex-start" width="auto" height="auto" sx={{borderColor: "black", borderRadius:"0.75rem"}}  borderTop={4} borderBottom={4} borderRight={4} marginLeft={4} backgroundColor="white" >

        <Box m="0.5rem">
            <img src={productdetails.picturePath} 
                 width="400px"
                 height="300px"
          alt="product"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }} />
            <Box display="flex" justifyContent="center">
        <Button  onClick={() => { handleremoveid();  }} > <Delete/> </Button>
        <Typography color="green">ADD/REMOVE ITEM</Typography>
        <Button  onClick={() => { handleproductid();  }} > +1 </Button>
        </Box>
    
        </Box>

        <Box display="Grid"  height="auto">
        <Typography  variant="h3" paddingTop="1rem" color="black" > {name}</Typography>
        <Typography variant="h5" color="black" > Rating:{rating} <StarRate sx={{fontSize:"14px", alignContent:"center"}} /> </Typography>
        <Typography  variant="h4" color="green"> Rs:{price}</Typography>
        <Typography variant="h6" color="black">Product Details : </Typography>
        <Typography  color="black">{productdetails.description}</Typography>
        </Box>

    </Box>

    <Box>
    <Typography varient="h5" color="white" marginLeft="2rem" marginTop="2rem" >CUSTOMER COMMENTS</Typography>
     {productdetails.comments && (
     <Box>
        
        { productdetails.comments.map((data, index) => (  
          <Box display="flex" marginTop="1rem">
            <Box height="30px" sx={{border:1,borderColor: "green", backgroundColor:"white", borderRadius:"50%"}} ><Person /></Box>
           <Box width="400px" height="auto" sx={{border:1,borderColor: "green", backgroundColor:"white", borderRadius:"0.5rem"}} borderTop={4} borderBottom={4} borderRight={4}>
            <Typography marginLeft="2rem" color="green"> {productdetails.comments[index]} </Typography>
                  
   
          </Box>
          </Box>
        ))}

    

     </Box>
    )}
    </Box>

    </Box>
  
  )}


{!isDesktop && ( <Box>
    <Box  display="Grid"  width="auto" height="auto" sx={{borderColor: "black", borderRadius:"0.75rem"}}  borderTop={4} borderBottom={4} borderRight={4} marginLeft={1} backgroundColor="white" >

        <Box m="0.5rem">
            <img src={productdetails.picturePath} 
                 width="250px"
                 height="250px"
          alt="product"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }} />
            <Box display="flex" justifyContent="center">
        <Button  onClick={() => { handleremoveid();  }} > <Delete/> </Button>
        <Typography color="green">ADD/REMOVE ITEM</Typography>
        <Button  onClick={() => { handleproductid();  }} > +1 </Button>
        </Box>
    
        </Box>

        <Box display="Grid"  height="auto">
        <Typography  variant="h3" paddingTop="1rem" color="black" > {name}</Typography>
        <Typography variant="h5" color="black" > Rating:{rating} <StarRate sx={{fontSize:"14px", alignContent:"center"}} /> </Typography>
        <Typography  variant="h4" color="green"> Rs:{price}</Typography>
        <Typography variant="h6" color="black">Product Details : </Typography>
        <Typography  color="black">{productdetails.description}</Typography>
        </Box>

    </Box>

<Box>
<Typography varient="h5" color="white" marginLeft="2rem" marginTop="2rem" >CUSTOMER COMMENTS</Typography>
 {productdetails.comments && (
 <Box>
    
    { productdetails.comments.map((data, index) => (  
      <Box display="flex" marginTop="1rem">
        <Box height="30px" sx={{border:1,borderColor: "green", backgroundColor:"white", borderRadius:"50%"}} ><Person /></Box>
       <Box width="400px" height="auto" sx={{border:1,borderColor: "green", backgroundColor:"white", borderRadius:"0.5rem"}} borderTop={4} borderBottom={4} borderRight={4}>
        <Typography marginLeft="2rem" color="green"> {productdetails.comments[index]} </Typography>
              

      </Box>
      </Box>
    ))}



 </Box>
)}
</Box>

</Box>
  
  )}






<Footer/>



</Box>

)
};

export default Productpage;