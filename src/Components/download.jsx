import { Typography } from "@mui/material";
import { Box } from '@mui/system';
import '../Styles/download.css'
const Download = () => {
    return ( 
        <Box display={{xl:"flex",lg:"flex",md:"flex",sm:"block",xs:"block"}}  marginTop="30px">
            <Typography sx={{color:"#004F95", fontSize:"24px", fontWeight:"600", marginLeft:"35%", marginTop:"10px"}}>Download Our App</Typography>
            <Box display="flex" marginLeft={{xl:"10px",lg:"20px",md:"20px",sm:"160px",xs:"120px"}} marginTop={{xl:"0px",lg:"0px",md:"0px",sm:"20px",xs:"20px"}}>
                <Typography sx={{width:"182px", height:"53px",marginLeft:"10px"}}><img src="../images/playstore.svg" alt="" /></Typography>
                <Typography sx={{width:"182px", height:"53px",marginLeft:"10px"}}><img src="../images/appstore.svg" alt="" /></Typography>
            </Box>
        </Box>
     );
}
 
export default Download;