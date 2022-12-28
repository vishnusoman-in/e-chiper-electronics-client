import {Typography, Box} from "@mui/material";




const PaymentFailed = () => { 
    
    return (
<Box backgroundColor="black" sx ={{border:1, borderColor:"green",borderRadius:"0.5rem"}}>
<Typography  variant="h2" color="green"  fontWeight="bold" >
   Payment failed! ...   Please Try again
</Typography>
</Box>
)
};

export default PaymentFailed;