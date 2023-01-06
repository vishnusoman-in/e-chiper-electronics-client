

import { useState, useEffect, useReducer } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setUser, setPdetails } from "state";


import {useRef} from 'react'

import {Button,Box,IconButton,Typography,InputBase,useMediaQuery,ImageList} from "@mui/material"
import {KeyboardDoubleArrowLeft,KeyboardDoubleArrowRight,ShoppingCart} from '@mui/icons-material';


import { useNavigate } from "react-router-dom";

//import gear from 'assets/gear.gif'

//const URL = process.env.SERVER_URL;

import { URL } from 'App.js'

const Productimglist = ({ size = "50px",catego,categorytitle, }) => {

    const isDesktop = useMediaQuery("(min-width: 600px)");
    const is500up = useMediaQuery("(min-width: 450px)");

    
    const navigate = useNavigate();
    const connectbox = useRef(null)
    const dispatch = useDispatch();
    const[productcategory, setproductcategory] = useState([false,1,2,3]);
    const[productid, setproductid] = useState(111111111111111111111111)
    const[count, setcount] = useState(0)

    
    const usery = useSelector((state) => state.user);

    const token = useSelector((state) => state.token);

    const logged = useSelector((state) => state.userlogged);

    const [useId, setuseId] = useState(111111111111111111111111);
 
    const handleclickright = () => {
      
      connectbox.current.scrollBy({left: (is500up ? -400:-300),behavior: "smooth"})
      
    }

    const handleclickleft = () => {
      
      connectbox.current.scrollBy({left: (is500up ? 400:300),behavior: "smooth"})
      
    }

    const handleproductid = (id) => {
      setproductid(id); 
      setcount(count+1)
    }

    const getCategory = async () => {

      const response = await fetch(`${URL}/products/${catego}/productcategory`, {
        method: "GET",
      
      });
        
            const data = JSON.stringify( await response.json())
            const result = JSON.parse(data)
      

      if (response.status == 200) {
          
         
          setproductcategory({result})
        }
        if (response.status == 404) {
         
         // console.log("files not found")
        }
  
    };

    useEffect(() => {
        
      getCategory();
      
    }, []); 


    useEffect(() => {

    if(usery !== null) 
    {setuseId(usery._id)}
    
   }, []); //logged


   //................................ADD TO CART...................................................................


   useEffect(() => {

    additemtocart();

   }, [count]); 

    const additemtocart = async () => {

      if(productid == 111111111111111111111111)
      {
       
        
      }

       if(productid !== 111111111111111111111111){

      const response = await fetch(`${URL}/user/${(useId)}/${productid}/add`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
        
            const data =await response.json()

            

            if (response.status == 200) {
            
              dispatch(setUser({user: data}))
             
            }
            if (response.status == 404) {
              
              //console.log("file not found")
            }

    }

    }
  

  
  
    return (

      <Box className="imglist"  display="Grid" marginLeft="2.5rem" marginTop="1rem" backgroundcolor="white" >

      

            <Typography style={{color:'rgb(255,255,255)', fontWeight: "bold",fontSize: "40px" }} >{categorytitle}</Typography>

            <Box className="imglist-la"  >
             
             <KeyboardDoubleArrowLeft onClick={handleclickright} style={{color:'rgb(25,255,255)', backgroundColor:'rgb(0,0,0,0.5)', fontSize:"80px"}} />
             
             </Box>

             <Box className={isDesktop ? "imglist-ra" : "imglist-ra-adjust"} >
           
             <KeyboardDoubleArrowRight onClick={handleclickleft} style={{color:'rgb(25,255,255)', backgroundColor:'rgb(0,0,0,0.5)', fontSize:"80px",}} />
             
             </Box>


      <Box className="imglist-others"  ref={connectbox} sx={{mb: 2, display:"flex", width: (isDesktop ? 1500: 400), height: 240,overflowX: "hidden", overflowY: "hidden",borderBottom: 1, borderColor: "#E8E8E8"}}>
<>

{!productcategory.result &&

<Box display="Grid" marginLeft="5rem" marginTop="4rem">
<Box marginLeft="3rem">
<img src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672978408/picture/gear_okdbap.gif"
width="40%"
height="50%"
/>
</Box>
<Typography color="white" marginBottom="4rem">Server initial loading...</Typography>
</Box>

}
         
          { productcategory.result && productcategory.result.map(

({_id,name,price,description,categoryname,picturePath,rating,comments,}, i) => (
  
  <Box key={i}   sx={{borderRight: 1, borderColor: "#E8E8E8"} } borderRadius=".5rem" width={is500up ? "400px":"300px"} height={is500up ? "300px":"350px"}>
  <Box onClick={() => { navigate(`/productpage/${_id}/${name}/${price}/${rating}`); dispatch( setPdetails({Ppagedetails: productcategory.result[i]}) ); }} >
  <img 
     style={{ objectFit: "cover", borderRadius: "2%" }}
     width={is500up ? "400px":"300px"}
     height={is500up ? "200px":"180px"}
     alt="uno"
     loading="lazy"
     
     src={picturePath}
     />
     </Box>
  <Box  display="flex" justifyContent="space-between" alignItems="center">
   <Box  display="flex" justifyContent="flex-start">
  <Typography  fontSize="15px" style={{color:'rgb(255,255,255)', fontWeight: "bold",marginLeft: "0.25rem", }} >  Rs.{price}  </Typography>
  <Typography  justifyContent="flex-start" style={{color:'rgb(255,155,155)', fontWeight: "normal", fontSize: "10px"}} >.   (20% offer)</Typography>
  <Typography  justifyContent="flex-start" style={{color:'rgb(255,255,255)', fontWeight: "normal",marginLeft: "1rem",}} > {name} </Typography>
  </Box>
  <Button  onClick={() => { handleproductid(productcategory.result[i]._id);  }} sx={{backgroundColor: "rgb(25,150,100,0.8)", marginRight: "1rem", color:"white" }}> Add <ShoppingCart /></Button>
  </Box>

</Box>

          
))}

           
</>
              



              </Box>
              
       </Box>

       


           );
  
    };
    
    export default Productimglist;


    