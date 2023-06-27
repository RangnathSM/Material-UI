import '../Styles/navbar.css'
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/system';
const Navbar = () => {
    return ( 
        
            <Box >
                <AppBar  sx={{background:'#F0F8FF'}}>
                <Toolbar sx={{ width:{xl:"100%",lg:"100%",md:"100%",sm:"100%",xs:"100%"}}} >
                <Typography sx={{marginLeft:{xl:"38%",lg:"33%",md:"1%",sm:"",xs:"10%"}, width:{xl:"80px",lg:"80px",md:"80px",sm:"80px",xs:"60px"},height:{xl:"80px",lg:"80px",md:"80px",sm:"80px",xs:"65px"},marginTop:'10px'}}><img src="../images/logo 1.svg" alt="logo"  /></Typography>   
                <Typography sx={{color:'#004F95',marginLeft:{xl:"5%",lg:"5%",md:"5%",sm:"15%",xs:""},visibility:{xl:"visible",lg:"visible",md:"visible",sm:"hidden",xs:"hidden"},fontSize:'18px', fontWeight:'600' }}>HOME</Typography>
                <Typography sx={{color:'#004F95',marginLeft:{xl:"35%",lg:"28%",md:"55%",sm:"20%",xs:""},visibility:{xl:"visible",lg:"visible%",md:"visible",sm:"hidden",xs:"hidden"},fontSize:'18px', fontWeight:'600' }}>+91 8971580265</Typography>
                <HomeIcon sx={{width:'50px',height:'50px',color:'#004F95', visibility:{xl:"hidden",lg:"hidden",md:"hidden",sm:"vissible",xs:"visible"},marginLeft:{xl:"0",lg:"0",md:"0",sm:"0",xs:"35%"}}}/>
                </Toolbar>
            </AppBar>
            </Box>
        
     );
}
 
export default Navbar;