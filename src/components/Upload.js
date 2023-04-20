import React, { useState ,useEffect} from 'react';
import { Button, Input } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import S3, { uploadFile } from 'react-s3';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AWS from 'aws-sdk'

const config = require('../s3.json');

AWS.config.update({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey
})

const myBucket = new AWS.S3({
    params: { Bucket: config.bucketName},
    region: config.region,
})

window.Buffer = window.Buffer || require("buffer").Buffer;
function Upload(notshow) {
    
    const [selectedFile, setSelectedFile] = useState(null);
    
    useEffect(()=>{handleUpload(selectedFile)},[selectedFile]);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log("handleFileInput called")
        console.log(e.target.files[0])
      };

    const handleUpload = async (file) => {
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: config.bucketName,
            Key: file.name
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                // setProgress(Math.round((evt.loaded / evt.total) * 100))
                console.log(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }
    if(notshow)
    {
        return null;
    }

    return (
        <div>

                <Stack alignItems="center" direction="column" spacing={2} >
                    <Typography variant="h6" gutterBottom >
                        PLEASE UPLOAD YOUR PDF FILE
                    </Typography>
                    <Button variant="contained" component="label" size="large">
                        Upload
                        <input hidden accept="true" multiple type="file" onChange={handleFileInput}/>
                    </Button>
                </Stack>
            
        </div>
    );

}
export default Upload;