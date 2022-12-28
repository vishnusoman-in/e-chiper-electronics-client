import {Box,IconButton,Typography,InputBase,useMediaQuery,useTheme} from "@mui/material"
import { useNavigate } from "react-router-dom";
import Footer from "components/Footer";
import Adminnavbar from "components/Admin/Adminnavbar.jsx"
import Adminform from "components/Admin/Adminform.jsx"
import Admingallery from "components/Admin/Admingallery.jsx";


const Adminpage = () => { 


  
  const navigate = useNavigate();
    
    return (
        <Box sx={{backgroundColor:"rgb(0,0,0)",}}> 
         <Adminnavbar />
         <Adminform />
         <Admingallery />
         <Footer/>

        </Box>

    );

};

export default Adminpage;