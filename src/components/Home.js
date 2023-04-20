import React ,{useState}from 'react';
import { useGoogleLogin } from '@react-oauth/google';
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Upload  from './Upload';



function Home(){
const [disableUpload,setDisableUpload]=useState(true);

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse)
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
            {/* <Button variant="contained" disabled={disableUpload} >hahaha</Button> */}
            {Upload(disableUpload)}
        </Box>
        </>
    );

}
export default Home;