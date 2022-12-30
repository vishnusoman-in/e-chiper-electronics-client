import { useState, useEffect } from "react";

import {Box,Divider,Button,TextField,useMediaQuery,Typography,useTheme, alertClasses,} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { useDispatch, useSelector } from "react-redux";

import { setLogin } from "state";
import { setProducts } from "state";
import {setadminlogged} from "state";
import { setuserlogged } from "state";

import Admingalbox from 'components/Admin/Admingalbox.jsx'

//const URL = process.env.SERVER_URL;

import { URL } from 'App.js'

const Admingallery = () => {

    const dispatch = useDispatch();
    const productcollection = useSelector((state) => state.products);
    const loggedasadmin = useSelector((state) => state.adminlogged);
    const token = useSelector((state) => state.token);
    const isNonMobile = useMediaQuery("(min-width:600px)");


    const getProducts = async () => {

        const response = await fetch(`${URL}/products/collection`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
    
        const productdata = await response.json();
    
        

        if (response.status == 200) {
            
            dispatch(setProducts({ products: productdata }));
          }
          if (response.status == 404) {
            
          }
    
      };


      useEffect(() => {
        
        getProducts();
        
      }, [loggedasadmin]); 

      
      //  console.log(productcollection)

    return (
    <Box display="Grid">
        <Typography m="2rem" textAlign="center" color="green">Database Product List</Typography>
      { loggedasadmin && productcollection.map(

        ({_id,name,price,description,categoryname,picturePath,rating,comments,}) => (<>

          <Admingalbox 

            _id={_id}
            name={name}
            price={price}
            description={description}
            categoryname={categoryname}
            picturePath={picturePath}

          />

          <Box sx={{backgroundColor:"green",width:"auto",height:"2px"}}></Box>
          </>
        )

      )}

    </Box>
    )
}

export default Admingallery;
