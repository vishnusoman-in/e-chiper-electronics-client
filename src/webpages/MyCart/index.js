import Navbar from "components/Navbar.jsx"
import Navbar2 from "components/Navbar2.jsx"
import { useState, useEffect } from "react";

import Footer from "components/Footer";
import {Box,Button,Typography,useMediaQuery,Divider} from "@mui/material"


import { useSelector, useDispatch} from "react-redux";

import { setUser, setPdetails } from "state";

import Menubox from "components/Menubox"

import { useNavigate } from "react-router-dom";

//const URL = process.env.SERVER_URL;

import { URL } from 'App.js'


const MyCart = () => { 

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [productarray, setproductarray] = useState([111111111111111111111111,111111111111111111111111]);
   const [cartarray, setcartarray] = useState([]);
   

   const[count1, setcount1] = useState(0)
   const[count2, setcount2] = useState(0)
   const[cartprice,setcartprice] = useState(0)
   const[cartQlen,setcartQlen] = useState(0)
   const[cartTlen,setcartTlen] = useState(0) 
   
   const[productid, setproductid] = useState(111111111111111111111111)
   const[removeid, setremoveid] = useState(111111111111111111111111)

   const logged = useSelector((state) => state.userlogged);

   const token = useSelector((state) => state.token);
   const usery = useSelector((state) => state.user);

   
   
   const handleproductid = (id1) => {
    setproductid(id1); 
    setcount1(count1+1) // this are used to control render of onclick call
    
    
  }

  const handleremoveid = (id2) => {
    setremoveid(id2); 
    setcount2(count2+1)
    
  }
   
   
  // const userId="6395f5e39ff57d8057c15537"

  useEffect(() => {

    if(logged == true ){
      if(usery !== null){setproductarray(usery.cartitems)} 
    }
    }, [handleremoveid,handleproductid]);


    useEffect(() =>{
      if(logged == true ){
      const total = cartarray.reduce((prev, curr, index, array) => prev + (curr.price * usery.cartquantity[index]), 0)
      setcartprice(total.toLocaleString())
      setcartQlen(usery.cartquantity.reduce((prev, curr, index, array) => prev + curr, 0))

      }

    }, [handleremoveid,handleproductid,productarray,count1,count2,cartQlen,cartprice,cartTlen])
  

  useEffect(() => {
    if(logged == true ){
      getProductbyid() 
       
    }
    }, [productarray,count1,count2]); 

   
   
   const getProductbyid = async () => { 

    if(productarray[0] == 111111111111111111111111 || productarray[0] == null){ setcartarray([]) }
    else{
    const response = await fetch(`${URL}/products/${productarray}/productids`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }, // token from backend contain jwt, we give the token for getting details in format (Authorization: `Bearer ${token}`)
    });

    const cartproduct = await response.json();

    
     
    if (response.status == 200) {
            setcartarray(cartproduct)
            
     }
   if (response.status == 404) {
      
    }

  }
};

  const getUser = async () => { 

    
 
    const response = await fetch(`${URL}/user/${usery._id}/getting`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }, // token from backend contain jwt, we give the token for getting details in format (Authorization: `Bearer ${token}`)
    });

    const data = await response.json();
    if(response.status == 200)
    {dispatch(setUser({user: data}))}

    

  };
  

 //..........................ADD CART............................

 useEffect(() => {

  additemtocart();

   }, [count1]); 


  const additemtocart = async () => {

    if(productid == 111111111111111111111111)
    {
     
      
    }

     if(productid !== 111111111111111111111111){

    const response = await fetch(`${URL}/user/${(usery._id)}/${productid}/add`, {
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

    removeitemfromcart();
  
   }, [count2]); 


  const removeitemfromcart = async () => {

    if(removeid == 111111111111111111111111)
    {
      //additemtocart()
      
    }

     if(removeid !== 111111111111111111111111){

    const response = await fetch(`${URL}/user/${(usery._id)}/${removeid}/remove`, {
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

<Navbar name={logged ? usery.firstName : namer}  cartcount={logged ? cartQlen : 0} />
<Navbar2 />
<Menubox />

{!logged && <Box backgroundColor="black" alignItems="center" m="2rem" width="auto" height="150px" sx={{border:1, borderColor:"green", borderRadius:"0.5rem"}}>
    
    <Typography textAlign="center" variant="h5" sx={{color:"green"}}> Please login to Account to access cart </Typography>
    
</Box>}



{ logged && cartarray && cartarray.map(({_id,name,price,description,categoryname,picturePath,rating,comments,}, index) => (
    
<Box key={index}>
   
  
   

   {

        <Box   
        display="flex" justifyContent="flex-start" width="399px" height="150px" sx={{"&:hover": {color: "red", cursor: "pointer",},borderColor: "black", borderRadius:"0.75rem"}}  borderTop={4} borderBottom={4} borderRight={4} marginLeft={4} backgroundColor="white" >

        <Box m="0.5rem" onClick={() => { navigate(`/productpage/${_id}/${name}/${price}/${rating}`); dispatch( setPdetails({Ppagedetails: cartarray[index]}) ); }} >
            <img src={picturePath} 
                 width="100px"
                 height="100px"
          alt="product"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }} />

          
        </Box>

        <Box display="Grid" >
        <Typography m="1.25rem" color="green"> {name}</Typography>
        <Typography m="0.5rem" color="red"> Rs:{price}</Typography>
       
        <Box display="flex" justifyContent="center">
        <Button sx={{color:"green"}} onClick={() => { handleremoveid(cartarray[index]._id);  }} m="0.5rem"> -1 </Button>
        <Typography color="black">Quantity: {usery.cartquantity[index]} </Typography>
        <Button sx={{color:"green"}} onClick={() => { handleproductid(cartarray[index]._id);  }} m="0.5rem"> +1 </Button>
        </Box>
        </Box>

    </Box>
  
  

   }
   
 
  </Box>
      ))
    
    
}

<Divider backgroundColor="rgb(25,150,100,0.8)" border="1rem" ></Divider>

{logged && (

<Box display="Grid" marginTop="2rem" alignItems="center" backgroundColor="black">
  <Typography color="white" m="0.5rem" >Total Quantity - {cartQlen} </Typography>
  <Typography color="white" m="0.5rem" >Total Price - RS: {cartprice} </Typography>
  <Button m="0.5rem" sx={{color: "white", width:"100px", marginLeft:"0.5rem", backgroundColor:"rgb(25,150,100,0.8)"}} 

  onClick={ () => fetch(`${URL}/create-checkout-session`, {

  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.YOUR_SECRET_KEY}`,
    
  },
  body: JSON.stringify({
    items: usery._id,
  }),
  
  
  })

  .then(res => {
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  })

  .then(({ url }) => {
   window.location = url
   //window.open(url, '_blank');
  
  })

  .catch(e => {
    console.error(e.error)
    console.log(e.error)
  })}

  >Checkout</Button>

</Box>

)}

<Footer/>



</Box>

)
};

export default MyCart;