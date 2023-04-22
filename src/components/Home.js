import React ,{useState}from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Uploader from './uploader';



function Home(){
const [disableUpload,setDisableUpload]=useState(true);
    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            setDisableUpload(false)
        },
      });
    return(<>
        <Box sx={{ 
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh'
             }}>
            <Typography variant="h1" gutterBottom>
                Warehouse 2.0
            </Typography>
            <Button variant="contained" onClick={login}  disabled={!disableUpload}>Sign in with google</Button>
            {Uploader(disableUpload)}
        </Box>
        </>
    );

}
export default Home;