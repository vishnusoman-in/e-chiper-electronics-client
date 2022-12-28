import {Box,useMediaQuery,Divider} from "@mui/material";


import Navbar from "components/Navbar.jsx"
import Navbar2 from "components/Navbar2.jsx"
import Footer from "components/Footer";
import Menubox from "components/Menubox"
import Form from "components/Form"

import { useSelector, } from "react-redux";

const LoginPage = () => { 

  const isDesktop = useMediaQuery("(min-width: 1300px)");
  const logged = useSelector((state) => state.userlogged);
  const usery = useSelector((state) => state.user);

  const namer=" Guest, please login"
    
    return (
  <Box className="form-base">
    <Navbar name={logged  ? "Please logout to login with other account" : namer} cartcount={logged ? (usery.cartquantity.reduce((prev, curr, index, array) => prev + curr, 0)) : 0}/>
    <Navbar2 />
    <Menubox />
     
    <Box className={isDesktop ? "form-head": "form-head-mob" }>
    <Form />
    </Box>
    
  

{isDesktop &&  <Box  
        width="90%"
        height="575px"
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor="rgb(0,0,0,0.7)"
      >   
      <img
                 style={{ objectFit: "cover", borderRadius: "0%" }}
                 width="900px"
                 height="auto"
                 alt="banner"
                 src="https://res.cloudinary.com/dexpbdlyc/image/upload/v1671728150/picture/rasp1_xq6gef.jpg"
      />
      
      
    </Box>
   }

{!isDesktop &&  <Box  
        width="400px"
        height="1px"
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor="rgb(0,0,0,0.7)"
      >   
     
      
      
    </Box>
   }
    

    <Footer/>

  </Box>
)
};

export default LoginPage;