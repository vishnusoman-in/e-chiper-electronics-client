

import {Box,Button,TextField,useMediaQuery,Typography,useTheme, alertClasses, Divider,} from "@mui/material";


import { useDispatch, useSelector } from "react-redux";


import { setProducts } from "state";

//const URL = process.env.SERVER_URL;

import { URL } from 'App.js'

const Admingalbox = ({_id,name,price,description,categoryname,picturePath,rating,comments,}) => {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const isdesktop = useMediaQuery("(min-width:1400px)");
    const is500up = useMediaQuery("(min-width: 500px)");

    const Deleteproduct = async () => { // update likes inside a postid

        const response = await fetch(`${URL}/products/${_id}/deleteit`, {
    
          method: "DELETE",
          headers: {Authorization: `Bearer ${token}`},
        });
    
        const updatedproductdata = await response.json();
    
        

        if (response.status == 200) {
            
            dispatch(setProducts({ products: updatedproductdata }));
          }
          if (response.status == 404) {
           
          }
    
      };
    


       

    return (
      <Box>

        {isdesktop && (
    <Box display="flex" justifyContent="flex-start" width="1500px" height="500px" borderColor="white" borderTop={4} borderBottom={4} borderRight={4}>

        <Box>
            <img src={picturePath} 
                 width="300px"
                 height="300px"
          alt="product"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }} />

          
        </Box>

        <Box display="Grid" >

        <Box display="flex">
       <Typography color="rgb(25,150,100,0.8)" m="1rem"> Name of Product:</Typography>
       <Typography color="white" m="1rem"> {name}</Typography>
        </Box>

<Box display="flex">
<Typography color="rgb(25,150,100,0.8)" m="1rem"> Price of Product:</Typography>
<Typography color="white" m="1rem"> {price}</Typography>
</Box>

<Box display="flex">
<Typography color="rgb(25,150,100,0.8)" m="1rem">Description of Product:</Typography>
<Typography color="white" m="1rem"> {description}</Typography>
</Box>

<Box display="flex">
<Typography color="rgb(25,150,100,0.8)" m="1rem">category of Product:</Typography>
<Typography color="white" m="1rem">{categoryname}</Typography>
</Box>

        <Button sx={{color:"white", backgroundColor:"rgb(25,150,100,0.8)", width:"100px", height:"50px"}} onClick={Deleteproduct} m="1rem">Delete</Button>

        
        
        </Box>

        </Box>

)}

    {!isdesktop && (

<Box width={is500up ? "500px" : "350px"} height="auto" borderColor="white" borderTop={4} borderBottom={4} borderRight={4}>

<Box>
    <img src={picturePath} 
         width={is500up ? "300px" : "250px"}
         height={is500up ? "300px" : "250px"}
  alt="product"
  style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }} />

  
</Box>

<Box display="Grid" >

<Box display="flex">
<Typography color="rgb(25,150,100,0.8)" m="1rem"> Name of Product:</Typography>
<Typography color="white" m="1rem"> {name}</Typography>
</Box>

<Box display="flex">
<Typography color="rgb(25,150,100,0.8)" m="1rem"> Price of Product:</Typography>
<Typography color="white" m="1rem"> {price}</Typography>
</Box>

<Box display="flex">
<Typography color="rgb(25,150,100,0.8)" m="1rem">Description of Product:</Typography>
<Typography color="white" m="1rem"> {description}</Typography>
</Box>

<Box display="flex">
<Typography color="rgb(25,150,100,0.8)" m="1rem">category of Product:</Typography>
<Typography color="white" m="1rem">{categoryname}</Typography>
</Box>

<Button sx={{color:"white", backgroundColor:"rgb(25,150,100,0.8)", width:"100px", height:"50px"}} onClick={Deleteproduct} m="1rem">Delete</Button>



</Box>

</Box>


    )}

    </Box>
    
    )
}

export default Admingalbox;
