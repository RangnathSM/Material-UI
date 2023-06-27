import { Box, Stack,  } from '@mui/system';
import {   TextField, Typography } from "@mui/material";
import * as React from 'react';
import '../Styles/login.css'
import { Button } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    let [email, setEmail] = useState()
    let [password, setPassword] = useState()
    let [showPassword, setShowPassword] = useState(false);
    let [errors, setErrors] = useState(false);
    let navigate = useNavigate();
    
  let validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  let validatePassword = () => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
    return passwordRegex.test(password);
  };
  
  let handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === '' || password === '') {
      alert(`Please fill in all the fields`);
    } else {
      console.log('Form submitted successfully!');
    }

    let errors = {};

    if (!validateEmail()) {
      errors.email = 'Invalid email address';
    }

    if (!validatePassword()) {
      errors.password = 'Password must contain alphanumeric characters and special characters';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      
      console.log('Form submitted successfully!');
    }
   navigate(errors.email || errors.password ? "/" : `/${email}`);
  }
    
    return ( 
        <Box sx={{marginTop:"120px",width:{xl:"100%",lg:"100%",md:"100%",sm:"100%",xs:"100%"}}} >
            <Box  marginLeft={{xl:"120px",lg:"115px",md:"115px",sm:"80px",xs:"40px"}} display={{xl:"flex",lg:"flex",md:"flex",sm:"block",xs:"block"}}>
            <Box sx={{width:{xl:"600px",lg:"550px",md:"500px",sm:"600px",xs:"500px"}, height:"520px", background:"#004F95", borderRadius:"30px", boxShadow:"0px 4px 8px -2px rgba(0, 79, 149, 0.25)", marginTop:"30px", marginLeft:{xl:"30px",lg:"-80px",md:"-40px",sm:"-40px",xs:"5px"}  }}>
                <Typography sx={{marginLeft:"35%", marginTop:"2%", fontSize:"34px", fontWeight:"700", color:"white"}}>Features</Typography>
                <Box sx={{marginTop:"10px"}}>
                <Box sx={{display:"flex",padding:"10px"}}>
                    <Typography sx={{width:"80px", height:"80px"}} ><img src="../images/Group 63.svg" alt="" /></Typography>
                    <Box sx={{color:"white", marginLeft:"30px",marginTop:"10px" }}>
                    <Typography sx={{fontSize:"30px", fontWeight:"600"}}>Digitize</Typography>
                    <Typography sx={{fontSize:"18px", fontWeight:"400"}}>A Bird eye view of the entire Biomedical Operations.</Typography>
                    </Box>
                </Box>
                <Box sx={{display:"flex",padding:"10px"}}>
                    <Typography sx={{width:"88px", height:"88px"}} ><img src="../images/Group 214.svg" alt="" /></Typography>
                    <Box sx={{color:"white", marginLeft:"20px",marginTop:"10px" }}>
                    <Typography sx={{fontSize:"30px", fontWeight:"600"}}>Track</Typography>
                    <Typography sx={{fontSize:"18px", fontWeight:"400"}}>Track the product life cycle and service history.</Typography>
                    </Box>
                </Box>
                <Box sx={{display:"flex",padding:"10px"}}>
                    <Typography sx={{width:"88px", height:"88px"}} ><img src="../images/Group 216.svg" alt="" /></Typography>
                    <Box sx={{color:"white", marginLeft:"20px",marginTop:"-5px" }}>
                    <Typography sx={{fontSize:"30px", fontWeight:"600"}}>Biomedical Budget</Typography>
                    <Typography sx={{fontSize:"18px", fontWeight:"400"}}>Regulate and save budget through analysed data and
                    informed</Typography>
                    </Box>
                </Box>
                </Box>
                     </Box>
                     <Box sx={{width:{xl:"600px",lg:"550px",md:"500px",sm:"600px",xs:"500px"}, height:"520px", background:"#F0F8FF", borderRadius:"30px", boxShadow:"0px 4px 8px -2px rgba(0, 79, 149, 0.25)", marginTop:"30px", marginLeft:{xl:"30px",lg:"30px",md:"30px",sm:"-40px",xs:"5px"},  }}>
                      <Typography sx={{marginLeft:"43%", marginTop:"3%", fontSize:"24px", fontWeight:"500", color:"#F78117"}}>Sign in</Typography>
                      <Typography sx={{width:{xl:"540px",lg:"435px",md:"420px",sm:"540px",xs:"360px"}, marginLeft:"30px", color:"#7A7A7A", marginTop:"5px"}}><hr /></Typography>
                      <Box>
                        <Typography sx={{marginLeft:"15%", marginTop:"2%", fontSize:"24px", fontWeight:"600", color:"#004F95"}}>Sign in to your account</Typography>
                       <form action='' onSubmit={handleSubmit}>
                       <Box sx={{marginLeft:"15%",}} classname="email">
                           <Typography sx={{ marginTop:"2%", fontSize:"18px", fontWeight:"600", color:"#2A2A2A"}}><label htmlFor="">Email ID</label></Typography>
                           <Typography ><TextField sx={{border:"none", background:"#FFFFFF", padding:"0px 20px", width:{xl:"400px",lg:"350px",md:"300px",sm:"400px",xs:"300px"}, boxShadow:"2px 2px 8px -2px rgba(0, 79, 149, 0.1)","& fieldset": { border: 'none' } }} background="white"  value={email} placeholder="xxxxxxxxxxxx" variant="outlined" onChange={(e)=>setEmail(e.target.value)} required /></Typography>
    <Typography sx={{color:"red"}} variant='p'>{errors.email && <span className="error">{errors.email}</span>}</Typography>
                        </Box>
                        <Box  sx={{marginLeft:"15%",}} classname="Password">
                           <Typography sx={{ marginTop:"2%", fontSize:"18px", fontWeight:"600", color:"#2A2A2A"}}><label htmlFor="">Password</label></Typography>
                           <Typography ><TextField sx={{border:"none", background:"#FFFFFF", padding:"0px 20px", width:{xl:"400px",lg:"350px",md:"300px",sm:"400px",xs:"300px"}, boxShadow:"2px 2px 8px -2px rgba(0, 79, 149, 0.1)","& fieldset": { border: 'none',  }, }} background="white"  value={password} placeholder="xxxxxxxxxxxx" variant="outlined"  onChange={(e)=>setPassword(e.target.value)} required
        type={showPassword ? "text" : "password"}  /></Typography>
    <Typography sx={{color:"red"}} variant='p'>{errors.password && <span className="error">{errors.password}</span>}</Typography>
    <FormControlLabel control={<Checkbox />} onClick={()=>setShowPassword(!showPassword)} label="Show Password"  />
                        </Box>
                        <Typography sx={{marginLeft:"15%", marginTop:"3%", fontSize:"16px", fontWeight:"600", color:"#E12C33"}}>Forgot Password</Typography>
                        <Stack >
                        <Button  sx={{border:"none", marginTop:"10px", marginLeft:"15%", background:"#004F95", padding:"12px 20px", width:{xl:"440px",lg:"390px",md:"340px",sm:"440px",xs:"340px"}, boxShadow:"2px 2px 8px -2px rgba(0, 79, 149, 0.1)", color:"white", fontSize:"16px", fontWeight:"500" }} type="submit"  variant="contained"  >Sign In</Button>
                        <Typography sx={{span:{color:"#F78117"}, fontSize:{xl:"16px",lg:"14px",md:"12px",sm:"16px",xs:"14px"}, fontWeight:"500", marginLeft:{xl:"200px",lg:"180px",md:"160px",sm:"200px",xs:"150px"}, marginTop:"10px"}}>New to vajra? <span> Sign Up Now</span></Typography>
                        </Stack>
                       </form>
                      </Box>
                     </Box>
            </Box>
                     
        </Box>
     );
}
 
export default Login;