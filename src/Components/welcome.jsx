import { Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
const Welcome = () => {

   
   const {email} = useParams();
    return ( 
        <div>  
           <Typography sx={{textAlign:"center"}} variant="h1">{email}</Typography>
        </div>
     );
}
 
export default Welcome;