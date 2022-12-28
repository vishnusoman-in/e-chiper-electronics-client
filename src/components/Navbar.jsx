import {Search,ShoppingCart,Close,} from "@mui/icons-material";
import {Box,IconButton,Typography,InputBase,useMediaQuery,} from "@mui/material"

import {useState} from 'react'

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { setPdetails } from "state";

//const URL = process.env.SERVER_URL;

import { URL } from 'App.js'

const Navbar = ({ size = "45px", name, cartcount }) => {

  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const is500up = useMediaQuery("(min-width: 450px)");

 
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const[Value, setValue] = useState("")
  const [searcharray, setsearcharray] = useState([]);
  const[searchbar, setsearchbar] = useState(false)

  const handleSearch = () => {
    
    getProductbyname(Value)
    setsearchbar(true)
    console.log(Value)
  }

  const getProductbyname = async (Value) => { // get user data from backend and setuser usestate

    const response = await fetch(`${URL}/products/${Value}/productname`, {
      method: "GET",
       
    });

    const cartproduct = await response.json();

    if (response.status == 200) {
            setsearcharray(cartproduct)
            console.log(searcharray)

     }
   if (response.status == 404) {
      
      console.log("file not found")
    }

  };



  return (
    <Box className="searchnav">

<Box className={is500up ? "searchbar" : "searchbar-mob"}>
{ searchbar && searcharray.map(({_id,name,price,description,categoryname,picturePath,rating,comments,}, index) => (
             
             <Box key={index} >

              {
                <Box    
                display="flex" justifyContent="flex-start" width="300px" height="100px" sx={{"&:hover": {color: "red", cursor: "pointer",}, borderColor: "black", borderRadius:"0.75rem"}}  borderTop={4} borderBottom={4} borderRight={4} marginLeft={4} backgroundColor="white" >

                <Box m="0.5rem" onClick={() => { navigate(`/productpage/${_id}/${name}/${price}/${rating}`); dispatch( setPdetails({Ppagedetails: searcharray[index]}) ); }}> 
                    <img src={picturePath} 
                         width="60px"
                         height="60px"
                  alt="product"
                  style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }} />
        
                  
                </Box>
        
                <Box display="Grid" >
                <Typography m="1.25rem" color="green"> {name}</Typography>
                <Typography m="0.5rem" color="red"> Rs:{price}</Typography>
                </Box>
        
            </Box>
              }

             </Box>
      ))}
     { searchbar && <Box onClick={() => {setsearchbar(false)}}  sx={{"&:hover": {color: "red", cursor: "pointer",}, color:"green"}} > <Close/> close</Box>}
</Box>
    

{isDesktop && (

  
    
    <Box borderBottomLeftRadius= "1rem" borderBottomRightRadius="1rem"  display="flex" justifyContent="space-between" width="auto" height={size} alignItems="center" paddingTop=".25rem" backgroundColor="rgb(25,150,100,0.8)" borderBottom="1px" borderColor="white">
         
         
           
         
        <Box display="flex" justifyContent="flex-start">


          <Box  sx={{display: 'flex', alignContent: 'center'}}>
           <Box width="30px" height="30px">
                <img
                style={{ objectFit: "cover", borderRadius: "50%" }}
                width="30px"
                height="30px"
                alt="logo"
                
                src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672118662/gamerimg/logy_ulyu0t.png"
                />
           </Box>
          </Box>

            <Box  onClick={() => {navigate("/");}} sx={{display: 'flex', textAlign: 'center'}}>
            <Typography  fontWeight="bold" fontSize="15px" color="whitesmoke" paddingRight="2rem" paddingLeft=".25rem" sx={{"&:hover": {color: "white", cursor: "pointer",},}}>
                chiper electronics

            </Typography>
            </Box>


            <Box  sx={{display: 'flex', alignContent: 'center', borderRadius: "10px", height: "30px",backgroundColor:"white"}}>

             <InputBase placeholder="Search...like arduino" onChange={event=>{setValue(event.target.value)}}  sx={{ width: 400, color:"black"}}/>

               <IconButton onClick={handleSearch} >
               <Search  style={{color:"rgb(25,150,100,0.8)",} }/>
               </IconButton>

            </Box>

            <Box onClick={() => {navigate("/orders");}} display="flex" textAlign='center' alignItems='center' style={{cursor:"pointer",}}>
            <Typography fontSize="15px" color="white" paddingLeft="2rem">
                 Your orders

            </Typography>
            </Box>

        </Box>
        

        

          <Box display="flex" textAlign='center' alignItems='center'>
            <Typography fontSize="15px" color="white" paddingRight="2rem">
                 Hi {name}

            </Typography>
          </Box>

          <Box display="flex" justifyContent="flex-end">

          <Box onClick={() => {navigate("/login");}} display="flex" textAlign='center' alignItems='center' style={{cursor:"pointer",}}>
            <Typography fontSize="15px" color="white" paddingRight="2rem">
                 Login/Signup

            </Typography>
          </Box>

          <Box onClick={() => {navigate("/cart");}} display="flex" style={{position: "relative", zIndex:"500"}} alignItems='center'>
              <IconButton>
               <ShoppingCart style={{color:"white"}} />
               </IconButton>
               <Typography style={{position: "absolute", zIndex:"501",top:"-5px", left:"15px"}} color="rgb(255,115,115)" >{cartcount}</Typography>
          </Box>

        </Box>

    </Box>


    

)}



{/* for mobile view below */}

     {!isDesktop && (
         
         <Box borderBottomLeftRadius= "1rem" borderBottomRightRadius="1rem" display="flex" justifyContent="space-between" width="auto" height="auto" alignItems="center" paddingTop=".25rem" backgroundColor="rgb(25,150,100,0.8)">
           
           
           
         
         <Box display="flex" justifyContent="flex-start">
 
 
           <Box  sx={{display: 'flex', alignContent: 'center'}}>
            <Box width="30px" height="30px">
                 <img
                 style={{ objectFit: "cover", borderRadius: "50%" }}
                 width="30px"
                 height="30px"
                 alt="logo"
                 
                 src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1672118662/gamerimg/logy_ulyu0t.png"
                 />
            </Box>
           </Box>
 
             <Box onClick={() => {navigate("/");}} sx={{display: 'flex', textAlign: 'center'}}>
             <Typography  display="inline" fontSize="15px" color="white" paddingRight={is500up ? "2rem" : "1rem"} paddingLeft=".25rem" sx={{"&:hover": {color: "red",cursor: "pointer",},}}>
                 chiper electronics
 
             </Typography>
             </Box>
 

             <Box  sx={{display: 'flex', alignContent: 'center', borderRadius: "10px", height: "25px",backgroundColor:"white"}}>

             <InputBase placeholder="Search..like raspberry" onChange={event=>{setValue(event.target.value)}}  sx={{ width: (is500up ? 200: 100), color:"black"}}/>

               <IconButton onClick={handleSearch} >
               <Search  style={{color:"rgb(25,150,100,0.8)",} }/>
               </IconButton>

            </Box>

         </Box>

         <Box onClick={() => {navigate("/cart");}} display="flex" style={{position: "relative", zIndex:"500"}} alignItems='center'>
              <IconButton>
               <ShoppingCart style={{color:"white"}} />
               </IconButton>
               <Typography style={{position: "absolute", zIndex:"501",top:"-5px", left:"15px"}} color="rgb(255,115,115)" >{cartcount}</Typography>
          </Box>

         </Box>

     )}

    </Box>
    
  );
  
};

export default Navbar;