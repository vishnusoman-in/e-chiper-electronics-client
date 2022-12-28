

import {Button,Box,IconButton,Typography,InputBase,useMediaQuery,ImageList, ImageListItem, ImageListItemBar} from "@mui/material"
import {KeyboardDoubleArrowLeft,KeyboardDoubleArrowRight,ShoppingCart} from '@mui/icons-material';

const Productimgbox = ({ marleft,maright,pic1,pic2,pic3,pic4,pic1title,pic2title,pic3title,pic4title, }) => {

  
  const is500up = useMediaQuery("(min-width: 450px)");


    return (
        <Box>
        <Box display="Grid" marginLeft={marleft} >
                <Typography style={{color:'rgb(255,255,255)', fontWeight: "bold",fontSize: "30px" }}>
                  Top Deals Today
                </Typography>

               <ImageList sx={{width: (is500up ? 470: 322), height: 530, paddingLeft: "1.5rem", paddingTop: "1rem",paddingBottom: "1rem", paddingRight: "1.5rem", backgroundColor: "rgb(255,255,255,0.8)"}} variant="standard" cols={2}>
                <ImageListItem>
               <img
                 style={{ objectFit: "cover", borderRadius: "2%" }}
                 width="200px"
                 height="200px"
                 alt="uno"
                 loading="lazy"
                
                 src={pic1}
                 />

                 <ImageListItemBar position="bottom" title={pic1title}></ImageListItemBar>
                </ImageListItem>

                <ImageListItem>
                <img
                 style={{ objectFit: "cover", borderRadius: "2%" }}
                 width="200px"
                 height="200px"
                 alt="uno"
                 loading="lazy"
                
                 src={pic2}
                 />
                 <ImageListItemBar position="bottom" title={pic2title}></ImageListItemBar>
                </ImageListItem>


               <ImageListItem>
               <img
                 style={{ objectFit: "cover", borderRadius: "2%" }}
                 width="200px"
                 height="200px"
                 alt="uno"
                 loading="lazy"
                 
                 src={pic3}
                 />
                 <ImageListItemBar position="bottom" title={pic3title}></ImageListItemBar>
                </ImageListItem>
                
                <ImageListItem>
                <img
                 style={{ objectFit: "cover", borderRadius: "2%" }}
                 width="200px"
                 height="200px"
                 alt="uno"
                 loading="lazy"
                 
                 src={pic4}
                 />
                 <ImageListItemBar position="bottom" title={pic4title}></ImageListItemBar>
                </ImageListItem>

                

               </ImageList>



        </Box>

        </Box>



    )



}

export default Productimgbox;