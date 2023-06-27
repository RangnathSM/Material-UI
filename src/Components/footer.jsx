import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import '../Styles/footer.css'

const Footer = () => {
    return ( 
        <footer width='100%'>
            <Box sx={{ width:{xl:"100%",lg:"100%",md:"100%",sm:"100%",xs:"100%"}}} height="80px" background='#F0F8FF' display='flex' marginTop="40px" >
            <Typography sx={{marginTop:"20px",marginLeft:{xl:"80px",lg:"40px",md:"40px",sm:"10px",xs:"10px"}, width:'89px', height:'59px'}}><img src="../images/logo 1.svg" alt="" /></Typography>
            <Typography sx={{marginTop:"40px",fontSize:{xl:"18pxpx",lg:"16px",md:"14px",sm:"14px",xs:"14px"}, fontWeight:{xl:"500",lg:"400",md:"300",sm:"200",xs:"300px"},marginLeft:{xl:"40px",lg:"50px",md:"60px",sm:"40px",xs:"40px"} }}>&copy; 2020 VAJRA, All Rights Reserved</Typography>
            <Typography sx={{marginTop:{xl:"40px",lg:"40px",md:"40px",sm:"80px",xs:"65px"},fontSize:{xl:"18px",lg:"18px",md:"16px",sm:"14px",xs:"16px"}, fontWeight:{xl:"500",lg:"400",md:"300",sm:"200",xs:"300px"},marginLeft:{xl:"700px",lg:"500px",md:"500px",sm:"100px",xs:"-25px"} }}>Terms & conditions | FAQ’s</Typography>
        </Box>
        </footer>
     );
}
 
export default Footer;