

import {Button,Box,IconButton,Typography,InputBase,useMediaQuery,ImageList, ImageListItem, ImageListItemBar,Divider} from "@mui/material"




const Footer = () => {
 
    const isdesktop = useMediaQuery("(min-width:1400px)");
    const isdesk2 = useMediaQuery("(min-width:1200px)");
    const isdesk3 = useMediaQuery("(min-width:600px)");
    const is500up = useMediaQuery("(min-width: 400px)");

    const handleclick = () => {
        
        window.scrollTo({top: 0,behavior: "smooth"})
       
    }
    

    return (
<Box display="grid" sx={{backgroundColor: "rgb(0,0,0,0.4)", width:"auto", height:(isdesk3 ? "200px":"400px"),}}>

<Box onClick={handleclick} sx={{backgroundColor: "rgb(78,155,255,0.3)", width:(isdesk2 ? "auto": (isdesk3 ? "100%": "100%")), height:"30px",}}>
    <Typography marginRight={is500up ? "0rem":"3.5rem"} sx={{textAlign:"center",color:"whitesmoke","&:hover": {color: "green",cursor: "pointer",}}} >Back to top </Typography>
</Box>

{isdesk2 && isdesk3 && (<>

    <Box display="flex" justifyContent="flex-start">


        
        <Box sx={{ width:"500px", height:"auto",textAlign:"left",marginLeft:"2rem"}}>
            
            <Typography color="rgb(0,155,255,0.7)" fontWeight="bold">Get to know us</Typography>
            <Typography color="whitesmoke" >
                <li>Carrier</li>
                <li>Blog</li>
                <li>About Chiper inc</li>
                <li>chiper R&D</li>
                
            </Typography>

        </Box>

<Divider orientation='vertical' sx={{backgroundColor:"white"}}/>

        <Box sx={{ width:"500px", height:"auto",textAlign:"left",marginLeft:"2rem"}}>
            <Typography color="whitesmoke" >
            <Typography color="rgb(0,155,255,0.7)" fontWeight="bold">Our delivery partners</Typography>
                <li>DHL</li>
                <li>Ekart</li>
                <li>Bluedart</li>
                <li>delhivery</li>
                
            </Typography>

        </Box>

<Divider orientation='vertical' sx={{backgroundColor:"white"}}/>
     
        <Box sx={{ width:"500px", height:"auto",textAlign:"left",marginLeft:"2rem"}}>

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

            <Typography color="whitesmoke" >
               <Typography color="rgb(0,155,255,0.7)" fontWeight="bold">Chiper electronics</Typography>
                Electronic Retail and distribution network in india
                <Typography color="whitesmoke">
                Address:
                101/AB, ravipuram
                Kochi, india
                </Typography>
                <Typography color="whitesmoke">Developer: Vishnu Soman</Typography>
            </Typography>

        </Box>
        


    </Box>

</>)}

{!isdesk2 && isdesk3 && (<>

<Box display="flex" justifyContent="flex-start">



    <Box sx={{ width:"500px", height:"auto",textAlign:"left",marginLeft:"2rem"}}>
        <Typography color="whitesmoke" >
        <Typography color="rgb(0,155,255,0.7)" fontWeight="bold">Our delivery partners</Typography>
            <li>DHL</li>
            <li>Ekart</li>
            <li>Bluedart</li>
            <li>delhivery</li>
            
        </Typography>

    </Box>

<Divider orientation='vertical' sx={{backgroundColor:"white"}}/>
 
    <Box sx={{ width:"500px", height:"auto",textAlign:"left",marginLeft:"2rem"}}>

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

        <Typography color="whitesmoke" >
           <Typography color="rgb(0,155,255,0.7)" fontWeight="bold">Chiper electronics</Typography>
            Electronic Retail network in india
            <Typography color="whitesmoke">
            Address:
            101/AB, ravipuram
            Kochi, india
            </Typography>
            <Typography color="whitesmoke">Developer: Vishnu Soman</Typography>
        </Typography>

    </Box>
    


</Box>

</>)}


{!isdesk2 && !isdesk3 && (<>

<Box display="grid" justifyContent="flex-start">

<Divider sx={{backgroundColor:"white", height:"2px"}}/>

    <Box sx={{ width:"400px", height:"auto",textAlign:"left",marginTop:"1rem",marginLeft:"2rem",}}>
        <Typography color="whitesmoke" >
        <Typography color="rgb(0,155,255,0.7)" fontWeight="bold">Our delivery partners</Typography>
            <li>DHL</li>
            <li>Ekart</li>
            <li>Bluedart</li>
            <li>delhivery</li>
            
        </Typography>

    </Box>

<Divider sx={{backgroundColor:"white", height:"2px"}}/>
 
    <Box sx={{ width:"400px", height:"auto",textAlign:"left",marginTop:"1rem",marginLeft:"2rem",}}>

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

        <Typography color="whitesmoke" >
           <Typography color="rgb(0,155,255,0.7)" fontWeight="bold">Chiper electronics</Typography>
            Electronic Retail network in india
            <Typography color="whitesmoke">
            Address:
            101/AB, ravipuram
            Kochi, india
            </Typography>
            <Typography color="whitesmoke">Developer: Vishnu Soman</Typography>
        </Typography>

    </Box>
    


</Box>

</>)}

</Box>


    );

};

export default Footer;